#!/usr/bin/env python3
"""
Skill Validator - Automated Linter and Quality Gate for Agent Skills.

Validates that a skill directory adheres to standard structure, YAML frontmatter,
progressive disclosure line limits, link integrity, and path conventions.
"""

import sys
import os
import re
import argparse
from pathlib import Path

# Configure utf-8 stdout if available
if hasattr(sys.stdout, 'reconfigure'):
    try:
        sys.stdout.reconfigure(encoding='utf-8')
    except Exception:
        pass

NAME_REGEX = re.compile(r'^[a-z0-9]+(-[a-z0-9]+)*$')
FORBIDDEN_NAME_SUBSTRINGS = ['claude', 'anthropic', 'openai', 'gemini']
FIRST_PERSON_PRONOUNS = re.compile(r'\b(i|we|my|our|me|us)\b', re.IGNORECASE)

class SkillValidator:
    def __init__(self, skill_dir: Path):
        self.skill_dir = skill_dir
        self.skill_md = skill_dir / "SKILL.md"
        self.errors = []
        self.warnings = []

    def log_error(self, msg: str):
        self.errors.append(f"[ERROR] {msg}")

    def log_warning(self, msg: str):
        self.warnings.append(f"[WARN]  {msg}")

    def validate(self) -> bool:
        if not self.skill_dir.exists() or not self.skill_dir.is_dir():
            self.log_error(f"Skill directory does not exist: {self.skill_dir}")
            return False

        if not self.skill_md.exists() or not self.skill_md.is_file():
            self.log_error(f"Missing required SKILL.md in {self.skill_dir}")
            return False

        content = self.skill_md.read_text(encoding='utf-8', errors='replace')
        lines = content.splitlines()

        self._check_line_count(lines)
        frontmatter = self._check_frontmatter(content)
        if frontmatter:
            self._check_name(frontmatter.get('name'))
            self._check_description(frontmatter.get('description'))

        self._check_path_conventions(content)
        self._check_relative_links(content)
        self._check_folder_conventions()

        return len(self.errors) == 0

    def _check_line_count(self, lines: list):
        total_lines = len(lines)
        if total_lines > 500:
            self.log_warning(
                f"SKILL.md has {total_lines} lines (exceeds recommended 500 lines). "
                "Consider moving extensive documentation to references/ to maintain progressive disclosure."
            )

    def _check_frontmatter(self, content: str) -> dict:
        if not content.startswith('---'):
            self.log_error("SKILL.md must start with YAML frontmatter delimiter '---'")
            return {}

        parts = content.split('---', 2)
        if len(parts) < 3:
            self.log_error("SKILL.md frontmatter is not closed with a second '---' delimiter")
            return {}

        fm_text = parts[1].strip()
        data = {}
        current_key = None
        multiline_val = []

        for line in fm_text.splitlines():
            line_str = line.strip()
            if not line_str or line_str.startswith('#'):
                continue

            match = re.match(r'^([a-zA-Z0-9_-]+):\s*(.*)$', line)
            if match and not line.startswith(' ') and not line.startswith('\t'):
                if current_key and multiline_val:
                    data[current_key] = ' '.join(multiline_val).strip()
                    multiline_val = []
                current_key = match.group(1)
                val = match.group(2).strip()
                if val in ['>-', '|', '>', '|-']:
                    multiline_val = []
                else:
                    if (val.startswith('"') and val.endswith('"')) or (val.startswith("'") and val.endswith("'")):
                        val = val[1:-1]
                    data[current_key] = val
            elif current_key:
                multiline_val.append(line_str)

        if current_key and multiline_val and current_key not in data:
            data[current_key] = ' '.join(multiline_val).strip()

        if 'name' not in data:
            self.log_error("Frontmatter is missing required 'name' field")
        if 'description' not in data:
            self.log_error("Frontmatter is missing required 'description' field")

        return data

    def _check_name(self, name: str):
        if not name:
            return

        if len(name) > 64:
            self.log_error(f"Skill name '{name}' exceeds 64 characters (current: {len(name)})")

        if not NAME_REGEX.match(name):
            self.log_error(
                f"Skill name '{name}' must be lowercase alphanumeric and hyphens only (e.g. 'auditing-code')"
            )

        for forbidden in FORBIDDEN_NAME_SUBSTRINGS:
            if forbidden in name.lower():
                self.log_error(f"Skill name '{name}' should be vendor-agnostic (remove '{forbidden}')")

        if not name.endswith('ing') and not any(part.endswith('ing') for part in name.split('-')):
            self.log_warning(
                f"Skill name '{name}' is recommended to use gerund form (e.g., 'creating-skills', 'managing-db')"
            )

    def _check_description(self, desc: str):
        if not desc:
            return

        if len(desc) > 1024:
            self.log_error(f"Skill description exceeds 1024 characters (current: {len(desc)})")

        if len(desc) < 30:
            self.log_warning("Skill description is very short. Ensure it includes specific triggers and domain keywords.")

        if FIRST_PERSON_PRONOUNS.search(desc):
            self.log_warning(
                "Skill description appears to use first-person pronouns ('I', 'we', 'my'). Use third-person."
            )

        lower_desc = desc.lower()
        if not any(k in lower_desc for k in ['use when', 'triggers when', 'when the user', 'when asked to']):
            self.log_warning(
                "Description should clearly state triggers (e.g., 'Use when the user asks to...')"
            )

    def _check_path_conventions(self, content: str):
        backslash_matches = re.findall(r'(\.\\[a-zA-Z0-9_\\]+|scripts\\[a-zA-Z0-9_\\]+|resources\\[a-zA-Z0-9_\\]+)', content)
        if backslash_matches:
            self.log_warning(
                f"Found Windows-style backslashes in paths: {backslash_matches[:3]}. Use forward slashes ('/') instead."
            )

    def _check_relative_links(self, content: str):
        # Strip fenced code blocks and inline code blocks before checking active markdown links
        text_without_fenced_code = re.sub(r'```[\s\S]*?```', '', content)
        text_without_inline_code = re.sub(r'`[^`]*`', '', text_without_fenced_code)

        # Extract markdown links: [text](path)
        links = re.findall(r'\[([^\]]+)\]\(([^)]+)\)', text_without_inline_code)
        for text, link in links:
            if link.startswith('http://') or link.startswith('https://') or link.startswith('#') or link.startswith('mailto:'):
                continue
            
            clean_link = link.split('#')[0].strip()
            if not clean_link or clean_link.startswith('['):
                continue

            target_path = (self.skill_dir / clean_link).resolve()
            if not target_path.exists():
                self.log_error(f"Broken relative link in SKILL.md: '{link}' -> Path does not exist: {target_path}")

    def _check_folder_conventions(self):
        allowed_standard_dirs = {'scripts', 'examples', 'resources', 'references', 'docs', 'tests'}
        for child in self.skill_dir.iterdir():
            if child.is_dir() and not child.name.startswith('.'):
                if child.name not in allowed_standard_dirs:
                    self.log_warning(
                        f"Non-standard subfolder '{child.name}'. Standard skill folders are: "
                        "scripts/, examples/, resources/, references/"
                    )


def main():
    parser = argparse.ArgumentParser(description="Validate an Antigravity agent skill package.")
    parser.add_argument("skill_dir", help="Path to the skill directory (e.g., .agents/skills/my-skill)")
    args = parser.parse_args()

    skill_path = Path(args.skill_dir).resolve()
    print(f"\n[VALIDATING] Skill at: {skill_path}\n" + "=" * 60)

    validator = SkillValidator(skill_path)
    is_valid = validator.validate()

    for warn in validator.warnings:
        print(warn)

    for err in validator.errors:
        print(err)

    print("=" * 60)
    if is_valid and not validator.warnings:
        print("[SUCCESS] Skill is 100% compliant with standard specifications!\n")
        sys.exit(0)
    elif is_valid:
        print("[PASSED] Skill is valid (with minor warnings noted above).\n")
        sys.exit(0)
    else:
        print(f"[FAILED] Skill validation failed with {len(validator.errors)} error(s).\n")
        sys.exit(1)

if __name__ == "__main__":
    main()

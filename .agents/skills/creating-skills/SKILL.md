---
name: creating-skills
description: >-
  Creates, improves, refines, and validates agent skills, runbooks, and meta-workflows across any model or IDE environment. Use when the user asks to create a new skill, write or improve a SKILL.md, audit an existing skill, or convert procedural instructions into structured agent skills.
---

# Skill Creator (Meta-Skill)

This meta-skill provides end-to-end instructions for creating, improving, and validating modular **Skills** for agent environments (such as Antigravity, Claude Code, Cursor, and custom agent runtimes).

---

## When to Use This Skill
- Creating a new skill from scratch for a specific task, tool, or domain.
- Auditing, optimizing, or refactoring an existing `SKILL.md` file.
- Validating skill directories for frontmatter compliance, link integrity, and progressive disclosure limits.
- Converting repetitive developer workflows, runbooks, or API guidelines into agent skills.

---

## Skill Architecture & Directory Layout

Every skill must follow this modular folder hierarchy:

```text
<skill-name>/
├── SKILL.md          # [Required] Main logic, triggers, checklist, and core instructions
├── scripts/          # [Optional] Black-box helper scripts, validators, automation tools
├── examples/         # [Optional] Reference implementations and usage patterns
├── resources/        # [Optional] Templates, schemas, mock data, and static assets
└── references/       # [Optional] Deep-dive manuals, API guides, and extended docs
```

---

## The 5-Phase Skill Engineering Lifecycle

Follow this structured workflow whenever authoring or improving a skill:

- [ ] **Phase 1: Inception & Classification** — Confirm skill boundaries vs. rules/scripts.
- [ ] **Phase 2: Frontmatter & Trigger Engineering** — Define gerund name and high-density 3rd-person description.
- [ ] **Phase 3: Structural Design & Degrees of Freedom** — Assign heuristics, templates, or deterministic commands.
- [ ] **Phase 4: Progressive Disclosure & Multi-File Split** — Keep `SKILL.md` under 500 lines and link 1-level deep.
- [ ] **Phase 5: Quality Gate & Validation** — Audit against the compliance checklist and run validator.

---

## Phase 1: Inception & Classification

Before writing a skill, verify whether a **Skill** is the correct customization type:

| Type | Best For | Lifecycle |
| :--- | :--- | :--- |
| **Skill** (`SKILL.md`) | Multi-step procedures, runbooks, tool workflows, domain playbooks | **On-demand** (injected when triggered) |
| **Rule** (`GEMINI.md` / `AGENTS.md`) | Universal constraints, coding style, security boundaries | **Always on** or file-scoped |
| **Script** (`scripts/*.py`) | Fragile, deterministic, mathematical, or high-speed execution | Run via terminal |

---

## Phase 2: Frontmatter Standards

The frontmatter is the only portion loaded into the root context during skill discovery. It must be strictly optimized:

1. **`name`**:
   - Must use **gerund form** (e.g., `testing-code`, `managing-databases`, `auditing-security`).
   - Maximum **64 characters**.
   - Lowercase alphanumeric and hyphens only (`^[a-z0-9]+(-[a-z0-9]+)*$`).
   - Must be **model-agnostic** (no `claude`, `gpt`, `gemini`, or vendor branding in name).

2. **`description`**:
   - Written in **objective third person** (never "I", "we", "my", or "you").
   - Maximum **1024 characters**.
   - Must contain **explicit triggers** (`"Use when the user asks to...", "Trigger when..."`).
   - Must include high-density domain keywords, file types, and negative boundaries.

> For deep guidance, consult [Frontmatter Best Practices](./references/frontmatter-best-practices.md).

---

## Phase 3: Content Architecture & Degrees of Freedom

Structure the instructions according to task fragility to avoid under- or over-constraining the agent:

1. **High Freedom (Heuristics & Principles)**:
   - Use bullet points for creative tasks, code review guidelines, or architectural heuristics.
2. **Medium Freedom (Templates & Patterns)**:
   - Use language-tagged code blocks with clear placeholders for boilerplate or reusable schemas.
3. **Low Freedom (Fragile CLI Commands & Black-Box Scripts)**:
   - Use explicit commands or helper scripts in `scripts/` for destructive, delicate, or multi-step operations.
   - Helper scripts should support `--help` and `--dry-run` modes.

### The Feedback Loop Pattern
Always structure non-trivial tasks around the **Plan-Validate-Execute** loop:
1. **Plan & State**: Provide a markdown checklist (`- [ ]`) for the agent to track progress across turns.
2. **Validate**: Run pre-flight checks or dry-runs before applying irreversible mutations.
3. **Execute**: Perform the mutation in discrete, safe steps.
4. **Verify**: Inspect exit codes, logs, or generated artifacts to confirm success.

> For complete details, consult [Degrees of Freedom & Execution Control](./references/degrees-of-freedom.md).

---

## Phase 4: Progressive Disclosure & Writing Principles

- **Assume Agent Competence**: Do not waste tokens explaining basic concepts (e.g., what Git, JSON, or Docker is). Focus exclusively on the unique logic of the skill.
- **500-Line Limit**: Keep `SKILL.md` under 500 lines. Move extensive reference docs into `references/` and link them one level deep (e.g. `[Frontmatter Guide](./references/frontmatter-best-practices.md)`).
- **Universal Forward Slashes**: Always use `/` for file paths across all operating systems. Never use Windows backslashes `\`.
- **Zero Placeholders**: Provide concrete, runnable code and commands rather than ambiguous `...` or `[insert logic here]` placeholders.

---

## Phase 5: Auditing & Improving Existing Skills

When reviewing or refactoring an existing skill:
1. **Strip Fluff**: Delete generic background explanations and conversational filler.
2. **Fix Frontmatter**: Ensure gerund naming, third-person description, and sharp trigger keywords.
3. **Enforce Progressive Disclosure**: Extract bulky sections (>50 lines) into dedicated files under `references/` or `examples/`.
4. **Harden Fragile Steps**: Convert brittle multi-line shell commands into robust helper scripts in `scripts/`.
5. **Add State Checklist**: Add a markdown checklist if the skill involves 3 or more steps.

---

## Validation & Quality Gate

Verify every skill with the automated validator script:

```bash
python ./scripts/validate_skill.py <path/to/skill-directory>
```

### Manual 8-Point Compliance Checklist
- [ ] Directory is placed under `.agents/skills/<skill-name>/` (or custom skills root).
- [ ] `SKILL.md` starts with valid `---` YAML frontmatter.
- [ ] Name is in gerund form, lowercase, hyphenated, <= 64 chars, vendor-neutral.
- [ ] Description is third-person, <= 1024 chars, and contains explicit triggers.
- [ ] `SKILL.md` is strictly under 500 lines.
- [ ] All file paths use forward slashes (`/`).
- [ ] All relative links to `scripts/`, `examples/`, `resources/`, or `references/` exist and resolve.
- [ ] Includes clear validation and verification steps.

---

## Output Template for Skill Creation

When generating or presenting a new skill to the user, format your output as follows:

```markdown
### [Skill Folder Name]
**Path:** `.agents/skills/[skill-name]/`

### [SKILL.md]
\`\`\`markdown
---
name: [gerund-name]
description: >-
  [Third-person description with specific keywords and triggers. Use when...]
---

# [Skill Title]

## When to Use This Skill
- [Trigger 1]
- [Trigger 2]

## Workflow
- [ ] **Step 1: [Name]** — [Details]
- [ ] **Step 2: [Name]** — [Details]
- [ ] **Step 3: [Name]** — [Details]

## Instructions
[Step-by-step logic, code patterns, and commands]

## Verification
[Instructions to verify execution success]

## Resources
- [Helper Script](./scripts/example.py)
- [Reference Guide](./references/guide.md)
\`\`\`

### [Supporting Files]
(Provide full code for scripts/, examples/, or resources/ if applicable)
```

---

## Supporting Resources & References
- **Template Library**:
  - [Standard Skill Template](./resources/templates/SKILL_TEMPLATE.md)
  - [Minimal Skill Template](./resources/templates/MINIMAL_SKILL.md)
- **Deep Guides**:
  - [Frontmatter & Trigger Optimization](./references/frontmatter-best-practices.md)
  - [Degrees of Freedom & Execution Control](./references/degrees-of-freedom.md)
- **Automated Tools**:
  - [Skill Validator Script](./scripts/validate_skill.py)
- **Reference Example**:
  - [Database Migration Guard Skill](./examples/database-migration-guard/SKILL.md)

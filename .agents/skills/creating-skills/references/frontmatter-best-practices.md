# Frontmatter Engineering & Trigger Optimization

The YAML frontmatter of `SKILL.md` is the single most critical component for skill discovery. The agent runtime evaluates only the `name` and `description` to decide whether to activate a skill.

---

## 1. The `name` Field

### Rules:
- **Gerund Naming**: Always use active gerund form ending in `-ing` (e.g., `testing-code`, `optimizing-performance`, `managing-databases`).
- **Character Constraint**: Maximum **64 characters**.
- **Allowed Characters**: Lowercase letters, numbers, and hyphens (`^[a-z0-9]+(-[a-z0-9]+)*$`).
- **Vendor-Agnostic**: Never include model brands (`claude`, `gpt`, `gemini`, `anthropic`, `openai`).

### Good vs. Bad Names:
| Bad Name | Good Replacement | Why |
| :--- | :--- | :--- |
| `vitest-helper` | `testing-components` | Gerund form, describes action |
| `claude-db-migration` | `migrating-databases` | Vendor neutral, gerund |
| `Run_All_Security_Checks` | `auditing-security` | Lowercase, hyphenated |

---

## 2. The `description` Field

### Rules:
- **Third-Person Voice**: Always describe what the skill does from an objective, third-person perspective. Do not use "I", "we", "my", or "you".
- **Character Constraint**: Maximum **1024 characters**.
- **Keyword Density**: Include specific nouns, domain terms, file types, and tool names.
- **Explicit Trigger Phrases**: Include "Use when..." or "Trigger when the user asks to...".
- **Negative Boundaries**: Clarify when NOT to use the skill to prevent accidental over-triggering.

### Formula for High-Precision Descriptions:
```text
[Primary Action / Purpose in 1 sentence]. [Supported tools / workflows / technologies]. [Explicit triggers: "Use when the user asks to <action>, mentions <keywords>, or works with <file types>"]. [Negative boundaries: "Do not use for <unrelated task>"].
```

### Example:
```yaml
description: >-
  Audits, verifies, and executes zero-downtime database schema migrations for PostgreSQL and Prisma. Use when the user asks to create or apply database migrations, modify schema.prisma, check migration safety, or resolve migration lockouts. Do not use for routine read-only SQL queries.
```

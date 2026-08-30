# Degrees of Freedom & Execution Control in Agent Skills

A core skill design principle is matching instruction structure to task fragility. Providing the wrong level of freedom causes either agent failure (on fragile tasks) or unnecessary rigidity (on creative tasks).

---

## The Three Degrees of Freedom

### 1. High Freedom (Heuristics & Principles)
- **When to use**: Creative design, exploratory analysis, code architecture, refactoring strategy.
- **Format**: Bulleted principles, rule of thumb, trade-off comparisons.
- **Agent Action**: The agent exercises judgment to apply principles to the current context.

*Example:*
```markdown
- Prioritize immutability for state objects in React reducers.
- Choose CSS Grid for 2D page layouts and Flexbox for 1D component rows.
- Ensure API route handlers fail fast on invalid input before initiating DB transactions.
```

---

### 2. Medium Freedom (Patterns & Templates)
- **When to use**: Standard component boilerplate, boilerplate CRUD operations, test suites.
- **Format**: Code blocks with explicit placeholders and commented customization points.
- **Agent Action**: The agent adapts the template structure to match project specifics.

*Example:*
```typescript
// Standard API response envelope pattern
interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: { code: string; message: string };
}
```

---

### 3. Low Freedom (Deterministic Commands & Helper Scripts)
- **When to use**: Fragile CLI operations, destructive database tasks, security token rotations, builds.
- **Format**: Exact bash/shell commands or dedicated black-box Python/Node scripts in `scripts/`.
- **Agent Action**: The agent executes the command without improvisation.

*Example:*
```bash
# Black-box script execution with built-in dry-run check
python ./scripts/check_migration.py --dry-run
```

---

## Designing Feedback & Verification Loops

Every critical action should follow the **Plan-Validate-Execute** pattern:

```text
1. Inspect / Plan  ──> 2. Validate / Dry-Run  ──> 3. Execute  ──> 4. Verify Post-State
```

1. **State Checklist**: Provide an explicit Markdown checklist (`- [ ]`) in `SKILL.md` so the agent tracks multi-step state across turns.
2. **Pre-flight Checks**: Instruct the agent to run `--dry-run` or check for prerequisite files before applying breaking modifications.
3. **Post-execution Verification**: Never finish a step without instructing the agent on how to verify success (e.g., inspecting exit codes, checking log output, verifying generated artifacts).

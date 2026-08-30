---
name: guarding-database-migrations
description: >-
  Audits, validates, and safely applies database schema migrations with zero-downtime checks. Use when the user asks to run database migrations, inspect schema changes, or ensure backwards compatibility in SQL scripts.
---

# Database Migration Guard

## When to Use This Skill
- Applying new database migrations (PostgreSQL, MySQL, SQLite).
- Validating migration files for table locks or breaking column drops.
- Recovering from failed or locked migration states.

## Workflow
Execute migrations following this safety checklist:

- [ ] **Step 1: Inspect Migration Files** — Review pending `.sql` or ORM migration files.
- [ ] **Step 2: Run Pre-Flight Dry Run** — Validate schema safety with the helper script.
- [ ] **Step 3: Execute Migration** — Apply changes in a managed transaction.
- [ ] **Step 4: Verify Database State** — Confirm table schema and application health.

## Instructions

### 1. Pre-Flight Safety Verification
Run the migration safety checker script before applying any schema modification:

```bash
python ./scripts/check_migration.py --dry-run
```

If the script returns any warnings regarding table locks or destructive column drops:
1. Halt execution immediately.
2. Formulate an additive-only fallback migration strategy.

### 2. Execution Heuristics
- **High Freedom Guidelines**:
  - Always prefer additive schema migrations (add nullable column -> backfill -> add not-null constraint).
  - Never drop columns in the same release as application code deprecations.
- **Low Freedom Commands**:
  ```bash
  # Apply migrations in transaction mode
  python ./scripts/check_migration.py
  ```

## Resources
- Helper Script: [check_migration.py](./scripts/check_migration.py)

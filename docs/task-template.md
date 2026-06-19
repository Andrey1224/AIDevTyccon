# TASK XX — Task Title

## Goal

<!-- High-level description of what this task aims to achieve. -->

## Context

<!-- Background information, design rationale, or pointers to relevant specifications. -->

## Allowed Files

<!-- Specific files or directories that the agent is allowed to edit. -->

## Do Not Touch

<!-- Files or systems that should remain completely unchanged. -->

## Requirements

<!-- Detailed checklist of functional and non-functional requirements. -->

## Tests

<!-- Tests to run and/or create to verify the implementation. -->

## Definition of Done

<!-- Specific criteria that must be met to declare the task complete. -->

## Commands to Run

<!-- Exact terminal commands to build, test, and verify changes. -->

## Commit Message

<!-- Expected git commit message format. -->

---

## AI Agent Guidelines

When working on a task, you MUST follow these guidelines:

- **Keep it Focused**: Tasks should be small and focused. Propose dividing large tasks into smaller steps.
- **Inspect Documentation**: Always inspect relevant docs (e.g., [docs/llms.txt](file:///Users/andriinepodymka/Desktop/AIDevTyccon/ai-dev-tycoon/docs/llms.txt), [memory-bank/](file:///Users/andriinepodymka/Desktop/AIDevTyccon/ai-dev-tycoon/memory-bank/)) before coding.
- **Propose a Plan**: Propose a short plan before making risky, complex, or broad changes to the codebase.
- **No Side-Effects**: Do not edit unrelated files. Keep diffs as small and clean as possible.
- **Respect the Backlog**: Do not implement any backlog items from [docs/backlog.md](file:///Users/andriinepodymka/Desktop/AIDevTyccon/ai-dev-tycoon/docs/backlog.md) unless the task explicitly assigns them.
- **Verify Integrity**: Always run `npm run verify` to check formatting, type safety, lint compliance, unit tests, and production build success before finishing.
- **Maintain Memory**: Keep the memory-bank documentation files updated when project context, progress, or patterns shift.

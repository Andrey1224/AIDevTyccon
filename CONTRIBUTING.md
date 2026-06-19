# Contributing Guidelines

Thank you for contributing to AI Dev Tycoon! To maintain code quality and prevent game engine regression, please follow these guidelines.

## Quick Start

### 1. Installation

Install dependencies using:

```bash
npm install
```

### 2. Development

Run the development server locally:

```bash
npm run dev
```

The app will be available at `http://localhost:5173`.

### 3. Verification

Before committing any changes, run the verification suite to ensure format, type checking, linting, tests, and build are completely clean:

```bash
npm run verify
```

---

## Git Branch Workflow

We follow a structured branch model to maintain stability:

- **`main`**: The production-ready stable branch. Direct commits to `main` are strictly forbidden.
- **`dev`**: The integration branch. All feature branches are merged here first.
- **`feature/*`**: Short-lived branches for individual tasks or features (e.g., `feature/time-constants`).

### Merge & Release Flow

1. Create a branch from `dev` (e.g., `git checkout -b feature/my-feature`).
2. Make edits, verify them locally via `npm run verify`, and commit.
3. Open a Pull Request from your feature branch to `dev`.
4. Once merged into `dev`, a Pull Request from `dev` to `main` is used for deploying stable changes.
5. Merging to `main` is only allowed from `dev` once the CI verification suite passes completely.

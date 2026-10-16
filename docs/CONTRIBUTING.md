# Contributing to Podium Subsonic

## Coding Standards
- **Self-Documenting Code**: No comments are allowed in the codebase. Code must be clear, expressive, and maintainable through naming and structure alone.
- **TypeScript**: Strict mode is enforced. Zero `any`, zero `@ts-ignore`.
- **Styling**: Mobile-first approach using Tailwind CSS.
- **Design Tokens**: Use only the defined variables in `globals.css` for colors, spacing, and typography.

## Git Workflow
- **Branching**: Use feature branches (e.g., `feat/home-page`, `fix/button-bug`).
- **Commits**: Follow **Conventional Commits** (e.g., `feat:`, `fix:`, `chore:`, `docs:`, `test:`, `refactor:`).
- **Pull Requests**: Every PR must be reviewed before merging.

## Development Workflow
1. Pull the latest changes from `main`.
2. Create a new feature branch.
3. Implement the change.
4. Run `npm run lint` and `npm run typecheck` before committing.
5. Run `npm run test` to ensure no regressions.
6. Submit a PR with a clear description of the changes.

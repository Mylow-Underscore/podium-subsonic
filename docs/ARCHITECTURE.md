# Architecture Overview - Podium Subsonic

## Project Structure
The project follows a **feature-oriented architecture**. Instead of grouping by "type" (e.g., all components in one folder, all hooks in another), we group by "feature" (e.g., `home`, `auth`, `dashboard`).

Each feature directory contains:
- `components/`: UI elements specific to that feature.
- `actions/`: Server Actions for mutations.
- `queries/`: Server-side data fetching logic.
- `schemas/`: Zod validation schemas.
- `types/`: TypeScript type definitions.
- `hooks/`: Client-side stateful logic.
- `tests/`: Unit and integration tests for that specific feature.

## Data Flow
1. **Server Components**: By default, all pages and layouts are Server Components.
2. **Server Actions**: Mutations are handled via Server Actions, providing a seamless bridge between client interactions and server-side state changes.
3. **Validation**: Every input (form fields, query params, headers) is validated using **Zod** before processing.
4. **State Management**: 
   - **Nuqs**: Used for URL-based state (filters, pagination).
   - **Zustand**: Used for truly global client-side state.

## Tech Stack
- **Next.js 14+ (App Router)**: Framework core.
- **Tailwind CSS**: Styling.
- **Shadcn/UI**: Accessible base components.
- **Drizzle ORM / Prisma**: Database interaction (to be specified).
- **Vitest / Playwright**: Test suite.

# Podium Subsonic - Site Vitrine

Une plateforme élégante pour le secteur de l'événementiel.

## 🚀 Quick Start

### Prerequisites
- Node.js 20+
- npm
- Docker (optional, for deployment)

### Installation
1. Clone the repository:
   `git clone <repo-url>`
2. Install dependencies:
   `npm install`
3. Set up environment variables:
   `cp .env.example .env.local`
4. Start development server:
   `npm run dev`

## 🛠 Tech Stack
- **Framework**: Next.js (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS, Shadcn/UI
- **Validation**: Zod
- **State**: Zustand, nuqs
- **Testing**: Vitest, Playwright

## 📂 Project Structure
See [docs/ARCHITECTURE.md](docs/ARCHITECTURE.md) for a detailed overview of the feature-oriented folder structure.

## 🧪 Running Tests
- Unit & Component: `npm run test`
- End-to-End: `npm run test:e2e`
- Linting: `npm run lint`
- Typechecking: `npm run typecheck`

## 🚢 Deployment
Instructions for Docker and VPS deployment can be found in [docs/DEPLOIEMENT.md](docs/DEPLOIEMENT.md).

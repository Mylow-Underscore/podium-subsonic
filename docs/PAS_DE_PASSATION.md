# Passation d'Information - Projet Podium Subsonic

## 1. Résumé du Projet
- **Objectif** : Création d'un site vitrine premium pour Podium Subsonic.
- **Identité Visuelle** : Utilisation d'une structure en trapèze pour le Hero, navigation latérale fixe (superposée), et palette de couleurs contrastée (Sombre/Clair).
- **Stack Technique** : Next.js 14+ (App Router), Tailwind CSS, TypeScript, Zustand, Zod, Framer Motion.

## 2. Architecture et Règles du Projet
- **Structure** : Organisation par fonctionnalités (`src/features/`).
- **Règles de Code** : "Zéro commentaire" dans le code produit (auto-explicatif). Documentation complète dans `docs/`.
- **Validation** : Validation stricte de tous les inputs via Zod.
- **Sécurité** : Headers de sécurité (CSP, HSTS) gérés via un middleware dédié.

## 3. État d'avancement (Phases 0 à 8)
- [x] **Phase 0-1** : Initialisation, configuration des outils (Husky, Prettier, Lint, Typecheck).
- [x] **Phase 2** : Mise en place des tokens de design et des utilitaires (Logger, Env, Utils).
- [x] **Phase 3** : Architecture feature-orientée et structure des dossiers.
- [x] **Phase 4** : Design Système et implémentation du Hero (Trapèze) et Sidebar.
- [x] **Phase 5** : SEO (Metadata, JSON-LD) et Performance.
- [x] **Phase 6** : Couche de sécurité et headers middleware.
- [x] **Phase 7** : Infrastructure de tests (Vitest, Playwright).
- [x] **Phase 8** : CI/CD (GitHub Actions) et Dockerfile de déploiement.

## 4. Modules Implémentés sur la Page d'Accueil
- **Hero Section** : Structure trapèze avec CTAs.
- **LogoWall** : Preuve sociale monochrome.
- **ProcessTimeline** : Méthodologie linéaire avec ligne centrale.
- **ContactCTA** : Bloc de conversion final.

## 5. Prochaines Étapes (Backlog)
- Implémentation des sections détaillées de "Nos Services".
- Galerie Portfolio interactive.
- Audit final d'accessibilité (WCAG 2.2 AA).
- Tests E2E complets sur les parcours critiques.

---
*Document généré pour la passation de contexte avant nettoyage de session.*

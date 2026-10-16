# Journal des Décisions - Podium Subsonic

## [2026-10-15] Architecture Init
- **Choix de la structure**: Organisation orientée fonctionnalités (`src/features`) pour une meilleure scalabilité et isolation de la logique métier.
- **Gestion des thèmes**: Utilisation de `next-themes` avec variables CSS pour une transition fluide entre modes clair et sombre.
- **State Management**: `nuqs` pour l'état dans l'URL (filtres, pagination) et `Zustand` pour le state client global simple.
- **Validation**: `Zod` unifié pour les schémas client et serveur.

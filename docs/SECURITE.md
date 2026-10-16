# Sécurité - Podium Subsonic

Ce document détaille les mesures de sécurité prises pour protéger l'application et ses données.

## Principes Fondamentaux
- **Validation Stricte**: Chaque entrée utilisateur est validée via Zod avant tout traitement.
- **Secrets**: Aucune clé API ou secret ne doit être stocké dans le code source ou les variables d'environnement publiques.
- **Moindre Privilège**: Les accès aux données sont vérifiés au plus près de la source de données.

## Protections Mises en Œuvre
- **Security Headers**: Implémentés via le middleware Next.js :
  - CSP (Content Security Policy) strict.
  - HSTS (Strict-Transport-Security).
  - X-Frame-Options (DENY).
  - X-Content-Type-Options (nosniff).
- **CSRF Protection**: Nativement supportée par les Server Actions de Next.js.
- **Rate Limiting**: (Optionnel) Implémenté via Upstash ou un middleware pour prévenir les attaques par force brute.

## Conformité RGPD
- **Consentement**: Les traceurs ne sont activés qu'avec le consentement explicite.
- **Données Personnelles**: Les données sont collectées uniquement si elles sont nécessaires au service.
- **Export/Suppression**: Les utilisateurs peuvent demander l'accès ou la suppression de leurs données à tout moment.

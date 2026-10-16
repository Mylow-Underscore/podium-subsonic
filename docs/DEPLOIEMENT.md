# Déploiement - Podium Subsonic

## Architecture de déploiement
Le projet est conçu pour être déployé sur un **VPS (Virtual Private Server)** utilisant **Docker**.

## Procédure de build
1. **Build**: Exécuter `npm run build` pour générer le dossier `.next`.
2. **Image Docker**: Utiliser le `Dockerfile` à la racine pour construire une image multi-étapes optimisée.
   - Étape `deps` : Installation des dépendances.
   - Étape `builder` : Compilation du projet.
   - Étape `runner` : Image finale légère avec Node.js Alpine.

## Déploiement sur VPS
1. Connectez-vous au VPS et assurez-vous que Docker est installé.
2. Clonez le dépôt sur le serveur.
3. Créez le réseau Docker et le volume :
   `docker network create app_network`
4. Lancez le conteneur :
   `docker compose up -d`

## Maintenance
- **Logs**: Les logs sont disponibles via `docker logs <container_id>`.
- **Healthcheck**: La route `/api/health` est disponible pour monitorer l'état du service.
- **Rollback**: Pour revenir à une version précédente, redéployez l'image Docker précédente.

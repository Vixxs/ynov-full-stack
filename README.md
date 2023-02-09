# Full Stack
## Lancer le projet 
- Installer make
- make install (pour build et start les conteneurs)
- make kill (pour down les conteneurs)
- make stop (pour stop les conteneurs)
- make start (pour start les conteneurs)
- make db (pour charger la base de données )
Attention le 'make db' drop et recréer la base de donnée.
- make storybook (pour lancer le storybook sur http://localhost:9000/)

## Services
- PhpMyAdmin: http://localhost:8080/ user: admin / mdp: admin
- Flask: http://localhost:5000/
- Proxy(Express.js): http://localhost:8000/
- Front(Next.js): http://localhost:3000/
- Storybook: http://localhost:9000/ (faire 'make storybook' pour le lancer)

## Command dev
- make connect (se connecter au conteneur service-user)
- make migration (jouer les migrations symfony)
- make build-lib (rebuild my-lib-ui et la mettre à jour dans vitrine)

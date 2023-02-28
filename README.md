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
- PhpMyAdmin: http://ride.francecentral.cloudapp.azure.com:8080/ user: admin / mdp: admin
- Proxy(Express.js): http://ride.francecentral.cloudapp.azure.com:8000/
- Front(Next.js): http://ride.francecentral.cloudapp.azure.com/ compte admin : admin@myapp.com mdp : admin / compte user: user@myapp.com mdp: user 
- Storybook: http://ride.francecentral.cloudapp.azure.com:9000/ (faire 'make storybook' pour le lancer)
- Electron: Lien de téléchargement <a href="http://ride.francecentral.cloudapp.azure.com/setup/Ride%20Setup%204.6.0.exe" download>ici</a>

## Command dev
- make connect (se connecter au conteneur service-user)
- make migration (jouer les migrations symfony)
- make build-lib (rebuild my-lib-ui et la mettre à jour dans vitrine)

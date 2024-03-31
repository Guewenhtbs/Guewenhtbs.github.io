# Projet Web - Télécomdle

## Installation

Notre site se lance avec 3 étapes à exécuter dans l'ordre:
- lancement de la base de données mongoDB: commande "mongod --port 3010 --dbpath ./data" dans le repertoire ./database côté serveur (backend)
- (optionnel) Connexion à la base de données à partir de MongoDB Compass avec le lien localhost:3010
- lancement du serveur: commande "npx nodemon ./serveur.js" dans le repertoire du fichier côte backend.
- lancement du client frontend: installation des dépendances avec "npm install" dans le repertoire du package.json, puis "npm start" pour lancer le client. Connexion avec l'url "http://localhost:3000/".

## Description
Notre site est un guesser de personnalités scientifiques ayant largement influencés la recherche grâce à leurs travaux. L'objectif est de trouver une de ces personnalités choisies aléatoirement en écrivant des propositions. Si celle-ci n'est pas la bonne, les caractéristiques communes entre la proposition et la personne à trouver s'affichent (Sexe, siècle, domaine d'étude,...) pour guider les prochains essais. Chaque proposition est affichée dans un historique, et un tableau statistique récapitulant les personalités les plus et les moins difficiles à trouver est présent en bas de la page et s'actualise à chaque nouvelle partie.


## Utilisation
Au lancement de l'application, le joueur doit cliquer sur nouvelle partie pour lancer le jeu. Dès que celui-ci commence à écrire un nom, un menu deroulant lui donne des propositions en fonction de ce qu'il a écrit. Une fois qu'une tentative est jouée, le nom de la personne rentrée disparait de la liste pour ne pas rejouer plusieurs fois la même personne. Le joueur a aussi l'occasion de donner sa langue au chat pour afficher directement la réponse, et peut relancer directement une seconde partie.
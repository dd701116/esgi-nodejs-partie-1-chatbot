# esgi-nodejs-partie-1-chatbot
Cours Node.jsCours Node.js - Partie 1 - Chat-bot en production avec Express

## Installation

- Clonner le repos
```
    git clone https://github.com/dd701116/esgi-nodejs-partie-1-chatbot.git
```

- Installer les dépendances
```
    cd esgi-nodejs-partie-1-chatbot
    npm install
```

- Lancer le serveur
```
    npm start
```

## Déploiement sur Heroku

```
$ git add .
$ git commit -m "Added a Procfile."
$ heroku login
Enter your Heroku credentials.
...
$ heroku create
Creating arcane-castle-84208... done, stack is cedar
https://arcane-castle-84208.herokuapp.com/ | git@heroku.com:arcane-castle-84208.git
Git remote heroku added
$ git push heroku main
```

## Les endpoints

### GET /
Affiche "Bonjour !"

### GET /hello
```
{
    nom : <Le nom d'un utilisateur>
}
```
Affiche "Bonjour \<Le nom d\'un utilisateur\> !"<br>
Dans le cas ou nom est vide, il affiche "Quel est votre nom ?"

### POST /chat
```
{
    msg: <"ville" OU "météo">
}
```
Affiche "Nous sommes à Paris" si msg == 'ville' et "Il fait beau" si msg == 'météo'

## DEMO

Déployé sur heroku => https://arcane-castle-84208.herokuapp.com/

<br>
<hr>

Site web source :
- https://adrienjoly.com/cours-nodejs/

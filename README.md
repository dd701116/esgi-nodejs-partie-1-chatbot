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

## Les endpoints

### GET /
Affiche "Bonjour !"

### GET /hello
```
{
    nom : <Le nom d'un utilisateur>
}
```
Affiche "Bonjour \<Le nom d\'un utilisateur\> !"
Dans le cas ou nom est vide, il affiche "Quel est votre nom ?"

### POST /chat
```
{
    msg: <"ville" OU "météo">
}
```
Affiche "Nous sommes à Paris" si msg == 'ville' et "Il fait beau" si msg == 'météo'

Site web source :
- https://adrienjoly.com/cours-nodejs/

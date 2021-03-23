# esgi-nodejs-partie-1-chatbot
Cours Node.jsCours Node.js - Partie 1 - Chat-bot en production avec Express

### Q1 : Écrire un programme JavaScript qui affiche "Hello World" dans la sortie standard. (1 ligne de code)
```
// TODO: lors de son exécution, ce programme doit écrire "Hello World" (sans les guillemets) dans la console
console.log("Hello World")
```

### Q2 : Écrire un serveur Web qui répond "Bonjour !" quand on lui envoie une requête HTTP GET à sa racine (chemin: /).
```
const express = require('express');

const PORT = 3000;

// TODO: instancier le serveur applicatif "express"
const app = express()

// TODO: définir le point d'entrée `GET /` qui répond "Bonjour !" à chaque requête reçue
app.get("/", (req, res) => {
    res.send("Bonjour !")
})
// TODO: demander au serveur applicatif d'attendre des requêtes depuis le port spécifié plus haut
app.listen(PORT)

```

### Q3 : Ajouter un point d'entrée GET /hello qui acceptera un paramètre nom, et ajustera le contenu de la réponse en fonction de la valeur de ce paramètre :
- toute requête à GET /hello?nom=Sasha doit obtenir la réponse Bonjour, Sasha !
- toute requête à GET /hello?nom=Michel doit obtenir la réponse Bonjour, Michel !
- toute requête à GET /hello doit obtenir la réponse Quel est votre nom ?
```
// TODO: copier le code de l'exercice précédent
const express = require('express');

const PORT = 3000;

const app = express()

app.get("/", (req, res) => {
    res.send("Bonjour !")
})
// TODO: ajouter le point d'entrée `GET /hello?nom=XXX` comme spécifié dans l'énoncé

app.get("/hello", (req, res) => {
    let name = req.query.nom;
    if (name) {
        res.send(`Bonjour, ${name} !`)
    }else{
        res.send('Quel est votre nom ?')
    }
})
app.listen(PORT)

```


### Q4 : ajouter un point d'entrée (endpoint) de méthode POST au chemin /chat. Celui-ci pourra adapter sa réponse en fonction du contenu passé avec chaque requête. Le contenu devra être passé au format JSON, et le message de l'utilisateur devra être transmis comme valeur de la propriété msg.
- toute requête POST http://localhost:3000/chat avec le contenu {"msg":"ville"} doit obtenir la réponse "Nous sommes à Paris"
- toute requête POST http://localhost:3000/chat avec le contenu {"msg":"météo"} doit obtenir la réponse "Il fait beau"
```
// TODO: copier le code de l'exercice précédent
const express = require('express');

const PORT = 3000;

const app = express()

app.use(express.json())

app.get("/", (req, res) => {
    res.send("Bonjour !")
})
// TODO: ajouter le point d'entrée `GET /hello?nom=XXX` comme spécifié dans l'énoncé

app.get("/hello", (req, res) => {
    let name = req.query.nom;
    if (name) {
        res.send(`Bonjour, ${name} !`)
    }else{
        res.send('Quel est votre nom ?')
    }
})

// TODO: ajouter le point d'entrée `POST /chat` comme spécifié dans l'énoncé
app.post("/chat", (req, res) => {
    let msg = req.body.msg;
    if (msg) {
        if (msg==="ville") {
            res.send("Nous sommes à Paris")
        }else if (msg==="météo") {
            res.send("Il fait beau")
        }
    }else{
        res.send("")
    }
})
app.listen(PORT)

```

Site web source :
- https://adrienjoly.com/cours-nodejs/

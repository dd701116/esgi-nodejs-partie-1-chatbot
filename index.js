const express = require('express')
const {initialization, bonjour, bonjour_x, chat} = require('./functions')
const app = express()
const PORT = process.env.PORT

app.use(express.json())

app.get("/", bonjour)
// TODO: ajouter le point d'entrée `GET /hello?nom=XXX` comme spécifié dans l'énoncé

app.get("/hello", bonjour_x)

// TODO: ajouter le point d'entrée `POST /chat` comme spécifié dans l'énoncé
app.post("/chat", chat)

app.listen(PORT, () => initialization(PORT))
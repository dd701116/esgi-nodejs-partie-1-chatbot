const express = require('express')
const {initialization, bonjour, bonjour_x, chat} = require('./functions')
const {FacebookMessagingAPIClient, ValidateWebhook, FacebookMessageParser} = require('fb-messenger-bot-api')


const PORT = process.env.PORT
const PAGE_ACCESS_TOKEN = process.env.PAGE_ACCESS_TOKEN

const messagingClient = new FacebookMessagingAPIClient(PAGE_ACCESS_TOKEN);
const app = express()

app.use(express.json())

app.get("/", bonjour)
// TODO: ajouter le point d'entrée `GET /hello?nom=XXX` comme spécifié dans l'énoncé

app.get("/hello", bonjour_x)

// TODO: ajouter le point d'entrée `POST /chat` comme spécifié dans l'énoncé
app.post("/chat", chat)

//  TODO: FB messenger bot
app.get('/api/webhook',ValidateWebhook.validateServer)
app.post('/api/webhook', async (req, res) => {
  
  try {
      const incomingMessages = FacebookMessageParser.parsePayload(req.body)
      console.log(incomingMessages)
      let senderId = 2
      await messagingClient.markSeen(incomingMessages.responseId)
      await messagingClient.toggleTyping(senderId,true)

      //promise based reaction on message send confirmation
      const result = await messagingClient.sendTextMessage(senderId, 'Hello');
      console.log(`Result sent with: ${result}`)
      console.log(result)
    } catch(e){
      console.log(e)
    }
})

app.listen(PORT, () => initialization(PORT))
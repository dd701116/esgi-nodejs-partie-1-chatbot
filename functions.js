
function initialization(port) {
  console.log(`The server is ready : http://localhost:${port}/`);
}

function bonjour(req, res) {
  res.send("Bonjour !")
}

function bonjour_x(req, res) {
  let name = req.query.nom;
  if (name) {
      res.send(`Bonjour, ${name} !`)
  }else{
      res.send('Quel est votre nom ?')
  }
}

function chat(req, res) {
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
}

module.exports = {
  initialization,
  bonjour_x,
  bonjour,
  chat
}
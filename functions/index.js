const functions = require("firebase-functions");
const watson = require("watson-developer-cloud/assistant/v1");
require("dotenv").config();

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
exports.helloWorld = functions.https.onRequest((request, response) => {
  functions.logger.info("Hello logs!", {structuredData: true});
  response.send("Hello from Firebase!");
});

// eslint-disable-next-line new-cap
const chatbot = new watson({
  username: process.env.USERNAME,
  password: process.env.PASSWORD,
  apikay: process.env.APIKAY,
  url: process.env.URL,
  version: process.env.VERSION,
});
exports.conversa = functions.https.onRequest((req, res) =>{
  const payload = {
    context: req.body.context || {},
    input: req.body.input || {},
  };

  chatbot.message(payload, (err, data)=> {
    if (err) {
      return res.status(err.code || 500).json(err);
    }

    return res.json(trataResposta(payload, data));
  });
});

const trataResposta = (payload, resposta)=> {
  console.log("watson disse: ", resposta.output.text[0]);
  return resposta;
};

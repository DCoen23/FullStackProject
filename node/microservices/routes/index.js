let express = require('express');
let router = express.Router();

let Mongoose = require('mongoose').Mongoose;
let Schema = require('mongoose').Schema;

let oldMong = new Mongoose();
oldMong.connect('mongodb://127.0.0.1:27017/db');

let clientSchema = new Schema({
  clientId: String,
  title: String,
  id: String,
  address: String,
  image: String,
  description: String
}, { collection: 'clients' });

let clients = oldMong.model('clients', clientSchema);

router.get('/', async function (req, res, next) {
  const clients = await getClients();
  res.render('index');
});

router.post('/getClients', async function (req, res, next) {
  const clients = await getClients();
  res.json(clients);
});

async function getClients() {
  data = await clients.find().lean();
  return { clients: data };
}

router.post('/saveClient', async function (req, res, next) {
  const clients = await saveClient(req.body);
  res.json(clients);
});

async function saveClient(theClient) {
  console.log('theClient: ' + theClient);
  await clients.create(theClient,
    function (err, res) {
      if (err) {
        console.log('Could not insert new client')
        return { saveClientResponse: "fail" };
      }
    }
  )
  return { saveClientResponse: "success" };
}

module.exports = router;
let express = require('express');
let router = express.Router();

let Mongoose = require('mongoose').Mongoose;
let Schema = require('mongoose').Schema;

let oldMong = new Mongoose();
oldMong.connect('mongodb://127.0.0.1:27017/db');

let clientSchema = new Schema({
  clientId: String,
  title: String,
  image: String,
  address: String,
  description: String
}, { collection: 'clients' });

let clients = oldMong.model('clients', clientSchema);

// Admin server page
router.get('/', async function (req, res, next) {
  res.render('index');
});




// Crud
router.post('/createClient', async function (req, res, next) {
  let retVal = { response: "fail" }
  await clients.create(req.body,
    function (err, res) {
      if (!err) {
        retVal = { response: "success" }
      }
    }
  )
  res.json(retVal);
});

// cRud   Should use GET . . . we'll fix this is Cloud next term
router.post('/readClient', async function (req, res, next) {
  let data;
  if (req.body.cmd == 'all') {
    data = await clients.find().lean()
  }
  else {
    data = await clients.find({ _id: req.body._id }).lean()
  }
  res.json({ clients: data });
})

// crUd   Should use PUT . . . we'll fix this is Cloud next term
router.post('/updateClient', async function (req, res, next) {
  let retVal = { response: "fail" }
  await clients.findOneAndUpdate({ _id: req.body._id }, req.body,
    function (err, res) {
      if (!err) {
        retVal = { response: "success" }
      }
    }
  )
  res.json(retVal);
});

// cruD   Should use DELETE . . . we'll fix this is Cloud next term
router.post('/deleteClient', async function (req, res, next) {
  let retVal = { response: "fail" }
  await clients.deleteOne({ _id: req.body._id },
    function (err, res) {
      if (!err) {
        retVal = { response: "success" }
      }
    }
  )
  res.json(retVal);
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
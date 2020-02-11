const express = require('express')
const app = express()
var mongoose = require('mongoose');
let connect = require("./connection.js")
let config = require("./config.js")
const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

// Connection URL
const url = 'mongodb://localhost:27017';

// Database Name
const dbName = 'Todolist';

// Create a new MongoClient
const client = new MongoClient(url);

var user = mongoose.Schema({
  username: String, 
  password: String
}); 

var User = mongoose.model('User', user);

// Use connect method to connect to the Server
client.connect(function(err) {
  assert.equal(null, err);
  console.log("Connected successfully to server");

  const db = client.db(dbName);

  client.close();
});
const insertDocuments = function(db, callback) {
  // Get the documents collection
  const collection = db.collection('documents');
  // Insert some documents
  collection.insertMany([
    {a : 1}, {a : 2}, {a : 3}
  ], function(err, result) {
    assert.equal(err, null);
    assert.equal(3, result.result.n);
    assert.equal(3, result.ops.length);
    console.log("Inserted 3 documents into the collection");
    callback(result);
  });
}



const findDocuments = function(db, callback) {
  // Get the documents collection
  const collection = db.collection('todo');
  // Find some documents
  collection.find({}).toArray(function(err, docs) {
    assert.equal(err, null);
    console.log("Found the following records");
    console.log(docs);
    callback(docs);
  });
}
const updateDocument = function(db, callback) {
  // Get the documents collection
  const collection = db.collection('todo');
  // Update document where a is 2, set b equal to 1
  collection.updateOne({ a : 2 }
    , { $set: { b : 1 } }, function(err, result) {
    assert.equal(err, null);
    assert.equal(1, result.result.n);
    console.log("Updated the document with the field a equal to 2");
    callback(result);
  });  
}

app.get('/', function (req, res) {
  res.send('Hello World!')

})

app.get('/todo', async (req, res) => {

  let {db_client, db_connection} = await connect()
  
  db_connection.collection('todo').find({}).toArray((err, result) => {
    if(err) return console.log(err)

    console.log('todo :', result)

    db_client.close()
    res.send(result)
   
  })
})

.post(function(req,res){
  // Nous utilisons le schéma user
    var user = new User();
  // Nous récupérons les données reçues pour les ajouter à l'objet user
    user.username = req.body.username;
    user.password = req.body.password;
  //Nous stockons l'objet en base
    user.save(function(err){
      if(err){
        res.send(err);
      }
      res.send({message : 'Bravo, la user est maintenant stockée en base de données'});
    })
})


app.listen(config.port, function () {
  console.log(`Example app listening on port ${config.port} !`)
})
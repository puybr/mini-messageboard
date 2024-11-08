"use strict";

const { MongoClient } = require("mongodb");

const express = require('express')
const app = express()
const port = 3000

app.use(express.json());       // to support JSON-encoded bodies
app.use(express.urlencoded());
require('dotenv').config();

const uri = process.env.SERVER_URL

const client = new MongoClient(uri);

async function main(){
    try{
        await client.connect();
        await getCollection(client)
        console.log('connected')
    } catch (e){
        console.error(e);
    } finally {
        await client.close();
    }
};
main().catch(console.error);


app.set('view engine', 'ejs');


app.listen(port, () => {
  console.log(`App listening at port ${port}`);
});


async function getCollection(client) {
    const myDB = client.db("messageboard");
    const myColl = myDB.collection("messages");
    const cursor = myColl.find({});
    let messages = [
        {
          text: "Hi there!",
          user: "Amando",
          added: new Date();
        },
        {
          text: "Hello World!",
          user: "Charles",
          added: new Date();
        }
     ];
    
    for await (const doc of cursor) {
        messages.push(doc);

    app.get('/', (req, res) => {
        res.render('pages/index', {
            messages: messages
            });
    });
    app.post('/new', (req, res)=> { 
        const name = req.body.name
        const message = req.body.message
        const doc = {
            text: message,
            user: name,
            added: new Date();
          };
        if (doc.text&&doc.user) {
            client.connect();
  
          client.db("messageboard").collection("messages").insertOne(doc);
            messages.push(doc);
            res.redirect('..');
            } else return;      
      });
    };
 };

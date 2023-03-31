const { MongoClient } = require('mongodb');

const uri = "mongodb+srv://juanitoENP:newpass@gemcluster.bt1dibt.mongodb.net/test";

const client = new MongoClient(uri);

async function connect() {
  try {
    await client.connect();
    console.log("Conexión exitosa con MongoDB");
  } catch (err) {
    console.error(err);
  }
}

async function close() {
  try {
    await client.close();
    console.log("Conexión cerrada con MongoDB");
  } catch (err) {
    console.error(err);
  }
}

module.exports = { client, connect, close };

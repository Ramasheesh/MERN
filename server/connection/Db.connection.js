const mongoose = require('mongoose');

const dbURI = process.env.MONGO_URI; 
async function dbConnection(){
  mongoose.connect(dbURI, {
    serverSelectionTimeoutMS: 30000, // Increase timeout to 30 seconds
    connectTimeoutMS: 30000, // Increase connection timeout
  })
  .then(() => console.log('MongoDB connected successfully'))
  .catch(err => console.error('MongoDB connection error:', err));
}

module.exports = {dbConnection};








// const { MongoClient, ServerApiVersion } = require("mongodb");
// const uri = process.env.MONGO_URI

// // Create a MongoClient with a MongoClientOptions object to set the Stable API version
//   const client = new MongoClient(uri, {
//     serverApi: {
//       version: ServerApiVersion.v1,
//       strict: true,
//       deprecationErrors: true, 
//     },
//   });

//   async function dbConnection() {
//     try {
//       // Connect the client to the server	(optional starting in v4.7)
//       await client.connect();
//       // Send a ping to confirm a successful connection
//       await client.db("admin").command({ ping: 1 });
//       console.log(
//         "Pinged your deployment. You successfully connected to MongoDB!"
//       );
//     } finally {
//       // Ensures that the client will close when you finish/error
//       await client.close();
//     }
//   }
//   dbConnection().catch(console.dir);

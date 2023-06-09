const { MongoClient } = require('mongodb');

async function connectToDatabase() {
  const uri = 'mongodb+srv://bhavyakriplanics21:life12345@cluster0.ejcmnh9.mongodb.net/';
  const client = new MongoClient(uri);

  try {
    await client.connect();
    console.log('Connected to the database');

    const db = client.db();
    // Use the database and perform operations
    // ...
  } catch (error) {
    console.error('Error connecting to the database', error);
  } finally {
    // Close the connection
    await client.close();
  }
}

connectToDatabase();

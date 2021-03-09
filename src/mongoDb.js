const { MongoClient } = require('mongodb');

module.exports = async function () {
  const db = await mongoDbConfig();
  const grades = await db.collection(process.env.DB_COLLECTION).find({ name: 'Terica Brugger' }).toArray();

  console.log('grades', grades);
}

async function mongoDbConfig() {
  try {
    const client = await MongoClient.connect(
      process.env.DB_URL,
      { useNewUrlParser: true, useUnifiedTopology: true },
    );
    
    return await client.db(process.env.DB_NAME);
  } catch (err) {
    console.log('err', err);
  }
}
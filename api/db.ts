// api/db.ts
import { MongoClient, Db } from 'mongodb';

const uri = process.env.MONGODB_URI!;
let client: MongoClient;
let db: Db;

export async function connectToDatabase() {
  if (!client) {
    client = new MongoClient(uri);
    await client.connect();
    db = client.db('landing-page'); // nombre de tu BD
  }
  return { db };
}
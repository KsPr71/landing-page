// api/db.ts
import { MongoClient, Db } from 'mongodb';

const uri = process.env.MONGODB_URI!;
let client: MongoClient;
let db: Db;

export async function connectToDatabase() {
  if (!client) {
    client = new MongoClient(uri);
    await client.connect();
    // Usa la base de datos NovaDevProducts
    db = client.db('NovaDevProducts');
  }
  return { db };
}
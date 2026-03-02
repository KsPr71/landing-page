// api/db.ts
import { MongoClient, Db } from 'mongodb';

let client: MongoClient;
let db: Db;

export async function connectToDatabase() {
  if (!client) {
    const uri = process.env.MONGODB_URI;

    if (!uri) {
      throw new Error('MONGODB_URI environment variable is not set');
    }

    client = new MongoClient(uri, {
      // Evita el error TLS "tlsv1 alert internal error" en Vercel/serverless
      autoSelectFamily: false,
      family: 4, // Forzar IPv4
    });
    await client.connect();
    db = client.db('NovaDevProducts');
  }
  return { db };
}
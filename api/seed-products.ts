// api/seed-products.ts
import type { VercelRequest, VercelResponse } from '@vercel/node';
import { MongoClient } from 'mongodb';
import { products } from '../data/products';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).end('Method Not Allowed');
  }

  const uri = process.env.MONGODB_URI;

  if (!uri) {
    return res
      .status(500)
      .json({ error: 'Seeding failed', message: 'MONGODB_URI is not set' });
  }

  const client = new MongoClient(uri, {
    autoSelectFamily: false,
    family: 4,
    connectTimeoutMS: 10000,
    socketTimeoutMS: 45000,
  });

  try {
    await client.connect();
    const db = client.db('NovaDevProducts');
    const collection = db.collection('products');

    await collection.deleteMany({});
    await collection.insertMany(products);

    return res.status(200).json({ inserted: products.length });
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Unknown error';
    return res.status(500).json({ error: 'Seeding failed', message });
  } finally {
    await client.close().catch(() => {});
  }
}
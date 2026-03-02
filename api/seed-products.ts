// api/seed-products.ts
import type { VercelRequest, VercelResponse } from '@vercel/node';
import { connectToDatabase } from './db';
import { products } from '../data/products';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).end('Method Not Allowed');
  }

  const { db } = await connectToDatabase();
  const collection = db.collection('products');

  await collection.deleteMany({});        // opcional: limpiar
  await collection.insertMany(products);  // migración

  return res.status(200).json({ inserted: products.length });
}
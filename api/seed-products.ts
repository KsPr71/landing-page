// api/seed-products.ts
import type { VercelRequest, VercelResponse } from '@vercel/node';
// Nota: importamos con extensión .js para que Node ESM en Vercel resuelva correctamente el módulo compilado
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { connectToDatabase } from './db.js';
import { products } from '../data/products';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).end('Method Not Allowed');
  }

  try {
    const { db } = await connectToDatabase();
    const collection = db.collection('products');

    await collection.deleteMany({});
    await collection.insertMany(products);

    return res.status(200).json({ inserted: products.length });
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Unknown error';
    return res.status(500).json({ error: 'Seeding failed', message });
  }
}
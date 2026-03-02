// api/products.ts
import type { VercelRequest, VercelResponse } from '@vercel/node';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { connectToDatabase } from './db.js';
import type { Product } from '../data/products';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  const { db } = await connectToDatabase();
  const collection = db.collection<Product>('products');

  if (req.method === 'GET') {
    const products = await collection.find({}).toArray();
    return res.status(200).json(products);
  }

  if (req.method === 'POST') {
    const product = req.body as Product;
    await collection.insertOne(product);
    return res.status(201).json({ ok: true });
  }

  res.setHeader('Allow', 'GET, POST');
  return res.status(405).end('Method Not Allowed');
}
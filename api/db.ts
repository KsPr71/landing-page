// api/db.ts
import { MongoClient, Db } from 'mongodb';

let client: MongoClient;
let db: Db;

// Variable para saber si ya nos conectamos
let isConnected = false;

export async function connectToDatabase() {
  // Si ya estamos conectados, retornar la db existente
  if (isConnected && db) {
    console.log('📦 Usando conexión existente a MongoDB');
    return { db, client };
  }

  try {
    const uri = process.env.MONGODB_URI;

    if (!uri) {
      throw new Error('❌ MONGODB_URI environment variable is not set');
    }

    console.log('🔌 Conectando a MongoDB...');
    
    client = new MongoClient(uri, {
      autoSelectFamily: false,
      family: 4, // Forzar IPv4
      connectTimeoutMS: 10000,
      socketTimeoutMS: 45000,
    });

    await client.connect();
    db = client.db('NovaDevProducts');
    
    // Verificar la conexión
    await db.command({ ping: 1 });
    
    isConnected = true;
    console.log('✅ Conectado a MongoDB correctamente');
    console.log(`📁 Base de datos: NovaDevProducts`);

    return { db, client };
  } catch (error) {
    console.error('❌ Error conectando a MongoDB:', error);
    isConnected = false;
    throw new Error(`Error de conexión: ${error.message}`);
  }
}

// Exportar también la función por defecto para compatibilidad
export default connectToDatabase;
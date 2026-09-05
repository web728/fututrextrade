import 'server-only';
import mongoose from 'mongoose';

interface MongooseCache {
  conn: typeof mongoose | null;
  promise: Promise<typeof mongoose> | null;
}

const globalMongoose = globalThis as typeof globalThis & { mongooseCache?: MongooseCache };
const cached = globalMongoose.mongooseCache ?? { conn: null, promise: null };
globalMongoose.mongooseCache = cached;

export async function connectToMongoDB() {
  if (cached.conn) return cached.conn;

  const uri = process.env.MONGODB_URI;
  const dbName = process.env.MONGODB_DB;
  if (!uri) throw new Error('MONGODB_URI is not configured.');
  if (!dbName) throw new Error('MONGODB_DB is not configured.');

  if (!cached.promise) {
    cached.promise = mongoose.connect(uri, {
      dbName,
      bufferCommands: false,
      serverSelectionTimeoutMS: 8000
    });
  }

  cached.conn = await cached.promise;
  return cached.conn;
}

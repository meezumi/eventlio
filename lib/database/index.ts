// serverless environment, we commonly use what we are about to do here
import mongoose from 'mongoose';

const MONGODB_URI = process.env.MONGODB_URI;

let cached = (global as any).mongoose || {conn: null, promise: null}
// here we attempt to achieve a mongoose object.
// (global as any). used to know that we are refering to the global time of mongoose.

export const connectToDatabase = async () => {
  if (cached.conn) return cached.conn; // if cached is already connected 

  if(!MONGODB_URI) throw new Error('MONGODB_URI is missing.');

  cached.promise = cached.promise || mongoose.connect(MONGODB_URI, {
    dbName: 'eventlio',
    bufferCommands: false,
  }) // here, we connect to that cached connection or if not there, create a new connection

  cached.conn = await cached.promise;

  return cached.conn;
}

// server actions 

// every server action will have to call connectToDatabase() again and again, so if we werent caching it, it will just make new connection to the database. hence caching enables reusing the existing connectons (obvio more efficient)


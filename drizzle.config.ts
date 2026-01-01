import 'dotenv/config';
import { defineConfig } from 'drizzle-kit';

export default defineConfig({

  schema: './config/UserSchema.tsx',
  dialect: 'postgresql',
  dbCredentials: {
    url: process.env.DATABASE_URL!,
  },
});

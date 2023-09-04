import { config } from 'dotenv';
config();

export const { DB_URL, SECRET_KEY } = process.env;

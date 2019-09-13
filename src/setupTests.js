import dotEnv from 'dotenv';
import path from 'path';
dotEnv.config({
  path: path.resolve(process.cwd(), `.env.${process.env.NODE_ENV}`)
});

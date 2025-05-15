import * as dotenv from 'dotenv';
import * as path from 'path';
import { DataSource } from 'typeorm';

dotenv.config({ path: path.resolve(__dirname, '../.env') });

export default new DataSource({
  type: 'postgres',
  database: process.env['POSTGRES_DB'],
  username: process.env['POSTGRES_USER'],
  password: process.env['POSTGRES_PASSWORD'],
  host: process.env['POSTGRES_HOST'],
  port: Number(process.env['POSTGRES_PORT']),
  entities: [path.join(__dirname, 'entities', '*.{ts, js}')],
  migrations: [path.join(__dirname, 'migrations', '*.{ts, js}')],
});

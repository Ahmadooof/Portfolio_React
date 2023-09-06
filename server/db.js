import { createPool } from 'mysql2';

const dbConnection = createPool({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'chat'
});

export default dbConnection;

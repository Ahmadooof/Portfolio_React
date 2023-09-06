const mysql = require('mysql2');
const dotenv = require('dotenv');

// Load environment variables from a .env file
dotenv.config();

// Database configuration
const dbConfig = {
  host: process.env.HOST,
  user: process.env.USERNAME,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
};

// Create a MySQL connection
const connection = mysql.createConnection(dbConfig);

// Connect to the database
connection.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
    return;
  }

  console.log('Connected to MySQL database');

  // SQL statements for database initialization
  const createTableSQL = `
    CREATE TABLE IF NOT EXISTS ip_addresses (
      id INT AUTO_INCREMENT PRIMARY KEY,
      ip_address VARCHAR(45) NOT NULL,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )
  `;

  const insertSampleDataSQL = `
    INSERT INTO ip_addresses (ip_address)
    VALUES
      ('192.168.1.100'),
      ('10.0.0.1')
  `;

  // Execute the SQL statements
  connection.query(createTableSQL, (err) => {
    if (err) {
      console.error('Error creating table:', err);
      connection.end();
      return;
    }

    console.log('Table "ip_addresses" created successfully');

    connection.query(insertSampleDataSQL, (err) => {
      if (err) {
        console.error('Error inserting sample data:', err);
      } else {
        console.log('Sample data inserted successfully');
      }

      // Close the database connection
      connection.end();
    });
  });
});

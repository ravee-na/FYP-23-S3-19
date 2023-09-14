const mysql = require('mysql2');

// Database connection configuration
const connection = mysql.createConnection({
  host: 3306, // Replace with the actual hostname or IP address
  user: 'root',
  password: 'FYP-S3-23-19',
  database: 'emproster',
});

// Attempt to connect to the database
connection.connect((err) => {
  if (err) {
    console.error('Error connecting to the database:', err);
    return;
  }
  console.log('Connected to the database.'); 
});
// export the database connection so that we can use it throughout the webapp
module.exports = connection;
const db = require('./db_connection.js'); // Assuming your database connection is in a separate file

db.query('SELECT * FROM employer;')
  .then(([rows, fields]) => {
    console.log('Query result:', rows);
  })
  .catch((err) => {
    console.error('Error executing query:', err);
  });

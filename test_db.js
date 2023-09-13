// testing retrieval of data

const db = require('./db_connection.js'); // Adjust the path to your db.js file

// Example query
db.query('SELECT * FROM employer', (err, results) => {
  if (err) {
    console.error('Error executing query: ' + err);
    return;
  }
  console.log('Query results:', results);
});


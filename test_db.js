// testing retrieval of data
const db = require('./db_connection.js'); //extend the exported db connection from db_connection.js

// Example query
function retrieveEmployee(){
  db.query('SELECT * FROM employee', (err, results) => {
    if (err) {
      console.error('Error executing query: ' + err);
      return;
    }
    console.log('Query results:', results);
  });
}

function closeConnection(){
  db.end((endErr) => {
    if (endErr) {
      console.error('Error closing the database connection:', endErr);
    } else {
      console.log('Database connection closed.');
    }
  });
}

retrieveEmployee();
closeConnection();



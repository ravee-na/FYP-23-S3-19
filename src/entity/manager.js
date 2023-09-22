// manager.js
const mysql = require('mysql2/promise');

class Manager {
    //class constructor
  constructor(id, name, address, phoneNumber, email, password) {
    this.manager_id = id;
    this.manager_name = name;
    this.manager_addr = address;
    this.manager_phoneno = phoneNumber;
    this.manager_email = email;
    this.manager_psw = password;
  }

  // implement needed methods here
  // Static method to retrieve manager details from the database
  static async getAllManagers() {
    const connection = await mysql.createConnection({
      host: 3306,
      user: 'root',
      password: 'FYP-S3-23-19',
      database: 'emproster',
    });

    try {
      const [rows] = await connection.execute('SELECT * FROM manager');
      return rows.map((row) => new Manager(row.manager_id, row.manager_name, row.manager_addr, row.manager_phoneno, row.manager_email, row.manager_psw));
    } finally {
      connection.end();
    }
  }
}

//export the entity class
module.exports = Manager;

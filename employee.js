// employee.js
const mysql = require('mysql2/promise');

class Employee {
    //class constructor
  constructor(id, name, address, phoneNumber, emergencyContact, email, password) {
    this.emp_id = id;
    this.emp_name = name;
    this.emp_address = address;
    this.emp_phoneno = phoneNumber;
    this.emergency_cont = emergencyContact;
    this.emp_email = email;
    this.emp_psw = password;
  }

  // Static method to retrieve employees from the database
  static async getAllEmployees() {
    const connection = await mysql.createConnection({
      host: 3306,
      user: 'root',
      password: 'FYP-S3-23-19',
      database: 'emproster',
    });

    try {
      const [rows] = await connection.execute('SELECT * FROM employee');
      return rows.map((row) => new Employee(row.emp_id, row.emp_name, row.emp_address, row.emp_phoneno, row.emergency_cont, row.emp_email, row.emp_psw));
    } finally {
      connection.end();
    }
  }
}

//export the entity class
module.exports = Employee;

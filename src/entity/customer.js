const mysql = require('mysql2/promise');

class Customer{
    //class constructor
    constructor(c_id, c_name, c_addr, c_phoneno, c_email){
        this.cust_id = c_id;
        this.cust_name = c_name;
        this.cust_addr = c_addr;
        this.cust_phoneno = c_phoneno;
        this.cust_email = c_email;
    }

    //implement methods here
    static async getAllCustomers(){
        const connection = await mysql.createConnection({
            host: 3306,
            user: 'root',
            password: 'FYP-S3-23-19',
            database: 'emproster',
          });
      
          try {
            const [rows] = await connection.execute('SELECT * FROM customer');
            return rows.map((row) => new Customer(row.cust_id, row.cust_name, row.cust_addr, row.cust_phoneno, row.cust_email));
          } finally {
            connection.end();
          }
    }
}

module.exports = Customer; 
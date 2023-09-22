const mysql = require('mysql2/promise');

class Shift{
    //class constructor
    constructor(emp_id, cust_id, cust_addr, datetime){
        this.emp_id = emp_id;
        this.cust_id = cust_id;
        this.cust_addr = cust_addr;
        this.datetime = datetime;
    }

    //implement methods here
    static async getDutyDate(EmpID){
        const connection = await mysql.createConnection({
            host: 3306,
            user: 'root',
            password: 'FYP-S3-23-19',
            database: 'emproster',
        });

        try {
            const query = 'select datetime from shift where emp_id = ?';
            const [rows] = await connection.execute(query, [EmpID]);
            return rows.map((row) => new Shift(row.emp_id, row.cust_id, row.cust_addr, new Date(row.datetime).toLocaleString('en-US', {timeZone: 'America/New_York'})));
            
        } finally {
            connection.end();
        }

    }

}

module.exports = Shift; 
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

        const query = 'select emp_name, datetime from shift s join employee e on s.emp_id = e.emp_id where s.emp_id = ?';

        connection.query(query, [EmpID], (error, results) => {
            if(error){
                console.error(error);
                return;
            }

            console.log(results);
        })

        connection.end();

    }

}

module.exports = Shift; 
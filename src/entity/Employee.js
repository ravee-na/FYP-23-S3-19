const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize({
  dialect: 'mysql',
  host: 3306,
  username: 'root',
  password: 'FYP-S3-23-19',
  database: 'emproster',
});

const Employee = sequelize.define('Employee', {
  emp_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  emp_name: DataTypes.STRING,
  emp_duty_date: DataTypes.DATE, // Add this property to represent the duty date
  // Add other properties as needed
});

// Sync the model with the database
(async () => {
  await sequelize.sync();
  console.log('Employee model synced with database');
})();

module.exports = Employee;

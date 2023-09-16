// main.js

const Employee = require('./employee');

async function fetchEmployees() {
  try {
    const employees = await Employee.getAllEmployees();
    console.log(employees);
  } catch (error) {
    console.error('Error fetching employees:', error);
  }
}

fetchEmployees();

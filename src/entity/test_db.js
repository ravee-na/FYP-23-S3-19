//test file to test all entity classes created
const Customer = require('./customer');
const Employee = require('./employeeEntity');
const Manager = require('./manager');
const Shift = require('./shift');

async function fetchCustomer() {
  try {
    const customer = await Customer.getAllCustomers();
    console.log(customer);
  } catch (error) {
    console.error('Error fetching customer:', error);
  }
}

async function fetchEmployee() {
  try {
    const employee = await Employee.getAllEmployees();
    console.log(employee);
  } catch (error) {
    console.error('Error fetching employee:', error);
  }
}

async function fetchManager() {
  try {
    const manager = await Manager.getAllManagers();
    console.log(manager);
  } catch (error) {
    console.error('Error fetching manager:', error);
  }
}

async function fetchShiftDate() {
  try {
    const shift = await Shift.getDutyDate(6);
    console.log(shift);
  } catch (error) {
    console.error('Error fetching shift date:', error);
  }
}

fetchShiftDate();
fetchManager();
fetchEmployee();
fetchCustomer();

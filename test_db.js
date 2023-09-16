// main.js

const Manager = require('./manager');

async function fetchManagers() {
  try {
    const managers = await Manager.getAllManagers();
    console.log(managers);
  } catch (error) {
    console.error('Error fetching managers:', error);
  }
}

fetchManagers();

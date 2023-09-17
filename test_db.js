// main.js

const Shift = require('./shift');

async function fetchShifts() {
  try {
    const shifts = await Shift.getDutyDate();
    console.log(shifts);
  } catch (error) {
    console.error('Error fetching managers:', error);
  }
}

fetchShifts();

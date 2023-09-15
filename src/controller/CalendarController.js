const express = require('express');
const router = express.Router();
const Employee = require('../entity/Employee');

// Define a route to fetch events
router.post('/fetch-events', async (req, res) => {
  try {
    // Fetch events from the Employee model or your database
    const events = await Employee.findAll();
    // Process and format events as needed
    const formattedEvents = events.map((employee) => ({
      title: employee.emp_name,
      start: employee.emp_duty_date, // You need to add a date property to your Employee model
    }));
    res.json(formattedEvents);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
});

module.exports = router;

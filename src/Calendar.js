import React from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';

function Calendar() {
  const events = [
    {
      title: 'Duty Day 1',
      start: '2023-09-15',
    },
    {
      title: 'Duty Day 2',
      start: '2023-09-20',
    },
    // Add more events here...
  ];

  return (
    <div>
      <FullCalendar
        plugins={[dayGridPlugin]}
        initialView="dayGridMonth"
        events={events}
      />
    </div>
  );
}

export default Calendar;

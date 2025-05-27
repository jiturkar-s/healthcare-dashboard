import React, { useState } from 'react'

export default function CustomCalendar() {
    const [selectedDate, setSelectedDate] = useState(new Date());

    const datesRow = Array.from({ length: 7}, (_,i) => {
        const date = new Date();
        date.setDate(date.getDate() + i);
        return date;
    })

    const timeSlots = [
        '09:00 AM', '10:00 AM', '11:00 AM',
        '12:00 PM', '01:00 PM', '02:00 PM',
        '03:00 PM', '04:00 PM'
    ]
  return (
    <div className="custom-calendar">
      <div className="calendar-header">
        <span className="month-year">
          {selectedDate.toLocaleString('default', { month: 'long' })} {selectedDate.getFullYear()}
        </span>
        <div className="arrows">
          <button>{'<'}</button>
          <button>{'>'}</button>
        </div>
      </div>

      <div className="dates-row">
        {datesRow.map((date, index) => (
          <div
            key={index}
            className={`date-tile ${selectedDate.toDateString() === date.toDateString() ? 'active' : ''}`}
            onClick={() => setSelectedDate(date)}
          >
            <div className="day">{date.toLocaleDateString('default', { weekday: 'short' })}</div>
            <div className="date">{date.getDate()}</div>
          </div>
        ))}
      </div>

      <div className="time-slots">
        {timeSlots.map((time, index) => (
          <div key={index} className="time-slot">{time}</div>
        ))}
      </div>
    </div>
  )
}

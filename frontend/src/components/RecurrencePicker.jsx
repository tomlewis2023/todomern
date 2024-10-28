import React, { useState } from 'react';
import MiniCalendar from './MiniCalendar';

const RecurrencePicker = ({ setRecurrence }) => {
  const [frequency, setFrequency] = useState('daily');
  const [interval, setInterval] = useState(1);
  const [daysOfWeek, setDaysOfWeek] = useState([]);
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const handleApply = () => {
    setRecurrence({ frequency, interval, daysOfWeek, startDate, endDate });
  };

  const toggleDay = (day) => {
    setDaysOfWeek(daysOfWeek.includes(day)
      ? daysOfWeek.filter(d => d !== day)
      : [...daysOfWeek, day]);
  };

  return (
    <div className="recurrence-picker">
      <label>
        Frequency:
        <select value={frequency} onChange={(e) => setFrequency(e.target.value)}>
          <option value="daily">Daily</option>
          <option value="weekly">Weekly</option>
          <option value="monthly">Monthly</option>
          <option value="yearly">Yearly</option>
        </select>
      </label>
      <label>
        Interval:
        <input
          type="number"
          value={interval}
          onChange={(e) => setInterval(Number(e.target.value))}
          min="1"
        />
      </label>
      {frequency === 'weekly' && (
        <div className="weekdays-picker">
          {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'].map(day => (
            <label key={day}>
              <input
                type="checkbox"
                checked={daysOfWeek.includes(day)}
                onChange={() => toggleDay(day)}
              />
              {day}
            </label>
          ))}
        </div>
      )}
      <label>
        Start Date:
        <input type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} />
      </label>
      <label>
        End Date:
        <input type="date" value={endDate} onChange={(e) => setEndDate(e.target.value)} />
      </label>
      <button onClick={handleApply}>Apply</button>
      <MiniCalendar frequency={frequency} interval={interval} startDate={startDate} />
    </div>
  );
};

export default RecurrencePicker;

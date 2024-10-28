
import React, { useState } from 'react';
import RecurrencePicker from './RecurrencePicker';
import { createTask } from '../api';

const TaskForm = ({ onAddTask }) => {
  const [title, setTitle] = useState('');
  const [isRecurring, setIsRecurring] = useState(false);
  const [recurrence, setRecurrence] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newTask = await createTask({ title, isRecurring, recurrence });
    onAddTask(newTask);
    setTitle('');
    setIsRecurring(false);
    setRecurrence(null);
  };

  return (
    <form onSubmit={handleSubmit} className="task-form">
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Add a new task"
        required
      />
      <label>
        <input
          type="checkbox"
          checked={isRecurring}
          onChange={(e) => setIsRecurring(e.target.checked)}
        />
        Recurring
      </label>
      {isRecurring && <RecurrencePicker setRecurrence={setRecurrence} />}
      <button type="submit">Add</button>
    </form>
  );
};

export default TaskForm;

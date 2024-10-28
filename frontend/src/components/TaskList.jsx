import React, { useState } from 'react';
import { deleteTask, updateTask } from '../api';

const TaskList = ({ tasks, updateTasks }) => {
  const [editingTaskId, setEditingTaskId] = useState(null);
  const [editTitle, setEditTitle] = useState('');

  const handleDelete = async (id) => {
    await deleteTask(id);
    updateTasks(tasks.filter(task => task._id !== id));
  };

  const handleEdit = (task) => {
    setEditingTaskId(task._id);
    setEditTitle(task.title);
  };

  const saveEdit = async (id) => {
    const updatedTask = await updateTask(id, { title: editTitle });
    updateTasks(tasks.map(task => (task._id === id ? updatedTask : task)));
    setEditingTaskId(null);
  };

  return (
    <ul className="task-list">
      {tasks.map(task => (
        <li key={task._id}>
          {editingTaskId === task._id ? (
            <>
              <input
                type="text"
                value={editTitle}
                onChange={(e) => setEditTitle(e.target.value)}
              />
              <button onClick={() => saveEdit(task._id)}>Save</button>
            </>
          ) : (
            <>
              <span>{task.title}</span>
              <button onClick={() => handleEdit(task)}>Edit</button>
              <button onClick={() => handleDelete(task._id)}>Delete</button>
            </>
          )}
        </li>
      ))}
    </ul>
  );
};

export default TaskList;

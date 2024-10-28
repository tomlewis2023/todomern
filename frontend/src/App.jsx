import React, { useState, useEffect } from "react";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import { getTasks } from "./api";

const App = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchTasks = async () => {
      const data = await getTasks();
      setTasks(data);
    };
    fetchTasks();
  }, []);

  const addTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  const updateTaskList = (updatedTasks) => {
    setTasks(updatedTasks);
  };

  return (
    <div className="app-container">
      <h1>Advanced Todo App</h1>
      <TaskForm onAddTask={addTask} />
      <TaskList tasks={tasks} updateTasks={updateTaskList} />
    </div>
  );
};

export default App;

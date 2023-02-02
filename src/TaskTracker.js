import './components/tasktracker.css'

import { useState, useEffect } from "react";

import {  Routes, Route } from "react-router-dom";
import React from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
import Footer from "./components/Footer";
import About from "./components/About";

function TaskTracker() {
  const [showAddTask, setShowAddTask] = useState(false);
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const getTasks = async () => {
      const taskFromServer = await fetchTasks();
      setTasks(taskFromServer);
     
    };
    getTasks();
  }, []);

  // fetch data from json server
  const fetchTasks = async () => {
    const res = await fetch("https://63ad96993e465169165e7345.mockapi.io/tasks");
    const data = await res.json();

    return data;
  };

  // fetch task from json server
  //  const fetchTask = async (id) => {
  //   const res = await fetch(`http://localhost:5000/tasks/${id}`);
  //   const data = await res.json();
  //   return data;
  // };


  // `http://localhost:5000/tasks`
  // Add Task
  const addTask = async (task) => {
    const res = await fetch(`https://63ad96993e465169165e7345.mockapi.io/tasks`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(task),
    });
    const data = await res.json();

    setTasks([...tasks, data]);

    // const id=Math.floor(Math.random() * 100000) + 1;
    //   const newTask = {id, ...task};
    //   setTasks([...tasks, newTask])
  };

  // Delete tasks
  const deleteTask = async (id) => {
    await fetch(`https://63ad96993e465169165e7345.mockapi.io/tasks/${id}`, {
      method: "DELETE",
    });
    setTasks(tasks.filter((task) => task.id !== id));
  };

  // toggle reminder
  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
  };

  return (
      <div className="container">
        
        {/* <Movies /> */}
        {/* <CodeCamp /> */}
        <Header
          onAdd={() => setShowAddTask(!showAddTask)}
          showAdd={showAddTask}
        />
         {showAddTask && <AddTask onAdd={addTask} />}
              {tasks.length > 0 ? (
                <Tasks
                  tasks={tasks}
                  onToggle={toggleReminder}
                  onDelete={deleteTask}
                />
              ) : (
                <h2> None</h2>
              )}
        <Routes>
        <Route
          path="/task"
          exact
          render={(props) => (
            <>
              {showAddTask && <AddTask onAdd={addTask} />}
              {tasks.length > 0 ? (
                <Tasks
                  tasks={tasks}
                  onToggle={toggleReminder}
                  onDelete={deleteTask}
                />
              ) : (
                <h1>None</h1>
              )}
            </>
          )}
        />
        <Route path="/task/about" element={<About />} />
        </Routes>
        <Footer />
       
      </div>
  );
}

export default TaskTracker;

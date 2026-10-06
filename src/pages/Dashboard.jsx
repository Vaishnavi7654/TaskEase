import { useState, useEffect } from "react";
import Welcome from "../components/Welcome";

function Dashboard() {
  const [tasks, setTasks] = useState(() => {
    return JSON.parse(localStorage.getItem("tasks")) || [];
  });

  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];

    // Use the Express API when there are no local tasks
    if (savedTasks.length === 0) {
      fetch("http://localhost:5000/api/tasks")
        .then((response) => response.json())
        .then((data) => {
          setTasks(data);
        })
        .catch((error) => {
          console.log("API connection error:", error);
        });
    }
  }, []);

  const completedTasks = tasks.filter((task) => task.completed).length;
  const pendingTasks = tasks.length - completedTasks;

  return (
    <div className="dashboard">
      <h1>Welcome to TaskEase </h1>

      <p>Manage your tasks easily and stay organized.</p>

      <Welcome name="Student" />

      <div className="stats">
        <div className="stat-card">
          <h2>{tasks.length}</h2>
          <p>Total Tasks</p>
        </div>

        <div className="stat-card">
          <h2>{pendingTasks}</h2>
          <p>Pending</p>
        </div>

        <div className="stat-card">
          <h2>{completedTasks}</h2>
          <p>Completed</p>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
import { useState, useEffect } from "react";
import TaskCard from "../components/TaskCard";

function Tasks() {
  const [tasks, setTasks] = useState(() => {
    return JSON.parse(localStorage.getItem("tasks")) || [];
  });

  const [filter, setFilter] = useState("All");

  // useEffect demonstrates a side effect
  useEffect(() => {
    document.title = "TaskEase - My Tasks";
  }, []);

  const deleteTask = (id) => {
    const updatedTasks = tasks.filter((task) => task.id !== id);

    setTasks(updatedTasks);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
  };

  const completeTask = (id) => {
    const updatedTasks = tasks.map((task) =>
      task.id === id
        ? { ...task, completed: !task.completed }
        : task
    );

    setTasks(updatedTasks);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
  };

  const filteredTasks = tasks.filter((task) => {
    if (filter === "Pending") {
      return !task.completed;
    }

    if (filter === "Completed") {
      return task.completed;
    }

    return true;
  });

  return (
    <div className="tasks-page">
      <h1>My Tasks 📋</h1>

      <div className="filters">
        <button onClick={() => setFilter("All")}>
          All
        </button>

        <button onClick={() => setFilter("Pending")}>
          Pending
        </button>

        <button onClick={() => setFilter("Completed")}>
          Completed
        </button>
      </div>

      {filteredTasks.length === 0 ? (
        <p className="empty">No tasks found.</p>
      ) : (
        filteredTasks.map((task) => (
          <TaskCard
            key={task.id}
            task={task}
            onDelete={deleteTask}
            onComplete={completeTask}
          />
        ))
      )}
    </div>
  );
}

export default Tasks;
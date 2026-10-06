import { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddTask() {
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("Medium");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title.trim()) {
      alert("Please enter a task title");
      return;
    }

    const existingTasks =
      JSON.parse(localStorage.getItem("tasks")) || [];

    const newTask = {
      id: Date.now(),
      title,
      description,
      priority,
      completed: false,
    };

    const updatedTasks = [...existingTasks, newTask];

    localStorage.setItem("tasks", JSON.stringify(updatedTasks));

    alert("Task added successfully! ");

    navigate("/tasks");
  };

  return (
    <div className="add-task">
      <h1>Add New Task </h1>

      <form onSubmit={handleSubmit}>
        <label>Task Title</label>

        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter task title"
        />

        <label>Description</label>

        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Enter task description"
        />

        <label>Priority</label>

        <select
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
        >
          <option>Low</option>
          <option>Medium</option>
          <option>High</option>
        </select>

        <button type="submit">Add Task</button>
      </form>
    </div>
  );
}

export default AddTask;
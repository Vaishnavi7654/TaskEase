import express from "express";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());

let tasks = [
  {
    id: 1,
    title: "Example Task",
    description: "This is an example task",
    priority: "Medium",
    completed: false,
  },
];

app.get("/api/tasks", (req, res) => {
  res.json(tasks);
});

app.post("/api/tasks", (req, res) => {
  const newTask = {
    id: Date.now(),
    title: req.body.title,
    description: req.body.description,
    priority: req.body.priority,
    completed: false,
  };

  tasks.push(newTask);

  res.status(201).json(newTask);
});

app.delete("/api/tasks/:id", (req, res) => {
  const id = Number(req.params.id);

  tasks = tasks.filter((task) => task.id !== id);

  res.json({ message: "Task deleted successfully" });
});

app.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});
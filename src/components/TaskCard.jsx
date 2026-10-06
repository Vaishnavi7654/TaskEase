function TaskCard({ task, onDelete, onComplete }) {
  return (
    <div className={`task-card ${task.completed ? "completed" : ""}`}>
      <div>
        <h3>{task.title}</h3>
        <p>{task.description}</p>

        <span className={`priority ${task.priority.toLowerCase()}`}>
          {task.priority}
        </span>
      </div>

      <div className="task-buttons">
        <button onClick={() => onComplete(task.id)}>
          {task.completed ? "Undo" : "Complete"}
        </button>

        <button onClick={() => onDelete(task.id)}>
          Delete
        </button>
      </div>
    </div>
  );
}

export default TaskCard;

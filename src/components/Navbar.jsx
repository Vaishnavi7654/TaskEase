import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <h2>TaskEase</h2>

      <div className="nav-links">
        <Link to="/">Dashboard</Link>
        <Link to="/tasks">Tasks</Link>
        <Link to="/add-task">Add Task</Link>
      </div>
    </nav>
  );
}

export default Navbar;
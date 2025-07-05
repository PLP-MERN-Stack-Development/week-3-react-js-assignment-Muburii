import { Link } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

export default function Navbar() {
  const { toggleTheme } = useContext(ThemeContext);

  return (
    <nav className="bg-gray-100 dark:bg-gray-900 p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold dark:text-white">ReactApp</h1>
      <div className="space-x-4">
        <Link to="/" className="hover:underline dark:text-white">Home</Link>
        <Link to="/tasks" className="hover:underline dark:text-white">Tasks</Link>
        <Link to="/api" className="hover:underline dark:text-white">API</Link>
        <button onClick={toggleTheme} className="ml-4 bg-gray-300 px-2 py-1 rounded">Toggle</button>
      </div>
    </nav>
  );
}
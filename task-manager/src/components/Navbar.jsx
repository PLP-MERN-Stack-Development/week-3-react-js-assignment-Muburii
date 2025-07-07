import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";

function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="backdrop-blur bg-white/90 dark:bg-gray-900/90 sticky top-0 z-50 px-4 sm:px-10 py-4 flex justify-between items-center shadow-2xl border-b border-gray-200 dark:border-gray-800">
      <div className="flex items-center gap-4 sm:gap-10">
        <span className="flex items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5.25V4.5A2.25 2.25 0 0 1 11.25 2.25h1.5A2.25 2.25 0 0 1 15 4.5v.75m-6 0A2.25 2.25 0 0 0 6.75 7.5v11.25A2.25 2.25 0 0 0 9 21h6a2.25 2.25 0 0 0 2.25-2.25V7.5A2.25 2.25 0 0 0 15 5.25m-6 0h6" />
          </svg>
          <span className="text-blue-700 dark:text-blue-400 text-2xl font-extrabold tracking-tight">TASK MANAGER</span>
        </span>
      </div>

      {/* Hamburger for mobile */}
      <button
        className="sm:hidden flex flex-col justify-center items-center w-10 h-10"
        onClick={() => setMenuOpen((open) => !open)}
        aria-label="Toggle menu"
      >
        <span className={`block h-1 w-6 bg-blue-600 dark:bg-blue-400 rounded transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`}></span>
        <span className={`block h-1 w-6 bg-blue-600 dark:bg-blue-400 rounded my-1 transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`}></span>
        <span className={`block h-1 w-6 bg-blue-600 dark:bg-blue-400 rounded transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}></span>
      </button>

      {/* Navigation Links */}
      <div className={`flex-col sm:flex-row sm:flex gap-8 items-center absolute sm:static top-16 left-0 w-full sm:w-auto bg-white/95 dark:bg-gray-900/95 sm:bg-transparent sm:dark:bg-transparent shadow-lg sm:shadow-none transition-all duration-300 z-40 ${menuOpen ? "flex" : "hidden sm:flex"}`}>
        {/* Home */}
        <NavLink
          to="/"
          className={({ isActive }) =>
            `font-semibold px-4 py-2 rounded-lg transition text-lg block sm:inline-block ${
              isActive
                ? "bg-blue-600 text-white dark:bg-blue-400 dark:text-gray-900 shadow"
                : "text-gray-700 dark:text-gray-200 hover:bg-blue-100 dark:hover:bg-gray-800"
            }`
          }
          onClick={() => setMenuOpen(false)}
        >
          Home
        </NavLink>

        {/* About */}
        <NavLink
          to="/about"
          className={({ isActive }) =>
            `font-semibold px-4 py-2 rounded-lg transition text-lg block sm:inline-block ${
              isActive
                ? "bg-blue-600 text-white dark:bg-blue-400 dark:text-gray-900 shadow"
                : "text-gray-700 dark:text-gray-200 hover:bg-blue-100 dark:hover:bg-gray-800"
            }`
          }
          onClick={() => setMenuOpen(false)}
        >
          About
        </NavLink>

        {/* API */}
        <NavLink
          to="/api"
          className={({ isActive }) =>
            `font-semibold px-4 py-2 rounded-lg transition text-lg block sm:inline-block ${
              isActive
                ? "bg-blue-600 text-white dark:bg-blue-400 dark:text-gray-900 shadow"
                : "text-gray-700 dark:text-gray-200 hover:bg-blue-100 dark:hover:bg-gray-800"
            }`
          }
          onClick={() => setMenuOpen(false)}
        >
          API
        </NavLink>

        {/* Tasks */}
        <NavLink
          to="/tasks"
          className={({ isActive }) =>
            `font-semibold px-4 py-2 rounded-lg transition text-lg block sm:inline-block ${
              isActive
                ? "bg-blue-600 text-white dark:bg-blue-400 dark:text-gray-900 shadow"
                : "text-gray-700 dark:text-gray-200 hover:bg-blue-100 dark:hover:bg-gray-800"
            }`
          }
          onClick={() => setMenuOpen(false)}
        >
          Tasks
        </NavLink>

        {/* Theme Toggle */}
        <button
          className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white px-5 py-2 rounded-lg shadow hover:bg-gray-300 dark:hover:bg-gray-600 transition font-semibold text-lg mt-2 sm:mt-0"
          onClick={toggleTheme}
        >
          {theme === "light" ? "🌙 Dark" : "☀️ Light"}
        </button>
      </div>
    </nav>
  );
}

export default Navbar;

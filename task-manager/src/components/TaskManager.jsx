import React, { useState } from 'react';
import Button from './Button';
import Card from './Card';
import useLocalStorage from '../hooks/useLocalStorage';

function TaskManager() {
  const [tasks, setTasks] = useLocalStorage('tasks', []);
  const [newTaskText, setNewTaskText] = useState('');
  const [filter, setFilter] = useState('all');

  // Filter tasks based on selected filter
  const filteredTasks = tasks.filter((task) => {
    if (filter === 'active') return !task.completed;
    if (filter === 'completed') return task.completed;
    return true; // 'all' filter
  });

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (newTaskText.trim()) {
      setTasks([
        ...tasks,
        {
          id: Date.now(),
          text: newTaskText,
          completed: false,
          createdAt: new Date().toISOString(),
        },
      ]);
      setNewTaskText('');
    }
  };

  // Toggle task completion status
  const toggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  // Delete a task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <Card title="Task Manager">
      <div className="flex gap-2 mb-4">
        <input
          className="border border-gray-300 dark:border-gray-700 rounded-lg px-3 py-2 flex-grow focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
          value={newTaskText}
          onChange={(e) => setNewTaskText(e.target.value)}
          placeholder="Add a new task"
          onKeyDown={(e) => e.key === 'Enter' && handleSubmit(e)}
        />
        <Button onClick={handleSubmit}>Add</Button>
      </div>
      <div className="flex gap-2 mb-4">
        <Button
          variant={filter === 'all' ? 'primary' : 'secondary'}
          onClick={() => setFilter('all')}
        >
          All
        </Button>
        <Button
          variant={filter === 'active' ? 'primary' : 'secondary'}
          onClick={() => setFilter('active')}
        >
          Active
        </Button>
        <Button
          variant={filter === 'completed' ? 'primary' : 'secondary'}
          onClick={() => setFilter('completed')}
        >
          Completed
        </Button>
      </div>
      <ul className="space-y-2">
        {filteredTasks.length === 0 && (
          <li className="text-gray-400 text-center">No tasks</li>
        )}
        {filteredTasks.map((task) => (
          <li
            key={task.id}
            className="flex items-center justify-between bg-gray-50 dark:bg-gray-800 rounded-lg px-4 py-2 shadow-sm transition group hover:scale-[1.02]"
          >
            <span
              className={`flex-1 cursor-pointer select-none transition-colors duration-200 ${
                task.completed
                  ? 'line-through text-gray-400'
                  : 'text-gray-800 dark:text-white'
              }`}
              onClick={() => toggleTask(task.id)}
            >
              {task.text}
            </span>
            <Button variant="danger" onClick={() => deleteTask(task.id)}>
              Delete
            </Button>
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default TaskManager;
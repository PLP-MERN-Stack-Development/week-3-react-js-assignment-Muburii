// src/pages/Tasks.jsx
import { useState } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";
import Button from "../components/Button";
import Card from "../components/Card";

export default function Tasks() {
  const [tasks, setTasks] = useLocalStorage("tasks", []);
  const [newTask, setNewTask] = useState("");
  const [filter, setFilter] = useState("All");

  const filteredTasks = tasks.filter(task =>
    filter === "All"
      ? true
      : filter === "Active"
      ? !task.done
      : task.done
  );

  const addTask = () => {
    if (!newTask.trim()) return;
    setTasks([...tasks, { text: newTask, done: false }]);
    setNewTask("");
  };

  const toggleTask = index => {
    const updated = [...tasks];
    updated[index].done = !updated[index].done;
    setTasks(updated);
  };

  const deleteTask = index => {
    const updated = tasks.filter((_, i) => i !== index);
    setTasks(updated);
  };

  return (
    <div className="max-w-xl mx-auto space-y-4">
      <h2 className="text-2xl font-bold">Task Manager</h2>
      <div className="flex gap-2">
        <input
          className="border p-2 flex-grow"
          placeholder="New Task..."
          value={newTask}
          onChange={e => setNewTask(e.target.value)}
        />
        <Button onClick={addTask}>Add</Button>
      </div>

      <div className="flex gap-2">
        {["All", "Active", "Completed"].map(f => (
          <Button key={f} variant={filter === f ? "primary" : "secondary"} onClick={() => setFilter(f)}>
            {f}
          </Button>
        ))}
      </div>

      {filteredTasks.map((task, idx) => (
        <Card key={idx}>
          <div className="flex justify-between">
            <span className={task.done ? "line-through" : ""}>{task.text}</span>
            <div className="space-x-2">
              <Button variant="secondary" onClick={() => toggleTask(idx)}>
                {task.done ? "Undo" : "Done"}
              </Button>
              <Button variant="danger" onClick={() => deleteTask(idx)}>Delete</Button>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
}
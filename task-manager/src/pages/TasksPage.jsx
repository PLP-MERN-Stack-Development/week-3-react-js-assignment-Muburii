import { useState } from "react";
import useLocalStorage from "/src/hooks/useLocalStorage";
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
    <Card title="📝 Task Manager">
      <div className="space-y-6">
        {/* Input for new task */}
        <div className="flex flex-col sm:flex-row gap-2">
          <input
            className="border p-2 rounded flex-grow"
            placeholder="New Task..."
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
          />
          <Button onClick={addTask}>Add</Button>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap gap-2">
          {["All", "Active", "Completed"].map((f) => (
            <Button
              key={f}
              variant={filter === f ? "primary" : "secondary"}
              onClick={() => setFilter(f)}
            >
              {f}
            </Button>
          ))}
        </div>

        {/* Task List */}
        <div className="space-y-4">
          {filteredTasks.map((task, idx) => (
            <Card key={idx}>
              <div className="flex items-center justify-between gap-12 sm:gap-20">
                {/* Task Text */}
                <span className={`text-lg ${task.done ? "line-through text-gray-500" : ""}`}>
                  {task.text}
                </span>

                {/* Toggle + Delete */}
                <div className="flex items-center gap-6">
                  {/* Toggle Switch */}
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={task.done}
                      onChange={() => toggleTask(idx)}
                      className="sr-only peer"
                    />
                    <div className="w-11 h-6 bg-gray-300 rounded-full peer peer-checked:bg-blue-600 transition-all"></div>
                    <div className="absolute left-0.5 top-0.5 w-5 h-5 bg-white rounded-full transition-all duration-300 peer-checked:translate-x-full"></div>
                  </label>

                  {/* Delete Button */}
                  <Button variant="danger" onClick={() => deleteTask(idx)}>
                    Delete
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </Card>
  );
}

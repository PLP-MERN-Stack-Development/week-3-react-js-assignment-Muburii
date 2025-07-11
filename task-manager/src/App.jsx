import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Tasks from "./pages/TasksPage";
import ApiPage from "./pages/ApiPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="tasks" element={<Tasks />} />
        <Route path="api" element={<ApiPage />} />
      </Route>
    </Routes>
  );
}

export default App;

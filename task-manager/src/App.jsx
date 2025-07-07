import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Tasks from "./pages/TasksPage";
import ApiPage from "./pages/ApiPage";
import AboutPage from "./pages/AboutPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="tasks" element={<Tasks />} />
        <Route path="api" element={<ApiPage />} />
      </Route>
    </Routes>
  );
}

export default App;

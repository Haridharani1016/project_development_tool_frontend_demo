import AppLayout from "./components/AppLayout";
import { Routes, Route } from "react-router-dom";
import Tasks from "./components/Tasks";
import TasksPage from "./components/TasksPage";
import ProjectsPage from './components/ProjectsPage';
import { Toaster } from "react-hot-toast";
function App() {
  console.log('render app..')
  return (
    <AppLayout>
      <Toaster
        position="top-right"
        gutter={8}
      />
      <Routes>
        <Route path="/" element={<Tasks />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/" element={
          <div className="flex flex-col items-center w-full pt-10">
            <img src="./image/welcome.svg" className="w-5/12" alt="" />
            <h1 className="text-lg text-gray-600">Select or create new project</h1>
          </div>
        } />
        <Route path="/taskpage" element={<TasksPage />} />
      </Routes>
    </AppLayout>
  );
}

export default App;

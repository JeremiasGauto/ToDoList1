import "./index.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import { useState } from "react";
import TaskItem from "./components/TaskItem";

function App() {
  const [tasks, setTasks] = useState([]);

  return (
    <>
      <div className=" bg-slate-500/20 h-screen ">
        <TaskForm tasks={tasks} setTasks={setTasks} />
        <TaskList tasks={tasks} />

        <div></div>
      </div>

      <ToastContainer />
    </>
  );
}

export default App;

import "./index.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import { useState } from "react";
import TaskItem from "./components/TaskItem";

function App() {
  const [tasks, setTasks] = useState([]);
  const [tarea, setTarea] = useState({});

  return (
    <>
      <div className=" bg-slate-500/20 h-screen ">
        <TaskForm tasks={tasks} setTasks={setTasks} tarea={tarea} />
        <TaskList tasks={tasks} setTasks={setTasks} setTarea={setTarea} />

        <div></div>
      </div>

      <ToastContainer />
    </>
  );
}

export default App;

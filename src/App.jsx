import "./index.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import { useState } from "react";
import TaskItem from "./components/TaskItem";

function App() {
  const [tasks, taskList] = useState(["alberto", "martin"]);

  return (
    <>
      <div className=" bg-slate-500/20 h-screen ">
        <TaskForm />
        <TaskList />
        {tasks.map((t) => {
          return <TaskItem key={[t]} tarea={t} />
        })}
      </div>

      <ToastContainer />
    </>
  );
}

export default App;

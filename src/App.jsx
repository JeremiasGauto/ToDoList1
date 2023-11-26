import "./index.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import { useEffect, useState } from "react";
import Header from "./components/Header";
import { MagicMotion } from "react-magic-motion";

function App() {
  const [tasks, setTasks] = useState([]);
  const [tarea, setTarea] = useState({});

    useEffect(() => {
      const obtenerLS = () => {
        const tareasLS = JSON.parse(localStorage.getItem("tasks")) ?? [];
        setTasks(tareasLS);
      };
      obtenerLS();
    }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  return (
    <>
      <div className=" bg-gradient-to-r from-indigo-900 via-purple-500 to-pink-500 h-screen flex justify-center flex-col font-sans">
        <Header />
        <div className="flex justify-center">
          <TaskForm
            tasks={tasks}
            setTasks={setTasks}
            tarea={tarea}
            setTarea={setTarea}
          />
        </div>

        <div className=" bg-gradient-to-r from-indigo-900 via-purple-500 to-pink-500 flex flex-col">
          <div className="flex justify-center">
            <TaskList
              tasks={tasks}
              setTasks={setTasks}
              setTarea={setTarea}
              tarea={tarea}
            />
          </div>
        </div>
      </div>

      <ToastContainer />
    </>
  );
}

export default App;

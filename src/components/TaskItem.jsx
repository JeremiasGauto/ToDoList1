import React, { useState } from "react";
import { toast } from "react-toastify";

function TaskItem({ task, tasks, setTasks, setTarea }) {
  const [done, setDone] = useState(false);

  const handleDelete = () => {
    const tareasFiltradas = tasks.filter((tarea) => {
      if (tarea.id !== task.id) {
        // filtra las tareas que tienen id diferente del seleccionado y lo devuelve. luego se setea con setTasks==> tareas en app component
        return tarea;
      }
    });
    setTasks(tareasFiltradas);
    toast.error('tarea eliminada')
  };

  const handleEdit = () => {
    setTarea(task);
    
  };


  const handleDone = () => {
    setDone(true);
  } 

  const bgDone = "flex justify-between  bg-green-800 rounded-lg  m-2 line-through"
    
  
  const comun = "flex justify-between  bg-slate-400 rounded-lg  m-2";

  return (
    <div className={done ? bgDone : comun}>
      <div>
        <h1 className=" m-2">{task.name}</h1>
      </div>

      <div>
        <button>
          <span
            className="material-symbols-outlined bg-green-600 text-fuchsia-50 m-2 rounded-md p-2"
            onClick={handleDone}
          >
            done
          </span>
        </button>

        <button>
          <span
            className="material-symbols-outlined bg-indigo-700 text-fuchsia-50 m-2 rounded-sm p-2"
            onClick={handleEdit}
          >
            edit_note
          </span>
        </button>

        <button>
          <span
            className="material-symbols-outlined  bg-red-700 text-fuchsia-50 m-2 rounded-md p-2"
            onClick={handleDelete}
          >
            delete
          </span>
        </button>
      </div>
    </div>
  );
}

export default TaskItem;

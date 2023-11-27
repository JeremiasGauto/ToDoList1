import React, { useState } from "react";
import { toast } from "react-toastify";
import { MagicMotion } from "react-magic-motion";

function TaskItem({ task, tasks, setTasks, setTarea, setCompletado }) {

  const handleDelete = () => {
    const tareasFiltradas = tasks.filter((tarea) => {
      if (tarea.id !== task.id) {
        // filtra las tareas que tienen id diferente del seleccionado y lo devuelve. luego se setea con setTasks==> tareas en app component
        return tarea;
      }
    });
    setTasks(tareasFiltradas);
    toast.error("tarea eliminada");
  };

  const handleEdit = () => {
    setTarea(task);
  };

   const handleDone = () => {
     // Actualiza el objeto task con completado: true
     const tareaActualizada = { ...task, completado: true };
     // Actualizar el estado con la 'task' modificada
     setTasks((tareasAnteriores) => {
       return tareasAnteriores.map((t) =>
         t.id === task.id ? tareaActualizada : t
       );
     });
     // Establecer el estado 'completado' como true
     setCompletado(true);
   };

  
  const comun = "flex justify-between  bg-slate-200 rounded-lg font-bold text-gray-700 m-2 backdrop-blur-sm bg-white/50 w-full";
  

  const bgDone =
    "flex justify-between  bg-green-800 rounded-lg  m-2 line-through font-bold text-gray-400 backdrop-blur-sm bg-green/90 w-full ease-in duration-200";
  

  

  return (
    <MagicMotion>
      <div className={task.completado ? bgDone : comun}>
        <p className=" m-4 h-full w-44 border-e-2">{task.name}</p>

        <p className=" text-xs text-blue-900  mt-6">
          <span className="font-bold text-gray-700 mr-1 "> Fecha: </span>
          {task.fecha}
        </p>

        <div>
          <button>
            <span
              className="material-symbols-outlined bg-green-600 hover:bg-green-900 text-fuchsia-50 m-4 rounded-md p-2"
              onClick={handleDone}
            >
              done
            </span>
          </button>

          <button>
            <span
              className="material-symbols-outlined bg-indigo-700 hover:bg-indigo-900 text-fuchsia-50 m-2 rounded-sm p-2"
              onClick={handleEdit}
            >
              edit_note
            </span>
          </button>

          <button>
            <span
              className="material-symbols-outlined  bg-red-700 hover:bg-red-900 text-fuchsia-50 m-2 rounded-md p-2"
              onClick={handleDelete}
            >
              delete
            </span>
          </button>
        </div>
      </div>
    </MagicMotion>
  );
}

export default TaskItem;

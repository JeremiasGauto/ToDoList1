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

  
  const comun =
    " grid grid-cols-3  gap-x-2 bg-slate-200 rounded-lg font-bold text-gray-800 m-2 backdrop-blur-sm bg-white/50 w-80% break-all text-xs md:text-xl  overflow-hidden px-4";
  

  const bgDone =
    " grid grid-cols-3  bg-green-900 rounded-lg  m-2 line-through font-bold text-gray-900 backdrop-blur-xl opacity-80 w-80%  text-xs ease-in duration-200 overflow-hidden px-4 md:text-xl";
  

  

  return (
    <MagicMotion>
      <div className={task.completado ? bgDone : comun}>
        <p className="grid justify-items-start items-center break-all  overflow-hidden w-80% p-1 ">
          {task.name}
        </p>
        <p className=" text-blue-900 grid justify-items-center items-center break-all overflow-hidden w-80% ">
          <span className="font-bold text-blue-900 text-xs w-80%">
            {" "}
            Fecha:{" "}
          </span>
          {task.fecha}
        </p>

        <div className="flex justify-end  w-80% ">
          <button>
            <span
              className="material-symbols-outlined bg-green-600 hover:bg-green-900 text-fuchsia-50 m-2 rounded-md p-2 w-80% text-xs md:text-xl"
              onClick={handleDone}
            >
              done
            </span>
          </button>

          <button>
            <span
              className="material-symbols-outlined bg-indigo-700 hover:bg-indigo-900 text-fuchsia-50 m-2 rounded-sm p-2 w-80% text-xs md:text-xl"
              onClick={handleEdit}
            >
              edit_note
            </span>
          </button>

          <button>
            <span
              className="material-symbols-outlined  bg-red-700 hover:bg-red-900 text-fuchsia-50 m-2 rounded-md p-2 w-80% text-xs md:text-xl"
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

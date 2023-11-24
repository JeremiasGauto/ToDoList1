import React from "react";

function TaskItem({ tarea, task, tasks, setTasks }) {

  const handleDelete = () => {    
    const tareasFiltradas = tasks.filter((tarea) => {
      if (tarea.id !== task.id) {// filtra las tareas que tienen id diferente del seleccionado y lo devuelve. luego se setea con setTasks==> tareas en app component
        return tarea;
      }
    });
    setTasks(tareasFiltradas);
  };
  
  const handleEdit = () => {
    
  }



  return (
    <div className="flex justify-between bg-slate-400 rounded-lg lg:w-64 m-2">
      <div>
        <h1 className="">{task.name}</h1>
      </div>

      <div>
        <span className="material-symbols-outlined bg-indigo-700 text-fuchsia-50 mx-2 ">
          edit_note
        </span>

        <span
          className="material-symbols-outlined  bg-red-700 text-fuchsia-50 mx-2"
          onClick={handleDelete}
        >
          delete
        </span>
      </div>
    </div>
  );
}

export default TaskItem;

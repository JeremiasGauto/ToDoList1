import React from "react";

function TaskItem({ task, tasks, setTasks, setTarea }) {

  const handleDelete = () => {
    const tareasFiltradas = tasks.filter((tarea) => {
      if (tarea.id !== task.id) {
        // filtra las tareas que tienen id diferente del seleccionado y lo devuelve. luego se setea con setTasks==> tareas en app component
        return tarea;
      }
    });
    setTasks(tareasFiltradas);
  };

  const handleEdit = () => {
    setTarea(task);
    
  };

  return (
    <div className="flex justify-between bg-slate-400 rounded-lg lg:w-64 m-2">
      <div>
        <h1 className=" m-2">{task.name}</h1>
      </div>

      <div>
        <button>
          <span
            className="material-symbols-outlined bg-indigo-700 text-fuchsia-50 m-2 rounded-sm"
            onClick={handleEdit}
          >
            
            edit_note
          </span>
        </button>

        <button>
          <span
            className="material-symbols-outlined  bg-red-700 text-fuchsia-50 m-2 rounded-sm"
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

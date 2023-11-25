import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";

function TaskForm({ tasks, setTasks, tarea, setTarea }) {
  const [name, setName] = useState("");

  useEffect(() => {
    if (Object.keys(tarea).length > 0) {
      setName(tarea.name);
    }
  }, [tarea]);

  const clear = () => {
    setName("");
    setTarea({});
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if ([name].includes("")) {
      toast.error("Por favor ingresa una tarea");
      return;
    }

    const randomId = (Math.random() + Date.now()).toString(36);

    const nuevaTarea = {
      name,
    };

    if (tarea.id) {
      nuevaTarea.id = name.id;
      const tareasActualizadas = tasks.map((tareaState) =>
        tareaState.id === tarea.id ? nuevaTarea : tareaState
      );

      setTasks(tareasActualizadas);
    } else {
      nuevaTarea.id = randomId;
      setTasks([...tasks, nuevaTarea]);
    }
    clear();
  };

  return (
    <div className="">
      <form
        action=""
        onSubmit={handleSubmit}
        className="flex justify-between items-center bg-blue-600 rounded-lg lg:w-64 m-2"
      >
        <input
          className="m-2 w-full rounded-sm"
          type="text"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <div>
          <button>
            <span className=" text-slate-50 font-bold m-3">
              {tarea.id ? "Editar" : "Agregar"}
            </span>
            <span className="material-symbols-outlined bg-slate-300 rounded-lg m-2">
              add
            </span>
          </button>
        </div>
      </form>
    </div>
  );
}

export default TaskForm;

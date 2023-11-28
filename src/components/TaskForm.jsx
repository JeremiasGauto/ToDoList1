import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

function TaskForm({ tasks, setTasks, tarea, setTarea }) {
  const [name, setName] = useState("");
  const [completado, setCompletado] = useState(false);
  const [fecha, setFecha] = useState(Date.now);

  useEffect(() => {
    if (Object.keys(tarea).length > 0) {
      setName(tarea.name);
    }
  }, [tarea]);

  const randomId = (Math.random() + Date.now()).toString(36);

  const handleSubmit = (e) => {
    e.preventDefault();

    if ([name].includes("")) {
      toast.error("Por favor ingresa una tarea");
      return;
    }

    const formatearFecha = (fecha) => {
      const fechaNueva = new Date(fecha);
      const opciones = {
        year: "2-digit",
        month: "numeric",
        day: "2-digit",
      };
      return fechaNueva.toLocaleDateString("en-GB", opciones);
    };

    const nuevaTarea = {
      name,
      completado,
      fecha: formatearFecha(fecha),
    };

    if (tarea.id) {
      //editando registro
      nuevaTarea.id = tarea.id;
      const tareasActualizadas = tasks.map((tareaState) =>
        tareaState.id === tarea.id ? nuevaTarea : tareaState
      );

      setTasks(tareasActualizadas);
      setTarea({});
      toast.info("Tarea actualizada");
    } else {
      //nuevo registro
      nuevaTarea.id = randomId;
      setTasks([...tasks, nuevaTarea]);

      toast.success("Tarea añadida");
    }
    setName("");
    setTarea({});
    setCompletado(false);
  };

  return (
    <div className="">
      <form
        action=""
        onSubmit={handleSubmit}
        className="flex justify-between items-center bg-blue-600 rounded-lg lg:w-92 m-2"
      >
        <input
          className="m-2 w-full h-full rounded-sm"
          type="text"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <div>
          <button className=" text-slate-50 font-bold bg-blue-900 hover:bg-blue-950 rounded-lg m-2 p-3">
            <FontAwesomeIcon icon={faPlus} />
            {tarea.id ? "Editar" : "agregar"}
          </button>
        </div>
      </form>
    </div>
  );
}

export default TaskForm;

import React, { useState, useEffect } from "react";

function TaskForm({ tasks, setTasks, tarea }) {
  const [name, setName] = useState("");

  useEffect(() => {
    console.log(tarea);
  }, [tarea]);

  const clear = () => {
    setName("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const randomId = (Math.random() + Date.now()).toString(36);

    const nuevaTarea = {
      name,
      id: randomId,
    };

    setTasks([...tasks, nuevaTarea]);
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
          className="m-2 w-full"
          type="text"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <div>
          <button>
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

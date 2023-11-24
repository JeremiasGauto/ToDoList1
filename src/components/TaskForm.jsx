import React, { useState } from "react";

function TaskForm({ tasks, setTasks }) {
  const [name, setName] = useState("");

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
    <div>
      <form action="" onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <input type="submit" />
      </form>
    </div>
  );
}

export default TaskForm;

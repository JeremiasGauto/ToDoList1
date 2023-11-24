import React, { useState } from "react";

function TaskForm({ tasks, setTasks }) {
  const [name, setName] = useState("");

  const clear = () => {
    setName("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const nuevaTarea = {
      name,
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

import React from "react";
import TaskItem from "./TaskItem";
import { MagicMotion } from "react-magic-motion";

function TaskList({ tasks, setTasks, setTarea, tarea }) {
  return (
    <div>
      {tasks.map((task) => {
        return (
          <TaskItem
            key={task.id}
            task={task}
            tasks={tasks}
            setTasks={setTasks}
            setTarea={setTarea}
            tarea={tarea}
          />
        );
      })}
    </div>
  );
}

export default TaskList;

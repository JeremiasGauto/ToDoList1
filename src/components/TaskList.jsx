import React from "react";
import TaskItem from "./TaskItem";

function TaskList({ tasks, setTasks, setTarea }) {
  return (
    <div>
      {tasks.map((task) => {
        return (
          <TaskItem
            task={task}
            key={task.id}
            tasks={tasks}
            setTasks={setTasks}
            setTarea={setTarea}
          />
        );
      })}
    </div>
  );
}

export default TaskList;

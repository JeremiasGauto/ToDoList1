import React from "react";
import TaskItem from "./TaskItem";

function TaskList({ tasks }) {
  return (
    <div>
      {tasks.map((task) => {
        return <TaskItem task={task} key={task.id} />;
      })}
    </div>
  );
}

export default TaskList;

import React from "react";
import TaskRow from "./TaskRow/TaskRow";

const Tasks = ({ tasks, refetch }) => {
  return (
    <div className="container mx-auto px-12">
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Title</th>
              <th>Description</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {tasks.map((task, index) => (
              <TaskRow
                refetch={refetch}
                key={task._id}
                index={index}
                task={task}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Tasks;

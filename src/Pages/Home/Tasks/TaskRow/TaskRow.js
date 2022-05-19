import React from "react";
import { toast } from "react-toastify";

const TaskRow = ({ task, index, refetch }) => {
  const { _id, title, description } = task;

  const handleDelete = (id) => {
    const url = `https://task-list-001.herokuapp.com/task/${id}`;
    fetch(url, {
      method: "DELETE",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount) {
          toast.success(`Task ${title} is deleted.`);
          refetch();
        }
      });
  };

  const handleComplete = (id) => {
    fetch(`https://task-list-001.herokuapp.com/task/complete/${id}`, {
      method: "PUT",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          refetch();
          toast.success(`Task: ${title} is complete.`);
        }
      });
  };

  return (
    <tr>
      <th>{index + 1}</th>
      <td>
        <span className={task?.status === "complete" ? "line-through" : ""}>
          {title}
        </span>
      </td>
      <td>
        <span className={task?.status === "complete" ? "line-through" : ""}>
          {description}
        </span>
      </td>
      <td>
        <div className="space-x-2">
          <button
            onClick={() => handleComplete(_id)}
            className="btn btn-sm btn-success"
          >
            Complete
          </button>
          <button
            onClick={() => handleDelete(_id)}
            className="btn btn-sm btn-error"
          >
            Delete
          </button>
        </div>
      </td>
    </tr>
  );
};

export default TaskRow;

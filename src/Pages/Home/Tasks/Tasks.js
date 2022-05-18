import React from "react";
import TaskRow from "./TaskRow/TaskRow";

const Tasks = () => {
  return (
    <div className="container mx-auto px-12">
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <TaskRow />
          </thead>
          <tbody>
            <tr>
              <th>1</th>
              <td>Cy Ganderton</td>
              <td>Quality Control Specialist</td>
              <td>
                <div className="space-x-2">
                  <button className="btn btn-sm btn-success">Success</button>
                  <button className="btn btn-sm btn-error">Error</button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Tasks;

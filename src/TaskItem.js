import React, { useState } from 'react';
import PropTypes from 'prop-types';

const TaskItem = ({ task, deleteTask }) => {
  const [checked, setChecked] = useState(task.checked);

  const handleCheckboxChange = () => {
    setChecked(!checked);
  };

  return (
    <li>
      <div className="taskItem">
        <input
          type="checkbox"
          checked={checked}
          onChange={handleCheckboxChange}
          name={task.name}
          id={task.id}
        />
        <label htmlFor={task.id}>
          {task.name}
        </label>
        <button type="button" className="btn btn-edit">
          Edit
        </button>
        <button
          type="button"
          className="btn btn-delete"
          onClick={() => deleteTask(task.id)}
        >
          Delete
        </button>
      </div>
    </li>
  );
};

TaskItem.propTypes = {
  deleteTask: PropTypes.func.isRequired,
  task: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default TaskItem;

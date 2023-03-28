import PropTypes from 'prop-types';
import TaskItem from './TaskItem';

const TaskList = ({ tasks, deleteTask }) => (

  <ul className="tasklist">
    {tasks.sort((a, b) => b.id - a.id).map((task) => (
      <TaskItem
        key={task.id}
        task={task}
        deleteTask={deleteTask}
      />
    ))}

  </ul>
);

TaskList.propTypes = {
  deleteTask: PropTypes.func.isRequired,
  tasks: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)).isRequired,
};

export default TaskList;

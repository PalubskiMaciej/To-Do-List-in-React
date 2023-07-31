import "./style.css";

const Tasks = ({ tasks }) => (
  <ul className="js-list list">
    {tasks.map((task) => (
      <li
        key={task.id}
        className={`list__element
            {hideDoneTasks && task.done ? " list__element--hidden" : ""}`}
      >
        <button className="js-done list__button">{task.done ? "✓" : ""}</button>
        <span className={`list__item${task.done ? " list__item--done" : ""}`}>
          {task.content}
        </span>
        <button className="js-remove list__button list__button--remove">
          🗑
        </button>
      </li>
    ))}
  </ul>
);

export default Tasks;

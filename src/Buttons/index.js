import "./style.css";

const Buttons = ({ tasks, hideDoneTasks }) => {
  if (tasks.lenght > 0) {
    return (
      <div className="buttons">
        <button className="buttons__button js-toggleHideDoneTasksButton">
          {hideDoneTasks ? "Pokaż" : "Ukryj"} ukończone
        </button>
        <button
          className="buttons__button"
          disabled={tasks.every(({ done }) => done)}
        >
          Ukończ wszystkie
        </button>
      </div>
    );
  }
};

export default Buttons;

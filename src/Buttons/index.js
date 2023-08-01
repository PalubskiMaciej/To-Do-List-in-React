import "./style.css";

const Buttons = ({ tasks, hideDone, setAllDone }) => {
  if (tasks.length > 0) {
    return (
      <div className="buttons">
        <button className="buttons__button">
          {hideDone ? "Pokaż" : "Ukryj"} ukończone
        </button>
        <button
          className="buttons__button"
          onClick={() => setAllDone()}
          disabled={tasks.every(({ done }) => done)}
        >
          Ukończ wszystkie
        </button>
      </div>
    );
  }
};

export default Buttons;

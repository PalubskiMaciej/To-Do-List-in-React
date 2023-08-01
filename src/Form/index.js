import { useState } from "react";
import "./style.css";

const Form = ({ addNewTask }) => {
  const [content, setContent] = useState("");
  const onInputChange = ({ target }) => setContent(target.value.trim());
  const onFormSubmit = (event) => {
    event.preventDefault();
    setContent("");
  };

  return (
    <form onSubmit={onFormSubmit} className="form">
      <input
        value={content}
        onChange={onInputChange}
        className="form__input"
        autoFocus
        placeholder="Co jest do zrobienia?"
      />
      <button className="form__button" onClick={() => addNewTask(content)}>
        Dodaj zadanie
      </button>
    </form>
  );
};

export default Form;

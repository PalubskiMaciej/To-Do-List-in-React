import { useState } from "react";
import "./style.css";

const Form = () => {
  const [content, setContent] = useState("");
  const onInputChange = ({ target }) => setContent(target.value.trim());
  const onFormSubmit = (event) => {
    event.preventDefault();
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
      <button className="form__button">Dodaj zadanie</button>
    </form>
  );
};

export default Form;

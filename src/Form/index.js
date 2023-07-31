import "./style.css";

const Form = () => (
  <form className="js-form form">
    <input
      className="js-newTask form__input"
      autoFocus
      placeholder="Co jest do zrobienia?"
    />
    <button className="js-button form__button">Dodaj zadanie</button>
  </form>
);

export default Form;

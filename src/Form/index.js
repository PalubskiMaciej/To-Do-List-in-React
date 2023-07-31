import "./style.css";

const Form = () => (
  <form class="js-form form">
    <input
      class="js-newTask form__input"
      autofocus
      placeholder="Co jest do zrobienia?"
    />
    <button class="js-button form__button">Dodaj zadanie</button>
  </form>
);

export default Form;

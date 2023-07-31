import "./App.css";
import Form from "./Form";

function App() {
  return (
    <div>
      <header>
        <h1 class="header">Lista zadań</h1>
      </header>

      <main>
        <section class="section">
          <h2 class="section__header">Dodaj nowe zadanie</h2>
        </section>
        <Form />
        <section class=" section">
          <div class="section__container">
            <h2 class="section__header section__header--left">Lista zadań</h2>
            <span class="js-buttons"></span>
          </div>
          <ul class="js-list list"></ul>
        </section>
      </main>
    </div>
  );
}

export default App;

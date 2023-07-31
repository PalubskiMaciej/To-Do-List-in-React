import "./App.css";
import Form from "./Form";
import Buttons from "./Buttons";
import Tasks from "./Tasks";

const tasks = [
  { id: 1, content: "Przerobić listę na React", done: false },
  { id: 1, content: "Wrócić z pracy", done: true },
];

const hideDoneTasks = false;

function App() {
  return (
    <div>
      <header>
        <h1 className="header">Lista zadań</h1>
      </header>

      <main>
        <section className="section">
          <h2 className="section__header">Dodaj nowe zadanie</h2>
        </section>
        <Form />
        <section className=" section">
          <div className="section__container">
            <h2 className="section__header section__header--left">
              Lista zadań
            </h2>
            <Buttons tasks={tasks} hideDoneTasks={hideDoneTasks} />
          </div>
          <Tasks tasks={tasks} />
        </section>
      </main>
    </div>
  );
}

export default App;

import "./App.css";
import Form from "./Form";
import Buttons from "./Buttons";
import Tasks from "./Tasks";
import Section from "./Section";

const tasks = [
  { id: 1, content: "Przerobić listę na React", done: false },
  { id: 2, content: "Wrócić z pracy", done: true },
];

const hideDoneTasks = false;

function App() {
  return (
    <main>
      <header>
        <h1 className="header">Lista zadań</h1>
      </header>
      <Section title="Dodaj nowe zadanie" body={<Form />} />
      <Section
        title="Lista zadań"
        extraHeaderContent={
          <Buttons tasks={tasks} hideDoneTasks={hideDoneTasks} />
        }
        body={<Tasks tasks={tasks} hideDoneTasks={hideDoneTasks} />}
      />
    </main>
  );
}

export default App;

import "./App.css";
import Form from "./Form";
import Buttons from "./Buttons";
import Tasks from "./Tasks";
import Section from "./Section";
import Header from "./Header";

const tasks = [
  { id: 1, content: "Przerobić listę na React", done: false },
  { id: 2, content: "Wrócić z pracy", done: true },
];

const hideDoneTasks = false;

function App() {
  return (
    <main>
      <Header title="Lista zadań" />
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

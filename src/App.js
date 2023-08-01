import "./App.css";
import { useState } from "react";
import Form from "./Form";
import Buttons from "./Buttons";
import Tasks from "./Tasks";
import Section from "./Section";
import Header from "./Header";
import Container from "./Container";

const hideDone = false;

function App() {
  const [tasks, setTasks] = useState([
    { id: 1, content: "Przerobić listę na React", done: false },
    { id: 2, content: "Wrócić z pracy", done: true },
  ]);

  const removeTask = (id) => {
    setTasks((tasks) => tasks.filter((task) => task.id !== id));
  };

  const toggleDone = (id) => {
    setTasks((tasks) =>
      tasks.map((task) => {
        if (task.id === id) {
          return {
            ...task,
            done: !task.done,
          };
        }
        return task;
      })
    );
  };
  return (
    <Container>
      <Header title="Lista zadań" />
      <Section title="Dodaj nowe zadanie" body={<Form />} />
      <Section
        title="Lista zadań"
        extraHeaderContent={<Buttons tasks={tasks} hideDone={hideDone} />}
        body={
          <Tasks
            tasks={tasks}
            hideDone={hideDone}
            removeTask={removeTask}
            toggleDone={toggleDone}
          />
        }
      />
    </Container>
  );
}

export default App;

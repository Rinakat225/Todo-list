import { useState } from "react";

export default function App() {
  const [userInput, setUserInput] = useState([]);

  function handleAddNewTask(task) {
    setUserInput((previousTasks) => [...previousTasks, task]);
  }

  function handleClearAll() {
    setUserInput([]);
  }

  function handleRemoveTask(id) {
    setUserInput((newTasks) => newTasks.filter((newTask) => newTask.id !== id));
  }

  return (
    <div className="container">
      <div>
        <NewTasks onAddNewTask={handleAddNewTask} onClearAll={handleClearAll} />
      </div>
      <div>
        {userInput.map((input) => (
          <TaskList
            userInput={input.newTask}
            id={input.id}
            key={input.id}
            onRemoveTask={handleRemoveTask}
          />
        ))}
      </div>
    </div>
  );
}

function NewTasks({ onAddNewTask, onClearAll }) {
  const [newTask, setNewTask] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (!newTask) return;

    const task = { newTask, id: Date.now() };

    onAddNewTask(task);

    setNewTask("");
  }

  return (
    <div>
      <h1>Todo List</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Add your task"
          value={newTask}
          onChange={(event) => setNewTask(event.target.value)}
        />
        <button className="submit--btn">Submit</button>
        <button onClick={() => onClearAll()}>Clear all</button>
      </form>
    </div>
  );
}

function TaskList({ userInput, id, onRemoveTask }) {
  return (
    <div className="tasklist--container">
      <ul>
        <li>{userInput}</li>
      </ul>
      <button onClick={() => onRemoveTask(id)}>Delete</button>
    </div>
  );
}

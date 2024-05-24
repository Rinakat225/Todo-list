import {useState} from 'react';
import NewTasks from './components/NewTasks';
import TaskList from './components/TaskList';

export default function App() {
    const [userInput, setUserInput] = useState([]);

    function handleAddNewTask(task) {
        setUserInput((previousTasks) => [...previousTasks, task]);
    }

    function handleClearAll() {
        setUserInput([]);
    }

    function handleRemoveTask(id) {
        setUserInput((tasks) => tasks.filter((task) => task.id !== id));
    }

    return (
        <div className="bg-blue-500 text-black p-4">
            <div>
                <NewTasks
                    onAddNewTask={handleAddNewTask}
                    onClearAll={handleClearAll}
                />
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

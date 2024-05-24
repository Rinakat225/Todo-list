import {useState} from 'react';
import NewTasks from './components/NewTasks';
import TaskList from './components/TaskList';
import {Fragment} from 'react';

function classNames(...classes) {
    return classes.filter(Boolean).join(' ');
}

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
        <div className="flex flex-col bg-[#172a3a] max-w-6xl h-auto mt-8 mx-auto">
            <div className="text-[#54edfe] p-5 flex text-center items-center justify-center">
                <span className="flex-none w-30 text-md">Active tasks</span>
                <h1 className="grow text-4xl font-bold ">To do List</h1>
                <button className="flex-none w-30 text-md">Default view</button>
            </div>

            <div className="self-center text-white">
                <NewTasks
                    onAddNewTask={handleAddNewTask}
                    onClearAll={handleClearAll}
                    userInput={userInput}
                />

                <div className="border-solid border-[1px] border-[#54edfe] rounded mb-7">
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
        </div>
    );
}

import {useState} from 'react';
import NewTasks from './components/NewTasks';
import TaskList from './components/TaskList';
import Tabs from './components/Tabs';
import {Fragment} from 'react';

function classNames(...classes) {
    return classes.filter(Boolean).join(' ');
}

export default function App() {
    const [userInput, setUserInput] = useState([]);
    const [showTasks, setShowTasks] = useState(false);
    const [edit, setEdit] = useState(null);
    const [editedInput, setEditedInput] = useState('');
    const [currentTab, setCurrentTab] = useState('all');

    function handleAddNewTask(task) {
        setUserInput((previousTasks) => [...previousTasks, task]);
    }

    function handleClearAll() {
        setUserInput([]);
        setShowTasks(false);
    }

    function handleRemoveTask(id) {
        setUserInput((tasks) => tasks.filter((task) => task.id !== id));
    }

    function handleShowTasks() {
        showTasks === false
            ? setShowTasks((show) => !show)
            : setShowTasks((show) => show);
    }

    function handleEditTask(id) {
        setEdit(id);
        setEditedInput(userInput.id);
    }

    function handleSaveEdit(id) {
        setUserInput((tasks) =>
            tasks.map((task) =>
                task.id === id ? {...task, newTask: editedInput} : task
            )
        );
        setEdit(null);
    }

    function handleCancelEdit() {
        setEdit(null);
        setEditedInput('');
    }

    function handleCompletedTask(id) {
        setUserInput((tasks) =>
            tasks.map((task) =>
                task.id === id ? {...task, completed: !task.completed} : task
            )
        );
    }

    function handleFilteredTasks() {
        if (currentTab === 'completed') {
            return userInput.filter((task) => task.completed);
        } else if (currentTab === 'inProgress') {
            return userInput.filter((task) => !task.completed);
        } else {
            return userInput;
        }
    }

    const currentDate = new Date();
    const date = new Date(
        new Date(currentDate).setDate(currentDate.getDate())
    ).toDateString();

    return (
        <div className="flex flex-col bg-[#172a3a] max-w-6xl h-auto mt-8 mx-auto">
            <div className="text-[#54edfe] p-5 flex text-center items-center justify-between shadow-[0_16px_9px_-10px_rgba(18,32,44,1)]">
                <span className="text-md w-20">{date}</span>
                <h1 className="text-4xl font-bold ">To do List</h1>
                <button className=" text-md">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="size-6 w-20"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.383a14.406 14.406 0 0 1-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 1 0-7.517 0c.85.493 1.509 1.333 1.509 2.316V18"
                        />
                    </svg>
                </button>
            </div>

            <div className="self-center text-white ">
                <NewTasks
                    onAddNewTask={handleAddNewTask}
                    onClearAll={handleClearAll}
                    userInput={userInput}
                    onShowTasks={handleShowTasks}
                />
                {showTasks ? (
                    <Tabs
                        currentTab={currentTab}
                        setCurrentTab={setCurrentTab}
                    />
                ) : (
                    ''
                )}

                {showTasks ? (
                    <div className="border-solid border-[1px] border-[#54edfe] rounded-b-lg mb-7">
                        {handleFilteredTasks().map((input) => (
                            <TaskList
                                userInput={input.newTask}
                                id={input.id}
                                completed={input.completed}
                                key={input.id}
                                onRemoveTask={handleRemoveTask}
                                edit={edit}
                                onEditTask={handleEditTask}
                                editedInput={editedInput}
                                setEditedInput={setEditedInput}
                                onSaveEdit={handleSaveEdit}
                                onCancelEdit={handleCancelEdit}
                                onCompletedTask={handleCompletedTask}
                            />
                        ))}
                    </div>
                ) : (
                    ''
                )}
            </div>
        </div>
    );
}

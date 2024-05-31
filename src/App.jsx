import {useState} from 'react';
import NewTasks from './components/NewTasks';
import TaskList from './components/TaskList';
import Tabs from './components/Tabs';
import {Fragment} from 'react';

export default function App() {
    const [newTask, setNewTask] = useState('');
    const [userInput, setUserInput] = useState([]);
    const [showTasks, setShowTasks] = useState(false);
    const [edit, setEdit] = useState(null);
    const [editedInput, setEditedInput] = useState('');
    const [currentTab, setCurrentTab] = useState('all');
    const [dark, setDark] = useState(false);

    const handleDarkModeButtonClick = () => {
        setDark(!dark);
        document.body.classList.toggle('dark');
    };

    const handleAddNewTaskButtonClick = (task) => {
        setUserInput((previousTasks) => [...previousTasks, task]);
    };

    const handleClearAllTasksButtonClick = () => {
        setNewTask('');
        setUserInput([]);
        setShowTasks(false);
    };

    const handleRemoveTaskButtonClick = (id) => {
        setUserInput((tasks) => tasks.filter((task) => task.id !== id));
    };

    const handleShowExistingTasksConditionally = () => {
        showTasks === false
            ? setShowTasks((show) => !show)
            : setShowTasks((show) => show);
    };

    const handleEditTaskButtonClick = (id) => {
        setEdit(id);
        setEditedInput(userInput.id);
    };

    const handleSaveEditedTaskButtonClick = (id) => {
        setUserInput((tasks) =>
            tasks.map((task) =>
                task.id === id ? {...task, newTask: editedInput} : task
            )
        );
        setEdit(null);
    };

    const handleCancelEditingModeButtonClick = () => {
        setEdit(null);
        setEditedInput('');
    };

    const handleMarkTaskCompletedButtonClick = (id) => {
        setUserInput((tasks) =>
            tasks.map((task) =>
                task.id === id ? {...task, completed: !task.completed} : task
            )
        );
    };

    const handleFilterExistingTasksConditionally = () => {
        if (currentTab === 'completed') {
            return userInput.filter((task) => task.completed);
        } else if (currentTab === 'inProgress') {
            return userInput.filter((task) => !task.completed);
        } else {
            return userInput;
        }
    };

    const currentDate = new Date();
    const date = new Date(
        new Date(currentDate).setDate(currentDate.getDate())
    ).toDateString();

    return (
        <div className="border-[#172a3a] border-[1px] rounded flex flex-col bg-[#ddfbff] dark:bg-[#172a3a] max-w-6xl h-auto mt-8 mx-auto">
            <div className="text-[#2e3f4e] dark:text-[#54edfe] p-5 flex text-center items-center justify-between shadow-[0_16px_9px_-10px_rgba(18,32,44,1)]">
                <span className="text-md w-20">{date}</span>
                <h1 className="text-4xl font-bold ">To do List</h1>
                <button onClick={() => handleDarkModeButtonClick()}>
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

            <div className="self-center text-white">
                <NewTasks
                    newTask={newTask}
                    setNewTask={setNewTask}
                    onAddNewTaskButtonClick={handleAddNewTaskButtonClick}
                    onClearAllTasksButtonClick={handleClearAllTasksButtonClick}
                    userInput={userInput}
                    onShowExistingTasksConditionally={
                        handleShowExistingTasksConditionally
                    }
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
                    <div className="border-solid border-[1px] border-[#172a3a] dark:border-[#54edfe] rounded-b-lg mb-7">
                        {handleFilterExistingTasksConditionally().map(
                            (input) => (
                                <TaskList
                                    userInput={input.newTask}
                                    id={input.id}
                                    completed={input.completed}
                                    key={input.id}
                                    onRemoveTaskButtonClick={
                                        handleRemoveTaskButtonClick
                                    }
                                    edit={edit}
                                    onEditTaskButtonClick={
                                        handleEditTaskButtonClick
                                    }
                                    editedInput={editedInput}
                                    setEditedInput={setEditedInput}
                                    onSaveEditedTaskButtonClick={
                                        handleSaveEditedTaskButtonClick
                                    }
                                    onCancelEditingModeButtonClick={
                                        handleCancelEditingModeButtonClick
                                    }
                                    onMarkTaskCompletedButtonClick={
                                        handleMarkTaskCompletedButtonClick
                                    }
                                />
                            )
                        )}
                    </div>
                ) : (
                    ''
                )}
            </div>
        </div>
    );
}

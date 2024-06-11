import {useState} from 'react';
import NewTasks from './mainComponents/NewTasks';
import TaskList from './mainComponents/TaskList';
import Tabs from './mainComponents/Tabs';
import {LightBulbIcon} from '@heroicons/react/24/outline';

export default function TodoList() {
    const [newTask, setNewTask] = useState('');
    const [userInput, setUserInput] = useState([]);
    const [showTasks, setShowTasks] = useState(false);
    const [edit, setEdit] = useState(null);
    const [editedInput, setEditedInput] = useState('');
    const [currentTab, setCurrentTab] = useState('all');
    const [dark, setDark] = useState(false);
    const [newTag, setNewTag] = useState('');
    const [editedTag, setEditedTag] = useState('');
    const [date, setDate] = useState();

    const handleDarkModeButtonClick = () => {
        setDark(!dark);
        document.body.classList.toggle('dark');
    };

    const handleAddNewTaskButtonClick = (task) => {
        setUserInput((previousTasks) => [task, ...previousTasks]);
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
        setEditedTag(userInput.id);
        {
            !newTag &&
                setUserInput((tasks) =>
                    tasks.map((task) =>
                        task.id === id
                            ? {
                                  ...task,
                                  tag: !task.tag,
                              }
                            : task
                    )
                );
        }
    };

    const handleSaveEditedTaskButtonClick = (id) => {
        if (editedInput) {
            setUserInput((tasks) =>
                tasks.map((task) =>
                    task.id === id
                        ? {
                              ...task,
                              newTask: editedInput,
                          }
                        : task
                )
            );
        } else if (editedTag) {
            setUserInput((tasks) =>
                tasks.map((task) =>
                    task.id === id
                        ? {
                              ...task,
                              newTag: editedTag,
                          }
                        : task
                )
            );
        }
        setEdit(null);
    };

    const handleCancelEditingModeButtonClick = () => {
        setEdit(null);
        setEditedInput('');
        setEditedTag('');
    };

    const handleMarkTaskCompletedButtonClick = (id) => {
        setUserInput((tasks) =>
            tasks
                .map((task) =>
                    task.id === id
                        ? {...task, completed: !task.completed}
                        : task
                )
                .slice()
                .sort((a, b) => Number(a.completed) - Number(b.completed))
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

    const handleMoveTaskUpButtonClick = (index) => {
        if (index === 0) return;

        const taskMovingUp = [...userInput];
        [taskMovingUp[index], taskMovingUp[index - 1]] = [
            taskMovingUp[index - 1],
            taskMovingUp[index],
        ];
        setUserInput(taskMovingUp);
    };

    const handleMoveTaskDownButtonClick = (index) => {
        if (index === userInput.length - 1) return;

        const taskMovingDown = [...userInput];
        [taskMovingDown[index], taskMovingDown[index + 1]] = [
            taskMovingDown[index + 1],
            taskMovingDown[index],
        ];
        setUserInput(taskMovingDown);
    };

    const handleShowTagButtonClick = (id) => {
        {
            newTag &&
                setUserInput((tasks) =>
                    tasks.map((task) =>
                        task.id === id
                            ? {
                                  ...task,
                                  tag: !task.tag,
                              }
                            : task
                    )
                );
        }
    };

    const handleRemoveTagButtonClick = (id) => {
        setUserInput((tasks) =>
            tasks.map((task) =>
                task.id === id
                    ? {
                          ...task,
                          newTag: '',
                      }
                    : task
            )
        );
    };

    const todaysDate = new Date();
    const currentDate = new Date(
        new Date(todaysDate).setDate(todaysDate.getDate())
    ).toDateString();

    return (
        <div className="h-auto mx-auto max-w-6xl mt-2 rounded shadow-xl flex flex-col bg-WHITE dark:bg-[#272640]">
            <div className="p-5 flex text-center items-center justify-between shadow-xl text-[#7371fc]">
                <span className="text-md w-20">{currentDate}</span>
                <h1 className="text-4xl font-bold text-[#7371fc]">
                    To do List
                </h1>
                <button onClick={() => handleDarkModeButtonClick()}>
                    <LightBulbIcon className="size-6 w-20 text-[#7371fc] hover:text-[#cdc1ff] dark:hover:text-[#cdc1ff]" />
                </button>
            </div>

            <div className="self-center text-white">
                <NewTasks
                    newTask={newTask}
                    setNewTask={setNewTask}
                    onAddNewTaskButtonClick={handleAddNewTaskButtonClick}
                    onClearAllTasksButtonClick={handleClearAllTasksButtonClick}
                    onShowExistingTasksConditionally={
                        handleShowExistingTasksConditionally
                    }
                    newTag={newTag}
                    setNewTag={setNewTag}
                    handleShowTagButtonClick={handleShowTagButtonClick}
                    date={date}
                    setDate={setDate}
                />
                {showTasks && (
                    <Tabs
                        currentTab={currentTab}
                        setCurrentTab={setCurrentTab}
                    />
                )}

                {showTasks && (
                    <div className="mb-7">
                        {handleFilterExistingTasksConditionally().map(
                            (input, index) => (
                                <TaskList
                                    userInput={input.newTask}
                                    tag={input.newTag}
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
                                    index={index}
                                    onMoveTaskUpButtonClick={
                                        handleMoveTaskUpButtonClick
                                    }
                                    onMoveTaskDownButtonClick={
                                        handleMoveTaskDownButtonClick
                                    }
                                    editedTag={editedTag}
                                    setEditedTag={setEditedTag}
                                    onRemoveTagButtonClick={
                                        handleRemoveTagButtonClick
                                    }
                                />
                            )
                        )}
                    </div>
                )}
            </div>
        </div>
    );
}

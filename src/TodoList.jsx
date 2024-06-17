import {useState} from 'react';
import NewTaskForm from './mainComponents/NewTaskForm';
import Task from './mainComponents/Task';
import Tabs from './mainComponents/Tabs';
import {LightBulbIcon} from '@heroicons/react/24/outline';
import {Reorder} from 'framer-motion';

export default function TodoList() {
    const [newTask, setNewTask] = useState('');
    const [userInput, setUserInput] = useState([]);
    const [showTasks, setShowTasks] = useState(false);
    const [taskInEditMode, setTaskInEditMode] = useState(null);
    const [editedInput, setEditedInput] = useState('');
    const [currentTab, setCurrentTab] = useState('all');
    const [dark, setDark] = useState(false);
    const [customTag, setCustomTag] = useState('');
    const [date, setDate] = useState(null);
    const [selectedTag, setSelectedTag] = useState(null);
    const [customTagsList, setCustomTagsList] = useState([]);

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
        setDate(null);
        setSelectedTag(null);
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
        setTaskInEditMode(id);
        setEditedInput(userInput.id);
    };

    const handleSaveEditedTaskButtonClick = (id) => {
        {
            editedInput &&
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
        }
        setTaskInEditMode(null);
    };

    const handleCancelEditingModeButtonClick = () => {
        setTaskInEditMode(null);
        setEditedInput('');
    };

    const handleMarkTaskCompletedButtonClick = (id) => {
        setUserInput((tasks) =>
            tasks
                .map((task) =>
                    task.id === id
                        ? {...task, taskCompleted: !task.taskCompleted}
                        : task
                )
                .slice()
                .sort(
                    (a, b) => Number(a.taskCompleted) - Number(b.taskCompleted)
                )
        );
    };

    const handleFilterExistingTasksConditionally = () => {
        if (currentTab === 'completed') {
            return userInput.filter((task) => task.taskCompleted);
        } else if (currentTab === 'inProgress') {
            return userInput.filter((task) => !task.taskCompleted);
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

    const handleAddDueDateButtonClick = (id) => {
        setUserInput((tasks) =>
            tasks.map((task) =>
                task.id === id
                    ? {
                          ...task,
                          taskDate: date,
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
        <div className="h-full mx-auto rounded flex flex-col bg-gray-100 dark:bg-[#272640]">
            <header className="flex text-center items-center justify-between text-[#7371fc]">
                <span className="text-md w-20 py-4">{currentDate}</span>
                <h1 className="text-4xl font-bold text-[#7371fc] py-4">
                    To do List
                </h1>
                <button onClick={() => handleDarkModeButtonClick()}>
                    <LightBulbIcon className="size-6 w-20 text-[#7371fc] hover:text-[#cdc1ff] dark:hover:text-[#cdc1ff] m-4" />
                </button>
            </header>

            <main className="self-center text-white">
                <NewTaskForm
                    newTask={newTask}
                    setNewTask={setNewTask}
                    onAddNewTaskButtonClick={handleAddNewTaskButtonClick}
                    onClearAllTasksButtonClick={handleClearAllTasksButtonClick}
                    onShowExistingTasksConditionally={
                        handleShowExistingTasksConditionally
                    }
                    customTag={customTag}
                    setCustomTag={setCustomTag}
                    date={date}
                    setDate={setDate}
                    onAddDueDateButtonClick={handleAddDueDateButtonClick}
                    selectedTag={selectedTag}
                    setSelectedTag={setSelectedTag}
                    customTagsList={customTagsList}
                    setCustomTagsList={setCustomTagsList}
                />
                {showTasks && (
                    <Tabs
                        currentTab={currentTab}
                        setCurrentTab={setCurrentTab}
                    />
                )}

                {showTasks && (
                    <Reorder.Group
                        axis="y"
                        values={userInput}
                        onReorder={setUserInput}
                    >
                        {handleFilterExistingTasksConditionally().map(
                            (input, index) => (
                                <Reorder.Item value={input} key={input.id}>
                                    <Task
                                        userInput={input.newTask}
                                        tag={input.selectedTag}
                                        newDate={input.taskDate}
                                        id={input.id}
                                        taskCompleted={input.taskCompleted}
                                        key={input.id}
                                        onRemoveTaskButtonClick={
                                            handleRemoveTaskButtonClick
                                        }
                                        taskInEditMode={taskInEditMode}
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
                                        date={date}
                                        selectedTag={selectedTag}
                                    />
                                </Reorder.Item>
                            )
                        )}
                    </Reorder.Group>
                )}
            </main>
        </div>
    );
}

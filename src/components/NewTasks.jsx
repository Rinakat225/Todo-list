import React from 'react';
import {twMerge} from 'tailwind-merge';

export default function NewTasks({
    newTask,
    setNewTask,
    onAddNewTaskButtonClick,
    onClearAllTasksButtonClick,
    onShowExistingTasksConditionally,
}) {
    const handleSubmitUserInputButtonClick = (e) => {
        e.preventDefault();

        if (!newTask) return;

        const task = {
            newTask,
            completed: false,
            id: Date.now(),
        };

        onAddNewTaskButtonClick(task);

        setNewTask('');

        onShowExistingTasksConditionally();
    };

    const NEWTASKS_DEFAULT_CLASSNAMES =
        'bg-[#2e3f4e] dark:bg-[#54edfe] text-[#54edfe] dark:text-black font-bold rounded p-1.5 mt-7 mb-9 w-60 hover:bg-[#54edfe] hover:text-[#172a3a] dark:hover:bg-[#172a3a] dark:hover:text-[#54edfe] dark:hover:bg-[#65717b]';

    return (
        <div className="flex justify-center text-xs">
            <form onSubmit={handleSubmitUserInputButtonClick}>
                <input
                    className={twMerge(NEWTASKS_DEFAULT_CLASSNAMES, 'mr-2')}
                    type="text"
                    placeholder="Write your task..."
                    value={newTask}
                    onChange={(event) => setNewTask(event.target.value)}
                />
                <button
                    className={twMerge(NEWTASKS_DEFAULT_CLASSNAMES, 'mr-5 w-9')}
                >
                    Add
                </button>
            </form>

            <button
                className={twMerge(
                    NEWTASKS_DEFAULT_CLASSNAMES,
                    'bg-[#54edfe] dark:bg-[#65717b] text-[#172a3a] dark:text-[#54edfe] w-13 hover:bg-[#2e3f4e] hover:text-[#54edfe] dark:hover:bg-[#54edfe] dark:hover:text-[#172a3a]'
                )}
                onClick={() => onClearAllTasksButtonClick()}
            >
                Clear all
            </button>
        </div>
    );
}

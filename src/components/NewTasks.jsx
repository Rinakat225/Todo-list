import React from 'react';

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

        const task = {newTask, completed: false, id: Date.now()};

        onAddNewTaskButtonClick(task);

        setNewTask('');

        onShowExistingTasksConditionally();
    };

    return (
        <div className="flex justify-center text-xs">
            <form onSubmit={handleSubmitUserInputButtonClick}>
                <input
                    className="bg-[#2e3f4e] dark:bg-[#54edfe] text-[#54edfe] font-bold dark:text-black rounded mr-2 p-1.5 mt-7 mb-9 w-60"
                    type="text"
                    value={newTask}
                    onChange={(event) => setNewTask(event.target.value)}
                />
                <button className="bg-[#2e3f4e] dark:bg-[#54edfe] text-[#54edfe] dark:text-black rounded mr-5 p-1.5 font-bold w-9">
                    Add
                </button>
            </form>

            <button
                className="border-solid border-[1px] border-[#2e3f4e] bg-[#54edfe] dark:bg-[#65717b] text-[#172a3a] dark:text-[#54edfe] rounded p-1.5 font-semibold w-13 mt-7 mb-9"
                onClick={() => onClearAllTasksButtonClick()}
            >
                Clear all
            </button>
        </div>
    );
}

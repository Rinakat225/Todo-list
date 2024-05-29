import {useState} from 'react';
import React from 'react';

export default function NewTasks({
    newTask,
    setNewTask,
    onAddNewTask,
    onClearAll,
    onShowTasks,
}) {
    function handleSubmit(e) {
        e.preventDefault();

        if (!newTask) return;

        const task = {newTask, completed: false, id: Date.now()};

        onAddNewTask(task);

        setNewTask('');

        onShowTasks();
    }

    return (
        <div className="flex justify-center text-xs">
            <form onSubmit={handleSubmit}>
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
                onClick={() => onClearAll()}
            >
                Clear all
            </button>
        </div>
    );
}

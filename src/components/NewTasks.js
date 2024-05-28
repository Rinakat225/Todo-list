import {useState} from 'react';
import React from 'react';

export default function NewTasks({onAddNewTask, onClearAll, onShowTasks}) {
    const [newTask, setNewTask] = useState('');

    function handleSubmit(e) {
        e.preventDefault();

        if (!newTask) return;

        const task = {newTask, completed: false, id: Date.now()};

        onAddNewTask(task);

        setNewTask('');

        onShowTasks();
    }

    return (
        <div className="flex justify-center text-xs ">
            <form onSubmit={handleSubmit}>
                <input
                    className="bg-[#54edfe]  text-black rounded mr-2 p-1.5 mt-7 mb-9 w-60"
                    type="text"
                    value={newTask}
                    onChange={(event) => setNewTask(event.target.value)}
                />
                <button className="bg-[#54edfe] text-black rounded mr-5 p-1.5 font-bold w-9">
                    Add
                </button>
            </form>

            <button
                className="bg-[#65717b] text-[#54edfe] rounded p-1.5 font-semibold w-13 mt-7 mb-9"
                onClick={() => onClearAll()}
            >
                Clear all
            </button>
        </div>
    );
}

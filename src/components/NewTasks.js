import {useState} from 'react';
import React from 'react';

export default function NewTasks({onAddNewTask, onClearAll}) {
    const [newTask, setNewTask] = useState('');

    function handleSubmit(e) {
        e.preventDefault();

        if (!newTask) return;

        const task = {newTask, id: Date.now()};

        onAddNewTask(task);

        setNewTask('');
    }

    return (
        <div>
            <h1>Todo List</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Add your task"
                    value={newTask}
                    onChange={(event) => setNewTask(event.target.value)}
                />
                <button className="submit--btn">Submit</button>
                <button onClick={() => onClearAll()}>Clear all</button>
            </form>
        </div>
    );
}

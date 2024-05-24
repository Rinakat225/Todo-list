import React from 'react';

export default function TaskList({userInput, id, onRemoveTask}) {
    return (
        <div className="tasklist--container">
            <ul>
                <li>{userInput}</li>
            </ul>
            <button onClick={() => onRemoveTask(id)}>Delete</button>
        </div>
    );
}

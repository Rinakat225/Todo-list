import {useState} from 'react';
import TaskContent from './TaskContent';
import TaskActions from './TaskActions';
import ReorderButtonGroup from './ReorderButtonGroup';

export default function Task({userInput, setUserInput, index, tasksArray}) {
    const [editedInput, setEditedInput] = useState('');
    const [taskInEditMode, setTaskInEditMode] = useState('');

    return (
        <div className="flex justify-between gap-5 mb-2 items-center p-5 cursor-grab bg-white dark:bg-[#525166] rounded shadow-md text-base font-semibold text-black dark:text-[#cdc1ff]">
            <ReorderButtonGroup
                index={index}
                tasksArray={tasksArray}
                setUserInput={setUserInput}
            />

            <div className="flex-1">
                <TaskContent
                    userInput={userInput}
                    taskInEditMode={taskInEditMode}
                    setEditedInput={setEditedInput}
                    editedInput={editedInput}
                />
            </div>

            <TaskActions
                userInput={userInput}
                setUserInput={setUserInput}
                taskInEditMode={taskInEditMode}
                setTaskInEditMode={setTaskInEditMode}
                editedInput={editedInput}
                setEditedInput={setEditedInput}
                onRemoveTaskButtonClick={(id) => {
                    setUserInput((tasks) =>
                        tasks.filter((task) => task.id !== id)
                    );
                }}
            />
        </div>
    );
}

import {useState} from 'react';
import TaskContent from './TaskContent';
import TaskActions from './TaskActions';
import ReorderButtonGroup from './ReorderButtonGroup';

export default function Task({task, setTasks, index, tasksArray, sortBy}) {
    const [editedValue, setEditedValue] = useState('');
    const [currentTaskId, setCurrentTaskId] = useState('');

    return (
        <div className="flex justify-between gap-5 mb-2 items-center p-5 cursor-grab bg-white dark:bg-[#525166] rounded shadow-md text-base font-semibold text-black dark:text-[#cdc1ff]">
            <ReorderButtonGroup
                index={index}
                tasksArray={tasksArray}
                setTasks={setTasks}
            />

            <div className="flex-1">
                <TaskContent
                    task={task}
                    currentTaskId={currentTaskId}
                    setEditedValue={setEditedValue}
                    editedValue={editedValue}
                    sortBy={sortBy}
                />
            </div>

            <TaskActions
                task={task}
                setTasks={setTasks}
                currentTaskId={currentTaskId}
                setCurrentTaskId={setCurrentTaskId}
                editedValue={editedValue}
                setEditedValue={setEditedValue}
                onRemoveTaskButtonClick={(id) => {
                    setTasks((tasks) => tasks.filter((task) => task.id !== id));
                }}
            />
        </div>
    );
}

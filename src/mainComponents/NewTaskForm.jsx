import {useState} from 'react';
import {DatePicker} from '../components/ui/datePicker';
import {ComboBoxResponsive} from '../components/ui/combobox';

export default function NewTaskForm({tasks, setTasks}) {
    const [taskValue, setTaskValue] = useState('');
    const [date, setDate] = useState(null);
    const [customTag, setCustomTag] = useState('');
    const [selectedTag, setSelectedTag] = useState('');

    const handleAddNewTaskButtonClick = (task) => {
        setTasks((previousTasks) => [task, ...previousTasks]);
    };

    const handleSubmitUserInputButtonClick = (e) => {
        e.preventDefault();

        if (!taskValue) return;

        const task = {
            value: taskValue,
            completed: false,
            id: Date.now(),
            tag: selectedTag,
            dueDate: null,
        };

        handleAddNewTaskButtonClick(task);

        handleAddDueDateButtonClick(task.id);

        setTaskValue('');

        setCustomTag('');

        setDate(null);

        setSelectedTag('');
    };

    const handleAddDueDateButtonClick = (id) => {
        setTasks((tasks) =>
            tasks.map((task) =>
                task.id === id
                    ? {
                          ...task,
                          dueDate: date,
                      }
                    : task
            )
        );
    };

    const handleClearAllTasksButtonClick = (e) => {
        e.preventDefault();

        if (tasks.length === 0) return;

        setTaskValue('');
        setTasks([]);
        setDate(null);
        setSelectedTag('');
    };

    return (
        <div className="shadow-md rounded flex items-center p-2 bg-white dark:bg-[#525166]">
            <form
                className="flex items-center space-x-2"
                onSubmit={handleSubmitUserInputButtonClick}
            >
                <input
                    className="p-2 font-normal rounded text-black dark:text-white dark:bg-[#525166]"
                    type="text"
                    placeholder="Write your task..."
                    value={taskValue}
                    onChange={(event) => setTaskValue(event.target.value)}
                />

                <ComboBoxResponsive
                    selectedTag={selectedTag}
                    setSelectedTag={setSelectedTag}
                    customTag={customTag}
                    setCustomTag={setCustomTag}
                />

                <DatePicker date={date} setDate={setDate} />

                <button className="p-2 rounded font-semibold bg-[#7371fc] text-white hover:text-[#cdc1ff]">
                    Add
                </button>
                <button
                    className={
                        tasks.length === 0
                            ? 'p-2 rounded font-normal text-[#cdc1ff] cursor-default'
                            : 'p-2 font-normal text-[#7371fc] hover:text-[#cdc1ff]'
                    }
                    onClick={handleClearAllTasksButtonClick}
                >
                    Clear all
                </button>
            </form>
        </div>
    );
}

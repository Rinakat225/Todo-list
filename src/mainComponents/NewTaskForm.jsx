import {useState} from 'react';
import {DatePicker} from '../components/ui/datePicker';
import {ComboBoxResponsive} from '../components/ui/combobox';
import {twMerge} from 'tailwind-merge';

export default function NewTaskForm({tasks, setTasks}) {
    const [taskValue, setTaskValue] = useState('');
    const [date, setDate] = useState(null);
    const [selectedTag, setSelectedTag] = useState('');

    const resetNewTaskFormStates = () => {
        setTaskValue('');
        setDate(null);
        setSelectedTag('');
    };

    const handleAddNewTaskButtonClick = (task) => {
        setTasks((previousTasks) => [task, ...previousTasks]);
    };

    const handleSubmitUserInputButtonClick = (e) => {
        e.preventDefault();

        if (!taskValue) return;
        if (taskValue.trim() === '') return;

        const task = {
            value: taskValue,
            completed: false,
            id: Date.now(),
            tag: selectedTag,
            dueDate: date,
        };

        handleAddNewTaskButtonClick(task);

        handleAddDueDateButtonClick(task.id);

        resetNewTaskFormStates();
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

        setTasks([]);

        resetNewTaskFormStates();
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
                />

                <DatePicker date={date} setDate={setDate} />

                <button className="p-2 rounded font-normal bg-[#7371fc] text-white hover:text-[#cdc1ff]">
                    Add
                </button>
                <button
                    className={twMerge(
                        'p-2 rounded font-normal text-[#7371fc] hover:text-[#cdc1ff]',
                        tasks.length === 0 && 'text-[#cdc1ff] cursor-default '
                    )}
                    onClick={handleClearAllTasksButtonClick}
                >
                    Clear all
                </button>
            </form>
        </div>
    );
}

import {useState} from 'react';
import {DatePicker} from '../components/ui/datePicker';
import {ComboBoxResponsive} from '../components/ui/combobox';

export default function NewTaskForm({userInput, setUserInput}) {
    const [newTask, setNewTask] = useState('');
    const [date, setDate] = useState(null);
    const [customTag, setCustomTag] = useState('');
    const [selectedTag, setSelectedTag] = useState('');

    const handleAddNewTaskButtonClick = (task) => {
        setUserInput((previousTasks) => [task, ...previousTasks]);
    };

    const handleSubmitUserInputButtonClick = (e) => {
        e.preventDefault();

        if (!newTask) return;

        const task = {
            newTask,
            taskCompleted: false,
            id: Date.now(),
            selectedTag,
            taskDate: null,
        };

        handleAddNewTaskButtonClick(task);

        handleAddDueDateButtonClick(task.id);

        setNewTask('');

        setCustomTag('');

        setDate(null);

        setSelectedTag('');
    };

    const handleAddDueDateButtonClick = (id) => {
        setUserInput((tasks) =>
            tasks.map((task) =>
                task.id === id
                    ? {
                          ...task,
                          taskDate: date,
                      }
                    : task
            )
        );
    };

    const handleClearAllTasksButtonClick = (e) => {
        e.preventDefault();

        if (userInput.length === 0) return;

        setNewTask('');
        setUserInput([]);
        setDate(null);
        setSelectedTag('');
    };

    return (
        <div className="text-xs shadow-md rounded flex items-center h-auto p-2 bg-white dark:bg-[#525166]">
            <form
                className="flex items-center space-x-2"
                onSubmit={handleSubmitUserInputButtonClick}
            >
                <input
                    className="h-8 p-2 font-normal rounded text-black dark:text-white dark:bg-[#525166] w-auto"
                    type="text"
                    placeholder="Write your task..."
                    value={newTask}
                    onChange={(event) => setNewTask(event.target.value)}
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
                        userInput.length === 0
                            ? 'p-2 rounded font-normal text-[#cdc1ff]'
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

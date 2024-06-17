import {twMerge} from 'tailwind-merge';
import {DatePicker} from '../components/ui/datePicker';
import {ComboBoxResponsive} from '../components/ui/combobox';

export default function NewTaskForm({
    newTask,
    setNewTask,
    onAddNewTaskButtonClick,
    onClearAllTasksButtonClick,
    onShowExistingTasksConditionally,
    customTag,
    setCustomTag,
    date,
    setDate,
    onAddDueDateButtonClick,
    selectedTag,
    setSelectedTag,
    customTagsList,
    setCustomTagsList,
}) {
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

        onAddNewTaskButtonClick(task);

        setNewTask('');

        onShowExistingTasksConditionally();

        setCustomTag('');

        onAddDueDateButtonClick(task.id);

        setDate(null);

        setSelectedTag(null);
    };

    return (
        <form
            className="p-2 mt-3 mb-9 flex items-center bg-white text-xs shadow-md rounded"
            onSubmit={handleSubmitUserInputButtonClick}
        >
            <input
                className="p-2 m-2 font-bold rounded text-black dark:bg-[#525166] dark:text-black w-80"
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
                customTagsList={customTagsList}
                setCustomTagsList={setCustomTagsList}
            />

            <DatePicker date={date} setDate={setDate} />

            <button className="p-2 rounded font-semibold bg-[#7371fc] text-white hover:text-[#cdc1ff]">
                Add
            </button>
            <button
                className="p-2 rounded font-bold text-[#7371fc] hover:text-[#cdc1ff]"
                onClick={() => onClearAllTasksButtonClick()}
            >
                Clear all
            </button>
        </form>
    );
}

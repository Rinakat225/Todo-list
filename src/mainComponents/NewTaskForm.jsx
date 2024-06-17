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
    showTasks,
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
        <fragment className="text-xs shadow-md rounded flex items-center h-auto p-2 mt-3 mb-9 bg-white dark:bg-[#525166]">
            <form
                className="flex items-center"
                onSubmit={handleSubmitUserInputButtonClick}
            >
                <input
                    className="h-8 p-2 m-2 font-normal rounded text-black dark:bg-[#525166] dark:text-black w-auto"
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

                <button className="h-8 m-2 p-2 rounded font-semibold bg-[#7371fc] text-white hover:text-[#cdc1ff]">
                    Add
                </button>
            </form>
            <button
                className={
                    !showTasks
                        ? 'h-8 p-2 rounded font-normal text-[#cdc1ff]'
                        : 'font-semibold text-[#7371fc] hover:text-[#cdc1ff]'
                }
                onClick={() => onClearAllTasksButtonClick()}
            >
                Clear all
            </button>
        </fragment>
    );
}

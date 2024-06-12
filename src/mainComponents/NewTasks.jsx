import {twMerge} from 'tailwind-merge';
import {DatePicker} from '../components/ui/datePicker';
import {ComboBoxResponsive} from '../components/ui/combobox';

export default function NewTasks({
    newTask,
    setNewTask,
    onAddNewTaskButtonClick,
    onClearAllTasksButtonClick,
    onShowExistingTasksConditionally,
    newTag,
    setNewTag,
    onShowTagButtonClick,
    date,
    setDate,
    onAddDueDateButtonClick,
    selectedTag,
    setSelectedTag,
    customTags,
    setCustomTags,
}) {
    const handleSubmitUserInputButtonClick = (e) => {
        e.preventDefault();

        if (!newTask) return;

        const task = {
            newTask,
            completed: false,
            id: Date.now(),
            selectedTag,
            /*   tag: false, */
            taskDate: null,
        };

        onAddNewTaskButtonClick(task);

        setNewTask('');

        onShowExistingTasksConditionally();

        /*   onShowTagButtonClick(task.id); */

        setNewTag('');

        onAddDueDateButtonClick(task.id);

        setDate(null);

        setSelectedTag(null);
    };

    const NEWTASKS_DEFAULT_CLASSNAMES =
        'p-2 m-2 font-bold rounded text-black dark:bg-[#525166] dark:text-black';

    return (
        <>
            <form
                className="p-3 mt-3 mb-9 flex items-center text-xs shadow-xl rounded"
                onSubmit={handleSubmitUserInputButtonClick}
            >
                <div>
                    <input
                        className={twMerge(NEWTASKS_DEFAULT_CLASSNAMES, 'w-80')}
                        type="text"
                        placeholder="Write your task..."
                        value={newTask}
                        onChange={(event) => setNewTask(event.target.value)}
                    />
                </div>

                <div>
                    <ComboBoxResponsive
                        selectedTag={selectedTag}
                        setSelectedTag={setSelectedTag}
                        newTag={newTag}
                        setNewTag={setNewTag}
                        customTags={customTags}
                        setCustomTags={setCustomTags}
                    />
                </div>

                <div>
                    <DatePicker date={date} setDate={setDate} />
                </div>

                <div>
                    <button className="p-2 rounded font-semibold bg-[#7371fc] text-white hover:text-[#cdc1ff]">
                        Add
                    </button>
                    <button
                        className="p-2 rounded font-bold text-[#7371fc] hover:text-[#cdc1ff]"
                        onClick={() => onClearAllTasksButtonClick()}
                    >
                        Clear all
                    </button>
                </div>
            </form>
        </>
    );
}

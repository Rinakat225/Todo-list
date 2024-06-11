import {twMerge} from 'tailwind-merge';
import {DatePicker} from '../components/ui/datePicker';

export default function NewTasks({
    newTask,
    setNewTask,
    onAddNewTaskButtonClick,
    onClearAllTasksButtonClick,
    onShowExistingTasksConditionally,
    newTag,
    setNewTag,
    handleShowTagButtonClick,
    date,
    setDate,
}) {
    const handleSubmitUserInputButtonClick = (e) => {
        e.preventDefault();

        if (!newTask) return;

        const task = {
            newTask,
            completed: false,
            id: Date.now(),
            newTag,
            tag: false,
        };

        onAddNewTaskButtonClick(task);

        setNewTask('');

        onShowExistingTasksConditionally();

        handleShowTagButtonClick(task.id);

        setNewTag('');
    };

    const NEWTASKS_DEFAULT_CLASSNAMES =
        'p-2 mr-2 mt-2 mb-2 font-bold rounded text-black dark:bg-[#525166] dark:text-black';

    return (
        <div className="p-3 mt-3 mb-9 flex justify-center text-xs shadow-xl rounded">
            <form onSubmit={handleSubmitUserInputButtonClick}>
                <input
                    className={twMerge(NEWTASKS_DEFAULT_CLASSNAMES)}
                    type="text"
                    placeholder="Write your task..."
                    value={newTask}
                    onChange={(event) => setNewTask(event.target.value)}
                />
                <input
                    className={twMerge(NEWTASKS_DEFAULT_CLASSNAMES)}
                    type="text"
                    placeholder="Write your tag..."
                    value={newTag}
                    onChange={(event) => setNewTag(event.target.value)}
                />

                <DatePicker date={date} setDate={setDate} />

                <button className="p-2 rounded font-semibold bg-[#7371fc] text-white hover:text-[#cdc1ff]">
                    Add
                </button>
            </form>

            <button
                className="p-2 rounded font-bold text-[#7371fc] hover:text-[#cdc1ff]"
                onClick={() => onClearAllTasksButtonClick()}
            >
                Clear all
            </button>
        </div>
    );
}

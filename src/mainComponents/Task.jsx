import TaskContent from './TaskContent';
import TaskActions from './TaskActions';
import MoveTaskUpAndDownButtons from './MoveTaskUpAndDownButtons';

export default function Task({
    userInput,
    tag,
    id,
    taskCompleted,
    onRemoveTaskButtonClick,
    taskInEditMode,
    onEditTaskButtonClick,
    editedInput,
    setEditedInput,
    onSaveEditedTaskButtonClick,
    onCancelEditingModeButtonClick,
    onMarkTaskCompletedButtonClick,
    index,
    onMoveTaskUpButtonClick,
    onMoveTaskDownButtonClick,
    newDate,
}) {
    return (
        <div className="flex justify-between gap-5 mb-2 items-center p-5 bg-white dark:bg-[#525166] rounded shadow-md text-base font-semibold text-black dark:text-[#cdc1ff]">
            <MoveTaskUpAndDownButtons
                index={index}
                onMoveTaskUpButtonClick={onMoveTaskUpButtonClick}
                onMoveTaskDownButtonClick={onMoveTaskDownButtonClick}
            />
            <div className="flex-1">
                <TaskContent
                    userInput={userInput}
                    id={id}
                    tag={tag}
                    taskInEditMode={taskInEditMode}
                    editedInput={editedInput}
                    setEditedInput={setEditedInput}
                    newDate={newDate}
                    taskCompleted={taskCompleted}
                />
            </div>

            <TaskActions
                id={id}
                taskInEditMode={taskInEditMode}
                taskCompleted={taskCompleted}
                onRemoveTaskButtonClick={onRemoveTaskButtonClick}
                onEditTaskButtonClick={onEditTaskButtonClick}
                onSaveEditedTaskButtonClick={onSaveEditedTaskButtonClick}
                onCancelEditingModeButtonClick={onCancelEditingModeButtonClick}
                onMarkTaskCompletedButtonClick={onMarkTaskCompletedButtonClick}
            />
        </div>
    );
}

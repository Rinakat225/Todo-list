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
        <div className="flex justify-between gap-5 items-center p-5 bg-white rounded shadow-md text-base font-semibold text-black dark:text-[#cdc1ff]">
            <MoveTaskUpAndDownButtons
                index={index}
                onMoveTaskUpButtonClick={onMoveTaskUpButtonClick}
                onMoveTaskDownButtonClick={onMoveTaskDownButtonClick}
            />
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

import Task from './Task';
import TaskActions from './TaskActions';
import {twMerge} from 'tailwind-merge';

export default function TaskList({
    userInput,
    tag,
    id,
    completed,
    onRemoveTaskButtonClick,
    edit,
    onEditTaskButtonClick,
    editedInput,
    setEditedInput,
    onSaveEditedTaskButtonClick,
    onCancelEditingModeButtonClick,
    onMarkTaskCompletedButtonClick,
    index,
    onMoveTaskUpButtonClick,
    onMoveTaskDownButtonClick,
    editedTag,
    setEditedTag,
    onRemoveTagButtonClick,
    date,
    newDate,
    selectedTag,
}) {
    return (
        <div className="p-5 bg-white rounded flex justify-between items-center shadow-md text-base font-semibold text-black dark:text-[#cdc1ff]">
            <Task
                userInput={userInput}
                id={id}
                tag={tag}
                edit={edit}
                editedInput={editedInput}
                setEditedInput={setEditedInput}
                index={index}
                onMoveTaskUpButtonClick={onMoveTaskUpButtonClick}
                onMoveTaskDownButtonClick={onMoveTaskDownButtonClick}
                editedTag={editedTag}
                setEditedTag={setEditedTag}
                onRemoveTagButtonClick={onRemoveTagButtonClick}
                date={date}
                newDate={newDate}
                selectedTag={selectedTag}
                completed={completed}
            />

            <TaskActions
                id={id}
                edit={edit}
                completed={completed}
                onRemoveTaskButtonClick={onRemoveTaskButtonClick}
                onEditTaskButtonClick={onEditTaskButtonClick}
                onSaveEditedTaskButtonClick={onSaveEditedTaskButtonClick}
                onCancelEditingModeButtonClick={onCancelEditingModeButtonClick}
                onMarkTaskCompletedButtonClick={onMarkTaskCompletedButtonClick}
            />
        </div>
    );
}

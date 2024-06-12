import Task from './Task';
import Buttons from './Buttons';
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
}) {
    const TASKLIST_DEFAULT_TEXT_CLASSNAMES =
        'p-5 rounded flex justify-between items-center shadow-xl text-base font-semibold text-black dark:text-[#cdc1ff]';

    return (
        <div className="flex flex-col justify-center">
            <div
                className={
                    completed
                        ? `${twMerge(
                              TASKLIST_DEFAULT_TEXT_CLASSNAMES,
                              'text-[#65717b] dark:text-[#65717b] line-through decoration-[#65717b] decoration-2'
                          )}`
                        : `${TASKLIST_DEFAULT_TEXT_CLASSNAMES}`
                }
            >
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
                />

                <Buttons
                    id={id}
                    edit={edit}
                    completed={completed}
                    onRemoveTaskButtonClick={onRemoveTaskButtonClick}
                    onEditTaskButtonClick={onEditTaskButtonClick}
                    onSaveEditedTaskButtonClick={onSaveEditedTaskButtonClick}
                    onCancelEditingModeButtonClick={
                        onCancelEditingModeButtonClick
                    }
                    onMarkTaskCompletedButtonClick={
                        onMarkTaskCompletedButtonClick
                    }
                />
            </div>
        </div>
    );
}

import {XMarkIcon} from '@heroicons/react/20/solid';
import {TrashIcon} from '@heroicons/react/20/solid';
import {PencilSquareIcon} from '@heroicons/react/20/solid';
import {CheckIcon} from '@heroicons/react/20/solid';

export default function TaskActions({
    id,
    taskInEditMode,
    taskCompleted,
    onRemoveTaskButtonClick,
    onEditTaskButtonClick,
    onSaveEditedTaskButtonClick,
    onCancelEditingModeButtonClick,
    onMarkTaskCompletedButtonClick,
}) {
    const TASKLIST_BTN_CLASSNAMES =
        'group w-8 h-8 rounded-full flex justify-center items-center shadow-inner bg-[#f8f9fa] dark:bg-[#3d3c53]';

    const TASKLIST_ICON_CLASSNAMES =
        'size-4 text-[#7371fc] dark:text-[#cdc1ff] group-hover:text-[#cdc1ff] dark:group-hover:text-[#7371fc]';

    return (
        <div className="flex gap-1">
            {taskInEditMode === id ? (
                <button
                    onClick={() => onCancelEditingModeButtonClick()}
                    className={TASKLIST_BTN_CLASSNAMES}
                >
                    <span>
                        <XMarkIcon className={TASKLIST_ICON_CLASSNAMES} />
                    </span>
                </button>
            ) : (
                <button
                    onClick={() => onRemoveTaskButtonClick(id)}
                    className={TASKLIST_BTN_CLASSNAMES}
                >
                    <span>
                        <TrashIcon className={TASKLIST_ICON_CLASSNAMES} />
                    </span>
                </button>
            )}
            {taskInEditMode === id ? (
                <button
                    onClick={() => onSaveEditedTaskButtonClick(id)}
                    className={TASKLIST_BTN_CLASSNAMES}
                >
                    <span>
                        <CheckIcon className={TASKLIST_ICON_CLASSNAMES} />
                    </span>
                </button>
            ) : (
                <button
                    onClick={() => onEditTaskButtonClick(id)}
                    className={TASKLIST_BTN_CLASSNAMES}
                >
                    <span>
                        <PencilSquareIcon
                            className={TASKLIST_ICON_CLASSNAMES}
                        />
                    </span>
                </button>
            )}

            {taskCompleted ? (
                <button
                    onClick={() => onMarkTaskCompletedButtonClick(id)}
                    className={
                        taskInEditMode !== id
                            ? `${TASKLIST_BTN_CLASSNAMES}`
                            : 'hidden'
                    }
                >
                    <span>
                        <XMarkIcon className={TASKLIST_ICON_CLASSNAMES} />
                    </span>
                </button>
            ) : (
                <button
                    onClick={() => onMarkTaskCompletedButtonClick(id)}
                    className={
                        taskInEditMode !== id
                            ? `${TASKLIST_BTN_CLASSNAMES}`
                            : 'hidden'
                    }
                >
                    <span>
                        <CheckIcon className={TASKLIST_ICON_CLASSNAMES} />
                    </span>
                </button>
            )}
        </div>
    );
}

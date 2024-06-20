import {XMarkIcon} from '@heroicons/react/20/solid';
import {TrashIcon} from '@heroicons/react/20/solid';
import {PencilSquareIcon} from '@heroicons/react/20/solid';
import {CheckIcon} from '@heroicons/react/20/solid';
import {twMerge} from 'tailwind-merge';

export default function TaskActions({
    task,
    setTasks,
    currentTaskId,
    setCurrentTaskId,
    editedValue,
    setEditedValue,
    onRemoveTaskButtonClick,
}) {
    const handleEditTaskButtonClick = (id) => {
        setCurrentTaskId(id);
        setEditedValue(task.value);
    };

    const handleCancelEditingModeButtonClick = () => {
        setCurrentTaskId('');
        setEditedValue('');
    };

    const handleSaveEditedTaskButtonClick = (id) => {
        if (editedValue === task.value) {
            return;
        }

        setTasks((tasks) =>
            tasks.map((task) =>
                task.id === id && editedValue
                    ? {
                          ...task,
                          value: editedValue,
                      }
                    : task
            )
        );
        setCurrentTaskId('');
    };

    const handleMarkTaskCompletedButtonClick = (id) => {
        setTasks((task) => {
            const taskIndex = task.findIndex((task) => task.id === id);
            if (taskIndex === -1) {
                return task;
            }

            const updatedTask = {
                ...task[taskIndex],
                completed: !task[taskIndex].completed,
            };
            const newTasks = [...task];
            newTasks[taskIndex] = updatedTask;

            newTasks.sort(
                (previousTask, currentTask) =>
                    Number(previousTask.completed) -
                    Number(currentTask.completed)
            );

            return newTasks;
        });
    };
    const TASK_ACTIONS_BTN_CLASSNAMES =
        'group size-8 rounded-full flex justify-center items-center shadow-inner bg-[#f8f9fa] dark:bg-[#3d3c53]';

    const TASK_ACTIONS_ICON_CLASSNAMES =
        'size-4 text-[#7371fc] dark:text-[#cdc1ff] group-hover:text-[#cdc1ff] dark:group-hover:text-[#7371fc]';

    return (
        <div className="flex gap-1">
            {currentTaskId === task.id ? (
                <>
                    <button
                        onClick={() => handleCancelEditingModeButtonClick()}
                        className={TASK_ACTIONS_BTN_CLASSNAMES}
                    >
                        <span>
                            <XMarkIcon
                                className={TASK_ACTIONS_ICON_CLASSNAMES}
                            />
                        </span>
                    </button>
                    <button
                        onClick={() => handleSaveEditedTaskButtonClick(task.id)}
                        className={
                            editedValue === task.value
                                ? `${twMerge(
                                      TASK_ACTIONS_BTN_CLASSNAMES,
                                      'cursor-default'
                                  )}`
                                : `${TASK_ACTIONS_BTN_CLASSNAMES}`
                        }
                    >
                        <span>
                            <CheckIcon
                                className={
                                    editedValue === task.value
                                        ? `${twMerge(
                                              TASK_ACTIONS_ICON_CLASSNAMES,
                                              'group-hover:text-none text-[#cdc1ff] '
                                          )}`
                                        : `${TASK_ACTIONS_ICON_CLASSNAMES}`
                                }
                            />
                        </span>
                    </button>
                </>
            ) : (
                <>
                    <button
                        onClick={() => onRemoveTaskButtonClick(task.id)}
                        className={TASK_ACTIONS_BTN_CLASSNAMES}
                    >
                        <span>
                            <TrashIcon
                                className={TASK_ACTIONS_ICON_CLASSNAMES}
                            />
                        </span>
                    </button>
                    <button
                        onClick={() => handleEditTaskButtonClick(task.id)}
                        className={TASK_ACTIONS_BTN_CLASSNAMES}
                    >
                        <span>
                            <PencilSquareIcon
                                className={TASK_ACTIONS_ICON_CLASSNAMES}
                            />
                        </span>
                    </button>
                    <button
                        onClick={() =>
                            handleMarkTaskCompletedButtonClick(task.id)
                        }
                        className={TASK_ACTIONS_BTN_CLASSNAMES}
                    >
                        {!task.completed ? (
                            <span>
                                <CheckIcon
                                    className={TASK_ACTIONS_ICON_CLASSNAMES}
                                />
                            </span>
                        ) : (
                            <span>
                                <XMarkIcon
                                    className={TASK_ACTIONS_ICON_CLASSNAMES}
                                />
                            </span>
                        )}
                    </button>
                </>
            )}
        </div>
    );
}

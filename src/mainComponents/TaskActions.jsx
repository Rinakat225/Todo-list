import {XMarkIcon} from '@heroicons/react/20/solid';
import {TrashIcon} from '@heroicons/react/20/solid';
import {PencilSquareIcon} from '@heroicons/react/20/solid';
import {CheckIcon} from '@heroicons/react/20/solid';
import {twMerge} from 'tailwind-merge';

export default function TaskActions({
    userInput,
    setUserInput,
    taskInEditMode,
    setTaskInEditMode,
    editedInput,
    setEditedInput,
    onRemoveTaskButtonClick,
}) {
    const handleEditTaskButtonClick = (id) => {
        setTaskInEditMode(id);
        setEditedInput(userInput.newTask);
    };

    const handleCancelEditingModeButtonClick = () => {
        setTaskInEditMode('');
        setEditedInput('');
    };

    const handleSaveEditedTaskButtonClick = (id) => {
        if (!editedInput) {
            return;
        }

        setUserInput((tasks) =>
            tasks.map((task) =>
                task.id === id
                    ? {
                          ...task,
                          newTask: editedInput,
                      }
                    : task
            )
        );
        setTaskInEditMode('');
    };

    const handleMarkTaskCompletedButtonClick = (id) => {
        setUserInput((task) => {
            const taskIndex = task.findIndex((task) => task.id === id);
            if (taskIndex === -1) {
                return task;
            }

            const updatedTask = {
                ...task[taskIndex],
                taskCompleted: !task[taskIndex].taskCompleted,
            };
            const newTasks = [...task];
            newTasks[taskIndex] = updatedTask;

            newTasks.sort(
                (previousTask, currentTask) =>
                    Number(previousTask.taskCompleted) -
                    Number(currentTask.taskCompleted)
            );

            return newTasks;
        });
    };
    const TASK_ACTIONS_BTN_CLASSNAMES =
        'group w-8 h-8 rounded-full flex justify-center items-center shadow-inner bg-[#f8f9fa] dark:bg-[#3d3c53]';

    const TASK_ACTIONS_ICON_CLASSNAMES =
        'size-4 text-[#7371fc] dark:text-[#cdc1ff] group-hover:text-[#cdc1ff] dark:group-hover:text-[#7371fc]';

    return (
        <div className="flex gap-1">
            {taskInEditMode === userInput.id ? (
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
                        onClick={() =>
                            handleSaveEditedTaskButtonClick(userInput.id)
                        }
                        className={TASK_ACTIONS_BTN_CLASSNAMES}
                    >
                        <span>
                            <CheckIcon
                                className={
                                    !editedInput
                                        ? `${twMerge(
                                              TASK_ACTIONS_ICON_CLASSNAMES,
                                              'group-hover:text-none text-[#cdc1ff]'
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
                        onClick={() => onRemoveTaskButtonClick(userInput.id)}
                        className={TASK_ACTIONS_BTN_CLASSNAMES}
                    >
                        <span>
                            <TrashIcon
                                className={TASK_ACTIONS_ICON_CLASSNAMES}
                            />
                        </span>
                    </button>
                    <button
                        onClick={() => handleEditTaskButtonClick(userInput.id)}
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
                            handleMarkTaskCompletedButtonClick(userInput.id)
                        }
                        className={TASK_ACTIONS_BTN_CLASSNAMES}
                    >
                        {!userInput.taskCompleted ? (
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

import {XMarkIcon} from '@heroicons/react/20/solid';
import {TrashIcon} from '@heroicons/react/20/solid';
import {PencilSquareIcon} from '@heroicons/react/20/solid';
import {CheckIcon} from '@heroicons/react/20/solid';
import ActionsButton from './ActionsButton';

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

    return (
        <div className="flex gap-1">
            {currentTaskId === task.id ? (
                <>
                    <ActionsButton
                        onClick={() => handleCancelEditingModeButtonClick()}
                        icon={<XMarkIcon />}
                    />
                    <ActionsButton
                        onClick={() => handleSaveEditedTaskButtonClick(task.id)}
                        className={
                            editedValue === task.value && 'cursor-default'
                        }
                        icon={
                            <CheckIcon
                                className={
                                    editedValue === task.value &&
                                    'text-[#cdc1ff]'
                                }
                            />
                        }
                    />
                </>
            ) : (
                <>
                    <ActionsButton
                        onClick={() => onRemoveTaskButtonClick(task.id)}
                        icon={<TrashIcon />}
                    />

                    <ActionsButton
                        onClick={() => handleEditTaskButtonClick(task.id)}
                        icon={<PencilSquareIcon />}
                    />

                    <ActionsButton
                        onClick={() =>
                            handleMarkTaskCompletedButtonClick(task.id)
                        }
                        icon={!task.completed ? <CheckIcon /> : <XMarkIcon />}
                    />
                </>
            )}
        </div>
    );
}

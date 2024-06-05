import {twMerge} from 'tailwind-merge';

import {ChevronUpIcon} from '@heroicons/react/24/outline';
import {ChevronDownIcon} from '@heroicons/react/24/outline';
import {XMarkIcon} from '@heroicons/react/20/solid';
import {TrashIcon} from '@heroicons/react/20/solid';
import {PencilSquareIcon} from '@heroicons/react/20/solid';
import {CheckIcon} from '@heroicons/react/20/solid';

export default function TaskList({
    userInput,
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
}) {
    const TASKLIST_DEFAULT_TEXT_CLASSNAMES =
        'text-base font-semibold flex justify-between items-center p-3 text-[#172a3a] dark:text-[#54edfe]';

    const TASKLIST_ICONS_CLASSNAMES =
        'mr-5 w-15 absolute flex items-center justify-center translate-x-1/2 -translate-y-1/2';

    const TASKLIST_BTN_CLASSNAMES =
        'block relative rounded-full bg-[#65717b] w-8 h-8 relative inline-block hover:ring-2 hover:ring-[#54edfe]';

    return (
        <div className="flex flex-col p-2 justify-center">
            <div
                className={
                    completed
                        ? `${twMerge(
                              TASKLIST_DEFAULT_TEXT_CLASSNAMES,
                              'text-[#65717b] dark:text-[#65717b] line-through decoration-[#54edfe] decoration-2'
                          )}`
                        : `${TASKLIST_DEFAULT_TEXT_CLASSNAMES}`
                }
            >
                <div className="flex gap-3 items-center">
                    <div className="flex flex-col">
                        <button onClick={() => onMoveTaskUpButtonClick(index)}>
                            <ChevronUpIcon className="size-5 hover:text-[#54edfe] dark:hover:text-[#65717b]" />
                        </button>
                        <button
                            onClick={() => onMoveTaskDownButtonClick(index)}
                        >
                            <ChevronDownIcon className="size-5 hover:text-[#54edfe] dark:hover:text-[#65717b]" />
                        </button>
                    </div>
                    <ul>
                        <li key={id}>
                            {edit === id ? (
                                <input
                                    className="bg-[#65717b] dark:bg-[#54edfe] text-[#54edfe] dark:text-black rounded w-30 hover:ring-2 hover:ring-[#54edfe] hover:dark:ring-[#65717b]"
                                    type="text"
                                    defaultValue={userInput}
                                    value={editedInput}
                                    onChange={(event) =>
                                        setEditedInput(event.target.value)
                                    }
                                />
                            ) : (
                                userInput
                            )}
                        </li>
                    </ul>
                </div>

                <div className="flex gap-1">
                    {edit === id ? (
                        <button
                            onClick={() => onCancelEditingModeButtonClick()}
                            className={twMerge(
                                TASKLIST_BTN_CLASSNAMES,
                                'hover:dark:ring-[#54edfe]'
                            )}
                        >
                            <span className={TASKLIST_ICONS_CLASSNAMES}>
                                <XMarkIcon fill="#54edfe" className="size-4" />
                            </span>
                        </button>
                    ) : (
                        <button
                            onClick={() => onRemoveTaskButtonClick(id)}
                            className={TASKLIST_BTN_CLASSNAMES}
                        >
                            <span className={TASKLIST_ICONS_CLASSNAMES}>
                                <TrashIcon fill="#54edfe" className="size-4" />
                            </span>
                        </button>
                    )}
                    {edit === id ? (
                        <button
                            onClick={() => onSaveEditedTaskButtonClick(id)}
                            className={twMerge(
                                TASKLIST_BTN_CLASSNAMES,
                                'hover:dark:ring-[#54edfe]'
                            )}
                        >
                            <span className={TASKLIST_ICONS_CLASSNAMES}>
                                <CheckIcon fill="#54edfe" className="size-4" />
                            </span>
                        </button>
                    ) : (
                        <button
                            onClick={() => onEditTaskButtonClick(id)}
                            className={TASKLIST_BTN_CLASSNAMES}
                        >
                            <span className={TASKLIST_ICONS_CLASSNAMES}>
                                <PencilSquareIcon
                                    fill="#54edfe"
                                    className="size-4"
                                />
                            </span>
                        </button>
                    )}

                    {completed ? (
                        <button
                            onClick={() => onMarkTaskCompletedButtonClick(id)}
                            className={
                                edit !== id
                                    ? `${TASKLIST_BTN_CLASSNAMES}`
                                    : 'hidden'
                            }
                        >
                            <span
                                className={twMerge(
                                    TASKLIST_ICONS_CLASSNAMES,
                                    'mr-0'
                                )}
                            >
                                <XMarkIcon fill="#54edfe" className="size-4" />
                            </span>
                        </button>
                    ) : (
                        <button
                            onClick={() => onMarkTaskCompletedButtonClick(id)}
                            className={
                                edit !== id
                                    ? `${TASKLIST_BTN_CLASSNAMES}`
                                    : 'hidden'
                            }
                        >
                            <span
                                className={twMerge(
                                    TASKLIST_ICONS_CLASSNAMES,
                                    'mr-0'
                                )}
                            >
                                <CheckIcon fill="#54edfe" className="size-4" />
                            </span>
                        </button>
                    )}
                </div>
            </div>
            <hr className="mt-1 border-[#172a3a] dark:border-[#54edfe] border-[0.1] min-w-72 grow" />
        </div>
    );
}

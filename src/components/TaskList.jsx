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
        'text-base font-semibold flex justify-between p-3 gap-8 text-[#172a3a] dark:text-[#54edfe]';

    const TASKLIST_BTN_CLASSNAMES =
        'mr-5 w-15 relative flex items-center justify-center';

    const TASKLIST_BEFORE_ELEMENT_CLASSNAMES =
        'before:block before:absolute before:rounded-full before:bg-[#65717b] before:w-8 before:h-8 before:top-50% before:left-50% before:-translate-x-1/4 before:-translate-y-1/4 relative inline-block';

    return (
        <div className="flex flex-col p-2">
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
                <div className="flex flex-col">
                    <button onClick={() => onMoveTaskUpButtonClick(index)}>
                        <ChevronUpIcon className="size-4" />
                    </button>
                    <button onClick={() => onMoveTaskDownButtonClick(index)}>
                        <ChevronDownIcon className="size-4" />
                    </button>
                </div>
                <ul>
                    <li key={id}>
                        {edit === id ? (
                            <input
                                className="bg-[#65717b] dark:bg-[#54edfe] text-[#54edfe] dark:text-black rounded w-30"
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

                <div>
                    {edit === id ? (
                        <span
                            className={twMerge(
                                TASKLIST_BEFORE_ELEMENT_CLASSNAMES,
                                'before:bg-[#54edfe]'
                            )}
                        >
                            <button
                                className={TASKLIST_BTN_CLASSNAMES}
                                onClick={() => onCancelEditingModeButtonClick()}
                            >
                                <XMarkIcon fill="#65717b" className="size-4" />
                            </button>
                        </span>
                    ) : (
                        <span className={TASKLIST_BEFORE_ELEMENT_CLASSNAMES}>
                            <button
                                className={TASKLIST_BTN_CLASSNAMES}
                                onClick={() => onRemoveTaskButtonClick(id)}
                            >
                                <TrashIcon fill="#54edfe" className="size-4" />
                            </button>
                        </span>
                    )}
                    {edit === id ? (
                        <span
                            className={twMerge(
                                TASKLIST_BEFORE_ELEMENT_CLASSNAMES,
                                'before:bg-[#54edfe]'
                            )}
                        >
                            <button
                                className={TASKLIST_BTN_CLASSNAMES}
                                onClick={() => onSaveEditedTaskButtonClick(id)}
                            >
                                <CheckIcon fill="#65717b" className="size-4" />
                            </button>
                        </span>
                    ) : (
                        <span className={TASKLIST_BEFORE_ELEMENT_CLASSNAMES}>
                            <button
                                className={TASKLIST_BTN_CLASSNAMES}
                                onClick={() => onEditTaskButtonClick(id)}
                            >
                                <PencilSquareIcon
                                    fill="#54edfe"
                                    className="size-4"
                                />
                            </button>
                        </span>
                    )}

                    {completed ? (
                        <span
                            className={
                                edit !== id
                                    ? `${TASKLIST_BEFORE_ELEMENT_CLASSNAMES}`
                                    : 'hidden'
                            }
                        >
                            <button
                                className={twMerge(
                                    TASKLIST_BTN_CLASSNAMES,
                                    'mr-0'
                                )}
                                onClick={() =>
                                    onMarkTaskCompletedButtonClick(id)
                                }
                            >
                                <XMarkIcon fill="#54edfe" className="size-4" />
                            </button>
                        </span>
                    ) : (
                        <span
                            className={
                                edit !== id
                                    ? `${TASKLIST_BEFORE_ELEMENT_CLASSNAMES}`
                                    : 'hidden'
                            }
                        >
                            <button
                                className={twMerge(
                                    TASKLIST_BTN_CLASSNAMES,
                                    'mr-0'
                                )}
                                onClick={() =>
                                    onMarkTaskCompletedButtonClick(id)
                                }
                            >
                                <CheckIcon fill="#54edfe" className="size-4" />
                            </button>
                        </span>
                    )}
                </div>
            </div>
            <hr className="mt-1 border-[#172a3a] dark:border-[#54edfe] border-[0.1] min-w-72 grow" />
        </div>
    );
}

import {twMerge} from 'tailwind-merge';

import {ChevronUpIcon} from '@heroicons/react/24/outline';
import {ChevronDownIcon} from '@heroicons/react/24/outline';
import {XMarkIcon} from '@heroicons/react/20/solid';
import {TrashIcon} from '@heroicons/react/20/solid';
import {PencilSquareIcon} from '@heroicons/react/20/solid';
import {CheckIcon} from '@heroicons/react/20/solid';
import {MinusCircleIcon} from '@heroicons/react/16/solid';

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
}) {
    const TASKLIST_DEFAULT_TEXT_CLASSNAMES =
        'text-base font-semibold flex justify-between items-center p-3 text-[#172a3a] dark:text-[#54edfe]';

    const TASKLIST_ICONS_CLASSNAMES =
        'mr-5 w-15 absolute flex items-center justify-center translate-x-1/2 -translate-y-1/2';

    const TASKLIST_BTN_CLASSNAMES =
        'block relative rounded-full bg-[#65717b] w-8 h-8 relative inline-block hover:ring-2 hover:ring-[#54edfe]';

    const TASKLIST_EDIT_MODE_CLASSNAMES =
        'bg-[#65717b] dark:bg-[#54edfe] text-[#54edfe] dark:text-black rounded w-30 hover:ring-2 hover:ring-[#54edfe] hover:dark:ring-[#65717b]';

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
                    <ul className="flex flex-col gap-1">
                        <li key={id}>
                            {edit === id ? (
                                <input
                                    className={TASKLIST_EDIT_MODE_CLASSNAMES}
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
                        <div className="flex gap-1 items-center">
                            {tag ? (
                                <li className="text-xs text-[#65717b]">
                                    #
                                    {edit === id ? (
                                        <input
                                            className={twMerge(
                                                TASKLIST_EDIT_MODE_CLASSNAMES,
                                                'w-16'
                                            )}
                                            type="text"
                                            defaultValue={tag}
                                            value={editedTag}
                                            onChange={(event) =>
                                                setEditedTag(event.target.value)
                                            }
                                        />
                                    ) : (
                                        tag
                                    )}
                                </li>
                            ) : (
                                <li>
                                    {edit === id && (
                                        <input
                                            className={twMerge(
                                                TASKLIST_EDIT_MODE_CLASSNAMES,
                                                'w-16 text-xs'
                                            )}
                                            type="text"
                                            placeholder="add tag..."
                                            value={editedTag}
                                            onChange={(event) =>
                                                setEditedTag(event.target.value)
                                            }
                                        />
                                    )}
                                </li>
                            )}

                            {tag && (
                                <button
                                    onClick={() => onRemoveTagButtonClick(id)}
                                    className={twMerge(
                                        TASKLIST_BTN_CLASSNAMES,
                                        'rounded h-4 w-4 hover:dark:ring-[#54edfe]'
                                    )}
                                >
                                    <span className={TASKLIST_ICONS_CLASSNAMES}>
                                        <MinusCircleIcon
                                            fill="#54edfe"
                                            className="size-2"
                                        />
                                    </span>
                                </button>
                            )}
                        </div>
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

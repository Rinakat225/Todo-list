import {twMerge} from 'tailwind-merge';
import {format} from 'date-fns';

import {ChevronUpIcon} from '@heroicons/react/24/outline';
import {ChevronDownIcon} from '@heroicons/react/24/outline';
import {MinusCircleIcon} from '@heroicons/react/16/solid';
import {CalendarIcon} from 'lucide-react';

export default function Task({
    userInput,
    id,
    tag,
    edit,
    editedInput,
    setEditedInput,
    index,
    onMoveTaskUpButtonClick,
    onMoveTaskDownButtonClick,
    editedTag,
    setEditedTag,
    onRemoveTagButtonClick,
    date,
    newDate,
}) {
    const TASKLIST_EDIT_MODE_CLASSNAMES =
        'w-30 p-1.5 rounded shadow-inner bg-[#e9ecef] dark:bg-[#686779] dark:text-[#cdc1ff] text-black dark:text-black';

    return (
        <div className="flex gap-3 items-center">
            <div className="flex flex-col">
                <button onClick={() => onMoveTaskUpButtonClick(index)}>
                    <ChevronUpIcon className="size-5 hover:text-[#cdc1ff] dark:hover:text-[#7371fc]" />
                </button>
                <button onClick={() => onMoveTaskDownButtonClick(index)}>
                    <ChevronDownIcon className="size-5 hover:text-[#cdc1ff] dark:hover:text-[#7371fc]" />
                </button>
            </div>

            <ul className="flex flex-col gap-1">
                <div className="flex gap-2 items-center text-xs text-[#65717b]">
                    {newDate && (
                        <div className="flex items-center gap-0.5 mr-2">
                            <CalendarIcon className="h-3 w-3" />
                            <span>{format(newDate, 'PP')}</span>
                        </div>
                    )}
                    {tag ? (
                        <li>
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
                            className="rounded h-4 w-4"
                        >
                            <span>
                                <MinusCircleIcon className="size-2 text-[#7371fc]" />
                            </span>
                        </button>
                    )}
                </div>
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
            </ul>
        </div>
    );
}

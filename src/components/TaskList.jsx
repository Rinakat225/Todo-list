import {twMerge} from 'tailwind-merge';

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
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="#65717b"
                                    className="size-4"
                                >
                                    <path d="M6.28 5.22a.75.75 0 0 0-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 1 0 1.06 1.06L10 11.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L11.06 10l3.72-3.72a.75.75 0 0 0-1.06-1.06L10 8.94 6.28 5.22Z" />
                                </svg>
                            </button>
                        </span>
                    ) : (
                        <span className={TASKLIST_BEFORE_ELEMENT_CLASSNAMES}>
                            <button
                                className={TASKLIST_BTN_CLASSNAMES}
                                onClick={() => onRemoveTaskButtonClick(id)}
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 16 16"
                                    fill="#54edfe"
                                    className="size-4"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M5 3.25V4H2.75a.75.75 0 0 0 0 1.5h.3l.815 8.15A1.5 1.5 0 0 0 5.357 15h5.285a1.5 1.5 0 0 0 1.493-1.35l.815-8.15h.3a.75.75 0 0 0 0-1.5H11v-.75A2.25 2.25 0 0 0 8.75 1h-1.5A2.25 2.25 0 0 0 5 3.25Zm2.25-.75a.75.75 0 0 0-.75.75V4h3v-.75a.75.75 0 0 0-.75-.75h-1.5ZM6.05 6a.75.75 0 0 1 .787.713l.275 5.5a.75.75 0 0 1-1.498.075l-.275-5.5A.75.75 0 0 1 6.05 6Zm3.9 0a.75.75 0 0 1 .712.787l-.275 5.5a.75.75 0 0 1-1.498-.075l.275-5.5a.75.75 0 0 1 .786-.711Z"
                                        clipRule="evenodd"
                                    />
                                </svg>
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
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="#65717b"
                                    className="size-4"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </button>
                        </span>
                    ) : (
                        <span className={TASKLIST_BEFORE_ELEMENT_CLASSNAMES}>
                            <button
                                className={TASKLIST_BTN_CLASSNAMES}
                                onClick={() => onEditTaskButtonClick(id)}
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 16 16"
                                    fill="#54edfe"
                                    className="size-4"
                                >
                                    <path d="M13.488 2.513a1.75 1.75 0 0 0-2.475 0L6.75 6.774a2.75 2.75 0 0 0-.596.892l-.848 2.047a.75.75 0 0 0 .98.98l2.047-.848a2.75 2.75 0 0 0 .892-.596l4.261-4.262a1.75 1.75 0 0 0 0-2.474Z" />
                                    <path d="M4.75 3.5c-.69 0-1.25.56-1.25 1.25v6.5c0 .69.56 1.25 1.25 1.25h6.5c.69 0 1.25-.56 1.25-1.25V9A.75.75 0 0 1 14 9v2.25A2.75 2.75 0 0 1 11.25 14h-6.5A2.75 2.75 0 0 1 2 11.25v-6.5A2.75 2.75 0 0 1 4.75 2H7a.75.75 0 0 1 0 1.5H4.75Z" />
                                </svg>
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
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="#54edfe"
                                    className="size-4"
                                >
                                    <path d="M6.28 5.22a.75.75 0 0 0-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 1 0 1.06 1.06L10 11.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L11.06 10l3.72-3.72a.75.75 0 0 0-1.06-1.06L10 8.94 6.28 5.22Z" />
                                </svg>
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
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="#54edfe"
                                    className="size-4"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </button>
                        </span>
                    )}
                </div>
            </div>
            <hr className="mt-1 border-[#172a3a] dark:border-[#54edfe] border-[0.1] min-w-72 grow" />
        </div>
    );
}

import {format} from 'date-fns';
import {CalendarIcon} from 'lucide-react';

export default function TaskContent({
    userInput,
    id,
    tag,
    taskInEditMode,
    editedInput,
    setEditedInput,
    newDate,
    taskCompleted,
}) {
    return (
        <ul className="flex flex-col cursor-grab mb-2 gap-2 min-h-[3.5rem] grow p-1.5">
            <li
                className={
                    taskCompleted &&
                    'text-[#65717b] dark:text-[#65717b] line-through decoration-[#65717b] decoration-2'
                }
                key={id}
            >
                <div className="min-h-8 flex items-center text-xs text-[#65717b]">
                    {newDate && (
                        <span className="flex items-center gap-0.5 mr-2">
                            <CalendarIcon className="h-3 w-3" />
                            {format(newDate, 'PP')}
                        </span>
                    )}
                    {tag && <span>#{tag.label}</span>}
                </div>
                {taskInEditMode === id ? (
                    <input
                        className="min-h-6 max-h-6 w-30 p-1.5 rounded shadow-inner bg-[#e9ecef] dark:bg-[#686779] text-black dark:text-black"
                        type="text"
                        defaultValue={userInput}
                        value={editedInput}
                        onChange={(event) => setEditedInput(event.target.value)}
                    />
                ) : (
                    userInput
                )}
            </li>
        </ul>
    );
}

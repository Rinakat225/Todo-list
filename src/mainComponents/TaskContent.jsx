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
        <div>
            <div className="flex items-center text-sm text-[#65717b] dark:text-white mb-0.5">
                {newDate && (
                    <span className="flex items-center gap-0.5 mr-3">
                        <CalendarIcon className="h-3 w-3" />
                        {format(newDate, 'PP')}
                    </span>
                )}
                {tag && <span>#{tag.label}</span>}
            </div>
            <div className="flex flex-col cursor-grab grow">
                <div>
                    {taskInEditMode === id ? (
                        <input
                            className="min-h-6 max-h-6 w-30 p-1.5 rounded shadow-inner bg-[#e9ecef] dark:bg-[#686779] text-black dark:text-black"
                            type="text"
                            defaultValue={userInput}
                            value={editedInput}
                            onChange={(event) =>
                                setEditedInput(event.target.value)
                            }
                        />
                    ) : (
                        <span
                            className={
                                taskCompleted &&
                                'text-[#65717b] dark:text-[#65717b] line-through decoration-[#65717b] decoration-2'
                            }
                            key={id}
                        >
                            {userInput}
                        </span>
                    )}
                </div>
            </div>
        </div>
    );
}

import {format} from 'date-fns';
import {CalendarIcon} from 'lucide-react';

export default function TaskContent({
    task,
    currentTaskId,
    setEditedValue,
    editedValue,
    sortBy,
}) {
    return (
        <div>
            <div className="flex items-center text-sm text-[#7371fc] dark:text-[#7371fc] mb-0.5">
                {task.dueDate && (
                    <span className="flex items-center gap-0.5 mr-3">
                        <CalendarIcon className="size-3" />
                        {format(task.dueDate, 'PP')}
                    </span>
                )}
                {task.tag && <span>#{task.tag.label}</span>}
            </div>

            <div className="flex flex-col grow mt-2">
                {currentTaskId === task.id ? (
                    <input
                        className="max-h-6 p-1.5 rounded shadow-inner bg-[#e9ecef] dark:bg-[#686779] text-black dark:text-[#cdc1ff] font-normal"
                        type="text"
                        defaultValue={task.value}
                        value={editedValue}
                        onChange={(event) => setEditedValue(event.target.value)}
                    />
                ) : (
                    <span
                        className={
                            task.completed &&
                            'text-[#747f88] line-through decoration-[#a3aab0] decoration-2'
                        }
                        key={task.id}
                    >
                        {task.value}
                    </span>
                )}
                {sortBy !== null && (
                    <div className="text-xs text-[#65717b] dark:text-white">
                        Created on {task.creationDate.toString().slice(0, 21)}
                    </div>
                )}
            </div>
        </div>
    );
}

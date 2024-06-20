import {format} from 'date-fns';
import {CalendarIcon} from 'lucide-react';

export default function TaskContent({
    task,
    currentTaskId,
    setEditedValue,
    editedValue,
}) {
    return (
        <div>
            <div className="flex items-center text-sm text-[#65717b] dark:text-white mb-0.5">
                {task.dueDate && (
                    <span className="flex items-center gap-0.5 mr-3">
                        <CalendarIcon className="h-3 w-3" />
                        {format(task.dueDate, 'PP')}
                    </span>
                )}
                {task.tag && <span>#{task.tag.label}</span>}
            </div>

            <div className="flex flex-col grow">
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
            </div>
        </div>
    );
}

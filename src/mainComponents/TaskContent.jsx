import {format} from 'date-fns';
import {CalendarIcon} from 'lucide-react';

export default function TaskContent({
    userInput,
    taskInEditMode,
    setEditedInput,
    editedInput,
}) {
    return (
        <div>
            <div className="flex items-center text-sm text-[#65717b] dark:text-white mb-0.5">
                {userInput.taskDate && (
                    <span className="flex items-center gap-0.5 mr-3">
                        <CalendarIcon className="h-3 w-3" />
                        {format(userInput.taskDate, 'PP')}
                    </span>
                )}
                {userInput.selectedTag && (
                    <span>#{userInput.selectedTag.label}</span>
                )}
            </div>

            <div className="flex flex-col grow">
                {taskInEditMode === userInput.id ? (
                    <input
                        className="min-h-6 max-h-6 w-30 p-1.5 rounded shadow-inner bg-[#e9ecef] dark:bg-[#686779] text-black dark:text-[#cdc1ff] font-normal"
                        type="text"
                        defaultValue={userInput.newTask}
                        value={editedInput}
                        onChange={(event) => setEditedInput(event.target.value)}
                    />
                ) : (
                    <span
                        className={
                            userInput.taskCompleted &&
                            'text-[#65717b] dark:text-[#65717b] line-through decoration-[#65717b] decoration-2'
                        }
                        key={userInput.id}
                    >
                        {userInput.newTask}
                    </span>
                )}
            </div>
        </div>
    );
}

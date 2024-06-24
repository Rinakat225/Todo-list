import {ChevronUpIcon} from '@heroicons/react/24/outline';
import {ChevronDownIcon} from '@heroicons/react/24/outline';
import {twMerge} from 'tailwind-merge';

const MoveTaskButton = ({direction, index, setTasks, tasksArray}) => {
    const handleMoveTask = () => {
        if (direction === 'up' && index === 0) return;
        if (direction === 'down' && index === tasksArray.length - 1) return;

        setTasks((tasks) => {
            const reorderedTasks = [...tasks];
            const task = reorderedTasks.splice(index, 1)[0];
            const newIndex = direction === 'up' ? index - 1 : index + 1;
            reorderedTasks.splice(newIndex, 0, task);

            return reorderedTasks;
        });
    };

    const BUTTON_DEFAULT_STYLE =
        'size-5 hover:text-[#cdc1ff] dark:hover:text-[#7371fc]';

    const BUTTON_DISABLED_STYLE = 'size-5 hover:text-none cursor-default';

    return (
        <button onClick={() => handleMoveTask()}>
            {direction === 'up' ? (
                <ChevronUpIcon
                    className={twMerge(
                        BUTTON_DEFAULT_STYLE,
                        index === 0 && BUTTON_DISABLED_STYLE
                    )}
                />
            ) : (
                <ChevronDownIcon
                    className={twMerge(
                        BUTTON_DEFAULT_STYLE,
                        index === tasksArray.length - 1 && BUTTON_DISABLED_STYLE
                    )}
                />
            )}
        </button>
    );
};

export default function ReorderButtonGroup({index, setTasks, tasksArray}) {
    return (
        <div className="flex flex-col">
            <MoveTaskButton
                direction="up"
                index={index}
                setTasks={setTasks}
                tasksArray={tasksArray}
            />
            <MoveTaskButton
                direction="down"
                index={index}
                setTasks={setTasks}
                tasksArray={tasksArray}
            />
        </div>
    );
}

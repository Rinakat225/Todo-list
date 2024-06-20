import {ChevronUpIcon} from '@heroicons/react/24/outline';
import {ChevronDownIcon} from '@heroicons/react/24/outline';

const MoveTaskButton = ({direction, index, setTasks, tasksArray}) => {
    const handleMoveTask = () => {
        if (direction === 'up' && index === 0) return;
        if (direction === 'down' && index === tasksArray.length - 1) return;

        setTasks((tasks) => {
            const reorderedTask = [...tasks];
            const [task] = reorderedTask.splice(index, 1);
            const newIndex = direction === 'up' ? index - 1 : index + 1;
            reorderedTask.splice(newIndex, 0, task);

            return reorderedTask;
        });
    };

    const BUTTON_DEFAULT_STYLE =
        'size-5 hover:text-[#cdc1ff] dark:hover:text-[#7371fc]';

    const BUTTON_DISABLED_STYLE = 'size-5 hover:text-none cursor-default';

    return (
        <button onClick={() => handleMoveTask()}>
            {direction === 'up' ? (
                <ChevronUpIcon
                    className={
                        index === 0
                            ? BUTTON_DISABLED_STYLE
                            : BUTTON_DEFAULT_STYLE
                    }
                />
            ) : (
                <ChevronDownIcon
                    className={
                        index === tasksArray.length - 1
                            ? BUTTON_DISABLED_STYLE
                            : BUTTON_DEFAULT_STYLE
                    }
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

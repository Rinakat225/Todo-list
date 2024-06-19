import {ChevronUpIcon} from '@heroicons/react/24/outline';
import {ChevronDownIcon} from '@heroicons/react/24/outline';

const MoveTaskButton = ({direction, index, setUserInput, userInput}) => {
    const handleMoveTask = () => {
        if (direction === 'up' && index === 0) return;
        if (direction === 'down' && index === userInput.length - 1) return;

        setUserInput((tasks) => {
            const reorderedTask = [...tasks];
            const [task] = reorderedTask.splice(index, 1);
            const newIndex = direction === 'up' ? index - 1 : index + 1;
            reorderedTask.splice(newIndex, 0, task);

            return reorderedTask;
        });
    };

    return (
        <button onClick={() => handleMoveTask()}>
            {direction === 'up' ? (
                <ChevronUpIcon className="size-5 hover:text-[#cdc1ff] dark:hover:text-[#7371fc]" />
            ) : (
                <ChevronDownIcon className="size-5 hover:text-[#cdc1ff] dark:hover:text-[#7371fc]" />
            )}
        </button>
    );
};

export default function ReorderButtonGroup({index, setUserInput, userInput}) {
    return (
        <div className="flex flex-col">
            <MoveTaskButton
                direction="up"
                index={index}
                setUserInput={setUserInput}
                userInput={userInput}
            />
            <MoveTaskButton
                direction="down"
                index={index}
                setUserInput={setUserInput}
                userInput={userInput}
            />
        </div>
    );
}

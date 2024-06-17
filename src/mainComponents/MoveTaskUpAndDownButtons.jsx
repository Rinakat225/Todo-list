import {ChevronUpIcon} from '@heroicons/react/24/outline';
import {ChevronDownIcon} from '@heroicons/react/24/outline';

export default function MoveTaskUpAndDownButtons({
    index,
    onMoveTaskUpButtonClick,
    onMoveTaskDownButtonClick,
}) {
    return (
        <div className="flex flex-col">
            <button onClick={() => onMoveTaskUpButtonClick(index)}>
                <ChevronUpIcon className="size-5 hover:text-[#cdc1ff] dark:hover:text-[#7371fc]" />
            </button>
            <button onClick={() => onMoveTaskDownButtonClick(index)}>
                <ChevronDownIcon className="size-5 hover:text-[#cdc1ff] dark:hover:text-[#7371fc]" />
            </button>
        </div>
    );
}

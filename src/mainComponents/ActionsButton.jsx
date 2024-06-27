import {twMerge} from 'tailwind-merge';

export default function ActionsButton({onClick, icon, className}) {
    return (
        <button
            onClick={onClick}
            className={twMerge(
                'group size-8 rounded-full flex justify-center items-center shadow-sm bg-[#f8f9fa] dark:bg-[#3d3c53]',
                className
            )}
        >
            <span
                className={twMerge(
                    'size-4 text-[#7371fc] dark:text-[#cdc1ff] group-hover:text-[#cdc1ff] dark:group-hover:text-[#7371fc] group-cursor-pointer',
                    className
                )}
            >
                {icon}
            </span>
        </button>
    );
}

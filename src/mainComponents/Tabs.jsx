import {twMerge} from 'tailwind-merge';

const Tab = ({currentTab, onClick, children, tab}) => {
    return (
        <button
            className={twMerge(
                'py-2 w-1/3 rounded text-base shadow-md font-normal text-[#7371fc] hover:text-[#cdc1ff] bg-[#f8f9fa] dark:bg-[#272640]',
                currentTab === tab &&
                    'bg-[#7371fc] hover:text-none dark:hover:text-none dark:bg-[#7371fc] text-white dark:text-white font-semibold cursor-default'
            )}
            onClick={onClick}
        >
            {children}
        </button>
    );
};

export default function Tabs({tasks, setCurrentTab, currentTab}) {
    return (
        <>
            {tasks.length > 0 && (
                <div className="flex justify-between space-x-1 mt-10 mb-3">
                    <Tab
                        tab="all"
                        currentTab={currentTab}
                        children="All tasks"
                        onClick={() => setCurrentTab('all')}
                    />
                    <Tab
                        tab="inProgress"
                        currentTab={currentTab}
                        children="In progress"
                        onClick={() => setCurrentTab('inProgress')}
                    />
                    <Tab
                        tab="completed"
                        currentTab={currentTab}
                        children="Completed"
                        onClick={() => setCurrentTab('completed')}
                    />
                </div>
            )}
        </>
    );
}

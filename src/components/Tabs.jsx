import {twMerge} from 'tailwind-merge';

export default function Tabs({setCurrentTab, currentTab}) {
    const TABS_DEFAULT_CLASSNAMES =
        'text-lg text-[#172a3a] dark:text-[#65717b] font-semibold p-1 w-1/3';
    const TABS_ACTIVE_CLASSNAMES =
        'bg-[#65717b] dark:bg-[#65717b] text-[#54edfe] dark:text-[#54edfe]';

    return (
        <div className="overflow-hidden flex justify-between border-solid border-b-0 border-[1px] border-[#172a3a] dark:border-[#54edfe] rounded-t-lg">
            <button
                className={
                    currentTab === 'all'
                        ? `${twMerge(
                              TABS_DEFAULT_CLASSNAMES,
                              TABS_ACTIVE_CLASSNAMES
                          )}`
                        : `${TABS_DEFAULT_CLASSNAMES}`
                }
                onClick={() => setCurrentTab('all')}
            >
                All tasks
            </button>
            <button
                className={
                    currentTab === 'inProgress'
                        ? `${twMerge(
                              TABS_DEFAULT_CLASSNAMES,
                              TABS_ACTIVE_CLASSNAMES,
                              'border-[#172a3a] dark:border-[#54edfe] border-r-[1px] border-l-[1px]'
                          )}`
                        : `${twMerge(
                              TABS_DEFAULT_CLASSNAMES,
                              'border-[#172a3a] dark:border-[#54edfe] border-r-[1px] border-l-[1px]'
                          )}`
                }
                onClick={() => setCurrentTab('inProgress')}
            >
                In progress
            </button>
            <button
                className={
                    currentTab === 'completed'
                        ? `${twMerge(
                              TABS_DEFAULT_CLASSNAMES,
                              TABS_ACTIVE_CLASSNAMES
                          )}`
                        : `${TABS_DEFAULT_CLASSNAMES}`
                }
                onClick={() => setCurrentTab('completed')}
            >
                Completed
            </button>
        </div>
    );
}

import {twMerge} from 'tailwind-merge';

export default function Tabs({tasks, setCurrentTab, currentTab}) {
    const TABS_DEFAULT_CLASSNAMES =
        'py-2 w-1/3 rounded text-base shadow-inner font-normal text-[#7371fc] dark:text-[#cdc1ff] dark:hover:text-[#7371fc] hover:text-[#cdc1ff] bg-[#f8f9fa] dark:bg-[#23223a]';
    const TABS_ACTIVE_CLASSNAMES =
        'bg-[#7371fc] hover:text-white dark:bg-[#525166] text-white dark:text-white font-semibold';

    return (
        <>
            {tasks.length > 0 && (
                <div className="flex justify-between space-x-1 mt-10 mb-3">
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
                                      TABS_ACTIVE_CLASSNAMES
                                  )}`
                                : `${twMerge(TABS_DEFAULT_CLASSNAMES)}`
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
            )}
        </>
    );
}

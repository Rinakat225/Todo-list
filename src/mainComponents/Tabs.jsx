import {twMerge} from 'tailwind-merge';

export default function Tabs({showTasks, setCurrentTab, currentTab}) {
    const TABS_DEFAULT_CLASSNAMES =
        'p-1 w-1/3 rounded text-lg shadow-inner font-normal text-[#7371fc] hover:text-[#cdc1ff] bg-[#f8f9fa] dark:bg-[#686779]';
    const TABS_ACTIVE_CLASSNAMES =
        'bg-[#7371fc] hover:text-white dark:bg-[#525166] text-white dark:text-[#cdc1ff]';

    return (
        <>
            {showTasks && (
                <div className="overflow-hidden flex justify-between gap-2 mb-3">
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

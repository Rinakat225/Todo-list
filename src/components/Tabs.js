export default function Tabs({setCurrentTab, currentTab}) {
    return (
        <div className="font-semibold text-[#172a3a] dark:text-[#65717b] overflow-hidden flex justify-between text-lg border-solid border-b-0 border-[1px] border-[#172a3a] dark:border-[#54edfe] rounded-t-lg ">
            <button
                className={
                    currentTab === 'all'
                        ? 'w-1/3 bg-[#65717b] dark:bg-[#65717b] text-[#54edfe] '
                        : 'p-1 w-1/3'
                }
                onClick={() => setCurrentTab('all')}
            >
                All tasks
            </button>
            <button
                className={
                    currentTab === 'inProgress'
                        ? 'w-1/3 bg-[#65717b]  dark:bg-[#65717b] text-[#54edfe] '
                        : 'p-1 border-solid border-[#172a3a] dark:border-[#54edfe] border-r-[1px] border-l-[1px] w-1/3 '
                }
                onClick={() => setCurrentTab('inProgress')}
            >
                In progress
            </button>
            <button
                className={
                    currentTab === 'completed'
                        ? 'w-1/3 bg-[#65717b]  dark:bg-[#65717b] text-[#54edfe] '
                        : 'p-1 w-1/3'
                }
                onClick={() => setCurrentTab('completed')}
            >
                Completed
            </button>
        </div>
    );
}

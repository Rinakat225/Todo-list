import {useState, useEffect} from 'react';
import NewTaskForm from './mainComponents/NewTaskForm';
import Tasklist from './mainComponents/TaskList';
import TaskSort from './mainComponents/TaskSort';
import TaskFilter from './mainComponents/TaskFilter';
import {LightBulbIcon} from '@heroicons/react/24/outline';

export default function TodoList() {
    const [tasks, setTasks] = useState(
        JSON.parse(localStorage.getItem('tasks')) || []
    );
    const [darkModeOn, setDarkModeOn] = useState(false);
    const [sortBy, setSortBy] = useState(null);
    const [currentFilter, setCurrentFilter] = useState(null);

    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }, [tasks]);

    const handleDarkModeButtonClick = () => {
        setDarkModeOn(!darkModeOn);
        document.body.classList.toggle('dark');
    };

    const date = new Date().toDateString();

    return (
        <div className="h-lvh my-0 mx-auto flex flex-col bg-gray-100 dark:bg-[#272640]">
            <header className="flex items-center justify-between text-[#7371fc] px-2">
                <span className="w-20 text-md py-4">{date}</span>

                <h1 className="text-4xl font-bold text-[#7371fc] py-4">
                    To do List
                </h1>

                <button className="w-20 py-4 group cursor-default">
                    <LightBulbIcon
                        onClick={() => handleDarkModeButtonClick()}
                        className="ml-auto mr-auto size-6 text-[#7371fc] hover:text-[#cdc1ff] cursor-pointer"
                    />
                </button>
            </header>

            <main className="self-center text-white">
                <NewTaskForm
                    tasks={tasks}
                    setTasks={setTasks}
                    setSortBy={setSortBy}
                    setCurrentFilter={setCurrentFilter}
                />
                {tasks.length > 1 && (
                    <div className="flex gap-1 w-full">
                        <TaskSort
                            setTasks={setTasks}
                            sortBy={sortBy}
                            setSortBy={setSortBy}
                        />

                        <TaskFilter
                            currentFilter={currentFilter}
                            setCurrentFilter={setCurrentFilter}
                        />
                    </div>
                )}
                {tasks.length > 0 && (
                    <Tasklist
                        tasks={tasks}
                        setTasks={setTasks}
                        sortBy={sortBy}
                        currentFilter={currentFilter}
                    />
                )}
            </main>
        </div>
    );
}

import {useState} from 'react';
import NewTaskForm from './mainComponents/NewTaskForm';
import Tasklist from './mainComponents/TaskList';
import {LightBulbIcon} from '@heroicons/react/24/outline';
import {format} from 'date-fns';

export default function TodoList() {
    const [userInput, setUserInput] = useState([]);
    const [darkModeOn, setDarkModeOn] = useState(false);
    const [selectedTag, setSelectedTag] = useState(null);

    const handleDarkModeButtonClick = () => {
        setDarkModeOn(!darkModeOn);
        document.body.classList.toggle('dark');
    };

    const todaysDate = new Date();
    const currentDate = new Date(
        new Date(todaysDate).setDate(todaysDate.getDate())
    ).toDateString();

    return (
        <div className="h-lvh my-0 mx-auto flex flex-col bg-gray-100 dark:bg-[#272640]">
            <header className="flex items-center justify-between text-[#7371fc] px-2">
                <span className="w-20 text-md py-4">
                    {format(currentDate, 'PPP')}
                </span>

                <h1 className="text-4xl font-bold text-[#7371fc] py-4">
                    To do List
                </h1>

                <button className="w-20 py-4 group">
                    <LightBulbIcon
                        onClick={() => handleDarkModeButtonClick()}
                        className="ml-auto mr-auto size-6 text-[#7371fc] hover:text-[#cdc1ff] dark:hover:text-[#cdc1ff]"
                    />
                </button>
            </header>

            <main className="self-center text-white">
                <NewTaskForm
                    userInput={userInput}
                    setUserInput={setUserInput}
                    selectedTag={selectedTag}
                    setSelectedTag={setSelectedTag}
                />

                <Tasklist
                    userInput={userInput}
                    setUserInput={setUserInput}
                    selectedTag={selectedTag}
                />
            </main>
        </div>
    );
}

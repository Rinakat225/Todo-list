import {useState} from 'react';
import Task from './Task';
import Tabs from './Tabs';
import {Reorder} from 'framer-motion';

export default function TaskList({userInput, setUserInput}) {
    const [currentTab, setCurrentTab] = useState('all');

    const filteredTasks = userInput.filter((task) => {
        if (currentTab === 'completed') {
            return task.taskCompleted;
        } else if (currentTab === 'inProgress') {
            return !task.taskCompleted;
        } else {
            return userInput;
        }
    });

    return (
        <>
            <Tabs
                userInput={userInput}
                currentTab={currentTab}
                setCurrentTab={setCurrentTab}
            />
            {userInput.length > 0 && (
                <Reorder.Group
                    axis="y"
                    values={userInput}
                    onReorder={setUserInput}
                >
                    {filteredTasks.map((input, index) => (
                        <Reorder.Item value={input} key={input.id}>
                            <Task
                                userInput={input}
                                setUserInput={setUserInput}
                                index={index}
                                tasksArray={userInput}
                            />
                        </Reorder.Item>
                    ))}
                </Reorder.Group>
            )}
        </>
    );
}

import {useState} from 'react';
import Task from './Task';
import Tabs from './Tabs';
import {Reorder} from 'framer-motion';

export default function TaskList({tasks, setTasks}) {
    const [currentTab, setCurrentTab] = useState('all');

    const filteredTasks = tasks.filter((task) => {
        if (currentTab === 'completed') {
            return task.completed;
        } else if (currentTab === 'inProgress') {
            return !task.completed;
        } else {
            return tasks;
        }
    });

    return (
        <>
            <Tabs
                tasks={tasks}
                currentTab={currentTab}
                setCurrentTab={setCurrentTab}
            />
            {tasks.length > 0 && (
                <Reorder.Group axis="y" values={tasks} onReorder={setTasks}>
                    {filteredTasks.map((input, index) => (
                        <Reorder.Item value={input} key={input.id}>
                            <Task
                                task={input}
                                setTasks={setTasks}
                                index={index}
                                tasksArray={tasks}
                            />
                        </Reorder.Item>
                    ))}
                </Reorder.Group>
            )}
        </>
    );
}

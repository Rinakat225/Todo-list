import Task from './Task';
import {Reorder} from 'framer-motion';

export default function TaskList({tasks, setTasks, sortBy, currentFilter}) {
    const filteredTasks = tasks.filter((task) => {
        if (currentFilter === 'completed') {
            return task.completed;
        } else if (currentFilter === 'inProgress') {
            return !task.completed;
        } else {
            return tasks;
        }
    });

    return (
        <>
            {tasks.length > 0 && (
                <Reorder.Group axis="y" values={tasks} onReorder={setTasks}>
                    {filteredTasks.map((input, index) => (
                        <Reorder.Item value={input} key={input.id}>
                            <Task
                                task={input}
                                index={index}
                                setTasks={setTasks}
                                tasksArray={tasks}
                                sortBy={sortBy}
                                filteredTasks={filteredTasks}
                            />
                        </Reorder.Item>
                    ))}
                </Reorder.Group>
            )}
        </>
    );
}

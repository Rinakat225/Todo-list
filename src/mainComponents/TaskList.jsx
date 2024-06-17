import Task from './Task';
import {Reorder} from 'framer-motion';

export default function TaskList({
    showTasks,
    userInput,
    setUserInput,
    date,
    onFilterExistingTasksConditionally,
    onRemoveTaskButtonClick,
    taskInEditMode,
    onEditTaskButtonClick,
    editedInput,
    setEditedInput,
    onSaveEditedTaskButtonClick,
    onCancelEditingModeButtonClick,
    onMarkTaskCompletedButtonClick,
    onMoveTaskUpButtonClick,
    onMoveTaskDownButtonClick,
    selectedTag,
}) {
    return (
        <>
            {showTasks && (
                <Reorder.Group
                    axis="y"
                    values={userInput}
                    onReorder={setUserInput}
                >
                    {onFilterExistingTasksConditionally().map(
                        (input, index) => (
                            <Reorder.Item value={input} key={input.id}>
                                <Task
                                    userInput={input.newTask}
                                    tag={input.selectedTag}
                                    newDate={input.taskDate}
                                    id={input.id}
                                    taskCompleted={input.taskCompleted}
                                    key={input.id}
                                    onRemoveTaskButtonClick={
                                        onRemoveTaskButtonClick
                                    }
                                    taskInEditMode={taskInEditMode}
                                    onEditTaskButtonClick={
                                        onEditTaskButtonClick
                                    }
                                    editedInput={editedInput}
                                    setEditedInput={setEditedInput}
                                    onSaveEditedTaskButtonClick={
                                        onSaveEditedTaskButtonClick
                                    }
                                    onCancelEditingModeButtonClick={
                                        onCancelEditingModeButtonClick
                                    }
                                    onMarkTaskCompletedButtonClick={
                                        onMarkTaskCompletedButtonClick
                                    }
                                    index={index}
                                    onMoveTaskUpButtonClick={
                                        onMoveTaskUpButtonClick
                                    }
                                    onMoveTaskDownButtonClick={
                                        onMoveTaskDownButtonClick
                                    }
                                    date={date}
                                    selectedTag={selectedTag}
                                />
                            </Reorder.Item>
                        )
                    )}
                </Reorder.Group>
            )}
        </>
    );
}

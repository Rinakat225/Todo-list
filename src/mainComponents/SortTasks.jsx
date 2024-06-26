import {ArrowUpIcon, ArrowDownIcon} from '@heroicons/react/16/solid';
import React from 'react';
import Select from 'react-select';

export default function SortTasks({tasks, setTasks, sortBy, setSortBy}) {
    const handleSortTasks = (selectedOption) => {
        const sortType = selectedOption.value;

        const sortFunctions = {
            'dueDate-up': (a, b) =>
                Date.parse(a.dueDate) - Date.parse(b.dueDate),
            'dueDate-down': (a, b) =>
                Date.parse(b.dueDate) - Date.parse(a.dueDate),
            'creationDate-up': (a, b) =>
                Date.parse(a.creationDate) - Date.parse(b.creationDate),
            'creationDate-down': (a, b) =>
                Date.parse(b.creationDate) - Date.parse(a.creationDate),
        };

        setTasks((prevTasks) => [...prevTasks].sort(sortFunctions[sortType]));
        setSortBy(sortType);
    };

    const options = [
        {
            value: 'dueDate-up',
            label: (
                <span className="flex gap-1 items-center cursor-pointer">
                    <ArrowUpIcon className="size-4" />
                    Due Date
                </span>
            ),
        },
        {
            value: 'dueDate-down',
            label: (
                <span className="flex gap-1 items-center cursor-pointer">
                    <ArrowDownIcon className="size-4" />
                    Due Date
                </span>
            ),
        },
        {
            value: 'creationDate-up',
            label: (
                <span className="flex gap-1 items-center cursor-pointer">
                    <ArrowUpIcon className="size-4" />
                    Creation date
                </span>
            ),
        },
        {
            value: 'creationDate-down',
            label: (
                <span className="flex gap-1 items-center cursor-pointer">
                    <ArrowDownIcon className="size-4" />
                    Creation date
                </span>
            ),
        },
    ];

    const selectedOption = options.find((option) => option.value === sortBy);

    return (
        <>
            {tasks.length > 1 && (
                <Select
                    className="text-black self-start cursor-pointer py-1 text-sm w-44"
                    placeholder="Sort by"
                    value={selectedOption}
                    onChange={handleSortTasks}
                    options={options}
                />
            )}
        </>
    );
}

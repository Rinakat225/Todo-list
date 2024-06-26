import {ArrowUpIcon, ArrowDownIcon} from '@heroicons/react/16/solid';
import {color} from 'framer-motion';
import {AlignCenter} from 'lucide-react';
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
                    Due date
                </span>
            ),
        },
        {
            value: 'dueDate-down',
            label: (
                <span className="flex gap-1 items-center cursor-pointer">
                    <ArrowDownIcon className="size-4" />
                    Due date
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

    const customStyles = {
        container: (provided) => ({
            ...provided,
            width: '50%',
            padding: '0.5rem 0',
            fontSize: '14px',
        }),

        indicatorSeparator: (provided) => ({
            ...provided,
            display: 'none',
        }),

        indicatorsContainer: (provided) => ({
            ...provided,
            height: '30px',
        }),

        input: (provided) => ({
            ...provided,
            margin: '0',
        }),

        valueContainer: (provided) => ({
            ...provided,
            height: '30px',
            padding: '0 0.5rem',
        }),

        control: (provided) => ({
            ...provided,
            /*  background: 'white', */
            border: 'none',
            '&:hover': {
                cursor: 'pointer',
            },
            minHeight: '30px',
            height: '30px',
        }),

        menu: (provided) => ({
            ...provided,
            margin: '0',
        }),

        option: (provided) => ({
            ...provided,
            color: 'black',
            background: 'white',
            width: '100%',
            cursor: 'pointer',
            '&:hover': {
                background: '#7371fc',
                color: 'white',
            },
        }),
    };

    return (
        <div>
            {tasks.length > 1 && (
                <Select
                    className="react-select-container"
                    classNamePrefix="react-select"
                    placeholder="Sort by"
                    value={selectedOption}
                    onChange={handleSortTasks}
                    isSearchable={false}
                    options={options}
                    styles={customStyles}
                    theme={(theme) => ({
                        ...theme,
                        colors: {
                            ...theme.colors,
                            primary: 'black',
                        },
                    })}
                />
            )}
        </div>
    );
}
/* text-black self-start cursor-pointer py-1 text-sm w-1/2 */

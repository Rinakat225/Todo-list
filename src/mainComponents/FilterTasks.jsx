import Select from 'react-select';

export default function FilterTasks({tasks, setCurrentFilter, currentFilter}) {
    const options = [
        {value: 'all', label: 'All'},
        {value: 'inProgress', label: 'In progress'},
        {value: 'completed', label: 'Completed'},
    ];

    const selectedOption = options.find(
        (option) => option.value === currentFilter
    );

    const customStyles = {
        container: (provided) => ({
            ...provided,
            padding: '1rem 0',
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
        <div className="w-6/12">
            {tasks.length > 1 && (
                <Select
                    className="react-select-container"
                    classNamePrefix="react-select"
                    placeholder="Filter tasks"
                    value={selectedOption}
                    options={options}
                    onChange={(selectedOption) => {
                        setCurrentFilter(selectedOption.value);
                    }}
                    isSearchable={false}
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

import {useState} from 'react';
import * as React from 'react';

import {Button} from '../../components/ui/button';
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
} from '../../components/ui/command';

import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from '../../components/ui/popover';

const tags = [
    {
        value: 'work',
        label: 'Work',
    },
    {
        value: 'school',
        label: 'School',
    },
    {
        value: 'personal',
        label: 'Personal',
    },
    {
        value: 'errands',
        label: 'Errands',
    },
    {
        value: 'miscellaneous',
        label: 'Miscellaneous',
    },
];

export function ComboBoxResponsive({
    selectedTag,
    setSelectedTag,
    customTag,
    setCustomTag,
}) {
    const [open, setOpen] = useState(false);
    const [customTagsList, setCustomTagsList] = useState([]);

    return (
        <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
                <Button variant="custom" size="custom">
                    {selectedTag ? <>{selectedTag.label}</> : <>+ Add tag</>}
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-[175px] p-0" align="start">
                <StatusList
                    setOpen={setOpen}
                    setSelectedTag={setSelectedTag}
                    customTag={customTag}
                    setCustomTag={setCustomTag}
                    customTagsList={customTagsList}
                    setCustomTagsList={setCustomTagsList}
                />
            </PopoverContent>
        </Popover>
    );
}

function StatusList({
    setOpen,
    setSelectedTag,
    customTag,
    setCustomTag,
    customTagsList,
    setCustomTagsList,
}) {
    const addNewCustomTag = () => {
        if (customTag.trim() === '') return;

        const newCustomTag = {
            value: customTag.toLowerCase().replace(/\s+/g, '_'),
            label: customTag,
        };

        setCustomTagsList([...customTagsList, newCustomTag]);
        setCustomTag('');
    };

    const handleSelectTag = (value) => {
        const tag = [...tags, ...customTagsList].find(
            (tag) => tag.value === value
        );
        setSelectedTag(tag || null);
        setOpen(false);
    };

    return (
        <div>
            <Command>
                <CommandInput placeholder="Find tag..." />
                <CommandList>
                    <CommandEmpty>No tags found...</CommandEmpty>
                    <CommandGroup>
                        {[...tags, ...customTagsList].map((tag) => (
                            <CommandItem
                                key={tag.value}
                                value={tag.value}
                                onSelect={() => {
                                    handleSelectTag(tag.value);
                                    setOpen(false);
                                }}
                            >
                                {tag.label}
                            </CommandItem>
                        ))}
                    </CommandGroup>
                </CommandList>
            </Command>
            <div className="flex flex-col gap-2 p-3 m-0.5 w-25">
                <input
                    className="p-2 shadow-md text-sm"
                    type="text"
                    placeholder="Write a custom tag..."
                    value={customTag}
                    onChange={(event) => setCustomTag(event.target.value)}
                />
                <button
                    className="p-1 rounded text-xs bg-[#7371fc] text-white hover:text-[#cdc1ff]"
                    onClick={addNewCustomTag}
                >
                    Add tag
                </button>
            </div>
        </div>
    );
}

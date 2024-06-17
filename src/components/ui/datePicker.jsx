import * as React from 'react';
import {format} from 'date-fns';
import {Calendar as CalendarIcon} from 'lucide-react';

import {cn} from '../../lib/utils';
import {Button} from '../../components/ui/button';
import {Calendar} from '../../components/ui/calendar';
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from '../../components/ui/popover';

export function DatePicker({date, setDate}) {
    return (
        <Popover>
            <PopoverTrigger asChild>
                <Button
                    variant={'custom'}
                    size={'custom'}
                    className={cn(
                        'justify-start text-left font-normal',
                        !date && 'text-muted-foreground'
                    )}
                >
                    <CalendarIcon className="mr-1 h-4 w-4 group-hover:text-slate-400" />
                    {date ? (
                        format(date, 'PP')
                    ) : (
                        <span className="text-black group-hover:text-slate-400 dark:text-white dark:group-hover:text-slate-500">
                            Pick a date
                        </span>
                    )}
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0">
                <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    initialFocus
                />
            </PopoverContent>
        </Popover>
    );
}

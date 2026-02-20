import type { Meta, StoryObj } from '@storybook/react';
import { Calendar, CalendarDayButton } from './calendar';
import { Card, CardContent } from './card';
import { Button } from './button';
import { Input } from './input';
import { Label } from './label';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from './select';
import { Popover, PopoverContent, PopoverTrigger } from './popover';
import { useState } from 'react';
import { addDays, format, subDays } from 'date-fns';
import { ko } from 'date-fns/locale';
import type { DateRange } from 'react-day-picker';
import { CalendarIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

const meta = {
    title: 'Components/Calendar',
    component: Calendar,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof Calendar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    render: () => {
        const [date, setDate] = useState<Date | undefined>(new Date());
        return (
            <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                className="rounded-md border"
            />
        );
    },
};

export const WithoutSelection: Story = {
    render: () => (
        <Calendar
            mode="single"
            className="rounded-md border"
        />
    ),
};

export const Multiple: Story = {
    render: () => {
        const [dates, setDates] = useState<Date[] | undefined>([]);
        return (
            <Calendar
                mode="multiple"
                selected={dates}
                onSelect={setDates}
                className="rounded-md border"
            />
        );
    },
};

export const Range: Story = {
    render: () => {
        const [range, setRange] = useState<DateRange | undefined>({
            from: new Date(),
            to: addDays(new Date(), 7),
        });
        return (
            <Calendar
                mode="range"
                selected={range}
                onSelect={setRange}
                className="rounded-md border"
            />
        );
    },
};

export const PriceCalendar: Story = {
    render: () => {
        const [range, setRange] = useState<DateRange | undefined>({
            from: new Date(new Date().getFullYear(), 11, 8),
            to: addDays(new Date(new Date().getFullYear(), 11, 8), 10),
        });

        return (
            <Card className="mx-auto w-fit p-0">
                <CardContent className="p-0">
                    <Calendar
                        mode="range"
                        defaultMonth={range?.from}
                        selected={range}
                        onSelect={setRange}
                        numberOfMonths={1}
                        captionLayout="dropdown"
                        className="[--cell-size:--spacing(10)] md:[--cell-size:--spacing(12)]"
                        formatters={{
                            formatMonthDropdown: (date) => {
                                return date.toLocaleString("default", { month: "long" });
                            },
                        }}
                        components={{
                            DayButton: ({ children, modifiers, day, ...props }) => {
                                const isWeekend =
                                    day.date.getDay() === 0 || day.date.getDay() === 6;

                                return (
                                    <CalendarDayButton day={day} modifiers={modifiers} {...props}>
                                        {children}
                                        {!modifiers.outside && (
                                            <span>{isWeekend ? "$120" : "$100"}</span>
                                        )}
                                    </CalendarDayButton>
                                );
                            },
                        }}
                    />
                </CardContent>
            </Card>
        );
    },
};

export const MonthYearDropdown: Story = {
    render: () => {
        const [date, setDate] = useState<Date | undefined>(new Date());
        return (
            <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                captionLayout="dropdown"
                className="rounded-lg border"
            />
        );
    },
};

export const CustomCellSize: Story = {
    render: () => {
        const [date, setDate] = useState<Date | undefined>(new Date());
        return (
            <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                className="rounded-lg border [--cell-size:2.75rem] md:[--cell-size:3rem]"
            />
        );
    },
};

export const WeekNumbers: Story = {
    render: () => {
        const [date, setDate] = useState<Date | undefined>(new Date());
        return (
            <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                showWeekNumber
                className="rounded-lg border"
            />
        );
    },
};

export const TwoMonths: Story = {
    render: () => {
        const [range, setRange] = useState<DateRange | undefined>({
            from: new Date(),
            to: addDays(new Date(), 14),
        });
        return (
            <Calendar
                mode="range"
                selected={range}
                onSelect={setRange}
                numberOfMonths={2}
                className="rounded-lg border"
            />
        );
    },
};

export const DisabledDates: Story = {
    render: () => {
        const [date, setDate] = useState<Date | undefined>(new Date());
        return (
            <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                disabled={[
                    { dayOfWeek: [0, 6] }, // 주말 비활성화
                ]}
                className="rounded-lg border"
            />
        );
    },
};

export const BookedDates: Story = {
    render: () => {
        const [range, setRange] = useState<DateRange | undefined>();
        const bookedDays = [
            addDays(new Date(), 2),
            addDays(new Date(), 3),
            addDays(new Date(), 4),
            addDays(new Date(), 8),
            addDays(new Date(), 9),
        ];

        const isBookedDate = (date: Date) =>
            bookedDays.some(
                (bookedDay) => bookedDay.toDateString() === date.toDateString()
            );

        return (
            <Card className="mx-auto w-fit p-0">
                <CardContent className="p-0">
                    <Calendar
                        mode="range"
                        selected={range}
                        onSelect={(newRange) => {
                            // 예약된 날짜가 범위에 포함되면 선택 방지
                            if (newRange?.from && isBookedDate(newRange.from)) return;
                            if (newRange?.to && isBookedDate(newRange.to)) return;
                            setRange(newRange);
                        }}
                        modifiers={{
                            booked: bookedDays,
                        }}
                        modifiersClassNames={{
                            booked: "opacity-50 cursor-not-allowed",
                        }}
                        captionLayout="dropdown"
                        className="[--cell-size:--spacing(10)] md:[--cell-size:--spacing(12)]"
                        components={{
                            DayButton: ({ children, modifiers, day, ...props }) => {
                                const isBooked = isBookedDate(day.date);

                                return (
                                    <CalendarDayButton
                                        day={day}
                                        modifiers={modifiers}
                                        {...props}
                                        disabled={isBooked}
                                    >
                                        {children}
                                        {!modifiers.outside && (
                                            <span className={isBooked ? "text-destructive line-through" : "text-muted-foreground"}>
                                                {isBooked ? "마감" : "가능"}
                                            </span>
                                        )}
                                    </CalendarDayButton>
                                );
                            },
                        }}
                    />
                </CardContent>
            </Card>
        );
    },
};

export const Presets: Story = {
    render: () => {
        const [date, setDate] = useState<Date | undefined>(new Date());

        const presets = [
            { label: "오늘", value: 0 },
            { label: "내일", value: 1 },
            { label: "3일 후", value: 3 },
            { label: "1주일 후", value: 7 },
            { label: "2주일 후", value: 14 },
            { label: "1달 후", value: 30 },
        ];

        return (
            <div className="flex flex-col gap-4 sm:flex-row">
                <div className="flex flex-col gap-2">
                    <Label className="px-1 text-sm font-medium">빠른 선택</Label>
                    <Select
                        onValueChange={(value) => setDate(addDays(new Date(), parseInt(value)))}
                    >
                        <SelectTrigger className="w-[160px]">
                            <SelectValue placeholder="프리셋 선택" />
                        </SelectTrigger>
                        <SelectContent>
                            {presets.map((preset) => (
                                <SelectItem key={preset.value} value={preset.value.toString()}>
                                    {preset.label}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                </div>
                <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    className="rounded-lg border"
                />
            </div>
        );
    },
};

export const DateTimePicker: Story = {
    render: () => {
        const [date, setDate] = useState<Date>(new Date());
        const [time, setTime] = useState<string>(
            `${String(new Date().getHours()).padStart(2, '0')}:${String(new Date().getMinutes()).padStart(2, '0')}`
        );

        const handleDateSelect = (selectedDate: Date | undefined) => {
            if (selectedDate) {
                const [hours, minutes] = time.split(':').map(Number);
                selectedDate.setHours(hours, minutes);
                setDate(selectedDate);
            }
        };

        const handleTimeChange = (newTime: string) => {
            setTime(newTime);
            if (date) {
                const [hours, minutes] = newTime.split(':').map(Number);
                const newDate = new Date(date);
                newDate.setHours(hours, minutes);
                setDate(newDate);
            }
        };

        return (
            <Card className="w-fit">
                <CardContent className="flex flex-col gap-4 p-4">
                    <div className="flex items-center gap-2">
                        <CalendarIcon className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm font-medium">
                            {format(date, "PPP p", { locale: ko })}
                        </span>
                    </div>
                    <div className="flex flex-col gap-4 sm:flex-row">
                        <Calendar
                            mode="single"
                            selected={date}
                            onSelect={handleDateSelect}
                            className="rounded-lg border"
                        />
                        <div className="flex flex-col gap-2">
                            <Label className="text-sm font-medium">시간</Label>
                            <Input
                                type="time"
                                value={time}
                                onChange={(e) => handleTimeChange(e.target.value)}
                                className="w-[120px]"
                            />
                            <div className="mt-2 flex flex-wrap gap-1">
                                {['09:00', '12:00', '15:00', '18:00', '21:00'].map((t) => (
                                    <Button
                                        key={t}
                                        variant={time === t ? 'default' : 'outline'}
                                        size="sm"
                                        onClick={() => handleTimeChange(t)}
                                    >
                                        {t}
                                    </Button>
                                ))}
                            </div>
                        </div>
                    </div>
                </CardContent>
            </Card>
        );
    },
};

export const DateRangeWithPopover: Story = {
    render: () => {
        const [range, setRange] = useState<DateRange | undefined>({
            from: subDays(new Date(), 7),
            to: new Date(),
        });

        return (
            <Popover>
                <PopoverTrigger asChild>
                    <Button
                        variant="outline"
                        className={cn(
                            "w-[280px] justify-start text-left font-normal",
                            !range && "text-muted-foreground"
                        )}
                    >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {range?.from ? (
                            range.to ? (
                                <>
                                    {format(range.from, "LLL dd, y", { locale: ko })} -{" "}
                                    {format(range.to, "LLL dd, y", { locale: ko })}
                                </>
                            ) : (
                                format(range.from, "LLL dd, y", { locale: ko })
                            )
                        ) : (
                            <span>날짜 선택</span>
                        )}
                    </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                        mode="range"
                        selected={range}
                        onSelect={setRange}
                        numberOfMonths={2}
                    />
                </PopoverContent>
            </Popover>
        );
    },
};

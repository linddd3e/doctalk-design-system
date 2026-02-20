import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { DatePicker, DateRangePicker } from './date-picker';

const meta = {
    title: 'Components/DatePicker',
    component: DatePicker,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof DatePicker>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    render: () => {
        const [date, setDate] = useState<Date>();

        return (
            <DatePicker
                date={date}
                onDateChange={setDate}
                placeholder="날짜 선택"
            />
        );
    },
};

export const WithDefaultDate: Story = {
    render: () => {
        const [date, setDate] = useState<Date>(new Date());

        return (
            <DatePicker
                date={date}
                onDateChange={setDate}
            />
        );
    },
};

export const Disabled: Story = {
    render: () => {
        const [date, setDate] = useState<Date>();

        return (
            <DatePicker
                date={date}
                onDateChange={setDate}
                disabled
            />
        );
    },
};

export const RangePicker: Story = {
    render: () => {
        const [range, setRange] = useState<{ from?: Date; to?: Date }>({});

        return (
            <DateRangePicker
                from={range.from}
                to={range.to}
                onDateRangeChange={setRange}
                placeholder="기간 선택"
            />
        );
    },
};

export const AppointmentBooking: Story = {
    render: () => {
        const [date, setDate] = useState<Date>();

        return (
            <div className="space-y-4">
                <div>
                    <label className="text-sm font-medium mb-2 block">예약 날짜</label>
                    <DatePicker
                        date={date}
                        onDateChange={setDate}
                        placeholder="예약 날짜를 선택하세요"
                    />
                </div>
                {date && (
                    <div className="text-sm text-muted-foreground">
                        선택된 날짜: {date.toLocaleDateString('ko-KR')}
                    </div>
                )}
            </div>
        );
    },
};

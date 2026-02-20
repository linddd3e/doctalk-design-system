import type { Meta, StoryObj } from '@storybook/react';
import { ChartContainer, ChartTooltip, ChartTooltipContent } from './chart';
import { Bar, BarChart, Line, LineChart, XAxis, YAxis } from 'recharts';

const meta = {
    title: 'Components/Chart',
    component: ChartContainer,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof ChartContainer>;

export default meta;
type Story = StoryObj<typeof meta>;

const chartData = [
    { month: '1월', patients: 186 },
    { month: '2월', patients: 305 },
    { month: '3월', patients: 237 },
    { month: '4월', patients: 273 },
    { month: '5월', patients: 209 },
    { month: '6월', patients: 314 },
];

const chartConfig = {
    patients: {
        label: '환자 수',
        color: 'hsl(var(--primary))',
    },
};

export const BarChartExample: Story = {
    render: () => (
        <ChartContainer config={chartConfig} className="h-[300px] w-[500px]">
            <BarChart data={chartData}>
                <XAxis dataKey="month" />
                <YAxis />
                <ChartTooltip content={<ChartTooltipContent />} />
                <Bar dataKey="patients" fill="var(--color-patients)" />
            </BarChart>
        </ChartContainer>
    ),
};

export const LineChartExample: Story = {
    render: () => (
        <ChartContainer config={chartConfig} className="h-[300px] w-[500px]">
            <LineChart data={chartData}>
                <XAxis dataKey="month" />
                <YAxis />
                <ChartTooltip content={<ChartTooltipContent />} />
                <Line type="monotone" dataKey="patients" stroke="var(--color-patients)" strokeWidth={2} />
            </LineChart>
        </ChartContainer>
    ),
};

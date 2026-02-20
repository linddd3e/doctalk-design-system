import type { Meta, StoryObj } from '@storybook/react';
import { Progress } from './progress';

const meta = {
    title: 'Components/Progress',
    component: Progress,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        value: {
            control: { type: 'range', min: 0, max: 100, step: 1 },
        },
    },
} satisfies Meta<typeof Progress>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        value: 50,
        className: 'w-[300px]',
    },
};

export const Low: Story = {
    args: {
        value: 25,
        className: 'w-[300px]',
    },
};

export const Medium: Story = {
    args: {
        value: 50,
        className: 'w-[300px]',
    },
};

export const High: Story = {
    args: {
        value: 75,
        className: 'w-[300px]',
    },
};

export const Complete: Story = {
    args: {
        value: 100,
        className: 'w-[300px]',
    },
};

export const Multiple: Story = {
    render: () => (
        <div className="w-[400px] space-y-4">
            <div>
                <p className="text-sm mb-2">총 환자 수: 75%</p>
                <Progress value={75} />
            </div>
            <div>
                <p className="text-sm mb-2">오늘 예약: 60%</p>
                <Progress value={60} />
            </div>
            <div>
                <p className="text-sm mb-2">대기 환자: 40%</p>
                <Progress value={40} />
            </div>
            <div>
                <p className="text-sm mb-2">완료된 진료: 90%</p>
                <Progress value={90} />
            </div>
        </div>
    ),
};

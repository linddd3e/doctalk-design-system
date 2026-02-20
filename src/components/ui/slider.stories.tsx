import type { Meta, StoryObj } from '@storybook/react';
import { Slider } from './slider';
import { Label } from './label';

const meta = {
    title: 'Components/Slider',
    component: Slider,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        disabled: {
            control: 'boolean',
        },
        min: {
            control: 'number',
        },
        max: {
            control: 'number',
        },
        step: {
            control: 'number',
        },
    },
} satisfies Meta<typeof Slider>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    render: () => (
        <div className="w-[300px] space-y-2">
            <Label>우선순위</Label>
            <Slider defaultValue={[50]} max={100} step={1} />
        </div>
    ),
};

export const WithValue: Story = {
    render: () => (
        <div className="w-[300px] space-y-4">
            <div className="space-y-2">
                <Label>낮음: 25</Label>
                <Slider defaultValue={[25]} max={100} step={1} />
            </div>
            <div className="space-y-2">
                <Label>중간: 50</Label>
                <Slider defaultValue={[50]} max={100} step={1} />
            </div>
            <div className="space-y-2">
                <Label>높음: 75</Label>
                <Slider defaultValue={[75]} max={100} step={1} />
            </div>
        </div>
    ),
};

export const Disabled: Story = {
    render: () => (
        <div className="w-[300px] space-y-2">
            <Label>비활성화</Label>
            <Slider defaultValue={[50]} max={100} step={1} disabled />
        </div>
    ),
};

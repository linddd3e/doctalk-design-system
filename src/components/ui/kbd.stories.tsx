import type { Meta, StoryObj } from '@storybook/react';
import { Kbd } from './kbd';

const meta = {
    title: 'Components/Kbd',
    component: Kbd,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof Kbd>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    render: () => <Kbd>Ctrl</Kbd>,
};

export const Multiple: Story = {
    render: () => (
        <div className="flex gap-2">
            <Kbd>Ctrl</Kbd>
            <span>+</span>
            <Kbd>C</Kbd>
        </div>
    ),
};

export const Shortcuts: Story = {
    render: () => (
        <div className="space-y-2">
            <div className="flex items-center gap-2">
                <div className="w-32">복사:</div>
                <Kbd>Ctrl</Kbd>
                <span>+</span>
                <Kbd>C</Kbd>
            </div>
            <div className="flex items-center gap-2">
                <div className="w-32">붙여넣기:</div>
                <Kbd>Ctrl</Kbd>
                <span>+</span>
                <Kbd>V</Kbd>
            </div>
            <div className="flex items-center gap-2">
                <div className="w-32">저장:</div>
                <Kbd>Ctrl</Kbd>
                <span>+</span>
                <Kbd>S</Kbd>
            </div>
        </div>
    ),
};

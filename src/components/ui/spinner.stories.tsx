import type { Meta, StoryObj } from '@storybook/react';
import { Spinner } from './spinner';

const meta = {
    title: 'Components/Spinner',
    component: Spinner,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof Spinner>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    render: () => <Spinner />,
};

export const WithText: Story = {
    render: () => (
        <div className="flex items-center gap-2">
            <Spinner />
            <span className="text-sm">로딩 중...</span>
        </div>
    ),
};

export const Sizes: Story = {
    render: () => (
        <div className="flex items-center gap-4">
            <Spinner className="h-4 w-4" />
            <Spinner className="h-6 w-6" />
            <Spinner className="h-8 w-8" />
            <Spinner className="h-12 w-12" />
        </div>
    ),
};

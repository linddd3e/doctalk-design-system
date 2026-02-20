import type { Meta, StoryObj } from '@storybook/react';
import { Avatar, AvatarFallback, AvatarImage, AvatarBadge, AvatarGroup, AvatarGroupCount } from './avatar';

const meta = {
    title: 'Components/Avatar',
    component: Avatar,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    render: () => (
        <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
        </Avatar>
    ),
};

export const Fallback: Story = {
    render: () => (
        <Avatar>
            <AvatarFallback>김민수</AvatarFallback>
        </Avatar>
    ),
};

export const Sizes: Story = {
    render: () => (
        <div className="flex items-center gap-4">
            <Avatar size="sm">
                <AvatarFallback className="text-xs">SM</AvatarFallback>
            </Avatar>
            <Avatar size="default">
                <AvatarFallback>MD</AvatarFallback>
            </Avatar>
            <Avatar size="lg">
                <AvatarFallback className="text-lg">LG</AvatarFallback>
            </Avatar>
        </div>
    ),
};

export const WithBadge: Story = {
    render: () => (
        <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
            <AvatarBadge className="bg-green-500" />
        </Avatar>
    ),
};

export const Group: Story = {
    render: () => (
        <AvatarGroup>
            <Avatar className="border-2 border-background">
                <AvatarFallback>김</AvatarFallback>
            </Avatar>
            <Avatar className="border-2 border-background">
                <AvatarFallback>이</AvatarFallback>
            </Avatar>
            <Avatar className="border-2 border-background">
                <AvatarFallback>박</AvatarFallback>
            </Avatar>
            <AvatarGroupCount className="border-2 border-background">
                +5
            </AvatarGroupCount>
        </AvatarGroup>
    ),
};

export const GroupWithImages: Story = {
    render: () => (
        <AvatarGroup>
            <Avatar size="sm" className="border-2 border-background">
                <AvatarImage src="https://github.com/shadcn.png" alt="User 1" />
                <AvatarFallback>U1</AvatarFallback>
            </Avatar>
            <Avatar size="sm" className="border-2 border-background">
                <AvatarImage src="https://github.com/vercel.png" alt="User 2" />
                <AvatarFallback>U2</AvatarFallback>
            </Avatar>
            <Avatar size="sm" className="border-2 border-background">
                <AvatarFallback>U3</AvatarFallback>
            </Avatar>
            <AvatarGroupCount className="border-2 border-background h-8 w-8">
                +3
            </AvatarGroupCount>
        </AvatarGroup>
    ),
};


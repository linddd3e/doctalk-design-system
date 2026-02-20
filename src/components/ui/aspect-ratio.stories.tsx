import type { Meta, StoryObj } from '@storybook/react';
import { AspectRatio } from './aspect-ratio';

const meta = {
    title: 'Components/AspectRatio',
    component: AspectRatio,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof AspectRatio>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    render: () => (
        <div className="w-[450px]">
            <AspectRatio ratio={16 / 9} className="bg-muted">
                <img
                    src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&auto=format&fit=crop"
                    alt="Hospital"
                    className="rounded-md object-cover w-full h-full"
                />
            </AspectRatio>
        </div>
    ),
};

export const Square: Story = {
    render: () => (
        <div className="w-[300px]">
            <AspectRatio ratio={1} className="bg-muted">
                <div className="flex items-center justify-center h-full">
                    <p className="text-sm text-muted-foreground">1:1 비율</p>
                </div>
            </AspectRatio>
        </div>
    ),
};

export const Portrait: Story = {
    render: () => (
        <div className="w-[300px]">
            <AspectRatio ratio={3 / 4} className="bg-muted">
                <div className="flex items-center justify-center h-full">
                    <p className="text-sm text-muted-foreground">3:4 비율</p>
                </div>
            </AspectRatio>
        </div>
    ),
};

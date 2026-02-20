import type { Meta, StoryObj } from '@storybook/react';
import { ScrollArea } from './scroll-area';
import { Separator } from './separator';

const meta = {
    title: 'Components/ScrollArea',
    component: ScrollArea,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof ScrollArea>;

export default meta;
type Story = StoryObj<typeof meta>;

const tags = Array.from({ length: 50 }).map(
    (_, i, a) => `v1.2.0-beta.${a.length - i}`
);

export const Default: Story = {
    render: () => (
        <ScrollArea className="h-72 w-48 rounded-md border">
            <div className="p-4">
                <h4 className="mb-4 text-sm font-medium leading-none">태그</h4>
                {tags.map((tag) => (
                    <div key={tag}>
                        <div className="text-sm">{tag}</div>
                        <Separator className="my-2" />
                    </div>
                ))}
            </div>
        </ScrollArea>
    ),
};

export const PatientList: Story = {
    render: () => (
        <ScrollArea className="h-96 w-80 rounded-md border p-4">
            <h4 className="mb-4 text-sm font-medium">환자 목록</h4>
            {Array.from({ length: 30 }).map((_, i) => (
                <div key={i} className="mb-2 p-2 rounded border">
                    <p className="font-medium">환자 {i + 1}</p>
                    <p className="text-sm text-muted-foreground">ID: P{String(i + 1).padStart(3, '0')}</p>
                </div>
            ))}
        </ScrollArea>
    ),
};

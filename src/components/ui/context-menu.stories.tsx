import type { Meta, StoryObj } from '@storybook/react';
import {
    ContextMenu,
    ContextMenuContent,
    ContextMenuItem,
    ContextMenuTrigger,
    ContextMenuSeparator,
    ContextMenuCheckboxItem,
} from './context-menu';

const meta = {
    title: 'Components/ContextMenu',
    component: ContextMenu,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof ContextMenu>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    render: () => (
        <ContextMenu>
            <ContextMenuTrigger className="flex h-[150px] w-[300px] items-center justify-center rounded-md border border-dashed text-sm">
                우클릭하세요
            </ContextMenuTrigger>
            <ContextMenuContent>
                <ContextMenuItem>복사</ContextMenuItem>
                <ContextMenuItem>붙여넣기</ContextMenuItem>
                <ContextMenuSeparator />
                <ContextMenuItem>삭제</ContextMenuItem>
            </ContextMenuContent>
        </ContextMenu>
    ),
};

export const WithCheckbox: Story = {
    render: () => (
        <ContextMenu>
            <ContextMenuTrigger className="flex h-[150px] w-[300px] items-center justify-center rounded-md border border-dashed text-sm">
                우클릭하세요
            </ContextMenuTrigger>
            <ContextMenuContent>
                <ContextMenuItem>편집</ContextMenuItem>
                <ContextMenuItem>복제</ContextMenuItem>
                <ContextMenuSeparator />
                <ContextMenuCheckboxItem checked>표시</ContextMenuCheckboxItem>
                <ContextMenuCheckboxItem>숨기기</ContextMenuCheckboxItem>
                <ContextMenuSeparator />
                <ContextMenuItem className="text-destructive">삭제</ContextMenuItem>
            </ContextMenuContent>
        </ContextMenu>
    ),
};

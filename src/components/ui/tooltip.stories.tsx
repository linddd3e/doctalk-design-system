import type { Meta, StoryObj } from '@storybook/react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from './tooltip';
import { Button } from './button';

const meta = {
    title: 'Components/Tooltip',
    component: Tooltip,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof Tooltip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    render: () => (
        <TooltipProvider>
            <Tooltip>
                <TooltipTrigger asChild>
                    <Button variant="outline">마우스를 올려보세요</Button>
                </TooltipTrigger>
                <TooltipContent>
                    <p>툴팁 내용</p>
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>
    ),
};

export const WithIcon: Story = {
    render: () => (
        <TooltipProvider>
            <Tooltip>
                <TooltipTrigger asChild>
                    <Button variant="outline">ℹ️</Button>
                </TooltipTrigger>
                <TooltipContent>
                    <p>추가 정보를 확인하세요</p>
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>
    ),
};

export const Multiple: Story = {
    render: () => (
        <TooltipProvider>
            <div className="flex gap-4">
                <Tooltip>
                    <TooltipTrigger asChild>
                        <Button>저장</Button>
                    </TooltipTrigger>
                    <TooltipContent>
                        <p>변경사항을 저장합니다</p>
                    </TooltipContent>
                </Tooltip>

                <Tooltip>
                    <TooltipTrigger asChild>
                        <Button variant="destructive">삭제</Button>
                    </TooltipTrigger>
                    <TooltipContent>
                        <p>항목을 삭제합니다</p>
                    </TooltipContent>
                </Tooltip>

                <Tooltip>
                    <TooltipTrigger asChild>
                        <Button variant="outline">취소</Button>
                    </TooltipTrigger>
                    <TooltipContent>
                        <p>작업을 취소합니다</p>
                    </TooltipContent>
                </Tooltip>
            </div>
        </TooltipProvider>
    ),
};

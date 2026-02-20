import type { Meta, StoryObj } from '@storybook/react';
import { Separator } from './separator';

const meta = {
    title: 'Components/Separator',
    component: Separator,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof Separator>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    render: () => (
        <div className="w-[300px]">
            <div className="space-y-1">
                <h4 className="text-sm font-medium leading-none">환자 정보</h4>
                <p className="text-sm text-muted-foreground">
                    환자의 기본 정보를 확인하세요
                </p>
            </div>
            <Separator className="my-4" />
            <div className="flex h-5 items-center space-x-4 text-sm">
                <div>이름</div>
                <Separator orientation="vertical" />
                <div>나이</div>
                <Separator orientation="vertical" />
                <div>연락처</div>
            </div>
        </div>
    ),
};

export const Horizontal: Story = {
    render: () => (
        <div className="w-[300px] space-y-4">
            <div>섹션 1</div>
            <Separator />
            <div>섹션 2</div>
            <Separator />
            <div>섹션 3</div>
        </div>
    ),
};

export const Vertical: Story = {
    render: () => (
        <div className="flex h-20 items-center space-x-4">
            <div>항목 1</div>
            <Separator orientation="vertical" />
            <div>항목 2</div>
            <Separator orientation="vertical" />
            <div>항목 3</div>
        </div>
    ),
};

import type { Meta, StoryObj } from '@storybook/react';
import { Badge } from './badge';

const meta = {
    title: 'Components/Badge',
    component: Badge,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        variant: {
            control: 'select',
            options: ['default', 'secondary', 'destructive', 'outline'],
        },
    },
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        children: '기본',
    },
};

export const Secondary: Story = {
    args: {
        variant: 'secondary',
        children: '보조',
    },
};

export const Destructive: Story = {
    args: {
        variant: 'destructive',
        children: '위험',
    },
};

export const Outline: Story = {
    args: {
        variant: 'outline',
        children: '아웃라인',
    },
};

export const AllVariants: Story = {
    render: () => (
        <div className="flex flex-wrap gap-2">
            <Badge>기본</Badge>
            <Badge variant="secondary">보조</Badge>
            <Badge variant="destructive">위험</Badge>
            <Badge variant="outline">아웃라인</Badge>
        </div>
    ),
};

export const StatusBadges: Story = {
    render: () => (
        <div className="flex flex-wrap gap-2">
            <Badge>활성</Badge>
            <Badge variant="secondary">대기</Badge>
            <Badge variant="outline">완료</Badge>
            <Badge variant="destructive">취소</Badge>
        </div>
    ),
};

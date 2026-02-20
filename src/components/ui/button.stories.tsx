import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './button';
import { Plus, Mail } from 'lucide-react';

const meta = {
    title: 'Components/Button',
    component: Button,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        variant: {
            control: 'select',
            options: ['default', 'destructive', 'outline', 'secondary', 'ghost', 'link'],
        },
        size: {
            control: 'select',
            options: ['default', 'xs', 'sm', 'lg', 'icon', 'icon-xs', 'icon-sm', 'icon-lg'],
        },
        disabled: {
            control: 'boolean',
        },
    },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        children: '기본 버튼',
    },
};

export const Secondary: Story = {
    args: {
        variant: 'secondary',
        children: '보조 버튼',
    },
};

export const Destructive: Story = {
    args: {
        variant: 'destructive',
        children: '삭제 버튼',
    },
};

export const Outline: Story = {
    args: {
        variant: 'outline',
        children: '아웃라인 버튼',
    },
};

export const Ghost: Story = {
    args: {
        variant: 'ghost',
        children: '고스트 버튼',
    },
};

export const Link: Story = {
    args: {
        variant: 'link',
        children: '링크 버튼',
    },
};

export const ExtraSmall: Story = {
    args: {
        size: 'xs',
        children: '초소형 버튼',
    },
};

export const Small: Story = {
    args: {
        size: 'sm',
        children: '작은 버튼',
    },
};

export const Large: Story = {
    args: {
        size: 'lg',
        children: '큰 버튼',
    },
};

export const IconButton: Story = {
    args: {
        variant: 'outline',
        size: 'icon',
        children: <Plus className="h-4 w-4" />,
    },
};

export const IconExtraSmall: Story = {
    args: {
        variant: 'outline',
        size: 'icon-xs',
        children: <Plus className="h-3 w-3" />,
    },
};

export const IconSmall: Story = {
    args: {
        variant: 'outline',
        size: 'icon-sm',
        children: <Plus className="h-4 w-4" />,
    },
};

export const IconLarge: Story = {
    args: {
        variant: 'outline',
        size: 'icon-lg',
        children: <Plus className="h-5 w-5" />,
    },
};

export const WithIcon: Story = {
    args: {
        children: (
            <>
                <Mail className="mr-2 h-4 w-4" />
                이메일 로그인
            </>
        ),
    },
};

export const Disabled: Story = {
    args: {
        disabled: true,
        children: '비활성화 버튼',
    },
};

export const AllVariants: Story = {
    render: () => (
        <div className="flex flex-wrap gap-4">
            <Button>기본</Button>
            <Button variant="secondary">보조</Button>
            <Button variant="destructive">삭제</Button>
            <Button variant="outline">아웃라인</Button>
            <Button variant="ghost">고스트</Button>
            <Button variant="link">링크</Button>
        </div>
    ),
};

export const AllSizes: Story = {
    render: () => (
        <div className="flex items-center gap-4">
            <Button size="xs">초소형</Button>
            <Button size="sm">작은 버튼</Button>
            <Button>기본 버튼</Button>
            <Button size="lg">큰 버튼</Button>
        </div>
    ),
};

export const AllIconSizes: Story = {
    render: () => (
        <div className="flex items-center gap-4">
            <Button variant="outline" size="icon-xs"><Plus className="h-3 w-3" /></Button>
            <Button variant="outline" size="icon-sm"><Plus className="h-4 w-4" /></Button>
            <Button variant="outline" size="icon"><Plus className="h-4 w-4" /></Button>
            <Button variant="outline" size="icon-lg"><Plus className="h-5 w-5" /></Button>
        </div>
    ),
};


import type { Meta, StoryObj } from '@storybook/react';
import { Label } from './label';
import { Input } from './input';

const meta = {
    title: 'Components/Label',
    component: Label,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof Label>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    render: () => (
        <div className="space-y-2">
            <Label htmlFor="email">이메일</Label>
            <Input id="email" placeholder="example@email.com" />
        </div>
    ),
};

export const Required: Story = {
    render: () => (
        <div className="space-y-2">
            <Label htmlFor="name">
                이름 <span className="text-destructive">*</span>
            </Label>
            <Input id="name" placeholder="이름을 입력하세요" />
        </div>
    ),
};

export const Multiple: Story = {
    render: () => (
        <div className="space-y-4 w-[300px]">
            <div className="space-y-2">
                <Label htmlFor="username">사용자명</Label>
                <Input id="username" />
            </div>
            <div className="space-y-2">
                <Label htmlFor="password">비밀번호</Label>
                <Input id="password" type="password" />
            </div>
        </div>
    ),
};

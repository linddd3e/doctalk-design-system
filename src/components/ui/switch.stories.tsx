import type { Meta, StoryObj } from '@storybook/react';
import { Switch } from './switch';
import { Label } from './label';

const meta = {
    title: 'Components/Switch',
    component: Switch,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        disabled: {
            control: 'boolean',
        },
        checked: {
            control: 'boolean',
        },
    },
} satisfies Meta<typeof Switch>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    render: () => (
        <div className="flex items-center space-x-2">
            <Switch id="airplane-mode" />
            <Label htmlFor="airplane-mode">비행기 모드</Label>
        </div>
    ),
};

export const Checked: Story = {
    render: () => (
        <div className="flex items-center space-x-2">
            <Switch id="notifications" defaultChecked />
            <Label htmlFor="notifications">알림 활성화</Label>
        </div>
    ),
};

export const Disabled: Story = {
    render: () => (
        <div className="flex items-center space-x-2">
            <Switch id="disabled" disabled />
            <Label htmlFor="disabled">비활성화</Label>
        </div>
    ),
};

export const Settings: Story = {
    render: () => (
        <div className="space-y-4">
            <div className="flex items-center justify-between">
                <Label htmlFor="dark-mode">다크 모드</Label>
                <Switch id="dark-mode" />
            </div>
            <div className="flex items-center justify-between">
                <Label htmlFor="email-notifications">이메일 알림</Label>
                <Switch id="email-notifications" defaultChecked />
            </div>
            <div className="flex items-center justify-between">
                <Label htmlFor="sms-notifications">SMS 알림</Label>
                <Switch id="sms-notifications" />
            </div>
        </div>
    ),
};

import type { Meta, StoryObj } from '@storybook/react';
import { Checkbox } from './checkbox';
import { Label } from './label';

const meta = {
    title: 'Components/Checkbox',
    component: Checkbox,
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
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    render: () => (
        <div className="flex items-center space-x-2">
            <Checkbox id="terms" />
            <Label htmlFor="terms">약관에 동의합니다</Label>
        </div>
    ),
};

export const Checked: Story = {
    render: () => (
        <div className="flex items-center space-x-2">
            <Checkbox id="checked" defaultChecked />
            <Label htmlFor="checked">체크됨</Label>
        </div>
    ),
};

export const Disabled: Story = {
    render: () => (
        <div className="flex items-center space-x-2">
            <Checkbox id="disabled" disabled />
            <Label htmlFor="disabled">비활성화</Label>
        </div>
    ),
};

export const Multiple: Story = {
    render: () => (
        <div className="space-y-4">
            <div className="flex items-center space-x-2">
                <Checkbox id="emergency" />
                <Label htmlFor="emergency">응급 환자</Label>
            </div>
            <div className="flex items-center space-x-2">
                <Checkbox id="insurance" defaultChecked />
                <Label htmlFor="insurance">보험 적용</Label>
            </div>
            <div className="flex items-center space-x-2">
                <Checkbox id="followup" />
                <Label htmlFor="followup">추후 관리 필요</Label>
            </div>
        </div>
    ),
};

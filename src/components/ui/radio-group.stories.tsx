import type { Meta, StoryObj } from '@storybook/react';
import { RadioGroup, RadioGroupItem } from './radio-group';
import { Label } from './label';

const meta = {
    title: 'Components/RadioGroup',
    component: RadioGroup,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof RadioGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    render: () => (
        <RadioGroup defaultValue="option-one">
            <div className="flex items-center space-x-2">
                <RadioGroupItem value="option-one" id="option-one" />
                <Label htmlFor="option-one">옵션 1</Label>
            </div>
            <div className="flex items-center space-x-2">
                <RadioGroupItem value="option-two" id="option-two" />
                <Label htmlFor="option-two">옵션 2</Label>
            </div>
        </RadioGroup>
    ),
};

export const PaymentMethod: Story = {
    render: () => (
        <RadioGroup defaultValue="card">
            <div className="flex items-center space-x-2">
                <RadioGroupItem value="card" id="card" />
                <Label htmlFor="card">신용카드</Label>
            </div>
            <div className="flex items-center space-x-2">
                <RadioGroupItem value="cash" id="cash" />
                <Label htmlFor="cash">현금</Label>
            </div>
            <div className="flex items-center space-x-2">
                <RadioGroupItem value="insurance" id="insurance" />
                <Label htmlFor="insurance">보험</Label>
            </div>
        </RadioGroup>
    ),
};

export const Disabled: Story = {
    render: () => (
        <RadioGroup defaultValue="option-one" disabled>
            <div className="flex items-center space-x-2">
                <RadioGroupItem value="option-one" id="r-option-one" />
                <Label htmlFor="r-option-one">옵션 1</Label>
            </div>
            <div className="flex items-center space-x-2">
                <RadioGroupItem value="option-two" id="r-option-two" />
                <Label htmlFor="r-option-two">옵션 2</Label>
            </div>
        </RadioGroup>
    ),
};

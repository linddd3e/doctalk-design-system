import type { Meta, StoryObj } from '@storybook/react';
import { InputOTP, InputOTPGroup, InputOTPSlot } from './input-otp';
import { Label } from './label';

const meta = {
    title: 'Components/InputOTP',
    component: InputOTP,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof InputOTP>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    render: () => (
        <div className="space-y-2">
            <Label htmlFor="otp">인증 코드</Label>
            <InputOTP maxLength={6} id="otp">
                <InputOTPGroup>
                    <InputOTPSlot index={0} />
                    <InputOTPSlot index={1} />
                    <InputOTPSlot index={2} />
                    <InputOTPSlot index={3} />
                    <InputOTPSlot index={4} />
                    <InputOTPSlot index={5} />
                </InputOTPGroup>
            </InputOTP>
        </div>
    ),
};

export const FourDigit: Story = {
    render: () => (
        <div className="space-y-2">
            <Label htmlFor="pin">PIN 번호</Label>
            <InputOTP maxLength={4} id="pin">
                <InputOTPGroup>
                    <InputOTPSlot index={0} />
                    <InputOTPSlot index={1} />
                    <InputOTPSlot index={2} />
                    <InputOTPSlot index={3} />
                </InputOTPGroup>
            </InputOTP>
        </div>
    ),
};

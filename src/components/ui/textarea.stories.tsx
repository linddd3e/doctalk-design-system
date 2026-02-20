import type { Meta, StoryObj } from '@storybook/react';
import { Textarea } from './textarea';
import { Label } from './label';

const meta = {
    title: 'Components/Textarea',
    component: Textarea,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        disabled: {
            control: 'boolean',
        },
    },
} satisfies Meta<typeof Textarea>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    render: () => (
        <Textarea placeholder="메시지를 입력하세요" className="w-[400px]" />
    ),
};

export const WithLabel: Story = {
    render: () => (
        <div className="w-[400px] space-y-2">
            <Label htmlFor="message">메시지</Label>
            <Textarea id="message" placeholder="여기에 메시지를 입력하세요" />
        </div>
    ),
};

export const MedicalNote: Story = {
    render: () => (
        <div className="w-[500px] space-y-2">
            <Label htmlFor="note">진료 메모</Label>
            <Textarea
                id="note"
                placeholder="환자 상태, 처방 내용, 주의사항 등을 기록하세요"
                rows={6}
            />
        </div>
    ),
};

export const Disabled: Story = {
    render: () => (
        <Textarea
            placeholder="비활성화됨"
            disabled
            className="w-[400px]"
        />
    ),
};

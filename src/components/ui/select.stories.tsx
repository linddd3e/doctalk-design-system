import type { Meta, StoryObj } from '@storybook/react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './select';
import { Label } from './label';

const meta = {
    title: 'Components/Select',
    component: Select,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    render: () => (
        <Select>
            <SelectTrigger className="w-[280px]">
                <SelectValue placeholder="진료과를 선택하세요" />
            </SelectTrigger>
            <SelectContent>
                <SelectItem value="internal">내과</SelectItem>
                <SelectItem value="surgery">외과</SelectItem>
                <SelectItem value="pediatrics">소아과</SelectItem>
                <SelectItem value="orthopedics">정형외과</SelectItem>
                <SelectItem value="dermatology">피부과</SelectItem>
            </SelectContent>
        </Select>
    ),
};

export const WithLabel: Story = {
    render: () => (
        <div className="w-[280px] space-y-2">
            <Label htmlFor="department">진료과</Label>
            <Select>
                <SelectTrigger id="department">
                    <SelectValue placeholder="선택하세요" />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="internal">내과</SelectItem>
                    <SelectItem value="surgery">외과</SelectItem>
                    <SelectItem value="pediatrics">소아과</SelectItem>
                    <SelectItem value="orthopedics">정형외과</SelectItem>
                    <SelectItem value="dermatology">피부과</SelectItem>
                    <SelectItem value="psychiatry">정신건강의학과</SelectItem>
                    <SelectItem value="neurology">신경과</SelectItem>
                </SelectContent>
            </Select>
        </div>
    ),
};

export const Disabled: Story = {
    render: () => (
        <Select disabled>
            <SelectTrigger className="w-[280px]">
                <SelectValue placeholder="비활성화됨" />
            </SelectTrigger>
            <SelectContent>
                <SelectItem value="1">옵션 1</SelectItem>
            </SelectContent>
        </Select>
    ),
};

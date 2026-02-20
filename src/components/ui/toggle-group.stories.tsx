import type { Meta, StoryObj } from '@storybook/react';
import { ToggleGroup, ToggleGroupItem } from './toggle-group';

const meta = {
    title: 'Components/ToggleGroup',
    component: ToggleGroup,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof ToggleGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    render: () => (
        <ToggleGroup type="single">
            <ToggleGroupItem value="left" aria-label="왼쪽 정렬">
                왼쪽
            </ToggleGroupItem>
            <ToggleGroupItem value="center" aria-label="가운데 정렬">
                가운데
            </ToggleGroupItem>
            <ToggleGroupItem value="right" aria-label="오른쪽 정렬">
                오른쪽
            </ToggleGroupItem>
        </ToggleGroup>
    ),
};

export const Multiple: Story = {
    render: () => (
        <ToggleGroup type="multiple">
            <ToggleGroupItem value="bold" aria-label="굵게">
                <strong>B</strong>
            </ToggleGroupItem>
            <ToggleGroupItem value="italic" aria-label="기울임">
                <em>I</em>
            </ToggleGroupItem>
            <ToggleGroupItem value="underline" aria-label="밑줄">
                <u>U</u>
            </ToggleGroupItem>
        </ToggleGroup>
    ),
};

export const Outline: Story = {
    render: () => (
        <ToggleGroup type="single" variant="outline">
            <ToggleGroupItem value="list">목록</ToggleGroupItem>
            <ToggleGroupItem value="grid">그리드</ToggleGroupItem>
            <ToggleGroupItem value="table">테이블</ToggleGroupItem>
        </ToggleGroup>
    ),
};

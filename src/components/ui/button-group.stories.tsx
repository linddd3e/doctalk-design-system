import type { Meta, StoryObj } from '@storybook/react';
import { ButtonGroup } from './button-group';
import { Button } from './button';

const meta = {
    title: 'Components/ButtonGroup',
    component: ButtonGroup,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof ButtonGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    render: () => (
        <ButtonGroup>
            <Button variant="outline">왼쪽</Button>
            <Button variant="outline">가운데</Button>
            <Button variant="outline">오른쪽</Button>
        </ButtonGroup>
    ),
};

export const Primary: Story = {
    render: () => (
        <ButtonGroup>
            <Button>저장</Button>
            <Button>편집</Button>
            <Button>삭제</Button>
        </ButtonGroup>
    ),
};

export const Mixed: Story = {
    render: () => (
        <ButtonGroup>
            <Button>확인</Button>
            <Button variant="outline">취소</Button>
            <Button variant="destructive">삭제</Button>
        </ButtonGroup>
    ),
};

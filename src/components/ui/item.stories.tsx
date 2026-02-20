import type { Meta, StoryObj } from '@storybook/react';
import { Item } from './item';

const meta = {
    title: 'Components/Item',
    component: Item,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof Item>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    render: () => (
        <div className="w-[300px] space-y-2">
            <Item>항목 1</Item>
            <Item>항목 2</Item>
            <Item>항목 3</Item>
        </div>
    ),
};

export const WithDescription: Story = {
    render: () => (
        <div className="w-[350px] space-y-2">
            <Item>
                <div className="font-medium">환자 정보</div>
                <div className="text-sm text-muted-foreground">환자의 기본 정보를 확인합니다</div>
            </Item>
            <Item>
                <div className="font-medium">진료 기록</div>
                <div className="text-sm text-muted-foreground">과거 진료 내역을 조회합니다</div>
            </Item>
        </div>
    ),
};

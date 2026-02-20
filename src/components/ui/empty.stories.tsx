import type { Meta, StoryObj } from '@storybook/react';
import { Empty } from './empty';
import { Button } from './button';

const meta = {
    title: 'Components/Empty',
    component: Empty,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof Empty>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    render: () => (
        <Empty
            title="데이터가 없습니다"
            description="표시할 항목이 없습니다."
        />
    ),
};

export const WithAction: Story = {
    render: () => (
        <Empty
            title="환자가 없습니다"
            description="새로운 환자를 등록하세요."
            action={<Button>환자 등록</Button>}
        />
    ),
};

export const NoResults: Story = {
    render: () => (
        <Empty
            title="검색 결과 없음"
            description="검색어와 일치하는 결과를 찾을 수 없습니다."
        />
    ),
};

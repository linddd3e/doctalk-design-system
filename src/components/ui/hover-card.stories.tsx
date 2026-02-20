import type { Meta, StoryObj } from '@storybook/react';
import { HoverCard, HoverCardContent, HoverCardTrigger } from './hover-card';
import { Button } from './button';
import { Avatar, AvatarFallback } from './avatar';

const meta = {
    title: 'Components/HoverCard',
    component: HoverCard,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof HoverCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    render: () => (
        <HoverCard>
            <HoverCardTrigger asChild>
                <Button variant="link">@doctalk</Button>
            </HoverCardTrigger>
            <HoverCardContent className="w-80">
                <div className="flex justify-between space-x-4">
                    <Avatar>
                        <AvatarFallback>DT</AvatarFallback>
                    </Avatar>
                    <div className="space-y-1">
                        <h4 className="text-sm font-semibold">@doctalk</h4>
                        <p className="text-sm">
                            의료 전문 디자인 시스템 - shadcn/ui 기반
                        </p>
                        <div className="flex items-center pt-2">
                            <span className="text-xs text-muted-foreground">
                                53개 컴포넌트 제공
                            </span>
                        </div>
                    </div>
                </div>
            </HoverCardContent>
        </HoverCard>
    ),
};

export const PatientInfo: Story = {
    render: () => (
        <HoverCard>
            <HoverCardTrigger asChild>
                <Button variant="link">김민수 환자</Button>
            </HoverCardTrigger>
            <HoverCardContent className="w-80">
                <div className="space-y-2">
                    <h4 className="text-sm font-semibold">환자 정보</h4>
                    <div className="text-sm space-y-1">
                        <p><strong>ID:</strong> P001</p>
                        <p><strong>나이:</strong> 45세</p>
                        <p><strong>진단:</strong> 고혈압</p>
                        <p><strong>마지막 방문:</strong> 2024-01-20</p>
                    </div>
                </div>
            </HoverCardContent>
        </HoverCard>
    ),
};

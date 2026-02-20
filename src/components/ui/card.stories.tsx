import type { Meta, StoryObj } from '@storybook/react';
import { Card, CardHeader, CardTitle, CardDescription, CardAction, CardContent, CardFooter } from './card';
import { Button } from './button';
import { Badge } from './badge';

const meta = {
    title: 'Components/Card',
    component: Card,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    render: () => (
        <Card className="w-[350px]">
            <CardHeader>
                <CardTitle>카드 제목</CardTitle>
                <CardDescription>카드 설명이 여기에 표시됩니다.</CardDescription>
            </CardHeader>
            <CardContent>
                <p>카드 내용이 여기에 들어갑니다.</p>
            </CardContent>
        </Card>
    ),
};

export const WithAction: Story = {
    render: () => (
        <Card className="w-[350px]">
            <CardHeader className="relative">
                <CardTitle>환자 정보</CardTitle>
                <CardDescription>환자의 상태를 확인하세요</CardDescription>
                <CardAction>
                    <Badge variant="default">활성</Badge>
                </CardAction>
            </CardHeader>
            <CardContent>
                <div className="space-y-2">
                    <div className="flex justify-between">
                        <span className="text-sm font-medium">이름:</span>
                        <span className="text-sm">김민수</span>
                    </div>
                    <div className="flex justify-between">
                        <span className="text-sm font-medium">나이:</span>
                        <span className="text-sm">45세</span>
                    </div>
                </div>
            </CardContent>
        </Card>
    ),
};

export const SmallSize: Story = {
    render: () => (
        <Card size="sm" className="w-[300px]">
            <CardHeader>
                <CardTitle>작은 카드</CardTitle>
                <CardDescription>size="sm" 속성 사용</CardDescription>
            </CardHeader>
            <CardContent>
                <p>텍스트 크기가 작아집니다.</p>
            </CardContent>
        </Card>
    ),
};

export const WithFooter: Story = {
    render: () => (
        <Card className="w-[350px]">
            <CardHeader>
                <CardTitle>환자 정보</CardTitle>
                <CardDescription>환자의 기본 정보를 확인하세요.</CardDescription>
            </CardHeader>
            <CardContent>
                <div className="space-y-2">
                    <div className="flex justify-between">
                        <span className="text-sm font-medium">이름:</span>
                        <span className="text-sm">김민수</span>
                    </div>
                    <div className="flex justify-between">
                        <span className="text-sm font-medium">나이:</span>
                        <span className="text-sm">45세</span>
                    </div>
                    <div className="flex justify-between">
                        <span className="text-sm font-medium">진단:</span>
                        <span className="text-sm">고혈압</span>
                    </div>
                </div>
            </CardContent>
            <CardFooter className="flex justify-between">
                <Button variant="outline">취소</Button>
                <Button>저장</Button>
            </CardFooter>
        </Card>
    ),
};

export const Stats: Story = {
    render: () => (
        <Card className="w-[300px]">
            <CardHeader className="pb-2">
                <CardDescription>총 환자 수</CardDescription>
                <CardTitle className="text-3xl">1,234</CardTitle>
            </CardHeader>
            <CardContent>
                <p className="text-xs text-muted-foreground">전월 대비 +12%</p>
            </CardContent>
        </Card>
    ),
};

export const Multiple: Story = {
    render: () => (
        <div className="grid grid-cols-2 gap-4">
            <Card>
                <CardHeader>
                    <CardTitle>카드 1</CardTitle>
                    <CardDescription>첫 번째 카드</CardDescription>
                </CardHeader>
                <CardContent>
                    <p className="text-sm">내용 1</p>
                </CardContent>
            </Card>
            <Card>
                <CardHeader>
                    <CardTitle>카드 2</CardTitle>
                    <CardDescription>두 번째 카드</CardDescription>
                </CardHeader>
                <CardContent>
                    <p className="text-sm">내용 2</p>
                </CardContent>
            </Card>
        </div>
    ),
};


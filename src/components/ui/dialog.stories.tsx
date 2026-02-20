import type { Meta, StoryObj } from '@storybook/react';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from './dialog';
import { Button } from './button';
import { Label } from './label';

const meta = {
    title: 'Components/Dialog',
    component: Dialog,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof Dialog>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    render: () => (
        <Dialog>
            <DialogTrigger asChild>
                <Button>다이얼로그 열기</Button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>다이얼로그 제목</DialogTitle>
                    <DialogDescription>
                        다이얼로그 설명이 여기에 표시됩니다.
                    </DialogDescription>
                </DialogHeader>
                <div className="space-y-4">
                    <p className="text-sm">다이얼로그 내용</p>
                </div>
            </DialogContent>
        </Dialog>
    ),
};

export const PatientDetails: Story = {
    render: () => (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant="outline">환자 상세보기</Button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>환자 상세 정보</DialogTitle>
                    <DialogDescription>
                        김민수 님의 상세 정보입니다.
                    </DialogDescription>
                </DialogHeader>
                <div className="space-y-4">
                    <div>
                        <Label>환자 ID</Label>
                        <p className="text-sm text-muted-foreground">P001</p>
                    </div>
                    <div>
                        <Label>나이</Label>
                        <p className="text-sm text-muted-foreground">45세</p>
                    </div>
                    <div>
                        <Label>진단명</Label>
                        <p className="text-sm text-muted-foreground">고혈압</p>
                    </div>
                    <div>
                        <Label>마지막 방문일</Label>
                        <p className="text-sm text-muted-foreground">2024-01-20</p>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    ),
};

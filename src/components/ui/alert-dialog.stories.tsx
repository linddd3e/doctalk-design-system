import type { Meta, StoryObj } from '@storybook/react';
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from './alert-dialog';
import { Button } from './button';

const meta = {
    title: 'Components/AlertDialog',
    component: AlertDialog,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof AlertDialog>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    render: () => (
        <AlertDialog>
            <AlertDialogTrigger asChild>
                <Button variant="outline">알림 열기</Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>정말 삭제하시겠습니까?</AlertDialogTitle>
                    <AlertDialogDescription>
                        이 작업은 되돌릴 수 없습니다. 환자 기록이 영구적으로 삭제됩니다.
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel>취소</AlertDialogCancel>
                    <AlertDialogAction>계속</AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    ),
};

export const Destructive: Story = {
    render: () => (
        <AlertDialog>
            <AlertDialogTrigger asChild>
                <Button variant="destructive">계정 삭제</Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>계정을 삭제하시겠습니까?</AlertDialogTitle>
                    <AlertDialogDescription>
                        이 작업은 되돌릴 수 없습니다. 모든 데이터가 영구적으로 삭제되며 복구할 수 없습니다.
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel>취소</AlertDialogCancel>
                    <AlertDialogAction className="bg-destructive text-destructive-foreground hover:bg-destructive/90">
                        삭제
                    </AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    ),
};

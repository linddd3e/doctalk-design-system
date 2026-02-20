import type { Meta, StoryObj } from '@storybook/react';
import { Toaster } from './sonner';
import { Button } from './button';
import { toast } from 'sonner';

const meta = {
    title: 'Components/Sonner',
    component: Toaster,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof Toaster>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    render: () => (
        <>
            <Toaster />
            <div className="flex gap-2">
                <Button onClick={() => toast('기본 토스트 메시지')}>
                    기본
                </Button>
                <Button onClick={() => toast.success('성공했습니다!')}>
                    성공
                </Button>
                <Button onClick={() => toast.error('오류가 발생했습니다.')}>
                    오류
                </Button>
                <Button onClick={() => toast.info('정보 메시지입니다.')}>
                    정보
                </Button>
                <Button onClick={() => toast.warning('경고 메시지입니다.')}>
                    경고
                </Button>
            </div>
        </>
    ),
};

export const WithAction: Story = {
    render: () => (
        <>
            <Toaster />
            <Button
                onClick={() =>
                    toast('예약이 등록되었습니다', {
                        action: {
                            label: '취소',
                            onClick: () => toast('예약이 취소되었습니다'),
                        },
                    })
                }
            >
                액션 포함
            </Button>
        </>
    ),
};

import type { Meta, StoryObj } from '@storybook/react';
import { Alert, AlertTitle, AlertDescription, AlertAction } from './alert';
import { Button } from './button';
import { X } from 'lucide-react';

const meta = {
    title: 'Components/Alert',
    component: Alert,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        variant: {
            control: 'select',
            options: ['default', 'destructive'],
        },
    },
} satisfies Meta<typeof Alert>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    render: () => (
        <Alert className="w-[500px]">
            <AlertTitle>알림</AlertTitle>
            <AlertDescription>
                이것은 기본 알림 메시지입니다.
            </AlertDescription>
        </Alert>
    ),
};

export const Destructive: Story = {
    render: () => (
        <Alert variant="destructive" className="w-[500px]">
            <AlertTitle>오류</AlertTitle>
            <AlertDescription>
                문제가 발생했습니다. 다시 시도해주세요.
            </AlertDescription>
        </Alert>
    ),
};

export const WithAction: Story = {
    render: () => (
        <Alert className="w-[500px]">
            <AlertTitle>새로운 업데이트</AlertTitle>
            <AlertDescription>
                새로운 버전이 출시되었습니다. 지금 업데이트하시겠습니까?
            </AlertDescription>
            <AlertAction>
                <Button variant="ghost" size="icon-sm">
                    <X className="h-4 w-4" />
                </Button>
            </AlertAction>
        </Alert>
    ),
};

export const Welcome: Story = {
    render: () => (
        <Alert className="w-[600px]">
            <AlertTitle>환영합니다! 👋</AlertTitle>
            <AlertDescription>
                Doctalk Design System의 모든 컴포넌트를 확인해보세요. 56개의 UI 컴포넌트가 준비되어 있습니다.
            </AlertDescription>
        </Alert>
    ),
};


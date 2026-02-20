import type { Meta, StoryObj } from '@storybook/react';
import { Resizable, ResizableHandle, ResizablePanel, ResizablePanelGroup } from './resizable';

const meta = {
    title: 'Components/Resizable',
    component: ResizablePanelGroup,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof ResizablePanelGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Horizontal: Story = {
    render: () => (
        <ResizablePanelGroup direction="horizontal" className="w-[600px] h-[200px] rounded-lg border">
            <ResizablePanel defaultSize={50}>
                <div className="flex h-full items-center justify-center p-6">
                    <span className="font-semibold">왼쪽 패널</span>
                </div>
            </ResizablePanel>
            <ResizableHandle />
            <ResizablePanel defaultSize={50}>
                <div className="flex h-full items-center justify-center p-6">
                    <span className="font-semibold">오른쪽 패널</span>
                </div>
            </ResizablePanel>
        </ResizablePanelGroup>
    ),
};

export const Vertical: Story = {
    render: () => (
        <ResizablePanelGroup direction="vertical" className="w-[400px] h-[400px] rounded-lg border">
            <ResizablePanel defaultSize={50}>
                <div className="flex h-full items-center justify-center p-6">
                    <span className="font-semibold">위쪽 패널</span>
                </div>
            </ResizablePanel>
            <ResizableHandle />
            <ResizablePanel defaultSize={50}>
                <div className="flex h-full items-center justify-center p-6">
                    <span className="font-semibold">아래쪽 패널</span>
                </div>
            </ResizablePanel>
        </ResizablePanelGroup>
    ),
};

export const ThreePanels: Story = {
    render: () => (
        <ResizablePanelGroup direction="horizontal" className="w-[800px] h-[300px] rounded-lg border">
            <ResizablePanel defaultSize={25}>
                <div className="flex h-full items-center justify-center p-6">
                    <span className="font-semibold">사이드바</span>
                </div>
            </ResizablePanel>
            <ResizableHandle />
            <ResizablePanel defaultSize={50}>
                <div className="flex h-full items-center justify-center p-6">
                    <span className="font-semibold">메인 콘텐츠</span>
                </div>
            </ResizablePanel>
            <ResizableHandle />
            <ResizablePanel defaultSize={25}>
                <div className="flex h-full items-center justify-center p-6">
                    <span className="font-semibold">상세 정보</span>
                </div>
            </ResizablePanel>
        </ResizablePanelGroup>
    ),
};

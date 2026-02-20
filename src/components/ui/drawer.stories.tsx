import type { Meta, StoryObj } from '@storybook/react';
import { Drawer, DrawerContent, DrawerDescription, DrawerHeader, DrawerTitle, DrawerTrigger } from './drawer';
import { Button } from './button';

const meta = {
    title: 'Components/Drawer',
    component: Drawer,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof Drawer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    render: () => (
        <Drawer>
            <DrawerTrigger asChild>
                <Button variant="outline">드로어 열기</Button>
            </DrawerTrigger>
            <DrawerContent>
                <DrawerHeader>
                    <DrawerTitle>환자 상세 정보</DrawerTitle>
                    <DrawerDescription>환자의 상세 정보를 확인하세요</DrawerDescription>
                </DrawerHeader>
                <div className="p-4">
                    <p className="text-sm">환자 정보가 여기에 표시됩니다.</p>
                </div>
            </DrawerContent>
        </Drawer>
    ),
};

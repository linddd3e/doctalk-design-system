import type { Meta, StoryObj } from '@storybook/react';
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from './sheet';
import { Button } from './button';
import { Label } from './label';
import { Input } from './input';

const meta = {
    title: 'Components/Sheet',
    component: Sheet,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof Sheet>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    render: () => (
        <Sheet>
            <SheetTrigger asChild>
                <Button variant="outline">시트 열기</Button>
            </SheetTrigger>
            <SheetContent>
                <SheetHeader>
                    <SheetTitle>환자 정보 수정</SheetTitle>
                    <SheetDescription>
                        환자 정보를 수정하고 저장하세요
                    </SheetDescription>
                </SheetHeader>
                <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="name" className="text-right">
                            이름
                        </Label>
                        <Input id="name" value="김민수" className="col-span-3" />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="age" className="text-right">
                            나이
                        </Label>
                        <Input id="age" value="45" className="col-span-3" />
                    </div>
                </div>
            </SheetContent>
        </Sheet>
    ),
};

export const Left: Story = {
    render: () => (
        <Sheet>
            <SheetTrigger asChild>
                <Button>왼쪽에서 열기</Button>
            </SheetTrigger>
            <SheetContent side="left">
                <SheetHeader>
                    <SheetTitle>메뉴</SheetTitle>
                    <SheetDescription>
                        메뉴를 선택하세요
                    </SheetDescription>
                </SheetHeader>
            </SheetContent>
        </Sheet>
    ),
};

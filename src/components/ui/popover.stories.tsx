import type { Meta, StoryObj } from '@storybook/react';
import { Popover, PopoverContent, PopoverTrigger } from './popover';
import { Button } from './button';
import { Label } from './label';
import { Input } from './input';

const meta = {
    title: 'Components/Popover',
    component: Popover,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof Popover>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    render: () => (
        <Popover>
            <PopoverTrigger asChild>
                <Button variant="outline">팝오버 열기</Button>
            </PopoverTrigger>
            <PopoverContent className="w-80">
                <div className="grid gap-4">
                    <div className="space-y-2">
                        <h4 className="font-medium leading-none">크기 설정</h4>
                        <p className="text-sm text-muted-foreground">
                            원하는 크기를 설정하세요
                        </p>
                    </div>
                    <div className="grid gap-2">
                        <div className="grid grid-cols-3 items-center gap-4">
                            <Label htmlFor="width">너비</Label>
                            <Input
                                id="width"
                                defaultValue="100%"
                                className="col-span-2 h-8"
                            />
                        </div>
                        <div className="grid grid-cols-3 items-center gap-4">
                            <Label htmlFor="height">높이</Label>
                            <Input
                                id="height"
                                defaultValue="25px"
                                className="col-span-2 h-8"
                            />
                        </div>
                    </div>
                </div>
            </PopoverContent>
        </Popover>
    ),
};

export const Simple: Story = {
    render: () => (
        <Popover>
            <PopoverTrigger asChild>
                <Button>정보</Button>
            </PopoverTrigger>
            <PopoverContent>
                <p className="text-sm">추가 정보가 여기에 표시됩니다.</p>
            </PopoverContent>
        </Popover>
    ),
};

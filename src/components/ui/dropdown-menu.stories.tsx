import type { Meta, StoryObj } from '@storybook/react';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
    DropdownMenuCheckboxItem,
    DropdownMenuRadioGroup,
    DropdownMenuRadioItem,
} from './dropdown-menu';
import { Button } from './button';

const meta = {
    title: 'Components/DropdownMenu',
    component: DropdownMenu,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof DropdownMenu>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    render: () => (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="outline">메뉴 열기</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuLabel>내 계정</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>프로필</DropdownMenuItem>
                <DropdownMenuItem>설정</DropdownMenuItem>
                <DropdownMenuItem>팀</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>로그아웃</DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    ),
};

export const WithCheckbox: Story = {
    render: () => (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="outline">표시 옵션</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
                <DropdownMenuLabel>표시 설정</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuCheckboxItem checked>
                    상태 표시줄
                </DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem>
                    사이드바
                </DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem checked>
                    패널
                </DropdownMenuCheckboxItem>
            </DropdownMenuContent>
        </DropdownMenu>
    ),
};

export const WithRadio: Story = {
    render: () => (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="outline">정렬 기준</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
                <DropdownMenuLabel>정렬</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuRadioGroup value="name">
                    <DropdownMenuRadioItem value="name">이름</DropdownMenuRadioItem>
                    <DropdownMenuRadioItem value="date">날짜</DropdownMenuRadioItem>
                    <DropdownMenuRadioItem value="size">크기</DropdownMenuRadioItem>
                </DropdownMenuRadioGroup>
            </DropdownMenuContent>
        </DropdownMenu>
    ),
};

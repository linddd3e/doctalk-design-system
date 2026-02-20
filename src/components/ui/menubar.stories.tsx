import type { Meta, StoryObj } from '@storybook/react';
import {
    Menubar,
    MenubarContent,
    MenubarItem,
    MenubarMenu,
    MenubarSeparator,
    MenubarTrigger,
} from './menubar';

const meta = {
    title: 'Components/Menubar',
    component: Menubar,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof Menubar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    render: () => (
        <Menubar>
            <MenubarMenu>
                <MenubarTrigger>파일</MenubarTrigger>
                <MenubarContent>
                    <MenubarItem>새 파일</MenubarItem>
                    <MenubarItem>열기</MenubarItem>
                    <MenubarSeparator />
                    <MenubarItem>저장</MenubarItem>
                    <MenubarItem>다른 이름으로 저장</MenubarItem>
                </MenubarContent>
            </MenubarMenu>
            <MenubarMenu>
                <MenubarTrigger>편집</MenubarTrigger>
                <MenubarContent>
                    <MenubarItem>실행 취소</MenubarItem>
                    <MenubarItem>다시 실행</MenubarItem>
                    <MenubarSeparator />
                    <MenubarItem>복사</MenubarItem>
                    <MenubarItem>붙여넣기</MenubarItem>
                </MenubarContent>
            </MenubarMenu>
            <MenubarMenu>
                <MenubarTrigger>보기</MenubarTrigger>
                <MenubarContent>
                    <MenubarItem>확대</MenubarItem>
                    <MenubarItem>축소</MenubarItem>
                    <MenubarSeparator />
                    <MenubarItem>전체 화면</MenubarItem>
                </MenubarContent>
            </MenubarMenu>
        </Menubar>
    ),
};

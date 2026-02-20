import type { Meta, StoryObj } from '@storybook/react';
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from './command';

const meta = {
    title: 'Components/Command',
    component: Command,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof Command>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    render: () => (
        <Command className="rounded-lg border shadow-md w-[450px]">
            <CommandInput placeholder="검색..." />
            <CommandList>
                <CommandEmpty>결과가 없습니다.</CommandEmpty>
                <CommandGroup heading="진료과">
                    <CommandItem>내과</CommandItem>
                    <CommandItem>외과</CommandItem>
                    <CommandItem>소아과</CommandItem>
                    <CommandItem>정형외과</CommandItem>
                    <CommandItem>피부과</CommandItem>
                </CommandGroup>
                <CommandGroup heading="환자">
                    <CommandItem>김민수</CommandItem>
                    <CommandItem>이영희</CommandItem>
                    <CommandItem>박철수</CommandItem>
                </CommandGroup>
            </CommandList>
        </Command>
    ),
};

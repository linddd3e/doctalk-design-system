import type { Meta, StoryObj } from '@storybook/react';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from './collapsible';
import { Button } from './button';

const meta = {
    title: 'Components/Collapsible',
    component: Collapsible,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof Collapsible>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    render: () => (
        <Collapsible className="w-[350px] space-y-2">
            <div className="flex items-center justify-between space-x-4">
                <h4 className="text-sm font-semibold">
                    환자 목록 (5명)
                </h4>
                <CollapsibleTrigger asChild>
                    <Button variant="ghost" size="sm">
                        토글
                    </Button>
                </CollapsibleTrigger>
            </div>
            <div className="rounded-md border px-4 py-2 text-sm">
                김민수
            </div>
            <CollapsibleContent className="space-y-2">
                <div className="rounded-md border px-4 py-2 text-sm">
                    이영희
                </div>
                <div className="rounded-md border px-4 py-2 text-sm">
                    박철수
                </div>
                <div className="rounded-md border px-4 py-2 text-sm">
                    정수진
                </div>
                <div className="rounded-md border px-4 py-2 text-sm">
                    최동욱
                </div>
            </CollapsibleContent>
        </Collapsible>
    ),
};

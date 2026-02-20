import type { Meta, StoryObj } from '@storybook/react';
import { Toggle } from './toggle';

const meta = {
    title: 'Components/Toggle',
    component: Toggle,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        variant: {
            control: 'select',
            options: ['default', 'outline'],
        },
        size: {
            control: 'select',
            options: ['default', 'sm', 'lg'],
        },
        disabled: {
            control: 'boolean',
        },
    },
} satisfies Meta<typeof Toggle>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    render: () => (
        <Toggle aria-label="Toggle bold">
            <strong>B</strong>
        </Toggle>
    ),
};

export const Outline: Story = {
    render: () => (
        <Toggle variant="outline" aria-label="Toggle italic">
            <em>I</em>
        </Toggle>
    ),
};

export const Disabled: Story = {
    render: () => (
        <Toggle disabled aria-label="Toggle underline">
            <u>U</u>
        </Toggle>
    ),
};

export const TextFormatting: Story = {
    render: () => (
        <div className="flex gap-2">
            <Toggle aria-label="Toggle bold">
                <strong>B</strong>
            </Toggle>
            <Toggle aria-label="Toggle italic">
                <em>I</em>
            </Toggle>
            <Toggle aria-label="Toggle underline">
                <u>U</u>
            </Toggle>
            <Toggle aria-label="Toggle strikethrough">
                <s>S</s>
            </Toggle>
        </div>
    ),
};

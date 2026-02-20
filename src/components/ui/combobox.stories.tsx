import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Combobox } from './combobox';

const meta = {
    title: 'Components/Combobox',
    component: Combobox,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof Combobox>;

export default meta;
type Story = StoryObj<typeof meta>;

const frameworks = [
    { value: "next.js", label: "Next.js" },
    { value: "sveltekit", label: "SvelteKit" },
    { value: "nuxt.js", label: "Nuxt.js" },
    { value: "remix", label: "Remix" },
    { value: "astro", label: "Astro" },
];

const departments = [
    { value: "cardiology", label: "심장내과" },
    { value: "neurology", label: "신경과" },
    { value: "orthopedics", label: "정형외과" },
    { value: "pediatrics", label: "소아청소년과" },
    { value: "dermatology", label: "피부과" },
];

export const Default: Story = {
    render: () => {
        const [value, setValue] = useState("");

        return (
            <Combobox
                options={frameworks}
                value={value}
                onValueChange={setValue}
                placeholder="Select framework..."
                searchPlaceholder="Search framework..."
            />
        );
    },
};

export const Medical: Story = {
    render: () => {
        const [value, setValue] = useState("");

        return (
            <Combobox
                options={departments}
                value={value}
                onValueChange={setValue}
                placeholder="진료과 선택..."
                searchPlaceholder="진료과 검색..."
                emptyText="진료과를 찾을 수 없습니다."
                className="w-[300px]"
            />
        );
    },
};

export const WithDefaultValue: Story = {
    render: () => {
        const [value, setValue] = useState("next.js");

        return (
            <Combobox
                options={frameworks}
                value={value}
                onValueChange={setValue}
            />
        );
    },
};

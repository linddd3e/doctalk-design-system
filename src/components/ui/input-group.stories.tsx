import type { Meta, StoryObj } from '@storybook/react'
import { Search, Globe, Mail, ChevronRight } from "lucide-react"

import {
    InputGroup,
    InputGroupAddon,
    InputGroupInput,
    InputGroupButton,
    InputGroupText,
} from './input-group'
import { Kbd } from './kbd'

const meta = {
    title: 'Components/InputGroup',
    component: InputGroup,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof InputGroup>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
    render: () => (
        <InputGroup className="w-[400px]">
            <InputGroupInput placeholder="검색어를 입력하세요" />
            <InputGroupAddon align="inline-end">
                <InputGroupButton>검색</InputGroupButton>
            </InputGroupAddon>
        </InputGroup>
    ),
}

export const WithIcon: Story = {
    render: () => (
        <div className="flex flex-col gap-4 w-[400px]">
            <InputGroup>
                <InputGroupAddon>
                    <Search />
                </InputGroupAddon>
                <InputGroupInput placeholder="검색..." />
            </InputGroup>

            <InputGroup>
                <InputGroupAddon>
                    <Mail />
                </InputGroupAddon>
                <InputGroupInput type="email" placeholder="이메일" />
                <InputGroupAddon align="inline-end">
                    <InputGroupButton variant="outline" size="xs">인증하기</InputGroupButton>
                </InputGroupAddon>
            </InputGroup>
        </div>
    ),
}

export const WithPrefixAndSuffix: Story = {
    render: () => (
        <div className="flex flex-col gap-4 w-[400px]">
            <InputGroup>
                <InputGroupAddon>
                    <InputGroupText>https://</InputGroupText>
                </InputGroupAddon>
                <InputGroupInput placeholder="example.com" />
            </InputGroup>

            <InputGroup>
                <InputGroupInput placeholder="사용자명" />
                <InputGroupAddon align="inline-end">
                    <InputGroupText>@doctalk.com</InputGroupText>
                </InputGroupAddon>
            </InputGroup>
        </div>
    ),
}

export const WithKbd: Story = {
    render: () => (
        <InputGroup className="w-[400px]">
            <InputGroupAddon>
                <Search />
            </InputGroupAddon>
            <InputGroupInput placeholder="검색 또는 명령 입력..." />
            <InputGroupAddon align="inline-end">
                <Kbd>⌘K</Kbd>
            </InputGroupAddon>
        </InputGroup>
    ),
}

export const Combined: Story = {
    render: () => (
        <InputGroup className="w-[400px]">
            <InputGroupAddon>
                <Globe />
            </InputGroupAddon>
            <InputGroupInput placeholder="URL 입력" />
            <InputGroupAddon align="inline-end">
                <InputGroupButton size="icon-xs" variant="ghost">
                    <ChevronRight />
                </InputGroupButton>
            </InputGroupAddon>
        </InputGroup>
    ),
}

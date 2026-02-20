import type { Meta, StoryObj } from '@storybook/react'
import { Search, Mail, Key, Phone, EyeOff } from "lucide-react"

import { Input } from './input'
import { Label } from './label'
import {
    Field,
    FieldLabel,
    FieldDescription,
    FieldError,
} from './field'
import {
    InputGroup,
    InputGroupAddon,
    InputGroupInput,
    InputGroupButton,
} from './input-group'

const meta = {
    title: 'Components/Input',
    component: Input,
    parameters: {
        layout: 'centered',
        docs: {
            description: {
                component: `
### Input 레이블 사용 안내
shadcn/ui의 Input 컴포넌트는 단독으로 레이블 기능을 포함하지 않으며, **컴포넌트 조합(Composition)** 방식을 권장합니다.

1. **기본적인 방법**: \`Label\` 컴포넌트와 함께 사용하여 \`htmlFor\`와 \`id\`를 연결합니다. (\`Simple Label\` 예제 참고)
2. **복합적인 방법**: \`Field\`, \`FieldLabel\`, \`FieldDescription\` 컴포넌트들을 사용하여 레이블, 설명문, 에러 메시지를 함께 구성합니다. (\`With Label\` 예제 참고)

이러한 방식은 코드의 유연성을 높이고 웹 접근성을 준수하는 데 도움을 줍니다.
`,
            },
        },
    },
    tags: ['autodocs'],
    argTypes: {
        type: {
            control: 'select',
            options: ['text', 'email', 'password', 'number', 'tel', 'url', 'file'],
        },
        disabled: {
            control: 'boolean',
        },
    },
} satisfies Meta<typeof Input>

export default meta
type Story = StoryObj<typeof meta>

/**
 * 기본 입력창입니다. `type` 속성을 통해 다양한 입력 타입을 지원합니다.
 */
export const Default: Story = {
    args: {
        placeholder: '텍스트를 입력하세요',
        type: "password"
    },
}

/**
 * 전용 스타일이 적용된 파일 업로드 입력창입니다.
 */
export const File: Story = {
    args: {
        type: 'file',
    },
    render: (args) => (
        <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="picture">사진</Label>
            <Input id="picture" {...args} />
        </div>
    ),
}

/**
 * `Label` 컴포넌트를 직접 사용하여 구성하는 기본적인 방법입니다.
 */
export const SimpleLabel: Story = {
    render: () => (
        <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="email-simple">이메일</Label>
            <Input type="email" id="email-simple" placeholder="Email" />
        </div>
    ),
}

/**
 * `Field` 시스템을 사용하여 레이블, 설명문, 에러 메시지를 체계적으로 구성하는 권장 방법입니다.
 */
export const WithLabel: Story = {
    render: () => (
        <Field className="w-[350px]">
            <FieldLabel htmlFor="email">이메일</FieldLabel>
            <Input id="email" type="email" placeholder="example@email.com" />
            <FieldDescription>로그인에 사용할 이메일 주소를 입력해주세요.</FieldDescription>
        </Field>
    ),
}

/**
 * 입력란 하단에 도움말(설명문)을 추가하여 사용자에게 상세한 안내를 제공합니다.
 */
export const WithHelpText: Story = {
    render: () => (
        <Field className="w-[350px]">
            <FieldLabel htmlFor="password-help">비밀번호</FieldLabel>
            <Input id="password-help" type="password" placeholder="비밀번호" />
            <FieldDescription>
                비밀번호는 8자 이상이며, 숫자와 문자를 포함해야 합니다.
            </FieldDescription>
        </Field>
    ),
}

export const Required: Story = {
    render: () => (
        <Field className="w-[350px]">
            <FieldLabel htmlFor="username" className="after:content-['*'] after:ml-0.5 after:text-destructive">
                사용자 이름
            </FieldLabel>
            <Input id="username" placeholder="사용자 이름을 입력하세요" required />
        </Field>
    ),
}

export const Invalid: Story = {
    render: () => (
        <Field className="w-[350px]">
            <FieldLabel htmlFor="error-email">이메일</FieldLabel>
            <Input id="error-email" type="email" placeholder="invalid-email" aria-invalid="true" />
            <FieldError>올바른 이메일 형식이 아닙니다.</FieldError>
        </Field>
    ),
}

export const Disabled: Story = {
    args: {
        disabled: true,
        placeholder: '비활성화된 입력',
    },
    render: (args) => (
        <Field className="w-[350px]">
            <FieldLabel>비활성 필드</FieldLabel>
            <Input {...args} />
            <FieldDescription>이 필드는 수정할 수 없습니다.</FieldDescription>
        </Field>
    )
}

export const WithInputGroup: Story = {
    render: () => (
        <div className="flex flex-col gap-4 w-[350px]">
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
            </InputGroup>

            <InputGroup>
                <InputGroupAddon>
                    <Key />
                </InputGroupAddon>
                <InputGroupInput type="password" placeholder="비밀번호" />
                <InputGroupAddon align="inline-end">
                    <InputGroupButton variant="ghost" size="icon-xs">
                        <EyeOff />
                    </InputGroupButton>
                </InputGroupAddon>
            </InputGroup>
        </div>
    ),
}

export const Form: Story = {
    render: () => (
        <div className="w-[350px] space-y-4">
            <Field>
                <FieldLabel htmlFor="name">이름</FieldLabel>
                <Input id="name" placeholder="이름을 입력하세요" />
            </Field>
            <Field>
                <FieldLabel htmlFor="phone">연락처</FieldLabel>
                <InputGroup>
                    <InputGroupAddon>
                        <Phone />
                    </InputGroupAddon>
                    <InputGroupInput id="phone" type="tel" placeholder="010-0000-0000" />
                </InputGroup>
            </Field>
            <Field>
                <FieldLabel htmlFor="email-form">이메일</FieldLabel>
                <Input id="email-form" type="email" placeholder="example@email.com" />
            </Field>
        </div>
    ),
}

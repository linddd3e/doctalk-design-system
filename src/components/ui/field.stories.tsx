import type { Meta, StoryObj } from '@storybook/react';
import {
    Field,
    FieldDescription,
    FieldError,
    FieldLabel,
    FieldSet,
    FieldLegend,
    FieldGroup,
    FieldContent,
    FieldTitle,
    FieldSeparator
} from './field';
import { Input } from './input';
import { Checkbox } from './checkbox';
import { Switch } from './switch';
import { Textarea } from './textarea';

const meta = {
    title: 'Components/Field',
    component: Field,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        orientation: {
            control: 'select',
            options: ['vertical', 'horizontal', 'responsive'],
        },
    },
} satisfies Meta<typeof Field>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    render: () => (
        <Field className="w-[350px]">
            <FieldLabel>이메일</FieldLabel>
            <Input type="email" placeholder="example@email.com" />
            <FieldDescription>
                이메일 주소를 입력하세요
            </FieldDescription>
        </Field>
    ),
};

export const Horizontal: Story = {
    render: () => (
        <Field orientation="horizontal" className="w-[350px]">
            <FieldLabel htmlFor="remember">로그인 상태 유지</FieldLabel>
            <Switch id="remember" />
        </Field>
    ),
};

export const WithCheckbox: Story = {
    render: () => (
        <Field orientation="horizontal" className="w-[350px]">
            <Checkbox id="terms" />
            <FieldContent>
                <FieldLabel htmlFor="terms">이용약관 동의</FieldLabel>
                <FieldDescription>
                    서비스 이용약관에 동의합니다.
                </FieldDescription>
            </FieldContent>
        </Field>
    ),
};

export const WithError: Story = {
    render: () => (
        <Field className="w-[350px]" data-invalid="true">
            <FieldLabel>비밀번호</FieldLabel>
            <Input type="password" placeholder="비밀번호" className="border-destructive" />
            <FieldError>
                비밀번호는 최소 8자 이상이어야 합니다
            </FieldError>
        </Field>
    ),
};

export const MultipleErrors: Story = {
    render: () => (
        <Field className="w-[350px]" data-invalid="true">
            <FieldLabel>비밀번호</FieldLabel>
            <Input type="password" className="border-destructive" />
            <FieldError
                errors={[
                    { message: '비밀번호는 최소 8자 이상이어야 합니다' },
                    { message: '특수문자를 포함해야 합니다' },
                    { message: '숫자를 포함해야 합니다' },
                ]}
            />
        </Field>
    ),
};

export const FieldSetExample: Story = {
    render: () => (
        <FieldSet className="w-[400px]">
            <FieldLegend>배송 정보</FieldLegend>
            <FieldGroup>
                <Field>
                    <FieldLabel>받는 분</FieldLabel>
                    <Input placeholder="수령인 이름" />
                </Field>
                <Field>
                    <FieldLabel>연락처</FieldLabel>
                    <Input placeholder="010-0000-0000" />
                </Field>
                <Field>
                    <FieldLabel>주소</FieldLabel>
                    <Textarea placeholder="배송 주소를 입력하세요" />
                </Field>
            </FieldGroup>
        </FieldSet>
    ),
};

export const WithSeparator: Story = {
    render: () => (
        <FieldGroup className="w-[350px]">
            <Field>
                <FieldLabel>이메일</FieldLabel>
                <Input type="email" placeholder="example@email.com" />
            </Field>
            <FieldSeparator>또는</FieldSeparator>
            <Field>
                <FieldLabel>전화번호</FieldLabel>
                <Input type="tel" placeholder="010-0000-0000" />
            </Field>
        </FieldGroup>
    ),
};

export const Required: Story = {
    render: () => (
        <Field className="w-[350px]">
            <FieldLabel>
                이름 <span className="text-destructive">*</span>
            </FieldLabel>
            <Input placeholder="이름을 입력하세요" />
            <FieldDescription>
                필수 입력 항목입니다
            </FieldDescription>
        </Field>
    ),
};


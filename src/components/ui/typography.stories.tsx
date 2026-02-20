import type { Meta, StoryObj } from '@storybook/react';
import {
    TypographyH1,
    TypographyH2,
    TypographyH3,
    TypographyH4,
    TypographyP,
    TypographyBlockquote,
    TypographyList,
    TypographyInlineCode,
    TypographyLead,
    TypographyLarge,
    TypographySmall,
    TypographyMuted,
} from './typography';

const meta = {
    title: 'Components/Typography',
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const Headings: Story = {
    render: () => (
        <div className="space-y-4">
            <TypographyH1>Heading 1</TypographyH1>
            <TypographyH2>Heading 2</TypographyH2>
            <TypographyH3>Heading 3</TypographyH3>
            <TypographyH4>Heading 4</TypographyH4>
        </div>
    ),
};

export const Paragraph: Story = {
    render: () => (
        <div className="max-w-lg">
            <TypographyP>
                The king, seeing how much happier his subjects were, realized the error of his ways and repealed the joke tax.
            </TypographyP>
            <TypographyP>
                And so, the kingdom was once again filled with laughter and joy, and everyone lived happily ever after.
            </TypographyP>
        </div>
    ),
};

export const Blockquote: Story = {
    render: () => (
        <TypographyBlockquote>
            "After all," he said, "everyone enjoys a good joke, so it's only fair that they should pay for the privilege."
        </TypographyBlockquote>
    ),
};

export const List: Story = {
    render: () => (
        <TypographyList>
            <li>1st level of puns: 5 gold coins</li>
            <li>2nd level of jokes: 10 gold coins</li>
            <li>3rd level of one-liners: 20 gold coins</li>
        </TypographyList>
    ),
};

export const InlineCode: Story = {
    render: () => (
        <TypographyP>
            Run <TypographyInlineCode>npm install @radix-ui/react-alert-dialog</TypographyInlineCode> to install.
        </TypographyP>
    ),
};

export const Lead: Story = {
    render: () => (
        <TypographyLead>
            A modal dialog that interrupts the user with important content and expects a response.
        </TypographyLead>
    ),
};

export const Large: Story = {
    render: () => (
        <TypographyLarge>Are you absolutely sure?</TypographyLarge>
    ),
};

export const Small: Story = {
    render: () => (
        <TypographySmall>Email address</TypographySmall>
    ),
};

export const Muted: Story = {
    render: () => (
        <TypographyMuted>Enter your email address.</TypographyMuted>
    ),
};

export const AllStyles: Story = {
    render: () => (
        <div className="max-w-2xl space-y-6">
            <TypographyH1>Typography 컴포넌트</TypographyH1>
            <TypographyLead>
                다양한 텍스트 스타일을 제공하는 Typography 컴포넌트입니다.
            </TypographyLead>

            <TypographyH2>제목 스타일</TypographyH2>
            <TypographyP>
                H1부터 H4까지 다양한 제목 스타일을 제공합니다.
            </TypographyP>

            <TypographyH3>인용문</TypographyH3>
            <TypographyBlockquote>
                "좋은 디자인은 가능한 적게 디자인하는 것이다." - Dieter Rams
            </TypographyBlockquote>

            <TypographyH3>목록</TypographyH3>
            <TypographyList>
                <li>첫 번째 항목</li>
                <li>두 번째 항목</li>
                <li>세 번째 항목</li>
            </TypographyList>

            <TypographyH3>코드</TypographyH3>
            <TypographyP>
                컴포넌트를 사용하려면 <TypographyInlineCode>import</TypographyInlineCode> 문을 추가하세요.
            </TypographyP>

            <TypographyMuted>
                * 모든 스타일은 Tailwind CSS로 정의되어 있습니다.
            </TypographyMuted>
        </div>
    ),
};

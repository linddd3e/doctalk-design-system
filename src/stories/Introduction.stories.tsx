import type { Meta, StoryObj } from '@storybook/react';

const meta = {
    title: 'Design System/Introduction',
    parameters: {
        layout: 'fullscreen',
    },
    tags: ['autodocs'],
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const Overview: Story = {
    render: () => (
        <div className="p-8 max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold mb-6">Doctalk Design System</h1>

            <p className="text-lg mb-8">
                Doctalk Design System은 shadcn/ui를 기반으로 한 React 컴포넌트 라이브러리입니다.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="border rounded-lg p-6">
                    <h3 className="text-xl font-semibold mb-3">📦 주요 특징</h3>
                    <ul className="space-y-2 text-sm">
                        <li>✅ 53개 UI 컴포넌트</li>
                        <li>✅ Tailwind CSS 기반</li>
                        <li>✅ 다크 모드 지원</li>
                        <li>✅ TypeScript 완벽 지원</li>
                        <li>✅ 접근성 (ARIA) 준수</li>
                        <li>✅ React 19 호환</li>
                    </ul>
                </div>

                <div className="border rounded-lg p-6">
                    <h3 className="text-xl font-semibold mb-3">🎨 디자인 토큰</h3>
                    <ul className="space-y-2 text-sm">
                        <li>• Colors - HSL 기반 색상</li>
                        <li>• Typography - Tailwind 타이포그래피</li>
                        <li>• Spacing - 간격 시스템</li>
                        <li>• Border Radius - 3단계</li>
                        <li>• Shadows - 7단계 그림자</li>
                    </ul>
                </div>
            </div>

            <div className="bg-muted rounded-lg p-6 mb-8">
                <h3 className="text-xl font-semibold mb-3">🚀 시작하기</h3>
                <pre className="bg-background p-4 rounded border overflow-x-auto">
                    <code>{`npm install doctalk-design-system

import { Button, Card } from 'doctalk-design-system';
import 'doctalk-design-system/styles.css';

function App() {
  return (
    <Card>
      <Button>Click me</Button>
    </Card>
  );
}`}</code>
                </pre>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="text-center p-4 border rounded">
                    <div className="text-3xl font-bold text-primary">10</div>
                    <div className="text-sm text-muted-foreground">기본 UI</div>
                </div>
                <div className="text-center p-4 border rounded">
                    <div className="text-3xl font-bold text-primary">13</div>
                    <div className="text-sm text-muted-foreground">폼</div>
                </div>
                <div className="text-center p-4 border rounded">
                    <div className="text-3xl font-bold text-primary">8</div>
                    <div className="text-sm text-muted-foreground">레이아웃</div>
                </div>
                <div className="text-center p-4 border rounded">
                    <div className="text-3xl font-bold text-primary">22</div>
                    <div className="text-sm text-muted-foreground">기타</div>
                </div>
            </div>
        </div>
    ),
};

import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
    title: 'Design System/Design Tokens',
    parameters: {
        layout: 'fullscreen',
    },
    tags: ['autodocs'],
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

const ColorToken = ({ token, value, description, className, demos }: { token: string; value: string; description: string; className: string; demos?: React.ReactNode }) => (
    <div className="border rounded-lg p-4">
        <div className={`h-12 rounded-md mb-3 ${className}`}></div>
        <div className="space-y-1">
            <div className="font-semibold text-sm">{description}</div>
            <code className="text-xs text-muted-foreground block">--{token}</code>
            <code className="text-xs text-muted-foreground block">{value}</code>
        </div>
        {demos && (
            <div className="mt-3 pt-3 border-t space-y-2">
                <div className="text-[10px] font-medium text-muted-foreground uppercase tracking-wider">사용 예시</div>
                {demos}
            </div>
        )}
    </div>
);

export const Colors: Story = {
    render: () => (
        <div className="p-8 max-w-7xl mx-auto">
            <h1 className="text-3xl font-bold mb-2">색상 시스템</h1>
            <p className="text-muted-foreground mb-8">
                HSL 기반의 CSS Variables를 사용한 일관된 색상 시스템
            </p>

            <div className="space-y-12">
                {/* 라이트 모드 */}
                <div>
                    <h2 className="text-2xl font-semibold mb-6">라이트 모드 색상 토큰</h2>

                    <div className="mb-8">
                        <h3 className="text-lg font-semibold mb-4">기본 색상</h3>
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                            <ColorToken
                                token="background"
                                value="0 0% 100%"
                                description="Background"
                                className="bg-background border"
                                demos={
                                    <div className="space-y-1.5">
                                        <div className="flex items-center gap-1.5 flex-wrap">
                                            <button className="bg-background border text-foreground px-2 py-0.5 rounded-md text-[10px]">Outline Button</button>
                                            <div className="bg-background border rounded-md px-2 py-0.5 text-[10px]">Dialog</div>
                                            <div className="bg-background border rounded px-2 py-0.5 text-[10px]">Sheet</div>
                                        </div>
                                        <div className="flex items-center gap-1.5">
                                            <div className="bg-background border rounded-md w-5 h-5 flex items-center justify-center">
                                                <div className="w-2.5 h-2.5 rounded-full bg-foreground"></div>
                                            </div>
                                            <span className="text-[10px] text-muted-foreground">Switch/Slider thumb</span>
                                        </div>
                                        <div className="flex items-center gap-1.5">
                                            <div className="bg-muted rounded h-1.5 w-16"><div className="bg-background rounded-full w-3 h-3 -mt-[3px] ml-8 border shadow-sm"></div></div>
                                        </div>
                                        <div className="flex items-center gap-1.5">
                                            <div className="relative">
                                                <div className="w-6 h-6 rounded-full bg-muted flex items-center justify-center text-[8px]">AV</div>
                                                <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full bg-green-500 border-2 border-background"></div>
                                            </div>
                                            <span className="text-[10px] text-muted-foreground">Avatar badge border</span>
                                        </div>
                                    </div>
                                }
                            />
                            <ColorToken
                                token="foreground"
                                value="222.2 84% 4.9%"
                                description="Foreground"
                                className="bg-foreground"
                                demos={
                                    <div className="space-y-1.5">
                                        <div className="flex items-center gap-1.5 flex-wrap">
                                            <span className="text-foreground text-[10px] font-medium">Alert 텍스트</span>
                                            <span className="border text-foreground px-1.5 py-0.5 rounded-full text-[10px]">Outline Badge</span>
                                        </div>
                                        <div className="flex items-center gap-1.5">
                                            <div className="w-4 h-4 bg-foreground rounded-sm"></div>
                                            <span className="text-[10px] text-muted-foreground">InputOTP 캐럿</span>
                                        </div>
                                        <div className="flex items-center gap-1.5 flex-wrap">
                                            <span className="text-foreground text-[10px] border rounded px-1.5 py-0.5">file input 텍스트</span>
                                            <div className="bg-background border rounded px-1.5 py-0.5 text-foreground text-[10px] font-medium shadow-sm">활성 Tab</div>
                                        </div>
                                    </div>
                                }
                            />
                            <ColorToken
                                token="card"
                                value="0 0% 100%"
                                description="Card"
                                className="bg-card border"
                                demos={
                                    <div className="bg-card text-card-foreground border rounded-lg p-2 shadow-sm">
                                        <div className="text-[10px] font-semibold">Card Title</div>
                                        <div className="text-[10px] text-muted-foreground">Card 컴포넌트에서만 사용</div>
                                    </div>
                                }
                            />
                            <ColorToken
                                token="card-foreground"
                                value="222.2 84% 4.9%"
                                description="Card Foreground"
                                className="bg-card-foreground"
                                demos={
                                    <div className="bg-card text-card-foreground border rounded-lg p-2 shadow-sm">
                                        <div className="text-[10px] font-semibold">Card Title</div>
                                        <div className="text-[10px] text-muted-foreground">Card 컴포넌트에서만 사용</div>
                                    </div>
                                }
                            />
                            <ColorToken
                                token="popover"
                                value="0 0% 100%"
                                description="Popover"
                                className="bg-popover border"
                                demos={
                                    <div className="space-y-1.5">
                                        <div className="bg-popover text-popover-foreground border rounded-md shadow-md p-2 text-[10px]">
                                            <div className="font-medium">Popover / Dropdown</div>
                                            <div className="text-muted-foreground">Select, Command, ContextMenu, HoverCard</div>
                                        </div>
                                    </div>
                                }
                            />
                            <ColorToken
                                token="popover-foreground"
                                value="222.2 84% 4.9%"
                                description="Popover Foreground"
                                className="bg-popover-foreground"
                                demos={
                                    <div className="space-y-1.5">
                                        <div className="bg-popover border rounded-md shadow-sm p-2">
                                            <div className="text-popover-foreground text-[10px] font-medium">메뉴 항목 텍스트</div>
                                            <div className="text-popover-foreground text-[10px]">팝오버 콘텐츠 텍스트</div>
                                        </div>
                                    </div>
                                }
                            />
                        </div>
                    </div>

                    <div className="mb-8">
                        <h3 className="text-lg font-semibold mb-4">의미론적 색상</h3>
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                            <ColorToken
                                token="primary"
                                value="156 65% 50%"
                                description="Primary"
                                className="bg-primary"
                                demos={
                                    <div className="space-y-1.5">
                                        <div className="flex items-center gap-1.5 flex-wrap">
                                            <button className="bg-primary text-primary-foreground px-2.5 py-0.5 rounded-md text-[10px] font-medium">Button</button>
                                            <span className="bg-primary text-primary-foreground px-2 py-0.5 rounded-full text-[10px]">Badge</span>
                                        </div>
                                        <div className="flex items-center gap-1.5">
                                            <div className="w-4 h-4 rounded-sm bg-primary flex items-center justify-center"><svg className="w-2.5 h-2.5 text-primary-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path d="M5 13l4 4L19 7" /></svg></div>
                                            <div className="w-4 h-4 rounded-full border-2 border-primary flex items-center justify-center"><div className="w-2 h-2 rounded-full bg-primary"></div></div>
                                            <span className="text-[10px] text-muted-foreground">Checkbox, Radio</span>
                                        </div>
                                        <div className="space-y-1">
                                            <div className="bg-secondary rounded-full h-2 w-full"><div className="bg-primary rounded-full h-2 w-3/5"></div></div>
                                            <span className="text-[10px] text-muted-foreground">Progress, Slider</span>
                                        </div>
                                        <div className="bg-primary text-primary-foreground rounded-md px-2 py-1 text-[10px]">Tooltip</div>
                                        <div className="flex items-center gap-1.5">
                                            <div className="w-8 h-4 rounded-full bg-primary relative"><div className="absolute right-0.5 top-0.5 w-3 h-3 rounded-full bg-background shadow-sm"></div></div>
                                            <span className="text-[10px] text-muted-foreground">Switch checked</span>
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <span className="text-primary text-[10px] underline">Link variant</span>
                                            <span className="text-[10px] text-muted-foreground">Button, Badge</span>
                                        </div>
                                    </div>
                                }
                            />
                            <ColorToken
                                token="primary-foreground"
                                value="0 0% 100%"
                                description="Primary Foreground"
                                className="bg-primary-foreground border"
                                demos={
                                    <div className="space-y-1.5">
                                        <div className="flex items-center gap-1.5 flex-wrap">
                                            <button className="bg-primary text-primary-foreground px-2.5 py-0.5 rounded-md text-[10px] font-medium">Button 텍스트</button>
                                            <span className="bg-primary text-primary-foreground px-2 py-0.5 rounded-full text-[10px]">Badge 텍스트</span>
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <div className="w-4 h-4 rounded-sm bg-primary flex items-center justify-center"><svg className="w-2.5 h-2.5 text-primary-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path d="M5 13l4 4L19 7" /></svg></div>
                                            <span className="text-[10px] text-muted-foreground">Checkbox 아이콘</span>
                                        </div>
                                    </div>
                                }
                            />
                            <ColorToken
                                token="secondary"
                                value="210 40% 96.1%"
                                description="Secondary"
                                className="bg-secondary border"
                                demos={
                                    <div className="space-y-1.5">
                                        <div className="flex items-center gap-1.5 flex-wrap">
                                            <button className="bg-secondary text-secondary-foreground px-2.5 py-0.5 rounded-md text-[10px] font-medium">Button</button>
                                            <span className="bg-secondary text-secondary-foreground px-2 py-0.5 rounded-full text-[10px]">Badge</span>
                                        </div>
                                        <div className="space-y-1">
                                            <div className="bg-secondary rounded-full h-2 w-full"></div>
                                            <span className="text-[10px] text-muted-foreground">Progress/Slider 트랙 (미채움)</span>
                                        </div>
                                    </div>
                                }
                            />
                            <ColorToken
                                token="secondary-foreground"
                                value="222.2 47.4% 11.2%"
                                description="Secondary Foreground"
                                className="bg-secondary-foreground"
                                demos={
                                    <div className="flex items-center gap-1.5 flex-wrap">
                                        <button className="bg-secondary text-secondary-foreground px-2.5 py-0.5 rounded-md text-[10px] font-medium">Button 텍스트</button>
                                        <span className="bg-secondary text-secondary-foreground px-2 py-0.5 rounded-full text-[10px]">Badge 텍스트</span>
                                    </div>
                                }
                            />
                            <ColorToken
                                token="muted"
                                value="210 40% 96.1%"
                                description="Muted"
                                className="bg-muted border"
                                demos={
                                    <div className="space-y-1.5">
                                        <div className="flex items-center gap-1.5 flex-wrap">
                                            <div className="bg-muted w-6 h-6 rounded-full flex items-center justify-center text-[8px] font-medium">AV</div>
                                            <div className="bg-muted rounded-md px-1.5 py-0.5 text-[10px]">Kbd</div>
                                            <div className="bg-muted rounded-full px-2 py-0.5 text-[10px] text-muted-foreground">Tab</div>
                                        </div>
                                        <div className="bg-muted rounded-md h-4 w-24 animate-pulse"></div>
                                        <div className="flex items-center gap-1.5 flex-wrap">
                                            <button className="bg-muted text-muted-foreground px-2 py-0.5 rounded-md text-[10px]">Cancel</button>
                                            <div className="w-8 h-1 rounded-full bg-muted"></div>
                                            <span className="text-[10px] text-muted-foreground">Sonner 취소, Drawer 핸들</span>
                                        </div>
                                        <span className="text-[10px] text-muted-foreground">Skeleton, Avatar, Tabs, Chart fill 등 14개 컴포넌트</span>
                                    </div>
                                }
                            />
                            <ColorToken
                                token="muted-foreground"
                                value="215.4 16.3% 46.9%"
                                description="Muted Foreground"
                                className="bg-muted-foreground"
                                demos={
                                    <div className="space-y-1.5">
                                        <div className="flex flex-col gap-1">
                                            <span className="text-muted-foreground text-[10px]">CardDescription 설명 텍스트</span>
                                            <span className="text-muted-foreground text-[10px]">placeholder 텍스트</span>
                                            <div className="flex items-center gap-1">
                                                <span className="text-muted-foreground text-[10px]">⌘K</span>
                                                <span className="text-[10px] text-muted-foreground/70">단축키 힌트</span>
                                            </div>
                                        </div>
                                        <span className="text-[9px] text-muted-foreground">26개 컴포넌트에서 보조 텍스트로 사용</span>
                                    </div>
                                }
                            />
                            <ColorToken
                                token="accent"
                                value="210 40% 96.1%"
                                description="Accent"
                                className="bg-accent border"
                                demos={
                                    <div className="space-y-1.5">
                                        <div className="bg-accent text-accent-foreground rounded-md px-2 py-1 text-[10px]">메뉴 hover/focus 항목</div>
                                        <div className="bg-accent text-accent-foreground rounded-md px-2 py-1 text-[10px]">Command 선택 항목</div>
                                        <div className="flex items-center gap-1.5">
                                            <div className="bg-accent text-accent-foreground rounded-sm px-2 py-0.5 text-[10px] border">Toggle on</div>
                                            <span className="text-[10px] text-muted-foreground">활성 상태</span>
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <div className="w-6 h-6 rounded-md bg-accent text-accent-foreground flex items-center justify-center text-[9px] font-medium">20</div>
                                            <div className="flex">
                                                <div className="w-5 h-6 bg-primary rounded-l-md flex items-center justify-center text-[9px] text-primary-foreground">14</div>
                                                <div className="w-5 h-6 bg-accent flex items-center justify-center text-[9px] text-accent-foreground">15</div>
                                                <div className="w-5 h-6 bg-accent flex items-center justify-center text-[9px] text-accent-foreground">16</div>
                                                <div className="w-5 h-6 bg-primary rounded-r-md flex items-center justify-center text-[9px] text-primary-foreground">17</div>
                                            </div>
                                        </div>
                                        <span className="text-[10px] text-muted-foreground">Calendar today, 범위 중간 날짜</span>
                                    </div>
                                }
                            />
                            <ColorToken
                                token="accent-foreground"
                                value="222.2 47.4% 11.2%"
                                description="Accent Foreground"
                                className="bg-accent-foreground"
                                demos={
                                    <div className="space-y-1.5">
                                        <div className="bg-accent rounded-md px-2 py-1">
                                            <span className="text-accent-foreground text-[10px] font-medium">선택된 항목 텍스트</span>
                                        </div>
                                        <span className="text-[9px] text-muted-foreground">Menu, Command, Toggle, Select 등의 활성 텍스트</span>
                                    </div>
                                }
                            />
                            <ColorToken
                                token="destructive"
                                value="0 84.2% 60.2%"
                                description="Destructive"
                                className="bg-destructive"
                                demos={
                                    <div className="space-y-1.5">
                                        <div className="flex items-center gap-1.5 flex-wrap">
                                            <button className="bg-destructive text-destructive-foreground px-2.5 py-0.5 rounded-md text-[10px] font-medium">삭제</button>
                                            <span className="bg-destructive text-destructive-foreground px-2 py-0.5 rounded-full text-[10px]">Badge</span>
                                        </div>
                                        <div className="border-destructive border rounded-md px-2 py-1 text-destructive text-[10px]">Alert destructive variant</div>
                                        <div className="flex items-center gap-1.5">
                                            <input className="border-destructive border rounded px-1.5 py-0.5 text-[10px] w-20 ring-1 ring-destructive/20" placeholder="에러 입력" readOnly />
                                            <span className="text-destructive text-[10px]">에러 메시지</span>
                                        </div>
                                    </div>
                                }
                            />
                            <ColorToken
                                token="destructive-foreground"
                                value="210 40% 98%"
                                description="Destructive Foreground"
                                className="bg-destructive-foreground border"
                                demos={
                                    <div className="flex items-center gap-1.5 flex-wrap">
                                        <button className="bg-destructive text-destructive-foreground px-2.5 py-0.5 rounded-md text-[10px] font-medium">삭제 버튼 텍스트</button>
                                        <span className="bg-destructive text-destructive-foreground px-2 py-0.5 rounded-full text-[10px]">Badge 텍스트</span>
                                    </div>
                                }
                            />
                        </div>
                    </div>

                    <div className="mb-8">
                        <h3 className="text-lg font-semibold mb-4">UI 요소 색상</h3>
                        <p className="text-xs text-muted-foreground mb-3">* Border: 대부분 컴포넌트는 Tailwind border 유틸리티를 통해 암묵적으로 사용</p>
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                            <ColorToken
                                token="border"
                                value="214.3 31.8% 91.4%"
                                description="Border"
                                className="bg-border"
                                demos={
                                    <div className="space-y-1.5">
                                        <div className="flex items-center gap-1.5">
                                            <div className="border-border border rounded-md px-2 py-1 text-[10px]">Card / Item</div>
                                            <div className="border-border border-l-2 h-6"></div>
                                            <span className="text-[10px] text-muted-foreground">Resizable</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <div className="h-px bg-border flex-1"></div>
                                            <span className="text-[10px] text-muted-foreground">Separator</span>
                                        </div>
                                        <div className="flex items-center gap-1.5">
                                            <div className="bg-popover border rounded-md p-1.5 text-[10px] w-full">
                                                <div className="text-[9px]">항목 1</div>
                                                <div className="h-px bg-border my-1"></div>
                                                <div className="text-[9px]">항목 2</div>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-1.5">
                                            <div className="w-1.5 h-8 rounded-full bg-border"></div>
                                            <span className="text-[10px] text-muted-foreground">ScrollArea thumb</span>
                                        </div>
                                        <span className="text-[9px] text-muted-foreground">+ Chart stroke, Sonner toast 등 암묵적 사용</span>
                                    </div>
                                }
                            />
                            <ColorToken
                                token="input"
                                value="214.3 31.8% 91.4%"
                                description="Input"
                                className="bg-input"
                                demos={
                                    <div className="space-y-1.5">
                                        <input className="border-input border rounded-md px-2 py-0.5 text-[10px] w-full bg-background" placeholder="Input 테두리" readOnly />
                                        <div className="flex items-center gap-1.5">
                                            <button className="border-input border bg-background px-2 py-0.5 rounded-md text-[10px]">Outline Btn</button>
                                            <div className="border-input border rounded px-2 py-0.5 text-[10px]">Select</div>
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <div className="w-8 h-4 rounded-full bg-input"></div>
                                            <span className="text-[10px] text-muted-foreground">Switch unchecked</span>
                                        </div>
                                    </div>
                                }
                            />
                            <ColorToken
                                token="ring"
                                value="222.2 84% 4.9%"
                                description="Ring (Focus)"
                                className="bg-ring"
                                demos={
                                    <div className="space-y-1.5">
                                        <div className="flex items-center gap-1.5 flex-wrap">
                                            <button className="bg-primary text-primary-foreground px-2.5 py-0.5 rounded-md text-[10px] ring-2 ring-ring ring-offset-2 ring-offset-background">Focused</button>
                                            <input className="border-ring border rounded-md px-2 py-0.5 text-[10px] w-20 ring-1 ring-ring/50 bg-background" value="Focus" readOnly />
                                        </div>
                                        <span className="text-[9px] text-muted-foreground">모든 인터랙티브 요소의 키보드 포커스 링</span>
                                    </div>
                                }
                            />
                            <div className="border rounded-lg p-4">
                                <div
                                    className="h-20 rounded-md mb-3 border flex items-center justify-center text-sm font-semibold text-foreground"
                                    style={{ fontSize: '1.25rem' }}
                                >
                                    0.5rem
                                </div>
                                <div className="space-y-1">
                                    <div className="font-semibold text-sm">Radius (기본 반경)</div>
                                    <code className="text-xs text-muted-foreground block">--radius</code>
                                    <code className="text-xs text-muted-foreground block">0.5rem</code>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mb-8">
                        <h3 className="text-lg font-semibold mb-4">사이드바 색상</h3>
                        <p className="text-sm text-muted-foreground mb-4">모든 사이드바 토큰은 <code className="text-xs bg-muted px-1 py-0.5 rounded">Sidebar</code> 컴포넌트 내부에서만 사용됩니다.</p>
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                            <div className="border rounded-lg p-4">
                                <div
                                    className="h-20 rounded-md mb-3"
                                    style={{ backgroundColor: 'hsl(0 0% 98%)' }}
                                ></div>
                                <div className="space-y-1">
                                    <div className="font-semibold text-sm">Sidebar Background</div>
                                    <code className="text-xs text-muted-foreground block">--sidebar-background</code>
                                    <code className="text-xs text-muted-foreground block">0 0% 98%</code>
                                </div>
                            </div>
                            <div className="border rounded-lg p-4">
                                <div
                                    className="h-20 rounded-md mb-3"
                                    style={{ backgroundColor: 'hsl(240 5.3% 26.1%)' }}
                                ></div>
                                <div className="space-y-1">
                                    <div className="font-semibold text-sm">Sidebar Foreground</div>
                                    <code className="text-xs text-muted-foreground block">--sidebar-foreground</code>
                                    <code className="text-xs text-muted-foreground block">240 5.3% 26.1%</code>
                                </div>
                            </div>
                            <div className="border rounded-lg p-4">
                                <div
                                    className="h-20 rounded-md mb-3"
                                    style={{ backgroundColor: 'hsl(240 5.9% 10%)' }}
                                ></div>
                                <div className="space-y-1">
                                    <div className="font-semibold text-sm">Sidebar Primary</div>
                                    <code className="text-xs text-muted-foreground block">--sidebar-primary</code>
                                    <code className="text-xs text-muted-foreground block">240 5.9% 10%</code>
                                    <div className="text-[10px] text-destructive mt-1">미사용 — 컴포넌트에서 참조 없음</div>
                                </div>
                            </div>
                            <div className="border rounded-lg p-4">
                                <div
                                    className="h-20 rounded-md mb-3 border"
                                    style={{ backgroundColor: 'hsl(0 0% 98%)' }}
                                ></div>
                                <div className="space-y-1">
                                    <div className="font-semibold text-sm">Sidebar Primary Foreground</div>
                                    <code className="text-xs text-muted-foreground block">--sidebar-primary-foreground</code>
                                    <code className="text-xs text-muted-foreground block">0 0% 98%</code>
                                    <div className="text-[10px] text-destructive mt-1">미사용 — 컴포넌트에서 참조 없음</div>
                                </div>
                            </div>
                            <div className="border rounded-lg p-4">
                                <div
                                    className="h-20 rounded-md mb-3 border"
                                    style={{ backgroundColor: 'hsl(240 4.8% 95.9%)' }}
                                ></div>
                                <div className="space-y-1">
                                    <div className="font-semibold text-sm">Sidebar Accent</div>
                                    <code className="text-xs text-muted-foreground block">--sidebar-accent</code>
                                    <code className="text-xs text-muted-foreground block">240 4.8% 95.9%</code>
                                </div>
                            </div>
                            <div className="border rounded-lg p-4">
                                <div
                                    className="h-20 rounded-md mb-3"
                                    style={{ backgroundColor: 'hsl(240 5.9% 10%)' }}
                                ></div>
                                <div className="space-y-1">
                                    <div className="font-semibold text-sm">Sidebar Accent Foreground</div>
                                    <code className="text-xs text-muted-foreground block">--sidebar-accent-foreground</code>
                                    <code className="text-xs text-muted-foreground block">240 5.9% 10%</code>
                                </div>
                            </div>
                            <div className="border rounded-lg p-4">
                                <div
                                    className="h-20 rounded-md mb-3"
                                    style={{ backgroundColor: 'hsl(220 13% 91%)' }}
                                ></div>
                                <div className="space-y-1">
                                    <div className="font-semibold text-sm">Sidebar Border</div>
                                    <code className="text-xs text-muted-foreground block">--sidebar-border</code>
                                    <code className="text-xs text-muted-foreground block">220 13% 91%</code>
                                </div>
                            </div>
                            <div className="border rounded-lg p-4">
                                <div
                                    className="h-20 rounded-md mb-3"
                                    style={{ backgroundColor: 'hsl(217.2 91.2% 59.8%)' }}
                                ></div>
                                <div className="space-y-1">
                                    <div className="font-semibold text-sm">Sidebar Ring</div>
                                    <code className="text-xs text-muted-foreground block">--sidebar-ring</code>
                                    <code className="text-xs text-muted-foreground block">217.2 91.2% 59.8%</code>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* 다크 모드 */}
                <div className="dark bg-background text-foreground p-8 rounded-lg">
                    <h2 className="text-2xl font-semibold mb-6">다크 모드 색상 토큰</h2>

                    <div className="mb-8">
                        <h3 className="text-lg font-semibold mb-4">기본 색상</h3>
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                            <ColorToken
                                token="background"
                                value="222.2 84% 4.9%"
                                description="Background"
                                className="bg-background border"
                            />
                            <ColorToken
                                token="foreground"
                                value="210 40% 98%"
                                description="Foreground"
                                className="bg-foreground"
                            />
                            <ColorToken
                                token="card"
                                value="222.2 84% 4.9%"
                                description="Card"
                                className="bg-card border"
                            />
                            <ColorToken
                                token="card-foreground"
                                value="210 40% 98%"
                                description="Card Foreground"
                                className="bg-card-foreground"
                            />
                            <ColorToken
                                token="popover"
                                value="222.2 84% 4.9%"
                                description="Popover"
                                className="bg-popover border"
                            />
                            <ColorToken
                                token="popover-foreground"
                                value="210 40% 98%"
                                description="Popover Foreground"
                                className="bg-popover-foreground"
                            />
                        </div>
                    </div>

                    <div className="mb-8">
                        <h3 className="text-lg font-semibold mb-4">의미론적 색상</h3>
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                            <ColorToken
                                token="primary"
                                value="156 65% 50%"
                                description="Primary"
                                className="bg-primary"
                            />
                            <ColorToken
                                token="primary-foreground"
                                value="0 0% 100%"
                                description="Primary Foreground"
                                className="bg-primary-foreground"
                            />
                            <ColorToken
                                token="secondary"
                                value="217.2 32.6% 17.5%"
                                description="Secondary"
                                className="bg-secondary"
                            />
                            <ColorToken
                                token="secondary-foreground"
                                value="210 40% 98%"
                                description="Secondary Foreground"
                                className="bg-secondary-foreground"
                            />
                            <ColorToken
                                token="muted"
                                value="217.2 32.6% 17.5%"
                                description="Muted"
                                className="bg-muted border"
                            />
                            <ColorToken
                                token="muted-foreground"
                                value="215 20.2% 65.1%"
                                description="Muted Foreground"
                                className="bg-muted-foreground"
                            />
                            <ColorToken
                                token="accent"
                                value="217.2 32.6% 17.5%"
                                description="Accent"
                                className="bg-accent border"
                            />
                            <ColorToken
                                token="accent-foreground"
                                value="210 40% 98%"
                                description="Accent Foreground"
                                className="bg-accent-foreground"
                            />
                            <ColorToken
                                token="destructive"
                                value="0 62.8% 30.6%"
                                description="Destructive"
                                className="bg-destructive"
                            />
                            <ColorToken
                                token="destructive-foreground"
                                value="210 40% 98%"
                                description="Destructive Foreground"
                                className="bg-destructive-foreground"
                            />
                        </div>
                    </div>

                    <div className="mb-8">
                        <h3 className="text-lg font-semibold mb-4">UI 요소 색상</h3>
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                            <ColorToken
                                token="border"
                                value="217.2 32.6% 17.5%"
                                description="Border"
                                className="bg-border"
                            />
                            <ColorToken
                                token="input"
                                value="217.2 32.6% 17.5%"
                                description="Input"
                                className="bg-input"
                            />
                            <ColorToken
                                token="ring"
                                value="212.7 26.8% 83.9%"
                                description="Ring (Focus)"
                                className="bg-ring"
                            />
                        </div>
                    </div>

                    <div className="mb-8">
                        <h3 className="text-lg font-semibold mb-4">사이드바 색상</h3>
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                            <div className="border rounded-lg p-4">
                                <div
                                    className="h-20 rounded-md mb-3"
                                    style={{ backgroundColor: 'hsl(240 5.9% 10%)' }}
                                ></div>
                                <div className="space-y-1">
                                    <div className="font-semibold text-sm">Sidebar Background</div>
                                    <code className="text-xs text-muted-foreground block">--sidebar-background</code>
                                    <code className="text-xs text-muted-foreground block">240 5.9% 10%</code>
                                </div>
                            </div>
                            <div className="border rounded-lg p-4">
                                <div
                                    className="h-20 rounded-md mb-3"
                                    style={{ backgroundColor: 'hsl(240 4.8% 95.9%)' }}
                                ></div>
                                <div className="space-y-1">
                                    <div className="font-semibold text-sm">Sidebar Foreground</div>
                                    <code className="text-xs text-muted-foreground block">--sidebar-foreground</code>
                                    <code className="text-xs text-muted-foreground block">240 4.8% 95.9%</code>
                                </div>
                            </div>
                            <div className="border rounded-lg p-4">
                                <div
                                    className="h-20 rounded-md mb-3"
                                    style={{ backgroundColor: 'hsl(224.3 76.3% 48%)' }}
                                ></div>
                                <div className="space-y-1">
                                    <div className="font-semibold text-sm">Sidebar Primary</div>
                                    <code className="text-xs text-muted-foreground block">--sidebar-primary</code>
                                    <code className="text-xs text-muted-foreground block">224.3 76.3% 48%</code>
                                </div>
                            </div>
                            <div className="border rounded-lg p-4">
                                <div
                                    className="h-20 rounded-md mb-3 border"
                                    style={{ backgroundColor: 'hsl(0 0% 100%)' }}
                                ></div>
                                <div className="space-y-1">
                                    <div className="font-semibold text-sm">Sidebar Primary Foreground</div>
                                    <code className="text-xs text-muted-foreground block">--sidebar-primary-foreground</code>
                                    <code className="text-xs text-muted-foreground block">0 0% 100%</code>
                                </div>
                            </div>
                            <div className="border rounded-lg p-4">
                                <div
                                    className="h-20 rounded-md mb-3"
                                    style={{ backgroundColor: 'hsl(240 3.7% 15.9%)' }}
                                ></div>
                                <div className="space-y-1">
                                    <div className="font-semibold text-sm">Sidebar Accent</div>
                                    <code className="text-xs text-muted-foreground block">--sidebar-accent</code>
                                    <code className="text-xs text-muted-foreground block">240 3.7% 15.9%</code>
                                </div>
                            </div>
                            <div className="border rounded-lg p-4">
                                <div
                                    className="h-20 rounded-md mb-3"
                                    style={{ backgroundColor: 'hsl(240 4.8% 95.9%)' }}
                                ></div>
                                <div className="space-y-1">
                                    <div className="font-semibold text-sm">Sidebar Accent Foreground</div>
                                    <code className="text-xs text-muted-foreground block">--sidebar-accent-foreground</code>
                                    <code className="text-xs text-muted-foreground block">240 4.8% 95.9%</code>
                                </div>
                            </div>
                            <div className="border rounded-lg p-4">
                                <div
                                    className="h-20 rounded-md mb-3"
                                    style={{ backgroundColor: 'hsl(240 3.7% 15.9%)' }}
                                ></div>
                                <div className="space-y-1">
                                    <div className="font-semibold text-sm">Sidebar Border</div>
                                    <code className="text-xs text-muted-foreground block">--sidebar-border</code>
                                    <code className="text-xs text-muted-foreground block">240 3.7% 15.9%</code>
                                </div>
                            </div>
                            <div className="border rounded-lg p-4">
                                <div
                                    className="h-20 rounded-md mb-3"
                                    style={{ backgroundColor: 'hsl(217.2 91.2% 59.8%)' }}
                                ></div>
                                <div className="space-y-1">
                                    <div className="font-semibold text-sm">Sidebar Ring</div>
                                    <code className="text-xs text-muted-foreground block">--sidebar-ring</code>
                                    <code className="text-xs text-muted-foreground block">217.2 91.2% 59.8%</code>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* 사용 방법 */}
                <div>
                    <h2 className="text-2xl font-semibold mb-4">사용 방법</h2>

                    <div className="space-y-6">
                        <div className="bg-muted rounded-lg p-6">
                            <h3 className="font-semibold mb-3">1. Tailwind Classes</h3>
                            <pre className="bg-background p-4 rounded border overflow-x-auto text-sm">
                                <code>{`<div className="bg-background text-foreground">
  <button className="bg-primary text-primary-foreground">버튼</button>
  <div className="bg-secondary text-secondary-foreground">보조</div>
  <div className="bg-destructive text-destructive-foreground">삭제</div>
</div>`}</code>
                            </pre>
                        </div>

                        <div className="bg-muted rounded-lg p-6">
                            <h3 className="font-semibold mb-3">2. CSS Variables</h3>
                            <pre className="bg-background p-4 rounded border overflow-x-auto text-sm">
                                <code>{`:root {
  --background: 0 0% 100%;
  --foreground: 222.2 84% 4.9%;
  --primary: 156 65% 50%;
  --primary-foreground: 0 0% 100%;
}

.dark {
  --background: 222.2 84% 4.9%;
  --foreground: 210 40% 98%;
  --primary: 156 65% 50%;
  --primary-foreground: 0 0% 100%;
}`}</code>
                            </pre>
                        </div>

                        <div className="bg-muted rounded-lg p-6">
                            <h3 className="font-semibold mb-3">3. 직접 HSL 사용</h3>
                            <pre className="bg-background p-4 rounded border overflow-x-auto text-sm">
                                <code>{`<div style={{ backgroundColor: 'hsl(var(--primary))' }}>
  Primary 색상
</div>`}</code>
                            </pre>
                        </div>
                    </div>
                </div>

                {/* 색상 의미 */}
                <div>
                    <h2 className="text-2xl font-semibold mb-4">색상 토큰 의미</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="border rounded-lg p-4">
                            <h4 className="font-semibold mb-2">Primary / Primary Foreground</h4>
                            <p className="text-sm text-muted-foreground">주요 액션 버튼, 체크박스, 라디오, 프로그레스, 슬라이더, 툴팁, 캘린더 선택 상태에 사용</p>
                        </div>
                        <div className="border rounded-lg p-4">
                            <h4 className="font-semibold mb-2">Secondary / Secondary Foreground</h4>
                            <p className="text-sm text-muted-foreground">보조 버튼, 배지, 프로그레스 트랙, 슬라이더 트랙에 사용</p>
                        </div>
                        <div className="border rounded-lg p-4">
                            <h4 className="font-semibold mb-2">Destructive / Destructive Foreground</h4>
                            <p className="text-sm text-muted-foreground">삭제/경고 버튼, 배지, 알림, 폼 에러 상태, 인풋 유효성 검사에 사용</p>
                        </div>
                        <div className="border rounded-lg p-4">
                            <h4 className="font-semibold mb-2">Muted / Muted Foreground</h4>
                            <p className="text-sm text-muted-foreground">아바타 폴백, 스켈레톤, 탭 목록, 토글 호버, 키보드 단축키, 테이블에 사용</p>
                        </div>
                        <div className="border rounded-lg p-4">
                            <h4 className="font-semibold mb-2">Accent / Accent Foreground</h4>
                            <p className="text-sm text-muted-foreground">메뉴 호버/포커스, 명령 팔레트 선택, 토글 활성, 캘린더 범위 선택에 사용</p>
                        </div>
                        <div className="border rounded-lg p-4">
                            <h4 className="font-semibold mb-2">Border / Input / Ring</h4>
                            <p className="text-sm text-muted-foreground">Border: 대부분의 컴포넌트 테두리 (암묵적 사용). Input: 모든 폼 컨트롤 테두리. Ring: 모든 인터랙티브 요소의 포커스 링</p>
                        </div>
                        <div className="border rounded-lg p-4">
                            <h4 className="font-semibold mb-2">Sidebar 색상 그룹</h4>
                            <p className="text-sm text-muted-foreground">Sidebar 컴포넌트 전용. sidebar-primary/sidebar-primary-foreground는 현재 미사용 상태</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    ),
};

export const Typography: Story = {
    render: () => (
        <div className="p-8 max-w-6xl mx-auto">
            <h1 className="text-3xl font-bold mb-2">타이포그래피</h1>
            <p className="text-muted-foreground mb-8">
                Tailwind CSS 기본 타이포그래피 시스템
            </p>

            <div className="space-y-8">
                <div>
                    <h2 className="text-2xl font-semibold mb-4">폰트 크기</h2>
                    <div className="space-y-4">
                        <div className="border-b pb-3">
                            <p className="text-xs mb-1">text-xs (12px)</p>
                            <code className="text-xs text-muted-foreground">작은 캡션 및 라벨</code>
                        </div>
                        <div className="border-b pb-3">
                            <p className="text-sm mb-1">text-sm (14px)</p>
                            <code className="text-xs text-muted-foreground">본문 텍스트, 설명</code>
                        </div>
                        <div className="border-b pb-3">
                            <p className="text-base mb-1">text-base (16px)</p>
                            <code className="text-xs text-muted-foreground">기본 본문 텍스트</code>
                        </div>
                        <div className="border-b pb-3">
                            <p className="text-lg mb-1">text-lg (18px)</p>
                            <code className="text-xs text-muted-foreground">큰 본문 텍스트</code>
                        </div>
                        <div className="border-b pb-3">
                            <p className="text-xl mb-1">text-xl (20px)</p>
                            <code className="text-xs text-muted-foreground">소제목</code>
                        </div>
                        <div className="border-b pb-3">
                            <p className="text-2xl mb-1">text-2xl (24px)</p>
                            <code className="text-xs text-muted-foreground">제목</code>
                        </div>
                        <div className="border-b pb-3">
                            <p className="text-3xl mb-1">text-3xl (30px)</p>
                            <code className="text-xs text-muted-foreground">큰 제목</code>
                        </div>
                        <div>
                            <p className="text-4xl mb-1">text-4xl (36px)</p>
                            <code className="text-xs text-muted-foreground">페이지 제목</code>
                        </div>
                    </div>
                </div>

                <div>
                    <h2 className="text-2xl font-semibold mb-4">폰트 굵기</h2>
                    <div className="space-y-2">
                        <p className="font-light">font-light (300) - 가벼운 텍스트</p>
                        <p className="font-normal">font-normal (400) - 일반 텍스트</p>
                        <p className="font-medium">font-medium (500) - 중간 굵기</p>
                        <p className="font-semibold">font-semibold (600) - 세미볼드</p>
                        <p className="font-bold">font-bold (700) - 굵은 텍스트</p>
                    </div>
                </div>

                <div>
                    <h2 className="text-2xl font-semibold mb-4">사용 예시</h2>
                    <div className="bg-muted rounded-lg p-6">
                        <pre className="bg-background p-4 rounded border overflow-x-auto text-sm">
                            <code>{`<h1 className="text-4xl font-bold">페이지 제목</h1>
<h2 className="text-3xl font-semibold">섹션 제목</h2>
<p className="text-base leading-relaxed">일반 본문 텍스트</p>
<p className="text-sm text-muted-foreground">보조 설명</p>`}</code>
                        </pre>
                    </div>
                </div>
            </div>
        </div>
    ),
};

export const Spacing: Story = {
    render: () => (
        <div className="p-8 max-w-6xl mx-auto">
            <h1 className="text-3xl font-bold mb-2">간격 시스템</h1>
            <p className="text-muted-foreground mb-8">
                Tailwind CSS 간격 시스템 (1 unit = 0.25rem = 4px)
            </p>

            <div className="space-y-8">
                <div>
                    <h2 className="text-2xl font-semibold mb-4">간격 스케일</h2>
                    <div className="space-y-3">
                        {[0, 1, 2, 3, 4, 5, 6, 8, 10, 12, 16, 20, 24].map((size) => (
                            <div key={size} className="flex items-center gap-4">
                                <code className="w-24 text-sm">{size} ({size * 4}px)</code>
                                <div className="h-8 bg-primary rounded" style={{ width: `${size * 4}px` }}></div>
                                <code className="text-xs text-muted-foreground">p-{size}, m-{size}, gap-{size}</code>
                            </div>
                        ))}
                    </div>
                </div>

                <div>
                    <h2 className="text-2xl font-semibold mb-4">Padding 예시</h2>
                    <div className="grid grid-cols-3 gap-4">
                        <div className="border-2 border-dashed">
                            <div className="p-2 bg-muted">
                                <div className="bg-primary text-primary-foreground p-2 rounded text-sm text-center">
                                    p-2 (8px)
                                </div>
                            </div>
                        </div>
                        <div className="border-2 border-dashed">
                            <div className="p-4 bg-muted">
                                <div className="bg-primary text-primary-foreground p-2 rounded text-sm text-center">
                                    p-4 (16px)
                                </div>
                            </div>
                        </div>
                        <div className="border-2 border-dashed">
                            <div className="p-6 bg-muted">
                                <div className="bg-primary text-primary-foreground p-2 rounded text-sm text-center">
                                    p-6 (24px)
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <h2 className="text-2xl font-semibold mb-4">Gap 예시</h2>
                    <div className="space-y-4">
                        <div>
                            <p className="text-sm mb-2 font-medium">gap-2 (8px)</p>
                            <div className="flex gap-2">
                                {[1, 2, 3].map((i) => (
                                    <div key={i} className="w-16 h-16 bg-primary rounded"></div>
                                ))}
                            </div>
                        </div>
                        <div>
                            <p className="text-sm mb-2 font-medium">gap-4 (16px)</p>
                            <div className="flex gap-4">
                                {[1, 2, 3].map((i) => (
                                    <div key={i} className="w-16 h-16 bg-primary rounded"></div>
                                ))}
                            </div>
                        </div>
                        <div>
                            <p className="text-sm mb-2 font-medium">gap-8 (32px)</p>
                            <div className="flex gap-8">
                                {[1, 2, 3].map((i) => (
                                    <div key={i} className="w-16 h-16 bg-primary rounded"></div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    ),
};

export const BorderRadius: Story = {
    render: () => (
        <div className="p-8 max-w-6xl mx-auto">
            <h1 className="text-3xl font-bold mb-2">Border Radius</h1>
            <p className="text-muted-foreground mb-8">
                3단계 border radius 시스템
            </p>

            <div className="space-y-8">
                <div>
                    <h2 className="text-2xl font-semibold mb-4">기본 Radius</h2>
                    <div className="grid grid-cols-3 gap-6">
                        <div className="text-center">
                            <div className="w-48 h-32 bg-primary rounded-sm mx-auto mb-3 flex items-center justify-center text-primary-foreground font-semibold">
                                rounded-sm
                            </div>
                            <p className="font-semibold">Small</p>
                            <code className="text-sm">4px</code>
                        </div>
                        <div className="text-center">
                            <div className="w-48 h-32 bg-primary rounded-md mx-auto mb-3 flex items-center justify-center text-primary-foreground font-semibold">
                                rounded-md
                            </div>
                            <p className="font-semibold">Medium</p>
                            <code className="text-sm">6px</code>
                        </div>
                        <div className="text-center">
                            <div className="w-48 h-32 bg-primary rounded-lg mx-auto mb-3 flex items-center justify-center text-primary-foreground font-semibold">
                                rounded-lg
                            </div>
                            <p className="font-semibold">Large</p>
                            <code className="text-sm">8px</code>
                        </div>
                    </div>
                </div>

                <div>
                    <h2 className="text-2xl font-semibold mb-4">추가 옵션</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        <div className="text-center">
                            <div className="w-32 h-20 bg-secondary rounded-none mx-auto mb-2 flex items-center justify-center text-sm font-medium">
                                rounded-none
                            </div>
                            <code className="text-xs">0px</code>
                        </div>
                        <div className="text-center">
                            <div className="w-32 h-20 bg-secondary rounded mx-auto mb-2 flex items-center justify-center text-sm font-medium">
                                rounded
                            </div>
                            <code className="text-xs">2px</code>
                        </div>
                        <div className="text-center">
                            <div className="w-32 h-20 bg-secondary rounded-xl mx-auto mb-2 flex items-center justify-center text-sm font-medium">
                                rounded-xl
                            </div>
                            <code className="text-xs">12px</code>
                        </div>
                        <div className="text-center">
                            <div className="w-20 h-20 bg-secondary rounded-full mx-auto mb-2 flex items-center justify-center text-sm font-medium">
                                full
                            </div>
                            <code className="text-xs">9999px</code>
                        </div>
                    </div>
                </div>

                <div>
                    <h2 className="text-2xl font-semibold mb-4">컴포넌트별 권장</h2>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="border rounded-lg p-4">
                            <p className="font-semibold mb-2">Button</p>
                            <code className="text-sm">rounded-md (6px)</code>
                        </div>
                        <div className="border rounded-lg p-4">
                            <p className="font-semibold mb-2">Card</p>
                            <code className="text-sm">rounded-lg (8px)</code>
                        </div>
                        <div className="border rounded-lg p-4">
                            <p className="font-semibold mb-2">Input</p>
                            <code className="text-sm">rounded-md (6px)</code>
                        </div>
                        <div className="border rounded-lg p-4">
                            <p className="font-semibold mb-2">Avatar</p>
                            <code className="text-sm">rounded-full</code>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    ),
};

export const Shadows: Story = {
    render: () => (
        <div className="p-8 max-w-6xl mx-auto">
            <h1 className="text-3xl font-bold mb-2">그림자 시스템</h1>
            <p className="text-muted-foreground mb-8">
                7단계 그림자 시스템
            </p>

            <div className="space-y-8">
                <div>
                    <h2 className="text-2xl font-semibold mb-4">그림자 스케일</h2>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                        <div className="text-center">
                            <div className="w-48 h-32 bg-card shadow-sm mx-auto mb-3 rounded-lg flex items-center justify-center font-medium">
                                shadow-sm
                            </div>
                            <p className="text-sm">Small</p>
                        </div>
                        <div className="text-center">
                            <div className="w-48 h-32 bg-card shadow mx-auto mb-3 rounded-lg flex items-center justify-center font-medium">
                                shadow
                            </div>
                            <p className="text-sm">Default</p>
                        </div>
                        <div className="text-center">
                            <div className="w-48 h-32 bg-card shadow-md mx-auto mb-3 rounded-lg flex items-center justify-center font-medium">
                                shadow-md
                            </div>
                            <p className="text-sm">Medium</p>
                        </div>
                        <div className="text-center">
                            <div className="w-48 h-32 bg-card shadow-lg mx-auto mb-3 rounded-lg flex items-center justify-center font-medium">
                                shadow-lg
                            </div>
                            <p className="text-sm">Large</p>
                        </div>
                        <div className="text-center">
                            <div className="w-48 h-32 bg-card shadow-xl mx-auto mb-3 rounded-lg flex items-center justify-center font-medium">
                                shadow-xl
                            </div>
                            <p className="text-sm">Extra Large</p>
                        </div>
                        <div className="text-center">
                            <div className="w-48 h-32 bg-card shadow-2xl mx-auto mb-3 rounded-lg flex items-center justify-center font-medium">
                                shadow-2xl
                            </div>
                            <p className="text-sm">2X Large</p>
                        </div>
                    </div>
                </div>

                <div>
                    <h2 className="text-2xl font-semibold mb-4">컴포넌트별 권장</h2>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="border rounded-lg p-4">
                            <p className="font-semibold mb-2">Card</p>
                            <code className="text-sm">shadow 또는 shadow-md</code>
                        </div>
                        <div className="border rounded-lg p-4">
                            <p className="font-semibold mb-2">Dropdown/Popover</p>
                            <code className="text-sm">shadow-lg</code>
                        </div>
                        <div className="border rounded-lg p-4">
                            <p className="font-semibold mb-2">Dialog/Modal</p>
                            <code className="text-sm">shadow-xl 또는 shadow-2xl</code>
                        </div>
                        <div className="border rounded-lg p-4">
                            <p className="font-semibold mb-2">Button (hover)</p>
                            <code className="text-sm">shadow-sm → shadow</code>
                        </div>
                    </div>
                </div>

                <div>
                    <h2 className="text-2xl font-semibold mb-4">사용 예시</h2>
                    <div className="bg-muted rounded-lg p-6">
                        <pre className="bg-background p-4 rounded border overflow-x-auto text-sm">
                            <code>{`<button className="shadow-sm hover:shadow-md transition-shadow">
  호버 시 그림자 증가
</button>

<div className="shadow-md">카드 컴포넌트</div>

<div className="shadow-lg">드롭다운 메뉴</div>`}</code>
                        </pre>
                    </div>
                </div>
            </div>
        </div>
    ),
};

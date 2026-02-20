import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './tabs';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './card';

const meta = {
    title: 'Components/Tabs',
    component: Tabs,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof Tabs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    render: () => (
        <Tabs defaultValue="account" className="w-[400px]">
            <TabsList>
                <TabsTrigger value="account">계정</TabsTrigger>
                <TabsTrigger value="password">비밀번호</TabsTrigger>
            </TabsList>
            <TabsContent value="account">
                <Card>
                    <CardHeader>
                        <CardTitle>계정</CardTitle>
                        <CardDescription>
                            계정 정보를 변경할 수 있습니다.
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-2">
                        <p className="text-sm">계정 설정 내용</p>
                    </CardContent>
                </Card>
            </TabsContent>
            <TabsContent value="password">
                <Card>
                    <CardHeader>
                        <CardTitle>비밀번호</CardTitle>
                        <CardDescription>
                            비밀번호를 변경할 수 있습니다.
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-2">
                        <p className="text-sm">비밀번호 변경 폼</p>
                    </CardContent>
                </Card>
            </TabsContent>
        </Tabs>
    ),
};

export const ThreeTabs: Story = {
    render: () => (
        <Tabs defaultValue="patients" className="w-[600px]">
            <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="patients">환자 관리</TabsTrigger>
                <TabsTrigger value="appointment">예약 등록</TabsTrigger>
                <TabsTrigger value="components">컴포넌트</TabsTrigger>
            </TabsList>
            <TabsContent value="patients">
                <Card>
                    <CardHeader>
                        <CardTitle>환자 관리</CardTitle>
                        <CardDescription>환자 정보를 관리합니다.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <p className="text-sm">환자 목록이 여기에 표시됩니다.</p>
                    </CardContent>
                </Card>
            </TabsContent>
            <TabsContent value="appointment">
                <Card>
                    <CardHeader>
                        <CardTitle>예약 등록</CardTitle>
                        <CardDescription>새로운 예약을 등록합니다.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <p className="text-sm">예약 등록 폼이 여기에 표시됩니다.</p>
                    </CardContent>
                </Card>
            </TabsContent>
            <TabsContent value="components">
                <Card>
                    <CardHeader>
                        <CardTitle>컴포넌트 예시</CardTitle>
                        <CardDescription>다양한 컴포넌트를 확인합니다.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <p className="text-sm">컴포넌트 예시가 여기에 표시됩니다.</p>
                    </CardContent>
                </Card>
            </TabsContent>
        </Tabs>
    ),
};

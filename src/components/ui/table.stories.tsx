import type { Meta, StoryObj } from '@storybook/react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from './table';
import { Badge } from './badge';
import { Avatar, AvatarFallback } from './avatar';

const meta = {
    title: 'Components/Table',
    component: Table,
    parameters: {
        layout: 'padded',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof Table>;

export default meta;
type Story = StoryObj<typeof meta>;

const sampleData = [
    { id: 'P001', name: '김민수', age: 45, status: 'active', lastVisit: '2024-01-20', condition: '고혈압' },
    { id: 'P002', name: '이영희', age: 32, status: 'pending', lastVisit: '2024-01-19', condition: '당뇨' },
    { id: 'P003', name: '박철수', age: 58, status: 'active', lastVisit: '2024-01-18', condition: '관절염' },
    { id: 'P004', name: '정수진', age: 28, status: 'completed', lastVisit: '2024-01-15', condition: '감기' },
];

export const Default: Story = {
    render: () => (
        <div className="rounded-md border">
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>환자 ID</TableHead>
                        <TableHead>이름</TableHead>
                        <TableHead>나이</TableHead>
                        <TableHead>상태</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {sampleData.map((patient) => (
                        <TableRow key={patient.id}>
                            <TableCell className="font-medium">{patient.id}</TableCell>
                            <TableCell>{patient.name}</TableCell>
                            <TableCell>{patient.age}세</TableCell>
                            <TableCell>
                                <Badge
                                    variant={
                                        patient.status === 'active'
                                            ? 'default'
                                            : patient.status === 'pending'
                                                ? 'secondary'
                                                : 'outline'
                                    }
                                >
                                    {patient.status === 'active' ? '활성' : patient.status === 'pending' ? '대기' : '완료'}
                                </Badge>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    ),
};

export const WithAvatar: Story = {
    render: () => (
        <div className="rounded-md border">
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>환자 ID</TableHead>
                        <TableHead>이름</TableHead>
                        <TableHead>나이</TableHead>
                        <TableHead>마지막 방문</TableHead>
                        <TableHead>진단</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {sampleData.map((patient) => (
                        <TableRow key={patient.id}>
                            <TableCell className="font-medium">{patient.id}</TableCell>
                            <TableCell>
                                <div className="flex items-center gap-2">
                                    <Avatar className="h-8 w-8">
                                        <AvatarFallback>{patient.name[0]}</AvatarFallback>
                                    </Avatar>
                                    {patient.name}
                                </div>
                            </TableCell>
                            <TableCell>{patient.age}세</TableCell>
                            <TableCell>{patient.lastVisit}</TableCell>
                            <TableCell>{patient.condition}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    ),
};

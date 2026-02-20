import type { Meta, StoryObj } from '@storybook/react';
import { ColumnDef } from '@tanstack/react-table';
import { DataTable, DataTableColumnHeader, DataTableRowActions } from './data-table';
import { Checkbox } from './checkbox';
import { Badge } from './badge';

const meta = {
    title: 'Components/DataTable',
    component: DataTable,
    parameters: {
        layout: 'padded',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof DataTable>;

export default meta;
type Story = StoryObj<typeof meta>;

type Patient = {
    id: string
    name: string
    age: number
    department: string
    status: "active" | "pending" | "inactive"
    lastVisit: string
}

const patients: Patient[] = [
    {
        id: "P001",
        name: "김민수",
        age: 45,
        department: "심장내과",
        status: "active",
        lastVisit: "2024-01-20",
    },
    {
        id: "P002",
        name: "이영희",
        age: 32,
        department: "피부과",
        status: "pending",
        lastVisit: "2024-01-18",
    },
    {
        id: "P003",
        name: "박철수",
        age: 58,
        department: "정형외과",
        status: "active",
        lastVisit: "2024-01-22",
    },
    {
        id: "P004",
        name: "정수진",
        age: 28,
        department: "소아청소년과",
        status: "inactive",
        lastVisit: "2024-01-15",
    },
    {
        id: "P005",
        name: "최동욱",
        age: 51,
        department: "신경과",
        status: "active",
        lastVisit: "2024-01-21",
    },
]

const columns: ColumnDef<Patient>[] = [
    {
        id: "select",
        header: ({ table }) => (
            <Checkbox
                checked={table.getIsAllPageRowsSelected()}
                onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
                aria-label="Select all"
            />
        ),
        cell: ({ row }) => (
            <Checkbox
                checked={row.getIsSelected()}
                onCheckedChange={(value) => row.toggleSelected(!!value)}
                aria-label="Select row"
            />
        ),
        enableSorting: false,
        enableHiding: false,
    },
    {
        accessorKey: "id",
        header: ({ column }) => <DataTableColumnHeader column={column} title="환자 ID" />,
        cell: ({ row }) => <div className="font-medium">{row.getValue("id")}</div>,
    },
    {
        accessorKey: "name",
        header: ({ column }) => <DataTableColumnHeader column={column} title="이름" />,
        cell: ({ row }) => <div>{row.getValue("name")}</div>,
    },
    {
        accessorKey: "age",
        header: ({ column }) => <DataTableColumnHeader column={column} title="나이" />,
        cell: ({ row }) => <div>{row.getValue("age")}세</div>,
    },
    {
        accessorKey: "department",
        header: ({ column }) => <DataTableColumnHeader column={column} title="진료과" />,
        cell: ({ row }) => <div>{row.getValue("department")}</div>,
    },
    {
        accessorKey: "status",
        header: "상태",
        cell: ({ row }) => {
            const status = row.getValue("status") as string
            return (
                <Badge
                    variant={
                        status === "active"
                            ? "default"
                            : status === "pending"
                                ? "secondary"
                                : "outline"
                    }
                >
                    {status === "active" ? "활성" : status === "pending" ? "대기" : "비활성"}
                </Badge>
            )
        },
    },
    {
        accessorKey: "lastVisit",
        header: ({ column }) => <DataTableColumnHeader column={column} title="최근 방문" />,
        cell: ({ row }) => <div>{row.getValue("lastVisit")}</div>,
    },
    {
        id: "actions",
        enableHiding: false,
        cell: ({ row }) => <DataTableRowActions row={row} />,
    },
]

export const Default: Story = {
    render: () => (
        <DataTable
            columns={columns}
            data={patients}
            searchKey="name"
            searchPlaceholder="환자 이름 검색..."
        />
    ),
};

export const WithoutSearch: Story = {
    render: () => (
        <DataTable
            columns={columns}
            data={patients}
        />
    ),
};

type Payment = {
    id: string
    amount: number
    status: "pending" | "processing" | "success" | "failed"
    email: string
}

const payments: Payment[] = [
    {
        id: "m5gr84i9",
        amount: 316,
        status: "success",
        email: "ken99@yahoo.com",
    },
    {
        id: "3u1reuv4",
        amount: 242,
        status: "success",
        email: "Abe45@gmail.com",
    },
    {
        id: "derv1ws0",
        amount: 837,
        status: "processing",
        email: "Monserrat44@gmail.com",
    },
    {
        id: "5kma53ae",
        amount: 874,
        status: "success",
        email: "Silas22@gmail.com",
    },
    {
        id: "bhqecj4p",
        amount: 721,
        status: "failed",
        email: "carmella@hotmail.com",
    },
]

const paymentColumns: ColumnDef<Payment>[] = [
    {
        accessorKey: "id",
        header: "ID",
    },
    {
        accessorKey: "email",
        header: ({ column }) => <DataTableColumnHeader column={column} title="Email" />,
    },
    {
        accessorKey: "amount",
        header: ({ column }) => <DataTableColumnHeader column={column} title="Amount" />,
        cell: ({ row }) => {
            const amount = parseFloat(row.getValue("amount"))
            const formatted = new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD",
            }).format(amount)
            return <div className="font-medium">{formatted}</div>
        },
    },
    {
        accessorKey: "status",
        header: "Status",
        cell: ({ row }) => {
            const status = row.getValue("status") as string
            return (
                <Badge
                    variant={
                        status === "success"
                            ? "default"
                            : status === "processing"
                                ? "secondary"
                                : "destructive"
                    }
                >
                    {status}
                </Badge>
            )
        },
    },
]

export const PaymentsExample: Story = {
    render: () => (
        <DataTable
            columns={paymentColumns}
            data={payments}
            searchKey="email"
            searchPlaceholder="Filter emails..."
        />
    ),
};

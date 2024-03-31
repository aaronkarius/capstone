"use client";
import {
    getCoreRowModel,
    getFilteredRowModel,
    getPaginationRowModel,
    getSortedRowModel,
    useReactTable
} from "@tanstack/react-table";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MoreHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import { useState } from "react";
import DataTable from "@/components/DataTable/DataTable";
import SortableHeader from "@/components/DataTable/SortableHeader";
import fuzzyFilter from "@/components/DataTable/hooks/useGlobalFilter";

const columns = [
    {
        accessorKey: "firstName",
        header: ({ column }) => {
            return <SortableHeader column={column} label="First Name" />;
        }
    },
    {
        accessorKey: "lastName",
        header: ({ column }) => {
            return <SortableHeader column={column} label="Last Name" />;
        }
    },
    {
        accessorKey: "email",
        filterFn: "fuzzy",
        header: ({ column }) => {
            return <SortableHeader column={column} label="Email" />;
        }
    },
    {
        id: "actions",
        cell: ({ row }) => {
            const data = row.original;

            return (
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="ghost" className="h-8 w-8 p-0">
                            <span className="sr-only">Open menu</span>
                            <MoreHorizontal className="h-4 w-4" />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                        <DropdownMenuLabel>Actions</DropdownMenuLabel>
                        <DropdownMenuItem
                            onClick={() =>
                                navigator.clipboard.writeText(data.id)
                            }
                        >
                            View
                        </DropdownMenuItem>
                        <DropdownMenuItem>Edit</DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>Delete</DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            );
        }
    }
    // {
    //     header: "Date of Birth",
    //     accessorKey: "dob"
    // }
];

export const data = [
    {
        id: "728ed52f",
        firstName: "test",
        lastName: "user",
        email: "m@example.com"
    },
    {
        id: "489e1d42",
        firstName: "another",
        lastName: "user",
        email: "example@gmail.com"
    }
];

export default function Clients() {
    const [sorting, setSorting] = useState([]);
    const [columnFilters, setColumnFilters] = useState([]);
    const [columnVisibility, setColumnVisibility] = useState({});
    const [globalFilter, setGlobalFilter] = useState("");

    const table = useReactTable({
        data,
        columns,
        filterFns: {
            fuzzy: fuzzyFilter
        },
        getCoreRowModel: getCoreRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        onSortingChange: setSorting,
        getSortedRowModel: getSortedRowModel(),
        onColumnFiltersChange: setColumnFilters,
        getFilteredRowModel: getFilteredRowModel(),
        onGlobalFilterChange: setGlobalFilter,
        globalFilterFn: fuzzyFilter,
        onColumnVisibilityChange: setColumnVisibility,
        state: {
            sorting,
            columnFilters,
            globalFilter,
            columnVisibility
        }
    });

    return (
        <div className="flex h-full items-center justify-center p-8">
            <Card className="w-full">
                <CardHeader>
                    <CardTitle className="text-2xl">Clients</CardTitle>
                </CardHeader>
                <CardContent>
                    <DataTable
                        table={table}
                        columns={columns}
                        globalFilter={globalFilter}
                    />
                </CardContent>
            </Card>
        </div>
    );
}

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
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/lib/firebaseConfig";
import useSWR from "swr";
import LoadingScreen from "@/components/Fallbacks/LoadingScreen";
import ErrorScreen from "@/components/Fallbacks/ErrorScreen";

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
];

const fetcher = async collectionName => {
    const collectionRef = collection(db, collectionName);
    const snapshot = await getDocs(collectionRef);
    return snapshot.docs.map(doc => ({ ...doc.data(), id: doc.id }));
};

export default function Clients() {
    const [sorting, setSorting] = useState([]);
    const [columnFilters, setColumnFilters] = useState([]);
    const [columnVisibility, setColumnVisibility] = useState({});
    const [globalFilter, setGlobalFilter] = useState("");

    const { data, error, isLoading } = useSWR("clients", fetcher);

    console.log(data);

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

    if (!data) {
        return <LoadingScreen />;
    }
    if (error) {
        return <ErrorScreen />;
    }

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
                        isLoading={isLoading}
                    />
                </CardContent>
            </Card>
        </div>
    );
}

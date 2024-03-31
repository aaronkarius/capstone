"use client";
import {
    getCoreRowModel,
    getFilteredRowModel,
    getPaginationRowModel,
    getSortedRowModel,
    useReactTable
} from "@tanstack/react-table";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import DataTable from "@/components/DataTable/DataTable";
import SortableHeader from "@/components/DataTable/SortableHeader";
import fuzzyFilter from "@/components/DataTable/lib/globalFilter";
import useSWR from "swr";
import LoadingScreen from "@/components/Fallbacks/LoadingScreen";
import ErrorScreen from "@/components/Fallbacks/ErrorScreen";
import fetcher from "@/lib/fetcher";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger
} from "@/components/ui/dialog";
import ClientForm from "./ClientForm";
import actionsColumn from "@/components/DataTable/lib/actionsColumn";
import { Toaster } from "@/components/ui/toaster";
import { useToast } from "@/components/ui/use-toast";
import DeleteClientModal from "./_ClientActionModals/DeleteClientModal";
import EditClientModal from "./_ClientActionModals/EditClientModal";
import ViewClientModal from "./_ClientActionModals/ViewClientModal";

export default function Clients() {
    const { toast } = useToast();
    const [open, setOpen] = useState(false);

    const [deleteModalOpen, setDeleteModalOpen] = useState(false);
    const [deleteModalData, setDeleteModalData] = useState({});

    const [editModalOpen, setEditModalOpen] = useState(false);
    const [editModalData, setEditModalData] = useState({});

    const [viewModalOpen, setViewModalOpen] = useState(false);

    const [sorting, setSorting] = useState([]);
    const [columnFilters, setColumnFilters] = useState([]);
    const [columnVisibility, setColumnVisibility] = useState({});
    const [globalFilter, setGlobalFilter] = useState("");

    const { data, error, isLoading } = useSWR("clients", fetcher);

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
            ...actionsColumn(
                setViewModalOpen,
                setEditModalOpen,
                setEditModalData,
                setDeleteModalOpen,
                setDeleteModalData
            )
        }
    ];

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

    // todo: have table be fixed width so it doesn't move around a lot ?

    return (
        <>
            <div className="flex h-full items-center justify-center p-8">
                <Card className="w-full max-w-2xl">
                    <CardHeader className="flex flex-row justify-between">
                        <CardTitle className="text-2xl">Clients</CardTitle>
                        <Dialog open={open} onOpenChange={setOpen}>
                            <DialogTrigger asChild>
                                <Button>Add Client</Button>
                            </DialogTrigger>
                            <DialogContent>
                                <DialogHeader>
                                    <DialogTitle>New Client</DialogTitle>
                                    <DialogDescription>
                                        You can also add introductory
                                        information about the patient(s) here,
                                        or later in the Patients page.
                                    </DialogDescription>
                                </DialogHeader>
                                <ClientForm setOpen={setOpen} toast={toast} />
                            </DialogContent>
                        </Dialog>
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
            <ViewClientModal
                viewModalOpen={viewModalOpen}
                setViewModalOpen={setViewModalOpen}
                editModalData={editModalData}
            />
            <EditClientModal
                editModalOpen={editModalOpen}
                setEditModalOpen={setEditModalOpen}
                editModalData={editModalData}
                toast={toast}
            />
            <DeleteClientModal
                deleteModalOpen={deleteModalOpen}
                setDeleteModalOpen={setDeleteModalOpen}
                deleteModalData={deleteModalData}
                toast={toast}
            />
            <Toaster />
        </>
    );
}

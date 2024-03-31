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

export default function actionsColumn(
    setEditModalOpen,
    setEditModalData,
    setDeleteModalOpen,
    setDeleteModalData
) {
    return {
        id: "actions",
        cell: ({ row }) => {
            const data = row.original;

            const handleEditClick = () => {
                setEditModalData(data);
                setEditModalOpen(true);
            };

            const handleDeleteClick = () => {
                setDeleteModalData({
                    name: `${data.firstName} ${data.lastName}`,
                    email: data.email
                });
                setDeleteModalOpen(true);
            };

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
                        <DropdownMenuItem>View</DropdownMenuItem>
                        <DropdownMenuItem onClick={handleEditClick}>
                            Edit
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem
                            className="text-destructive-text"
                            onClick={handleDeleteClick}
                        >
                            Delete
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            );
        }
    };
}

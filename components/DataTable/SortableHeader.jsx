"use client";
import {
    ArrowUpDown,
    ArrowUp,
    ArrowDown,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default function SortableHeader({column, label}) {

    return (
        <Button
                    variant="ghost"
                    onClick={() =>
                        column.toggleSorting(column.getIsSorted() === "asc")
                    }
                >
                    {label}
                    {column.getIsSorted() ? (
                        column.getIsSorted() === "asc" ? (
                            <ArrowUp className="ml-2 h-4 w-4 text-foreground" />
                        ) : (
                            <ArrowDown className="ml-2 h-4 w-4 text-foreground" />
                        )
                    ) : (
                        <ArrowUpDown className="ml-2 h-4 w-4" />
                    )}
                </Button>
    )
}
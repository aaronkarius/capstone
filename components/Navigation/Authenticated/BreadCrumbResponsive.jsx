"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import {
    Breadcrumb,
    BreadcrumbEllipsis,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbSeparator
} from "@/components/ui/breadcrumb";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";

const ITEMS_TO_DISPLAY = 3;

export default function BreadcrumbResponsive() {
    const [open, setOpen] = React.useState(false);
    const paths = usePathname();
    const [items, setItems] = React.useState([]);

    // make sure ui and server are in sync
    React.useEffect(() => {
        if (paths) {
            const pathNames = paths.split("/").filter(path => path);
            const newItems = pathNames.map((link, index) => {
                const href = `/${pathNames.slice(0, index + 1).join("/")}`;
                const label = link
                    .split("-")
                    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
                    .join(" ");
                return { href, label };
            });
            setItems(newItems);
        }
    }, [paths]);

    if (!items.length) {
        return null;
    } else {
        return (
            <Breadcrumb>
                <BreadcrumbList>
                    <BreadcrumbItem>
                        <BreadcrumbLink asChild>
                            <Link href={"/"}>Home</Link>
                        </BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    {items.length > ITEMS_TO_DISPLAY ? (
                        <>
                            <BreadcrumbItem>
                                <DropdownMenu
                                    open={open}
                                    onOpenChange={setOpen}
                                >
                                    <DropdownMenuTrigger
                                        className="flex items-center gap-1"
                                        aria-label="Toggle menu"
                                    >
                                        <BreadcrumbEllipsis className="w-4 h-4" />
                                    </DropdownMenuTrigger>
                                    <DropdownMenuContent align="start">
                                        {items
                                            .slice(1, -2)
                                            .map((item, index) => (
                                                <DropdownMenuItem key={index}>
                                                    <Link
                                                        href={
                                                            item.href
                                                                ? item.href
                                                                : "#"
                                                        }
                                                    >
                                                        {item.label}
                                                    </Link>
                                                </DropdownMenuItem>
                                            ))}
                                    </DropdownMenuContent>
                                </DropdownMenu>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator />
                        </>
                    ) : null}
                    {items.slice(-ITEMS_TO_DISPLAY + 1).map((item, index) => (
                        <React.Fragment key={index}>
                            <BreadcrumbItem>
                                <>
                                    <BreadcrumbLink
                                        asChild
                                        className="truncate max-w-20 md:max-w-none"
                                    >
                                        <Link href={item.href}>
                                            {item.label}
                                        </Link>
                                    </BreadcrumbLink>
                                </>
                            </BreadcrumbItem>
                            {index !== items.length - 1 && (
                                <BreadcrumbSeparator />
                            )}
                        </React.Fragment>
                    ))}
                </BreadcrumbList>
            </Breadcrumb>
        );
    }
}

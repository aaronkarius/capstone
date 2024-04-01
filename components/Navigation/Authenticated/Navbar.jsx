"use client";
import Link from "next/link";
import {
    LockKeyhole,
    CircleUser,
    Home,
    LineChart,
    Menu,
    Package,
    Dog,
    ShoppingCart,
    Users,
    Mail,
    Construction,
    PawPrint
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle
} from "@/components/ui/card";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import BreadcrumbResponsive from "./BreadCrumbResponsive";
import DarkModeToggle from "@/components/DarkModeToggle";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger
} from "@/components/ui/dialog";
import { signOut } from "next-auth/react";
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger
} from "../../ui/drawer";
import { useState } from "react";
import { auth } from "@/lib/firebaseConfig";

export default function Navbar({ children }) {
    const [open, setOpen] = useState(false);

    const getInitials = () => {
        if (!auth.currentUser?.displayName) {
            return <CircleUser className="h-5 w-5" />;
        }

        return auth.currentUser.displayName
            .split(" ")
            .map(name => name.charAt(0).toUpperCase())
            .join("");
    };

    // todo: cleanup duplicate code, and abstract out

    return (
        <div className="grid h-full min-h-svh w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
            <div className="hidden border-r bg-muted dark:bg-muted/40 md:block">
                <div className="flex h-full max-h-svh flex-col gap-2">
                    <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
                        <Link
                            href="/"
                            className="flex items-center gap-2 font-semibold"
                        >
                            <Dog className="h-6 w-6" />
                            <span className="">VetVoice</span>
                        </Link>
                    </div>
                    <div className="flex flex-1 flex-col justify-between">
                        <nav className="text-md grid items-start px-2 font-medium lg:px-4">
                            <Link
                                href="/"
                                className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
                            >
                                <Home className="h-4 w-4" />
                                Dashboard
                                <Badge className="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full">
                                    0
                                </Badge>
                            </Link>
                            <Link
                                href="#"
                                className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
                            >
                                <ShoppingCart className="h-4 w-4" />
                                Billing
                            </Link>
                            <Link
                                href="#"
                                className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
                            >
                                <Package className="h-4 w-4" />
                                Inventory
                            </Link>
                            <Link
                                href="/clients"
                                className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
                            >
                                <Users className="h-4 w-4" />
                                Clients
                            </Link>
                            <Link
                                href="#"
                                className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
                            >
                                <PawPrint className="h-4 w-4" />
                                Patients
                            </Link>
                            <Link
                                href="#"
                                className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
                            >
                                <LineChart className="h-4 w-4" />
                                Analytics
                            </Link>
                            <Link
                                href="#"
                                className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
                            >
                                <LockKeyhole className="h-4 w-4" />
                                App Settings
                            </Link>
                            <Link
                                href="/physical-exam-form"
                                className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
                            >
                                <Construction className="h-4 w-4" />
                                Physical Exam Form
                            </Link>
                            <Link
                                href="/physical-exam-form/another-page"
                                className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
                            >
                                <Construction className="h-4 w-4" />
                                Another Page
                            </Link>
                        </nav>
                    </div>
                    <div className="mt-auto p-4">
                        <Card>
                            <CardHeader className="p-2 pt-0 md:p-4">
                                <CardTitle>VetVoice Alpha</CardTitle>
                                <CardDescription>
                                    This service is currently in development.
                                    Please contact Design Authority for any
                                    questions.
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="p-4 pt-0">
                                <Dialog>
                                    <DialogTrigger asChild>
                                        <Button size="sm" className="w-full">
                                            Contacts
                                        </Button>
                                    </DialogTrigger>
                                    <DialogContent>
                                        <DialogHeader>
                                            <DialogTitle>
                                                Developer Contacts
                                            </DialogTitle>
                                        </DialogHeader>
                                        <div className="my-6 ml-6">
                                            <div className="flex flex-col gap-2">
                                                <a
                                                    className="flex items-center gap-2 underline"
                                                    href="mailto:agkarius@usca.edu"
                                                >
                                                    <Mail />
                                                    Aaron Karius
                                                </a>
                                                <a
                                                    className="flex items-center gap-2 underline"
                                                    href="mailto:hcomer@usca.edu"
                                                >
                                                    <Mail />
                                                    Hayden Comer
                                                </a>
                                                <a
                                                    className="flex items-center gap-2 underline"
                                                    href="mailto:jkambel@usca.edu"
                                                >
                                                    <Mail />
                                                    Jaymee Kambel
                                                </a>
                                            </div>
                                        </div>
                                    </DialogContent>
                                </Dialog>
                            </CardContent>
                        </Card>
                    </div>
                    <p className="p-4 text-xs">
                        © VetVoice. All rights reserved.
                    </p>
                </div>
            </div>
            <div className="flex h-full flex-col">
                <header className="flex h-14 items-center gap-4 border-b bg-muted px-4 dark:bg-muted/40 lg:h-[60px] lg:px-6">
                    <Sheet>
                        <SheetTrigger asChild>
                            <Button
                                variant="outline"
                                size="icon"
                                className="shrink-0 md:hidden"
                            >
                                <Menu className="h-5 w-5" />
                                <span className="sr-only">
                                    Toggle navigation menu
                                </span>
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="left" className="flex flex-col">
                            <nav className="grid gap-2 text-sm font-medium">
                                <Link
                                    href="/"
                                    className="flex items-center gap-2 font-semibold"
                                >
                                    <Dog className="h-6 w-6" />
                                    <span className="sr-only">VetVoice</span>
                                </Link>
                                <Link
                                    href="/"
                                    className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
                                >
                                    <Home className="h-5 w-5" />
                                    Dashboard
                                    <Badge className="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full">
                                        0
                                    </Badge>
                                </Link>
                                <Link
                                    href="#"
                                    className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
                                >
                                    <ShoppingCart className="h-5 w-5" />
                                    Billing
                                </Link>
                                <Link
                                    href="#"
                                    className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
                                >
                                    <Package className="h-5 w-5" />
                                    Inventory
                                </Link>
                                <Link
                                    href="/clients"
                                    className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
                                >
                                    <Users className="h-5 w-5" />
                                    Clients
                                </Link>
                                <Link
                                    href="#"
                                    className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
                                >
                                    <PawPrint className="h-5 w-5" />
                                    Patients
                                </Link>
                                <Link
                                    href="#"
                                    className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
                                >
                                    <LineChart className="h-5 w-5" />
                                    Analytics
                                </Link>
                                <Link
                                    href="#"
                                    className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
                                >
                                    <LockKeyhole className="h-5 w-5" />
                                    App Settings
                                </Link>
                                <Link
                                    href="/physical-exam-form"
                                    className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
                                >
                                    <Construction className="h-5 w-5" />
                                    Physical Exam Form
                                </Link>
                                <Link
                                    href="/physical-exam-form/another-page"
                                    className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
                                >
                                    <Construction className="h-5 w-5" />
                                    Another Page
                                </Link>
                            </nav>
                            <div className="mt-auto p-4">
                                <Card>
                                    <CardHeader className="p-4">
                                        <CardTitle>VetVoice Alpha</CardTitle>
                                        <CardDescription>
                                            This service is currently in
                                            development. Please contact Design
                                            Authority for any questions.
                                        </CardDescription>
                                    </CardHeader>
                                    <CardContent className="p-4 pt-0">
                                        <Drawer
                                            open={open}
                                            onOpenChange={setOpen}
                                        >
                                            <DrawerTrigger asChild>
                                                <Button
                                                    size="sm"
                                                    className="w-full"
                                                >
                                                    Contacts
                                                </Button>
                                            </DrawerTrigger>
                                            <DrawerContent>
                                                <DrawerHeader className="text-left">
                                                    <DrawerTitle>
                                                        Developer Contacts
                                                    </DrawerTitle>
                                                </DrawerHeader>
                                                <div className="my-6 ml-6">
                                                    <div className="flex flex-col gap-2">
                                                        <a
                                                            className="flex items-center gap-2 underline"
                                                            href="mailto:agkarius@usca.edu"
                                                        >
                                                            <Mail />
                                                            Aaron Karius
                                                        </a>
                                                        <a
                                                            className="flex items-center gap-2 underline"
                                                            href="mailto:hcomer@usca.edu"
                                                        >
                                                            <Mail />
                                                            Hayden Comer
                                                        </a>
                                                        <a
                                                            className="flex items-center gap-2 underline"
                                                            href="mailto:jkambel@usca.edu"
                                                        >
                                                            <Mail />
                                                            Jaymee Kambel
                                                        </a>
                                                    </div>
                                                </div>
                                                <DrawerFooter className="pt-2">
                                                    <DrawerClose asChild>
                                                        <Button variant="outline">
                                                            Close
                                                        </Button>
                                                    </DrawerClose>
                                                </DrawerFooter>
                                            </DrawerContent>
                                        </Drawer>
                                    </CardContent>
                                </Card>
                            </div>
                            <p className="-mb-2 -ml-2 text-xs">
                                © VetVoice. All rights reserved.
                            </p>
                        </SheetContent>
                    </Sheet>
                    <div className="w-full flex-1">
                        <BreadcrumbResponsive />
                    </div>
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button
                                variant="secondary"
                                size="icon"
                                className="rounded-full bg-background dark:bg-accent"
                            >
                                <span>{getInitials()}</span>
                                <span className="sr-only">
                                    Toggle user menu
                                </span>
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                            <DropdownMenuLabel>My Account</DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem>Settings</DropdownMenuItem>
                            <DropdownMenuItem>Support</DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem onClick={() => signOut()}>
                                Logout
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                    <DarkModeToggle />
                </header>
                <main className="max-h-full w-full flex-1">{children}</main>
            </div>
        </div>
    );
}

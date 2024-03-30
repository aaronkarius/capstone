import DarkModeToggle from "../DarkModeToggle";
import Link from "next/link";
import { Dog, CircleAlert } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "../ui/alert";
import { Button } from "../ui/button";
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    navigationMenuTriggerStyle
} from "../ui/navigation-menu";
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger
} from "../ui/drawer";
import { useState } from "react";

export default function UnauthenticatedNavbar() {
    const [open, setOpen] = useState(false);

    return (
        <>
            <div className="absolute top-4 flex w-screen items-center justify-between pl-4 pr-4 sm:pl-8 sm:pr-8">
                <div className="relative">
                    <div className="flex items-center gap-2">
                        <Dog className="h-6 w-6" />
                        <h4 className="scroll-m-20 text-lg font-semibold tracking-tight sm:text-xl">
                            VetVoice
                        </h4>
                    </div>
                </div>
                <div className="flex gap-2 sm:gap-4">
                    <NavigationMenu>
                        <NavigationMenuList>
                            <NavigationMenuItem>
                                <Link href="/welcome" legacyBehavior passHref>
                                    <NavigationMenuLink
                                        className={`${navigationMenuTriggerStyle()} !p-2 sm:!px-4 sm:!py-2`}
                                    >
                                        Welcome
                                    </NavigationMenuLink>
                                </Link>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <Link href="/login" legacyBehavior passHref>
                                    <NavigationMenuLink
                                        className={`${navigationMenuTriggerStyle()} !p-2 sm:!px-4 sm:!py-2`}
                                    >
                                        Login
                                    </NavigationMenuLink>
                                </Link>
                            </NavigationMenuItem>
                        </NavigationMenuList>
                    </NavigationMenu>
                    <DarkModeToggle />
                </div>
            </div>
            <Drawer open={open} onOpenChange={setOpen}>
                <DrawerTrigger asChild>
                    <div className="absolute bottom-0 left-0 p-4 max-md:w-full md:bottom-4 md:left-4">
                        <Alert className="bg-popover max-md:hidden">
                            <CircleAlert className="h-4 w-4" />
                            <AlertTitle>VetVoice Alpha</AlertTitle>
                            <AlertDescription>
                                This service is currently in development. Please
                                contact Design Authority for any questions.
                            </AlertDescription>
                        </Alert>
                        <div className="flex justify-between md:hidden">
                            <Button variant="outline">Information</Button>
                        </div>
                    </div>
                </DrawerTrigger>
                <DrawerContent>
                    <DrawerHeader className="text-left">
                        <DrawerTitle>VetVoice Alpha</DrawerTitle>
                        <DrawerDescription>
                            This service is currently in development. Please
                            contact Design Authority for any questions.
                        </DrawerDescription>
                    </DrawerHeader>
                    <DrawerFooter className="pt-2">
                        <DrawerClose asChild>
                            <Button variant="outline">Close</Button>
                        </DrawerClose>
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>
            <p className="absolute bottom-1 right-1 p-2 text-xs">
                © VetVoice. All rights reserved.
            </p>
        </>
    );
}

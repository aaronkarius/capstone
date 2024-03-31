"use client";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import React from "react";
import { Button } from "./ui/button";

const DarkModeToggle = ({ classes }) => {
    const [mounted, setMounted] = React.useState(false);
    const { theme, setTheme } = useTheme();

    React.useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return null;
    }

    return (
        <Button
            variant="outline"
            size="icon"
            className={classes}
            onClick={() =>
                theme === "dark" ? setTheme("light") : setTheme("dark")
            }
        >
            {theme === "dark" ? (
                <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            ) : (
                <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            )}
        </Button>
    );
};

export default DarkModeToggle;

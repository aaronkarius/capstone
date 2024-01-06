"use client";
import { useTheme } from "next-themes";
import { FaMoon, FaSun } from "react-icons/fa";
import React from "react";

const DarkModeToggle = () => {
    const [mounted, setMounted] = React.useState(false);
    const { theme, setTheme } = useTheme();

    React.useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return null;
    }

    return (
        <button
            onClick={() =>
                theme === "dark" ? setTheme("light") : setTheme("dark")
            }
        >
            {theme === "dark" ? <FaSun size={30} /> : <FaMoon size={30} />}
        </button>
    );
};

export default DarkModeToggle;

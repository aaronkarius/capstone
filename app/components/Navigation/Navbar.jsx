"use client";
import Link from "next/link";
import React from "react";
import DarkModeToggle from "../DarkModeToggle";
import { VscThreeBars } from "react-icons/vsc";

const NavBar = () => {
    const [open, setOpen] = React.useState(false);

    return (
        <div className="sticky top-0 z-10 flex justify-between p-4 bg-slate-300 dark:bg-slate-500">
            <div>
                <Link href="/">
                    <PawPrintIcon />
                </Link>
            </div>

            <div className="flex items-center gap-4 ml-auto sm:gap-6">
                <DarkModeToggle />
                {/* todo */}
                {true ? (
                    <>
                        <Link className="navbar-text" href="/test-page">
                            Test Page
                        </Link>
                        <Link className="navbar-text" href="/login">
                            Login
                        </Link>
                        <Link className="navbar-text" href="#">
                            Features
                        </Link>
                        <Link className="navbar-text" href="#">
                            Pricing
                        </Link>
                        <Link className="navbar-text" href="#">
                            About
                        </Link>
                        <Link className="navbar-text" href="#">
                            Contact
                        </Link>
                    </>
                ) : (
                    <VscThreeBars
                        size={25}
                        onClick={() => {
                            setOpen(true);
                        }}
                    />
                )}
            </div>
        </div>
    );
};

const PawPrintIcon = () => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <circle cx="11" cy="4" r="2" />
            <circle cx="18" cy="8" r="2" />
            <circle cx="20" cy="16" r="2" />
            <path d="M9 10a5 5 0 0 1 5 5v3.5a3.5 3.5 0 0 1-6.84 1.045Q6.52 17.48 4.46 16.84A3.5 3.5 0 0 1 5.5 10Z" />
        </svg>
    );
};

export default NavBar;

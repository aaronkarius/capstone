"use client";
import Link from "next/link";
import React from "react";
import DarkModeToggle from "../DarkModeToggle";

const NavBar = () => {
    return (
        <div className="sticky top-0 flex justify-between p-6 bg-slate-300 dark:bg-slate-500">
            <div>
                <Link href="/">
                    <PawPrintIcon />
                </Link>
            </div>
            <div className="flex items-center gap-4 ml-auto sm:gap-6">
                <Link className="navbar-text" href="/TestPage">
                    Test Page
                </Link>
                <Link className="navbar-text" href="#">
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
                <DarkModeToggle />
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

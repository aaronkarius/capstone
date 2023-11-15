"use client";
import Link from "next/link";
import React from "react";
import { AiFillHome } from "react-icons/ai";

const NavBar = () => {
  return (
    <div className="absolute z-50 w-10 h-10 left-7 top-7">
      <Link href="/">
        <AiFillHome size={40} />
      </Link>
    </div>
  );
};

export default NavBar;

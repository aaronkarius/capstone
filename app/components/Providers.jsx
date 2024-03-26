"use client";
import { ThemeProvider } from "next-themes";
import Navbar from "./Navigation/Navbar/Navbar";
import Footer from "./Navigation/Footer";

const Providers = ({ children }) => {
    return (
        <ThemeProvider enableSystem={false} attribute="class">
            <Navbar />
            {children}
            <Footer />
        </ThemeProvider>
    );
};

export default Providers;

import { Inter } from "next/font/google";
import "./globals.css";
import Providers from "./components/Providers";
import DarkModeToggle from "./components/DarkModeToggle";
import NavBar from "./components/NavBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "Capstone Team 15",
    description: "Working on it!"
};

const RootLayout = ({ children }) => {
    return (
        <html lang="en" suppressHydrationWarning>
            <body className={inter.className}>
                <Providers>
                    <DarkModeToggle />
                    <NavBar />
                    {children}
                </Providers>
            </body>
        </html>
    );
};

export default RootLayout;

import { Inter } from "next/font/google";
import "./globals.css";
import ThemeProvider from "./components/ThemeProvider";
import Navbar from "./components/Navigation/Navbar";
import Footer from "./components/Navigation/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "Capstone Team 15",
    description: "Working on it!"
};

const RootLayout = ({ children }) => {
    return (
        <html lang="en" suppressHydrationWarning className="h-full min-w-min">
            <body className={`${inter.className} h-full flex flex-col`}>
                <ThemeProvider>
                    <Navbar />
                    {children}
                    <Footer />
                </ThemeProvider>
            </body>
        </html>
    );
};

export default RootLayout;

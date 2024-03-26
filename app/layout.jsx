import { Inter } from "next/font/google";
import "./globals.css";
import Providers from "./components/Providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "VetVoice",
    description: "The veterinarian's assistant"
};

const RootLayout = ({ children }) => {
    return (
        <html lang="en" suppressHydrationWarning className="h-full min-w-min">
            <body className={`${inter.className} h-full flex flex-col`}>
                <Providers>{children}</Providers>
            </body>
        </html>
    );
};

export default RootLayout;

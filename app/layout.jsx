import { Inter as FontSans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Providers from "@/components/Auth/Providers";

const fontSans = FontSans({
    subsets: ["latin"],
    variable: "--font-sans"
});

export const metadata = {
    title: "VetVoice",
    description: "The veterinarian's assistant"
};

const RootLayout = ({ children }) => {
    return (
        <html lang="en" suppressHydrationWarning className="h-full">
            <body
                className={cn(
                    "h-full min-h-svh bg-body font-sans antialiased",
                    fontSans.variable
                )}
            >
                <Providers>{children}</Providers>
            </body>
        </html>
    );
};

export default RootLayout;

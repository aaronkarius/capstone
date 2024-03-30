import { Frown } from "lucide-react";

export default function ErrorScreen() {
    return (
        <div className="grid h-full w-full content-center gap-2 p-4 text-center">
            <Frown className="mx-auto h-12 w-12 text-red-500 dark:text-red-400" />
            <h2 className="scroll-m-20 text-xl font-extrabold tracking-tight sm:text-2xl md:text-3xl lg:text-4xl">
                Oops! Something went wrong.
            </h2>
            <p className="leading-7">
                We&apos;re sorry for the inconvenience. Please try refreshing
                the page, or contact support if the problem persists.
            </p>
        </div>
    );
}

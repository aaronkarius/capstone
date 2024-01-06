import RecordingInput from "./components/RecordingInput";
import Image from "next/image";
import Link from "next/link";

const Home = () => {
    return (
        <div className="flex flex-col">
            <div className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
                <div className="flex flex-col items-center space-y-4 text-center">
                    <div className="space-y-2">
                        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                            Streamline Your Veterinary Practice
                        </h1>
                        <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                            VetVoice provides a comprehensive suite of tools to
                            manage your veterinary practice efficiently and
                            effectively.
                        </p>
                    </div>
                    <div className="space-x-4">
                        <Link
                            className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium transition-colors rounded-md shadow bg-slate-500 h-9 text-gray-50 hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                            href="#"
                        >
                            Get Started
                        </Link>
                        <Link
                            className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium transition-colors bg-gray-200 border border-gray-500 rounded-md shadow-sm h-9 hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-slate-500 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
                            href="#"
                        >
                            Learn more
                        </Link>
                    </div>
                </div>
            </div>
            <div class="intro-section">
                <div class="intro-text-holder">
                    <div className="space-y-2">
                        <div class="intro-header-smaller-text">
                            Appointment Management
                        </div>
                        <h2 class="intro-header-text">
                            Manage Your Schedule with Ease
                        </h2>
                        <p class="intro-smaller-text">
                            VetVoice&apos;s intuitive calendar view makes it
                            easy to see your upcoming appointments at a glance.
                            Schedule new appointments with just a few clicks.
                        </p>
                    </div>
                </div>
                <Image
                    alt="Image"
                    // className="object-cover object-center mx-auto overflow-hidden aspect-video rounded-xl sm:w-full lg:order-last"
                    height="100"
                    src="/placeholder.svg"
                    width="100"
                />
            </div>
            <div class="intro-section">
                <Image
                    alt="Image"
                    // className="object-cover object-center mx-auto overflow-hidden aspect-video rounded-xl sm:w-full"
                    height="100"
                    src="/placeholder.svg"
                    width="100"
                />
                <div class="intro-text-holder">
                    <div className="space-y-2">
                        <div class="intro-header-smaller-text">
                            Patient Records
                        </div>
                        <h2 class="intro-header-text">
                            Keep Track of Patient History
                        </h2>
                        <p class="intro-smaller-text">
                            Easily manage patient records, including medical
                            history, vaccinations, and treatments. All
                            information is stored securely and can be accessed
                            at any time.
                        </p>
                    </div>
                </div>
            </div>
            <div class="intro-section">
                <div class="intro-text-holder">
                    <div className="space-y-2">
                        <div class="intro-header-smaller-text">Analytics</div>
                        <h2 class="intro-header-text">
                            Make Data-Driven Decisions
                        </h2>
                        <p class="intro-smaller-text">
                            Powerful analytics and data visualizations to help
                            you track your practice&apos;s performance. Make
                            informed decisions to improve your services and
                            patient care.
                        </p>
                    </div>
                </div>
                <Image
                    alt="Image"
                    // className="object-cover object-center mx-auto overflow-hidden aspect-video rounded-xl sm:w-full lg:order-last"
                    height="100"
                    src="/placeholder.svg"
                    width="100"
                />
            </div>
            <div class="intro-section">
                <RecordingInput label={"Patient Information"} />
                <div class="intro-text-holder">
                    <div className="space-y-2">
                        <div class="intro-header-smaller-text">
                            Voice Dictation
                        </div>
                        <h2 class="intro-header-text">
                            Save Time with Dictation
                        </h2>
                        <p class="intro-smaller-text">
                            VetVoice puts your time first. Patient information
                            can be filled out with the click of a button, allow
                            your voice to do the typing for you.
                        </p>
                    </div>
                </div>
            </div>
            <footer className="flex flex-col items-center w-full gap-2 px-4 py-6 border-t sm:flex-row shrink-0 md:px-6">
                <p className="text-xs text-gray-500 dark:text-gray-400">
                    © VetVoice. All rights reserved.
                </p>
                <nav className="flex gap-4 sm:ml-auto sm:gap-6">
                    <Link
                        className="text-xs hover:underline underline-offset-4"
                        href="#"
                    >
                        About Us
                    </Link>
                    <Link
                        className="text-xs hover:underline underline-offset-4"
                        href="#"
                    >
                        Contact
                    </Link>
                    <Link
                        className="text-xs hover:underline underline-offset-4"
                        href="#"
                    >
                        Privacy Policy
                    </Link>
                </nav>
            </footer>
        </div>
    );
};

export default Home;

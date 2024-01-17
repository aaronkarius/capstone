import RecordingInput from "./components/RecordingInput";
import Image from "next/image";
import Link from "next/link";
import InvoiceForm from '../components/InvoiceForm';  // Import the InvoiceForm

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
            <div className="intro-section">
                <div className="intro-text-holder">
                    <div className="space-y-2">
                        <div className="intro-header-smaller-text">
                            Appointment Management
                        </div>
                        <h2 className="intro-header-text">
                            Manage Your Schedule with Ease
                        </h2>
                        <p className="intro-smaller-text">
                            VetVoice&apos;s intuitive calendar view makes it
                            easy to see your upcoming appointments at a glance.
                            Schedule new appointments with just a few clicks.
                        </p>
                    </div>
                </div>
                <Image
                    alt="Image"
                    height="100"
                    src="/placeholder.svg"
                    width="100"
                />
            </div>
            <div className="intro-section">
                <Image
                    alt="Image"
                    height="100"
                    src="/placeholder.svg"
                    width="100"
                />
                <div className="intro-text-holder">
                    <div className="space-y-2">
                        <div className="intro-header-smaller-text">
                            Patient Records
                        </div>
                        <h2 className="intro-header-text">
                            Keep Track of Patient History
                        </h2>
                        <p className="intro-smaller-text">
                            Easily manage patient records, including medical
                            history, vaccinations, and treatments. All
                            information is stored securely and can be accessed
                            at any time.
                        </p>
                    </div>
                </div>
            </div>
            <div className="intro-section">
                <div className="intro-text-holder">
                    <div className="space-y-2">
                        <div className="intro-header-smaller-text">
                            Analytics
                        </div>
                        <h2 className="intro-header-text">
                            Make Data-Driven Decisions
                        </h2>
                        <p className="intro-smaller-text">
                            Powerful analytics and data visualizations to help
                            you track your practice&apos;s performance. Make
                            informed decisions to improve your services and
                            patient care.
                        </p>
                    </div>
                </div>
                <Image
                    alt="Image"
                    height="100"
                    src="/placeholder.svg"
                    width="100"
                />
            </div>
            <div className="intro-section">
                <RecordingInput
                    id="patientInfo"
                    label="Patient Information"
                    placeholder="Enter details manually or click the microphone to dictate. Words such as 'period' and 'comma' can be used to add punctuation."
                    textarea
                    inputProps="w-[25vw] h-[8vh]"
                />
                <div className="intro-text-holder">
                    <div className="space-y-2">
                        <div className="intro-header-smaller-text">
                            Voice Dictation
                        </div>
                        <h2 className="intro-header-text">
                            Save Time with Dictation
                        </h2>
                        <p className="intro-smaller-text">
                            VetVoice puts your time first. Patient information
                            can be filled out with the click of a button, allow
                            your voice to do the typing for you.
                        </p>
                    </div>
                </div>
            </div>

            {/* InvoiceForm Component */}
            <div className="my-10">
                <InvoiceForm />
            </div>
        </div>
    );
};

export default Home;


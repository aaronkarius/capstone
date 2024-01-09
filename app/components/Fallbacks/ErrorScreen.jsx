const ErrorScreen = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen px-4 text-center bg-gray-100 dark:bg-gray-900 sm:px-6 lg:px-8">
            <AlertCircleIcon className="w-12 h-12 mx-auto text-red-500 dark:text-red-400" />
            <h2 className="mt-6 text-3xl font-extrabold text-gray-900 dark:text-gray-100">
                Oops! Something went wrong.
            </h2>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                We&apos;re sorry for the inconvenience. Please try refreshing
                the page, or contact support if the problem persists.
            </p>
        </div>
    );
};

function AlertCircleIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <circle cx="12" cy="12" r="10" />
            <line x1="12" x2="12" y1="8" y2="12" />
            <line x1="12" x2="12.01" y1="16" y2="16" />
        </svg>
    );
}

export default ErrorScreen;

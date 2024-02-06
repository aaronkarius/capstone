const LoadingScreen = () => {
    return (
        <div className="flex items-center justify-center w-full h-full bg-gray-100 dark:bg-gray-800">
            <div className="w-10 h-10 border-t-2 border-b-2 border-gray-900 rounded-full dark:border-gray-200 animate-spin" />
        </div>
    );
};

export default LoadingScreen;

"use client";
import React from "react";

const RecordingInput = () => {
    // state variables to manage recording status, completion, and output
    const [isRecording, setIsRecording] = React.useState(false);
    const [output, setOutput] = React.useState("");

    // reference to store the SpeechRecognition instance
    const speechRecognition = React.useRef(null);

    const startRecording = () => {
        setIsRecording(true);

        // create a new SpeechRecognition instance and configure it
        speechRecognition.current = new window.webkitSpeechRecognition();
        speechRecognition.current.continuous = true;
        speechRecognition.current.interimResults = true;

        // event handler for speech recognition results
        speechRecognition.current.onresult = (event) => {
            const { output } = event.results[event.results.length - 1][0];

            // log the recognition results and update the output state
            // todo: remove log
            console.log(event.results);
            setOutput(output);
        };

        //start the speech recognition
        speechRecognition.current.start();
    };

    // cleanup effect for first render
    React.useEffect(() => {
        return () => {
            // stop the speech recognition if it's active
            if (speechRecognition.current) {
                speechRecognition.current.stop();
            }
        };
    }, []);

    const stopRecording = () => {
        setIsRecording(false);

        if (speechRecognition.current) {
            // stop the speech recognition and mark recording as complete
            speechRecognition.current.stop();
        }
    };

    return (
        <div className="flex flex-col items-center w-full">
            {(isRecording || output) && (
                <div className="w-3/6 p-4 border rounded-md min-w-fit ">
                    <div className="flex justify-between flex-1 w-full">
                        <div>
                            <div className="text-sm font-medium">
                                {isRecording ? "Recording" : "Recorded"}
                            </div>
                            <div className="text-sm text-muted-foreground">
                                {isRecording
                                    ? "Start speaking..."
                                    : "Thanks for talking."}
                            </div>
                        </div>
                        {isRecording && (
                            <div className="w-4 h-4 bg-red-400 rounded-full animate-pulse" />
                        )}
                    </div>

                    {output && (
                        <div className="flex p-2 mt-4 border rounded-md">
                            {output}
                        </div>
                    )}
                </div>
            )}

            <div className="flex items-center justify-center w-full">
                {isRecording ? (
                    // button for stopping recording
                    <button
                        onClick={() => stopRecording()}
                        className="flex items-center justify-center w-20 h-20 mt-10 bg-red-400 rounded-full hover:bg-red-500"
                    >
                        <svg
                            className="w-12 h-12 fill-white"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
                        </svg>
                    </button>
                ) : (
                    // button for starting recording
                    <button
                        onClick={() => startRecording()}
                        className="flex items-center justify-center w-20 h-20 mt-10 bg-blue-400 rounded-full hover:bg-blue-500"
                    >
                        <svg
                            viewBox="0 0 256 256"
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-12 h-12 fill-white"
                        >
                            <path d="M128 176a48.05 48.05 0 0 0 48-48V64a48 48 0 0 0-96 0v64a48.05 48.05 0 0 0 48 48ZM96 64a32 32 0 0 1 64 0v64a32 32 0 0 1-64 0Zm40 143.6V232a8 8 0 0 1-16 0v-24.4A80.11 80.11 0 0 1 48 128a8 8 0 0 1 16 0a64 64 0 0 0 128 0a8 8 0 0 1 16 0a80.11 80.11 0 0 1-72 79.6Z" />
                        </svg>
                    </button>
                )}
            </div>
        </div>
    );
};

export default RecordingInput;

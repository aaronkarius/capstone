"use client";
import React from "react";

const RecordingInput = ({
    id,
    label,
    placeholder,
    inputProps = "",
    textarea = false,
    capitalize = false,
    required = false,
    clearSwitch = false
}) => {
    React.useEffect(() => {
        setOutput("");
    }, [clearSwitch]);

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
        speechRecognition.current.onresult = event => {
            let results = "";

            // check if the results were the final results, i.e., if the person stopped talking
            // if so we are going to get the whole thing of results with an object foreach basically
            // if not we are going to get the latest thing they've said
            if (event.results[event.results.length - 1].isFinal) {
                for (const [_, value] of Object.entries(event.results)) {
                    results += value[0].transcript;
                }
            } else {
                results = event.results[event.results.length - 1][0].transcript;
            }

            // replace any instances of "period" or "comma" with the actual punctuation
            results = results
                .replaceAll(" period", ".")
                .replaceAll(" comma", ",");

            // capitalize the first letter of every word or sentence
            results = capitalize
                ? results.replace(/\b\w/g, char => char.toUpperCase())
                : results.replace(/(^\w)|(\.\s\w)/g, char =>
                      char.toUpperCase()
                  );

            setOutput(results);
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

    const handleRecording = () => {
        isRecording ? stopRecording() : startRecording();
    };

    return (
        <div className="flex flex-col items-baseline max-w-sm space-x-2 w-fit">
            <label
                htmlFor={id}
                className="pb-2 text-gray-600 dark:text-gray-300"
            >
                {label}
            </label>
            {/* not sure why there is margin left being applied here */}
            <div className="flex gap-4">
                {textarea ? (
                    <textarea
                        id={id}
                        className={`${inputProps} overflow-y-scroll rounded-md resize-none input`}
                        placeholder={placeholder}
                        type="text"
                        value={output}
                        onChange={e => setOutput(e.target.value)}
                        required={required}
                    />
                ) : (
                    <input
                        id={id}
                        className={`${inputProps} rounded-md input`}
                        placeholder={placeholder}
                        type="text"
                        value={output}
                        onChange={e => setOutput(e.target.value)}
                        required={required}
                    />
                )}
                <button size="icon" variant="ghost" onClick={handleRecording}>
                    <MicIcon
                        className={`w-6 h-6 ${
                            isRecording &&
                            "animate-pulse text-red-600 dark:text-red-300"
                        }`}
                    />
                </button>
            </div>
        </div>
        // <div className="flex items-center gap-4 w-min">
        //     <div className="justify-center">
        //         {isRecording ? (
        //             // button for stopping recording
        //             <button
        //                 onClick={() => stopRecording()}
        //                 className="flex items-center justify-center w-20 h-20 bg-red-400 rounded-full hover:bg-red-500"
        //             >
        //                 <svg
        //                     className="w-12 h-12 fill-white"
        //                     viewBox="0 0 24 24"
        //                     xmlns="http://www.w3.org/2000/svg"
        //                 >
        //                     <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
        //                 </svg>
        //             </button>
        //         ) : (
        //             // button for starting recording
        //             <button
        //                 onClick={() => startRecording()}
        //                 className="flex items-center justify-center w-20 h-20 bg-blue-400 rounded-full hover:bg-blue-500"
        //             >
        //                 <svg
        //                     viewBox="0 0 256 256"
        //                     xmlns="http://www.w3.org/2000/svg"
        //                     className="w-12 h-12 fill-white"
        //                 >
        //                     <path d="M128 176a48.05 48.05 0 0 0 48-48V64a48 48 0 0 0-96 0v64a48.05 48.05 0 0 0 48 48ZM96 64a32 32 0 0 1 64 0v64a32 32 0 0 1-64 0Zm40 143.6V232a8 8 0 0 1-16 0v-24.4A80.11 80.11 0 0 1 48 128a8 8 0 0 1 16 0a64 64 0 0 0 128 0a8 8 0 0 1 16 0a80.11 80.11 0 0 1-72 79.6Z" />
        //                 </svg>
        //             </button>
        //         )}
        //     </div>
        //     {(isRecording || output) && (
        //         <div className="flex items-center p-4 h-fit w-min">
        //             <div className="w-[25vw] max-h-24">
        //                 {/* idk why label is an object */}
        //                 <div>{label.label}</div>
        //                 {output && (
        //                     <div className="p-2 overflow-y-scroll border border-gray-500 rounded-md dark:border-gray-200 max-h-20">
        //                         {output}
        //                     </div>
        //                 )}
        //             </div>
        //             {isRecording && (
        //                 <div className="self-start p-4">
        //                     <div className="w-3 h-3 bg-red-400 rounded-full animate-pulse" />
        //                 </div>
        //             )}
        //         </div>
        //     )}
        // </div>
    );
};

function MicIcon(props) {
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
            <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z" />
            <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
            <line x1="12" x2="12" y1="19" y2="22" />
        </svg>
    );
}

export default RecordingInput;

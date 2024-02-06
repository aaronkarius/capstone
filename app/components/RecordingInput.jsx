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
    clearSwitch = false,
    handleSetField = () => {},
    submitSwitch = false
}) => {
    // state variables to manage recording status, completion, and output
    const [isRecording, setIsRecording] = React.useState(false);
    const [output, setOutput] = React.useState("");

    // this will refresh the input when clearSwitch is changed
    React.useEffect(() => {
        setOutput("");
    }, [clearSwitch]);

    React.useEffect(() => {
        handleSetField(id, output);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [submitSwitch]);

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
                        onChange={e => {
                            setOutput(e.target.value);
                        }}
                        required={required}
                    />
                ) : (
                    <input
                        id={id}
                        className={`${inputProps} rounded-md input`}
                        placeholder={placeholder}
                        type="text"
                        value={output}
                        onChange={e => {
                            setOutput(e.target.value);
                        }}
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

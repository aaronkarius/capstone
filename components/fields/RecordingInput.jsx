"use client";
import React from "react";
import {
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage
} from "../ui/form";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { cn } from "@/lib/utils";
import { Label } from "../ui/label";
import { Button } from "../ui/button";
import { Mic } from "lucide-react";

/**
 * An input that allows the user to input text via typing or speech recognition.
 * @param {string} id - The id of the input element. Used to identify the input in the global state.
 * @param {string} label - The label for the input. Describes the input to the user.
 * @param {string} placeholder - The placeholder text for the input. Provides a hint to the user.
 * @param {string} inputProps - Additional styling to apply to the input.
 * @param {boolean} textarea - Whether or not the input should be a textarea.
 * @param {boolean} capitalize - Whether or not the input should capitalize the first letter of each word.
 * @param {boolean} required - Whether or not the input is required.
 * @param {string} value - The value of the input. Grabbed from the global state.
 * @param {function} handleSetField - A function that updates the global state with the new value of the input.
 */
const RecordingInput = ({
    id,
    label,
    placeholder,
    form,
    disabled = false,
    inputProps = "",
    textarea = false,
    capitalize = false,
    required = false,
    value = "",
    handleSetField = () => {}
}) => {
    // state variables to manage recording status, completion, and output
    const [isRecording, setIsRecording] = React.useState(false);
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

            // update the global state with the new value
            handleSetField(id, results);
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
        <>
            {form ? (
                // todo: form version
                <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                                <Textarea
                                    disabled={disabled}
                                    className="resize-none"
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
            ) : (
                // todo: are we gonna do demos in the welcome page?
                <div className={cn("relative", inputProps)}>
                    <Label htmlFor="input-demo">Patient Information</Label>
                    <Textarea
                        id="input-demo"
                        disabled={disabled}
                        className="resize-none"
                        placeholder="Enter details manually or click the microphone to dictate. Words such as 'period' and 'comma' can be used to add punctuation."
                    />
                    <Button
                        variant="ghost"
                        className="absolute right-0 top-1/2 -translate-y-full transform"
                        type="button"
                        // onClick={() => setShowPassword(!showPassword)}
                        disabled={disabled}
                    >
                        {isRecording ? (
                            <Mic className="h-5 w-5" />
                        ) : (
                            <Mic className="h-5 w-5" />
                        )}
                    </Button>
                </div>
            )}
        </>

        // <div className="flex flex-col items-baseline space-x-2 grow w-fit">
        //     <label
        //         htmlFor={id}
        //         className="pb-2 text-gray-600 dark:text-gray-300"
        //     >
        //         {label}
        //     </label>
        //     {/* not sure why there is margin left being applied here */}
        //     <div className="flex w-full gap-4 pr-2">
        //         {textarea ? (
        //             <textarea
        //                 id={id}
        //                 className={`${inputProps} overflow-y-scroll rounded-md resize-none input`}
        //                 placeholder={placeholder}
        //                 type="text"
        //                 value={value}
        //                 onChange={e => {
        //                     handleSetField(id, e.target.value);
        //                 }}
        //                 required={required}
        //             />
        //         ) : (
        //             <input
        //                 id={id}
        //                 className={`${inputProps} rounded-md input`}
        //                 placeholder={placeholder}
        //                 type="text"
        //                 value={value}
        //                 onChange={e => {
        //                     handleSetField(id, e.target.value);
        //                 }}
        //                 required={required}
        //             />
        //         )}
        //         <button size="icon" variant="ghost" onClick={handleRecording}>
        //             <MicIcon
        //                 className={`w-6 h-6 ${
        //                     isRecording &&
        //                     "animate-pulse text-red-600 dark:text-red-300"
        //                 }`}
        //             />
        //         </button>
        //     </div>
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

export default React.memo(RecordingInput);

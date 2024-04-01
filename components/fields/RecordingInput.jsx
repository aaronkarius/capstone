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

// todo: complete and update
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
    setValue,
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
                .replaceAll(/(^|\s)period/gi, ".")
                .replaceAll(/(^|\s)comma/gi, ",");

            // capitalize the first letter of every word or sentence
            results = capitalize
                ? results.replace(/\b\w/g, char => char.toUpperCase())
                : results.replace(/(^\w)|(\.\s\w)/g, char =>
                      char.toUpperCase()
                  );

            // update the global state with the new value
            // handleSetField(id, results);

            setValue(`${value} ${results}`);
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
                // todo: cleanup
                <FormField
                    control={form.control}
                    name={id}
                    render={({ field }) => (
                        <FormItem className="relative">
                            <FormLabel>{label}</FormLabel>
                            <FormControl>
                                <Textarea
                                    disabled={disabled}
                                    className="resize-none pr-6"
                                    value={value}
                                    onChange={e => {
                                        setValue(e.target.value);
                                    }}
                                />
                            </FormControl>
                            <Button
                                variant="icon"
                                className="absolute right-2 top-6 h-20"
                                type="button"
                                onClick={handleRecording}
                                disabled={disabled}
                            >
                                <Mic
                                    className={cn(
                                        "h-5 w-5",
                                        isRecording &&
                                            "animate-pulse text-destructive-text"
                                    )}
                                />
                            </Button>
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
    );
};

export default React.memo(RecordingInput);

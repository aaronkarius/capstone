"use client";
import RecordingInput from "../app/components/RecordingInput";
import React from "react";

const TestPage = () => {
    // below is to handle being able to clear the recording components
    const [clearSwitch, setClearSwitch] = React.useState(false);

    const handleClear = () => {
        setClearSwitch(!clearSwitch);
    };

    return (
        // keeping this in case we like full page design better
        // <div className="flex flex-col h-full gap-12 px-6 py-12 bg-gray-100 dark:bg-gray-800 md:px-8 lg:px-10 xl:px-12 md:py-24 lg:py-32">
        <div className="flex flex-col items-center justify-center h-full p-6 bg-gray-100 dark:bg-gray-800">
            <div className="flex flex-col w-full max-w-md gap-8 p-6 shadow-md bg-gray-50 dark:bg-gray-700 rounded-xl min-w-min">
                <h1 className="text-2xl font-semibold tracking-tighter sm:text-3xl md:text-4xl/none">
                    New Patient Visit Form
                </h1>
                <div className="flex flex-wrap gap-4">
                    <RecordingInput
                        label="Owner Name"
                        placeholder="Jane Doe"
                        id="ownerName"
                        capitalize
                        required
                        inputProps="w-80"
                        clearSwitch={clearSwitch}
                    />
                    <RecordingInput
                        label="Pet Name"
                        placeholder="Nuclear Bomb"
                        id="petName"
                        capitalize
                        required
                        inputProps="w-80"
                        clearSwitch={clearSwitch}
                    />
                    <RecordingInput
                        label="Species"
                        placeholder="Dog"
                        id="species"
                        capitalize
                        required
                        inputProps="w-80"
                        clearSwitch={clearSwitch}
                    />
                    <RecordingInput
                        label="Reason for Visit"
                        placeholder="Checkup"
                        id="reasonForVisit"
                        textarea
                        required
                        inputProps="h-24 w-80"
                        clearSwitch={clearSwitch}
                    />
                    <RecordingInput
                        label="Additional Notes"
                        placeholder="Comments..."
                        id="additionalNotes"
                        textarea
                        required
                        inputProps="h-24 w-80"
                        clearSwitch={clearSwitch}
                    />
                </div>
                <div className="flex flex-col gap-4">
                    <button className="purple-button">Submit</button>
                    <button className="gray-button" onClick={handleClear}>
                        Clear
                    </button>
                </div>
            </div>
        </div>
    );
};

export default TestPage;

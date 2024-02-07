"use client";
import RecordingInput from "../components/RecordingInput";
import { useTestStore } from "@/store/store";
import React from "react";

const TestPage = () => {
    // this is going to check each thing in testData and set it to an empty string
    const handleClear = () => {
        for (const key in testData) {
            handleSetField(key, "");
        }
    };

    // this is going to get the global data from the store
    // also the value used in each RecordingInput component
    const testData = useTestStore(state => {
        return {
            ownerName: state.ownerName,
            petName: state.petName,
            species: state.species,
            reasonForVisit: state.reasonForVisit,
            additionalNotes: state.additionalNotes
        };
    });

    // setField is defined in the test store
    const setField = useTestStore(state => state.setField);
    // we are going to pass this into each RecordingInput component
    // this will update the global state with the new value the user enters or speaks
    const handleSetField = React.useCallback(
        (key, value) => {
            setField(key, value);
        },
        [setField]
    );

    return (
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
                        value={testData.ownerName}
                        handleSetField={handleSetField}
                    />
                    <RecordingInput
                        label="Pet Name"
                        placeholder="Nuclear Bomb"
                        id="petName"
                        capitalize
                        required
                        inputProps="w-80"
                        value={testData.petName}
                        handleSetField={handleSetField}
                    />
                    <RecordingInput
                        label="Species"
                        placeholder="Dog"
                        id="species"
                        capitalize
                        required
                        inputProps="w-80"
                        value={testData.species}
                        handleSetField={handleSetField}
                    />
                    <RecordingInput
                        label="Reason for Visit"
                        placeholder="Checkup"
                        id="reasonForVisit"
                        textarea
                        required
                        inputProps="h-24 w-80"
                        value={testData.reasonForVisit}
                        handleSetField={handleSetField}
                    />
                    <RecordingInput
                        label="Additional Notes"
                        placeholder="Comments..."
                        id="additionalNotes"
                        textarea
                        required
                        inputProps="h-24 w-80"
                        value={testData.additionalNotes}
                        handleSetField={handleSetField}
                    />
                </div>
                <div className="flex flex-col gap-4">
                    <button
                        className="purple-button"
                        // this will need to be updated to send form data to pdf
                        onClick={() => console.log(testData)}
                    >
                        Submit
                    </button>
                    <button className="gray-button" onClick={handleClear}>
                        Clear
                    </button>
                </div>
            </div>
        </div>
    );
};

export default TestPage;

"use client";
import RecordingInput from "../components/RecordingInput";
import { useTestStore } from "@/store/store";
import React, { useCallback } from "react";

const TestPage = () => {
    // below is to handle being able to clear the recording components
    const [clearSwitch, setClearSwitch] = React.useState(false);
    const handleClear = () => {
        setClearSwitch(!clearSwitch);
    };

    const { ownerName, petName, species, reasonForVisit, additionalNotes } =
        useTestStore(state => {
            return {
                ownerName: state.ownerName,
                petName: state.petName,
                species: state.species,
                reasonForVisit: state.reasonForVisit,
                additionalNotes: state.additionalNotes
            };
        });

    const setField = useTestStore(state => state.setField);
    const handleSetField = React.useCallback(
        (key, value) => {
            setField(key, value);
        },
        [setField]
    );

    const [submitSwitch, setSubmitSwitch] = React.useState(false);
    const handleSubmit = () => {
        setSubmitSwitch(!submitSwitch);
    };

    console.log(useTestStore.getState());

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
                        handleSetField={handleSetField}
                        submitSwitch={submitSwitch}
                    />
                    <RecordingInput
                        label="Pet Name"
                        placeholder="Nuclear Bomb"
                        id="petName"
                        capitalize
                        required
                        inputProps="w-80"
                        handleSetField={handleSetField}
                        clearSwitch={clearSwitch}
                        submitSwitch={submitSwitch}
                    />
                    <RecordingInput
                        label="Species"
                        placeholder="Dog"
                        id="species"
                        capitalize
                        required
                        inputProps="w-80"
                        handleSetField={handleSetField}
                        clearSwitch={clearSwitch}
                        submitSwitch={submitSwitch}
                    />
                    <RecordingInput
                        label="Reason for Visit"
                        placeholder="Checkup"
                        id="reasonForVisit"
                        textarea
                        required
                        inputProps="h-24 w-80"
                        handleSetField={handleSetField}
                        clearSwitch={clearSwitch}
                        submitSwitch={submitSwitch}
                    />
                    <RecordingInput
                        label="Additional Notes"
                        placeholder="Comments..."
                        id="additionalNotes"
                        textarea
                        required
                        inputProps="h-24 w-80"
                        handleSetField={handleSetField}
                        clearSwitch={clearSwitch}
                        submitSwitch={submitSwitch}
                    />
                </div>
                <div className="flex flex-col gap-4">
                    <button className="purple-button" onClick={handleSubmit}>
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

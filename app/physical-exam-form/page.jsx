"use client";
import { useTestStore } from "@/store/store";
import React from "react";
import { useReactToPrint } from "react-to-print";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../../lib/firebaseConfig";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle
} from "@/components/ui/card";
import ExamForm from "./ExamForm";
import { useState } from "react";
import ExamFormPdf from "./ExamFormPdf";
import { useEffect } from "react";

// todo: cleanup
export default function PhysicalExamForm() {
    // this is going to check each thing in testData and set it to an empty string
    // const handleClear = () => {
    //     for (const key in testData) {
    //         handleSetField(key, "");
    //     }
    // };

    // this is going to get the global data from the store
    // also the value used in each RecordingInput component
    // todo: need to add id to each thing of data
    // const testData = useTestStore(state => {
    //     return {
    //         ownerName: state.ownerName,
    //         petName: state.petName,
    //         species: state.species,
    //         reasonForVisit: state.reasonForVisit,
    //         additionalNotes: state.additionalNotes
    //     };
    // });

    // setField is defined in the test store
    // const setField = useTestStore(state => state.setField);
    // we are going to pass this into each RecordingInput component
    // this will update the global state with the new value the user enters or speaks
    // const handleSetField = React.useCallback(
    //     (key, value) => {
    //         setField(key, value);
    //     },
    //     [setField]
    // );
    const [notesValue, setNotesValue] = useState("");
    const [data, setData] = useState({});

    // printing stuff
    const componentRef = React.useRef();
    const handlePrint = useReactToPrint({
        content: () => componentRef.current
    });

    const handleSubmit = formData => {
        setData({
            firstName: formData.firstName,
            lastName: formData.lastName,
            dob: formData.dob.toString(),
            examDate: formData.examDate.toString(),
            breed: formData.breed,
            sex: formData.sex,
            healthy: formData.healthy,
            notes: notesValue
        });
        // try {
        //     await updateDoc(doc(db, "test", "1"), testData);

        //     console.log("successfully updated test document with: ", testData);
        // } catch (e) {
        //     console.error(e);
        // }
    };

    useEffect(() => {
        if (Object.keys(data).length !== 0) {
            handlePrint();
        }
    }, [data, handlePrint]);

    return (
        <div className="flex h-full items-center justify-center p-8">
            {/* this is just a test for the pdf */}
            {/* <div style={{ display: "none" }}>
                <div ref={componentRef} className="flex flex-col gap-8 p-24">
                    {Object.entries(data).map(([key, value]) => (
                        <div key={key} className="flex gap-4">
                            <h1>{key}</h1>
                            <p>{value}</p>
                        </div>
                    ))}
                </div>
            </div> */}
            <div className="hidden">
                <div className="flex h-full p-8" ref={componentRef}>
                    <ExamFormPdf data={data} />
                </div>
            </div>
            <Card className="w-full max-w-sm">
                <CardHeader>
                    <CardTitle className="text-2xl">
                        Physical Exam Form
                    </CardTitle>
                    <CardDescription>
                        This a test form. Hitting submit will generate a pdf
                        with your inputs.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <ExamForm
                        handleSubmit={handleSubmit}
                        notesValue={notesValue}
                        setNotesValue={setNotesValue}
                    />
                </CardContent>
            </Card>
        </div>
        // <div className="flex h-full flex-col items-center justify-center bg-gray-100 p-6 dark:bg-gray-800">
        //     <div className="flex w-full max-w-md flex-col gap-8 rounded-xl bg-gray-50 p-6 shadow-md dark:bg-gray-700">
        //         <h1 className="text-2xl font-semibold tracking-tighter sm:text-3xl md:text-4xl/none">
        //             Physical Exam Form
        //         </h1>
        //         {/* this is just a test for the pdf */}
        //         <div style={{ display: "none" }}>
        //             <div
        //                 ref={componentRef}
        //                 className="flex flex-col gap-8 p-24"
        //             >
        //                 {Object.entries(testData).map(([key, value]) => (
        //                     <div key={key} className="flex gap-4">
        //                         <h1>{key}</h1>
        //                         <p>{value}</p>
        //                     </div>
        //                 ))}
        //             </div>
        //         </div>
        //         <div className="flex flex-wrap gap-4">
        //             <RecordingInput
        //                 label="Owner Name"
        //                 placeholder="Jane Doe"
        //                 id="ownerName"
        //                 capitalize
        //                 required
        //                 inputProps="max-w-80 min-w-[200px]"
        //                 value={testData.ownerName}
        //                 handleSetField={handleSetField}
        //             />
        //             <RecordingInput
        //                 label="Pet Name"
        //                 placeholder="Nuclear Bomb"
        //                 id="petName"
        //                 capitalize
        //                 required
        //                 inputProps="max-w-80"
        //                 value={testData.petName}
        //                 handleSetField={handleSetField}
        //             />
        //             <RecordingInput
        //                 label="Species"
        //                 placeholder="Dog"
        //                 id="species"
        //                 capitalize
        //                 required
        //                 inputProps="max-w-80"
        //                 value={testData.species}
        //                 handleSetField={handleSetField}
        //             />
        //             <RecordingInput
        //                 label="Reason for Visit"
        //                 placeholder="Checkup"
        //                 id="reasonForVisit"
        //                 textarea
        //                 required
        //                 inputProps="h-24 max-w-80"
        //                 value={testData.reasonForVisit}
        //                 handleSetField={handleSetField}
        //             />
        //             <RecordingInput
        //                 label="Additional Notes"
        //                 placeholder="Comments..."
        //                 id="additionalNotes"
        //                 textarea
        //                 required
        //                 inputProps="h-24 max-w-80"
        //                 value={testData.additionalNotes}
        //                 handleSetField={handleSetField}
        //             />
        //         </div>
        //         <div className="flex flex-col gap-4">
        //             <button
        //                 className="purple-button"
        //                 // this will need to be updated to send form data to pdf
        //                 onClick={handleSubmit}
        //             >
        //                 Submit
        //             </button>
        //             <button className="gray-button" onClick={handleClear}>
        //                 Clear
        //             </button>
        //         </div>
        //     </div>
        // </div>
    );
}

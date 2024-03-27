"use client";
import RecordingInput from "../components/RecordingInput";
import { useTestStore } from "@/store/store1";
import React from "react";
import { useReactToPrint } from "react-to-print";

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
            age: state.age,
            breed: state.breed,
            sex: state.sex,
            healthy: state.healthy,
            ocular: state.ocular,
            ophthalmic: state.ophthalmic,
            aural: state.aural,
            respiratory: state.respiratory,
            cardio: state.cardio,
            lymphatic: state.lymphatic,
            muscleskel: state.muscleskel,
            neur: state.neur,
            urogen: state.urogen,
            gastro: state.gastro,
            addcomm: state.addcomm,
            firstName: state.firstName,
            lastName: state.lastName,
            DOB: state.DOB,
            examDate: state.examDate
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

    // printing stuff
    const componentRef = React.useRef();
    const handlePrint = useReactToPrint({
        content: () => componentRef.current
    });
    let value = "";
    return (
        <div className="flex flex-col w-full items-center justify-center h-min w-fit p-6 bg-gray-100 dark:bg-gray-800">
            <div className="flex box-content h-min w-min-fill p-3 border-4 flex-col max-w-md gap-8 p-6 shadow-md bg-gray-50 dark:bg-gray-700 rounded-xl min-w-min ">
                <h1 className=" text-2xl font-semibold tracking-tighter sm:text-3xl md:text-4xl/none">
                    Physical Exam Form
                </h1>
                {/* this is just a test for the pdf */}
                
                <div style={{ display: "none" }}>
                    <div ref={componentRef}  className="flex flex-col gap-8 p-24">  
                        <div className="flex flex-col h-min w-fill gap-0 p-1">
                            <table>
                               <thead>
                                    <tr>
                                        <th className="border-solid border-2 border-black">First Name</th>
                                        <th className="border-solid border-2 border-black">Last Name</th>
                                        <th className="border-solid border-2 border-black">Date of Birth</th>
                                        <th className="border-solid border-2 border-black">Exam date</th>
                                    </tr>
                               </thead>
                            


                                <tbody>
                                    <tr>
                                        <td className="border-solid border-2 border-grey">{testData.firstName.toString()}</td>
                                        <td className="border-solid border-2 border-grey">{testData.lastName.toString()}</td>
                                        <td className="border-solid border-2 border-grey">{testData.DOB.toString()}</td>
                                        <td className="border-solid border-2 border-grey">{testData.examDate.toString()}</td>
                                    </tr>
                                </tbody>
                                </table>
                               
                                
                            </div>
                            <div className=" box-content h-min w-fit p-3 border-4"> 
                                    
                                    {testData.age.toString()}
                            
                            </div>
                            <div className="flex box-content h-min w-fit p-3 border-4"> 
                                    
                                    {testData.breed.toString()}
                            
                            </div>
                            <div className="flex box-content h-min w-fit p-3 border-4"> 
                                    
                                    {testData.sex.toString()}
                            
                            </div>
                            <div className="flex box-content h-min w-fit p-3 border-4"> 
                                    
                                    {testData.healthy.toString()}
                            
                            </div>
                            <div className="flex box-content h-min w-fit p-3 border-4"> 
                                    
                                    {testData.ocular.toString()}
                            
                            </div>
                            <div className="flex box-content h-min w-fit p-3 border-4"> 
                                    
                                    {testData.ophthalmic.toString()}
                            
                            </div>
                            <div className="flex box-content h-min w-fit p-3 border-4"> 
                                    
                                    {testData.aural.toString()}
                            
                            </div>
                            <div className="flex box-content h-min w-fit p-3 border-4"> 
                                    
                                    {testData.respiratory.toString()}
                            
                            </div>
                            <div className="flex box-content h-min w-fit p-3 border-4"> 
                                    
                                    {testData.cardio.toString()}
                            
                            </div>
                            <div className="flex box-content h-min w-fit p-3 border-4"> 
                                    
                                    {testData.lymphatic.toString()}
                            
                            </div>
                            <div className="flex box-content h-min w-fit p-3 border-4"> 
                                    
                                    {testData.muscleskel.toString()}
                            
                            </div>
                            <div className="flex box-content h-min w-fit p-3 border-4"> 
                                    
                                    {testData.neur.toString()}
                            
                            </div>
                            <div className="flex box-content h-min w-fit p-3 border-4"> 
                                    
                                    {testData.urogen.toString()}
                            
                            </div>
                            <div className="flex box-content h-min w-fit p-3 border-4"> 
                                    
                                    {testData.gastro.toString()}
                            
                            </div>
                            <div className="flex box-content h-min w-fit p-3 border-4"> 
                                    
                                    {testData.addcomm.toString()}
                            
                            </div>
                            {Object.entries(testData).map(([key, value]) => (
                            <div key={key} className="flex gap-4">
                                <h1>{/*key*/} </h1>
                                <p>{/*value*/}</p>
                                
                            </div>
                        ))}
                    </div>
                    
                </div>
                <div className="flex flex-wrap box-content w-fit h-min gap-4">
                    
                   <div id="firstName"className="flex box-content h-min w-fit p-2 border-2">
                   First Name:
                                <textarea name="" id="" cols="27" rows="1"></textarea>         
                   </div>
                   <div id="lastName" className="flex box-content h-min w-fit p-2 border-2">
                   Last Name:
                                <textarea name="" id="" cols="27" rows="1"></textarea>         
                   </div>
                   <div id="doDOBb" className="flex box-content h-min w-fit p-2 border-2">
                   Date of Birth  :
                                <input type="date" id="birthDate"/>      
                   </div>
                   <div id="examDate" className="flex box-content h-min w-fit p-2 border-2">
                   Exam Date  :
                                <input type="date" id="examDate" />      
                   </div>
                    <RecordingInput
                        label="Age"
                        placeholder=""
                        id="age"
                        capitalize
                        required
                        inputProps="h-min w-80"
                        value={testData.age}
                        handleSetField={handleSetField}
                    />
                    <RecordingInput
                        label="Breed"
                        placeholder=""
                        id="breed"
                        capitalize
                        required
                        inputProps="w-80"
                        value={testData.breed}
                        handleSetField={handleSetField}
                    />
                    <RecordingInput
                        label="Sex"
                        placeholder=""
                        id="sex"
                        capitalize
                        required
                        inputProps="w-80"
                        value={testData.sex}
                        handleSetField={handleSetField}
                    />
                    <RecordingInput
                        label="Healthy?"
                        placeholder="yes/no/maybe"
                        id="healthy"
                        capitalize
                        required
                        inputProps="w-80"
                        value={testData.healthy}
                        handleSetField={handleSetField}
                    />
                    <RecordingInput
                        label="Ocular"
                        placeholder=""
                        id="ocular"
                        textarea
                        required
                        inputProps="h-24 w-80"
                        value={testData.ocular}
                        handleSetField={handleSetField}
                    />
                    <RecordingInput
                        label="Opthalamic"
                        placeholder=""
                        id="opthalamic"
                        textarea
                        required
                        inputProps="h-24 w-80"
                        value={testData.opthalamic}
                        handleSetField={handleSetField}
                    />
                    <RecordingInput
                        label="Aural"
                        placeholder=""
                        id="aural"
                        textarea
                        required
                        inputProps="h-24 w-80"
                        value={testData.aural}
                        handleSetField={handleSetField}
                    />
                    <RecordingInput
                        label="Respiratory"
                        placeholder=""
                        id="respiratory"
                        textarea
                        required
                        inputProps="h-24 w-80"
                        value={testData.respiratory}
                        handleSetField={handleSetField}
                    />
                    <RecordingInput
                        label="Cardiovascular"
                        placeholder=""
                        id="cardio"
                        textarea
                        required
                        inputProps="h-24 w-80"
                        value={testData.cardio}
                        handleSetField={handleSetField}
                    />
                    <RecordingInput
                        label="Lymphatic"
                        placeholder=""
                        id="lymphatic"
                        textarea
                        required
                        inputProps="h-24 w-80"
                        value={testData.lymphatic}
                        handleSetField={handleSetField}
                    />
                    <RecordingInput
                        label="Musculoskeletal"
                        placeholder=""
                        id="muscleskel"
                        textarea
                        required
                        inputProps="h-24 w-80"
                        value={testData.muscleskel}
                        handleSetField={handleSetField}
                    />
                    <RecordingInput
                        label="Neurological"
                        placeholder=""
                        id="neur"
                        textarea
                        required
                        inputProps="h-24 w-80"
                        value={testData.neur}
                        handleSetField={handleSetField}
                    />
                    <RecordingInput
                        label="Urogenital"
                        placeholder=""
                        id="urogen"
                        textarea
                        required
                        inputProps="h-24 w-80"
                        value={testData.urogen}
                        handleSetField={handleSetField}
                    />
                    <RecordingInput
                        label="Gastroinestinal"
                        placeholder=""
                        id="gastro"
                        textarea
                        required
                        inputProps="h-24 w-80"
                        value={testData.gastro}
                        handleSetField={handleSetField}
                    />
                    <RecordingInput
                        label="Additional Comments"
                        placeholder=""
                        id="addcomm"
                        textarea
                        required
                        inputProps="h-24 w-80"
                        value={testData.addcomm}
                        handleSetField={handleSetField}
                    />
                </div>
                <div className="relative gap-4">
                    <button
                        className="purple-button"
                        // this will need to be updated to send form data to pdf
                        onClick={handlePrint}
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

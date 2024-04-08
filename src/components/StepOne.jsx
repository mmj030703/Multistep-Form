/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { updateOptionSelected } from "../store/slices/multiStepForm";

function StepOne() {
    const dispatch = useDispatch();
    const [selectedOption, setSelectedOption] = useState(null);
    useEffect(() => {
        return () => {
            dispatch(updateOptionSelected(false));
        }
    }, []);

    const handleSelectOption = (option) => {
        setSelectedOption(option);
        dispatch(updateOptionSelected(true));
    };

    return (
        <div className="flex flex-col items-center">
            <div className="text-center">
                <h1 className="text-[1.3rem] xs:text-[1.5rem] sm:text-[1.9rem] text-slate-900 font-bold">Which describes you best?</h1>
                <p className="text-[15px] xs:text-[16.2px] mt-5 text-slate-700">This will help us personalize your experience.</p>
            </div>

            <div className="w-full sm:w-[600px] mt-10 flex flex-col gap-y-[10px]">
                <div
                    className={`hover:shadow-md hover:border-[1px] transition-all duration-200 hover:border-gray-400 flex items-center gap-x-3 mx-2 cursor-pointer rounded-[5px] border border-gray-100 p-4 ${selectedOption === 1 ? "border-[1px] border-gray-400 shadow-md animate-scale" : ""}`}
                    onClick={() => handleSelectOption(1)}
                >
                    <img src="https://images.unsplash.com/photo-1698993081947-8a3654303904?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Student Image" className="w-16 h-10 object-cover" />
                    <p className="text-[14px] xs:text-base">Student <span className="font-medium text-slate-600">or soon to be enrolled</span></p>
                </div>
                <div
                    className={`hover:shadow-md hover:border-[1px] transition-all duration-200 hover:border-gray-400 flex gap-x-3 mx-2 cursor-pointer rounded-[5px] border border-gray-100 p-4 ${selectedOption === 2 ? "border-[1px] border-gray-400 shadow-md animate-scale" : ""}`}
                    onClick={() => handleSelectOption(2)}
                >
                    <img src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Professional Image" className="w-16 h-10 object-cover" />
                    <p className="text-[14px] xs:text-base">Professional <span className="font-medium text-slate-600">pursuing a career</span></p>
                </div>
                <div
                    className={`hover:shadow-md hover:border-[1px] transition-all duration-200 hover:border-gray-400 flex gap-x-3 mx-2 cursor-pointer rounded-[5px] border border-gray-100 p-4 ${selectedOption === 3 ? "border-[1px] border-gray-400 shadow-md animate-scale" : ""}`}
                    onClick={() => handleSelectOption(3)}
                >
                    <img src="https://images.unsplash.com/photo-1476703993599-0035a21b17a9?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Parent Image" className="w-16 h-10 object-cover" />
                    <p className="text-[14px] xs:text-base">Parent <span className="font-medium text-slate-600">of a school-age child</span></p>
                </div>
                <div
                    className={`hover:shadow-md hover:border-[1px] transition-all duration-200 hover:border-gray-400 flex gap-x-3 mx-2 cursor-pointer rounded-[5px] border border-gray-100 p-4 ${selectedOption === 4 ? "border-[1px] border-gray-400 shadow-md animate-scale" : ""}`}
                    onClick={() => handleSelectOption(4)}
                >
                    <img src="https://plus.unsplash.com/premium_photo-1664372145482-8ae1e368ede4?q=80&w=1376&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Lifelong Learner Image" className="w-16 h-10 object-cover" />
                    <p className="text-[14px] xs:text-base">Lifelong learner</p>
                </div>
                <div
                    className={`hover:shadow-md hover:border-[1px] transition-all duration-200 hover:border-gray-400 flex gap-x-3 mx-2 cursor-pointer rounded-[5px] border border-gray-100 p-4 ${selectedOption === 5 ? "border-[1px] border-gray-400 shadow-md animate-scale" : ""}`}
                    onClick={() => handleSelectOption(5)}
                >
                    <img src="https://plus.unsplash.com/premium_photo-1682888442432-a1bc427c0d91?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Teacher Image" className="w-16 h-10 object-cover" />
                    <p className="text-[14px] xs:text-base">Teacher</p>
                </div>
                <div
                    className={`hover:shadow-md hover:border-[1px] transition-all duration-200 hover:border-gray-400 flex gap-x-3 mx-2 cursor-pointer rounded-[5px] border border-gray-100 p-4 ${selectedOption === 6 ? "border-[1px] border-gray-400 shadow-md animate-scale" : ""}`}
                    onClick={() => handleSelectOption(6)}
                >
                    <img src="https://images.unsplash.com/photo-1472289065668-ce650ac443d2?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Other Image" className="w-16 h-10 object-cover" />
                    <p className="text-[14px] xs:text-base">Other</p>
                </div>
            </div>
        </div>
    );
}

export default StepOne;
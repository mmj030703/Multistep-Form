/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { updateOptionSelected } from "../store/slices/multiStepForm";

function StepFour() {
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
        <div className="flex flex-col items-center mt-14">
            <div className="text-center">
                <h1 className="text-[1.5rem] sm:text-[1.9rem] text-slate-900 font-bold">What is your math comfort level?</h1>
                <p className="text-[15px] sm:text-[16px] mt-5">Choose the highest level you feel confident in &#8210; you can always adjust later.</p>
            </div>

            <div className="w-full mt-10 mb-14 flex flex-col items-center sm:flex-row flex-wrap justify-center gap-y-[20px]">
                <div
                    className={`w-fit py-5 flex-col gap-y-4 hover:shadow-md hover:border-[1px] transition-all duration-200 hover:border-red-400 flex items-center gap-x-3 mx-2 cursor-pointer rounded-[5px] border border-gray-200 p-4 ${selectedOption === 1 ? "border-[1px] border-red-400 shadow-md animate-scale" : ""}`}
                    onClick={() => handleSelectOption(1)}
                >
                    <img src="https://images.unsplash.com/photo-1698993081947-8a3654303904?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Student Image" className="w-40 h-24 object-cover" />
                    <div className="text-center">
                        <p className="text-[15px]">Arithmetic</p>
                        <p className="text-lg text-stone-500">Introductory</p>
                    </div>
                </div>
                <div
                    className={`w-fit py-5 flex-col gap-y-4 hover:shadow-md hover:border-[1px] transition-all duration-200 hover:border-red-400 flex items-center gap-x-3 mx-2 cursor-pointer rounded-[5px] border border-gray-200 p-4 ${selectedOption === 2 ? "border-[1px] border-red-400 shadow-md animate-scale" : ""}`}
                    onClick={() => handleSelectOption(2)}
                >
                    <img src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Professional Image" className="w-40 h-24 object-cover" />
                    <div className="text-center">
                        <p className="text-[15px]">Basic Algebra</p>
                        <p className="text-lg text-stone-500">Foundational</p>
                    </div>
                </div>
                <div
                    className={`w-fit py-5 flex-col gap-y-4 hover:shadow-md hover:border-[1px] transition-all duration-200 hover:border-red-400 flex items-center gap-x-3 mx-2 cursor-pointer rounded-[5px] border border-gray-200 p-4 ${selectedOption === 3 ? "border-[1px] border-red-400 shadow-md animate-scale" : ""}`}
                    onClick={() => handleSelectOption(3)}
                >
                    <img src="https://images.unsplash.com/photo-1476703993599-0035a21b17a9?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Parent Image" className="w-40 h-24 object-cover" />
                    <div className="text-center">
                        <p className="text-[15px]">Intermediate Algebra</p>
                        <p className="text-lg text-stone-500">Intermediate</p>
                    </div>
                </div>
                <div
                    className={`w-fit py-5 flex-col gap-y-4 hover:shadow-md hover:border-[1px] transition-all duration-200 hover:border-red-400 flex items-center gap-x-3 mx-2 cursor-pointer rounded-[5px] border border-gray-200 p-4 ${selectedOption === 4 ? "border-[1px] border-red-400 shadow-md animate-scale" : ""}`}
                    onClick={() => handleSelectOption(4)}
                >
                    <img src="https://plus.unsplash.com/premium_photo-1664372145482-8ae1e368ede4?q=80&w=1376&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Lifelong Learner Image" className="w-40 h-24 object-cover" />
                    <div className="text-center">
                        <p className="text-[15px]">Calculus</p>
                        <p className="text-lg text-stone-500">Advanced</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default StepFour;
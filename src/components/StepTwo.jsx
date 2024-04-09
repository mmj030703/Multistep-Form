/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateFormData, updateOptionSelected } from "../store/slices/multiStepForm";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

function StepTwo() {
    const dispatch = useDispatch();
    const selectedOptionValue = useSelector(state => state.multiStepForm.formData.stepTwo?.selectedOption);
    const [selectedOption, setSelectedOption] = useState(selectedOptionValue);

    useEffect(() => {
        dispatch(updateFormData({
            stepTwo: {
                selectedOption: selectedOption,
                data: stepTwoData[selectedOption - 1]
            }
        }));
    }, [selectedOption]);

    useEffect(() => {
        if (selectedOptionValue) {
            dispatch(updateOptionSelected(true));
        }

        return () => {
            dispatch(updateOptionSelected(false));
        }
    }, []);

    const stepTwoData = [
        {
            userInterest: "learning skills"
        },
        {
            userInterest: "exploring new topics"
        },
        {
            userInterest: "revising math foundations"
        },
        {
            userInterest: "exercising brain"
        },
        {
            userInterest: "something else"
        }
    ]

    const handleSelectOption = (option) => {
        setSelectedOption(option);
        dispatch(updateOptionSelected(true));
    };

    return (
        <div className="flex flex-col items-center">
            <div className="text-center">
                <h1 className="text-[1.3rem] xs:text-[1.5rem] sm:text-[1.9rem] text-slate-900 font-bold">Which are you most interested in?</h1>
                <p className="text-[15px] sm:text-[16.2px] mt-5 text-slate-700">Choose just one. This will help us get you started &#40;but won&apos;t limit your experience &#41;.</p>
            </div>

            <div className="w-full sm:w-[600px] mt-10 flex flex-col gap-y-[10px]">
                <div
                    className={`hover:shadow-md hover:border-[1px] transition-all duration-200 hover:border-gray-400 flex items-center gap-x-3 mx-2 cursor-pointer rounded-[5px] border border-gray-100 p-4 ${selectedOption === 1 ? "border-[1px] border-gray-400 shadow-md animate-scale" : ""}`}
                    onClick={() => handleSelectOption(1)}
                >
                    <LazyLoadImage src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Image" className="w-16 h-10 object-cover" effect="blur" />
                    <p className="text-[14.5px] xs:text-base">Learning specific skills to advance my career</p>
                </div>
                <div
                    className={`hover:shadow-md hover:border-[1px] transition-all duration-200 hover:border-gray-400 flex items-center gap-x-3 mx-2 cursor-pointer rounded-[5px] border border-gray-100 p-4 ${selectedOption === 2 ? "border-[1px] border-gray-400 shadow-md animate-scale" : ""}`}
                    onClick={() => handleSelectOption(2)}
                >
                    <LazyLoadImage src="https://images.unsplash.com/photo-1513258496099-48168024aec0?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Image" className="w-16 h-10 object-cover" effect="blur" />
                    <p className="text-[14.5px] xs:text-base">Exploring new topics I&apos;m interested in</p>
                </div>
                <div
                    className={`hover:shadow-md hover:border-[1px] transition-all duration-200 hover:border-gray-400 flex items-center gap-x-3 mx-2 cursor-pointer rounded-[5px] border border-gray-100 p-4 ${selectedOption === 3 ? "border-[1px] border-gray-400 shadow-md animate-scale" : ""}`}
                    onClick={() => handleSelectOption(3)}
                >
                    <LazyLoadImage src="https://images.unsplash.com/photo-1636466497217-26a8cbeaf0aa?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Image" className="w-16 h-10 object-cover" effect="blur" />
                    <p className="text-[14.5px] xs:text-base">Refreshing my math foundations</p>
                </div>
                <div
                    className={`hover:shadow-md hover:border-[1px] transition-all duration-200 hover:border-gray-400 flex items-center gap-x-3 mx-2 cursor-pointer rounded-[5px] border border-gray-100 p-4 ${selectedOption === 4 ? "border-[1px] border-gray-400 shadow-md animate-scale" : ""}`}
                    onClick={() => handleSelectOption(4)}
                >
                    <LazyLoadImage src="https://images.unsplash.com/photo-1530973428-5bf2db2e4d71?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Image" className="w-16 h-10 object-cover" effect="blur" />
                    <p className="text-[14.5px] xs:text-base">Exercising my brain to stay sharp</p>
                </div>
                <div
                    className={`hover:shadow-md hover:border-[1px] transition-all duration-200 hover:border-gray-400 flex items-center gap-x-3 mx-2 cursor-pointer rounded-[5px] border border-gray-100 p-4 ${selectedOption === 5 ? "border-[1px] border-gray-400 shadow-md animate-scale" : ""}`}
                    onClick={() => handleSelectOption(5)}
                >
                    <LazyLoadImage src="https://images.unsplash.com/photo-1472289065668-ce650ac443d2?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Image" className="w-16 h-10 object-cover" effect="blur" />
                    <p className="text-[14.5px] xs:text-base">Something else</p>
                </div>
            </div>
        </div>
    );
}

export default StepTwo;
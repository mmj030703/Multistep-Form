/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState } from "react";
import Button from "./Button";
import LearningPathRecommendations from "./LearningPathRecommendations";
import ProgressBar from "./ProgressBar";
import Loader from "./Loader";

function MultistepForm({ steps, formBody: FormBody }) {
    const [formCurrentStep, setFormCurrentStep] = useState(1);
    const [showLearningPathRecommendations, setShowLearningPathRecommendations] = useState(false);
    const [showLoading, setShowLoading] = useState(false);

    const handleClick = async (button) => {
        if (formCurrentStep !== steps && button === 'continue') {
            setFormCurrentStep((prevState) => prevState + 1);
        }
        else if (formCurrentStep !== 1 && button === 'previous') {
            setFormCurrentStep((prevState) => prevState - 1);
        }

        if (button === 'submit') {
            setShowLoading(true);
            await handleSubmit();
        }
    };

    const handleSubmit = async () => {
        const response = await fetch('https://api.restful-api.dev/objects');
        const data = await response.json();
        setShowLoading(false);
        setShowLearningPathRecommendations(true);
    }

    if (showLoading) return <Loader />
    if (showLearningPathRecommendations) return <LearningPathRecommendations />

    return (
        <div className="flex justify-center mt-[3.5rem] mb-5 px-4 sm:px-10">
            <div className="flex flex-col items-center w-[1050px]">
                <ProgressBar steps={steps} formCurrentStep={formCurrentStep} handleClick={handleClick} />
                <FormBody formCurrentStep={formCurrentStep} />
                <Button buttonText="Continue" onClick={() => handleClick(formCurrentStep !== steps ? 'continue' : 'submit')} />
            </div>
        </div>
    )
}

export default MultistepForm;
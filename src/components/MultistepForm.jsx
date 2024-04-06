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
        console.log('clicked');

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
        <div className="flex justify-center mt-[3rem]">
            <div className="flex flex-col items-center w-[1100px]">
                <ProgressBar steps={steps} formCurrentStep={formCurrentStep} />
                <FormBody formCurrentStep={formCurrentStep} />
                <div className="w-full px-20 flex justify-between">
                    <Button buttonText="Previous" onClick={() => handleClick('previous')} />
                    <Button buttonText="Continue" onClick={() => handleClick(formCurrentStep !== steps ? 'continue' : 'submit')} />
                </div>
            </div>
        </div>
    )
}

export default MultistepForm;
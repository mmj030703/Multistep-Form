/* eslint-disable react/prop-types */
import StepOne from './StepOne';
import StepTwo from './StepTwo';
import StepThree from './StepThree';
import StepFour from './StepFour';
import StepFive from './StepFive';

function FormBody({ formCurrentStep = 1 }) {
    switch (formCurrentStep) {
        case 1:
            return (
                <div className="w-full my-10">
                    <StepOne />
                </div>
            );

        case 2:
            return (
                <div className="my-10">
                    <StepTwo />
                </div>
            );

        case 3:
            return (
                <div className="my-10">
                    <StepThree />
                </div>
            );

        case 4:
            return (
                <div className="my-10">
                    <StepFour />
                </div>
            );

        case 5:
            return (
                <div className="my-10">
                    <StepFive />
                </div>
            );

        default:
            break;
    }
}

export default FormBody;
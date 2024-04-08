/* eslint-disable react/prop-types */
import StepOne from './StepOne';
import StepTwo from './StepTwo';
import StepThree from './StepThree';
import StepFour from './StepFour';
import StepFive from './StepFive';

function FormBody({ formCurrentStep = 1 }) {
    let children = null;

    switch (formCurrentStep) {
        case 1:
            children = <StepOne />
            break;

        case 2:
            children = <StepTwo />
            break;
            
        case 3:
            children = <StepThree />
            break;
            

        case 4:
            children = <StepFour />
            break;
            

        case 5:
            children = <StepFive />
            break;
            

        default:
            break;
    }

    return (
        <div className='w-full mt-6'>
            {children}
        </div>
    )
}

export default FormBody;
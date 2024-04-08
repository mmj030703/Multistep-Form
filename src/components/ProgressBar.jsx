/* eslint-disable react/prop-types */

import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

/* eslint-disable no-unused-vars */
function ProgressBar({ steps, formCurrentStep, handleClick }) {
    const progressPercentage = (100 / steps) * formCurrentStep;

    return (
        <div className="w-full flex items-center gap-x-3">
            <FontAwesomeIcon onClick={() => handleClick('previous')} icon={faAngleLeft} className={`${formCurrentStep === 1 ? 'hidden' : 'block'} cursor-pointer text-lg`} />
            <div className="w-full bg-black/20 h-[3.5px] rounded-lg">
                <div className={`h-[3.5px] bg-teal-600 rounded-s-lg`} style={{ width: `${progressPercentage}%` }}></div>
            </div>
        </div>
    )
}

export default ProgressBar;
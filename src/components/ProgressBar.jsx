/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
function ProgressBar({ steps, formCurrentStep }) {
    const progressPercentage = (100 / steps) * formCurrentStep;

    return (
        <div className="w-full bg-black/20 h-[3px] rounded-lg">
            <div className={`h-[3px] bg-teal-600 rounded-s-lg`} style={{ width: `${progressPercentage}%` }}></div>
        </div>
    )
}

export default ProgressBar;
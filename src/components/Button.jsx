/* eslint-disable react/prop-types */
import { useSelector } from "react-redux";

function Button({ onClick, buttonText = '' }) {
    const optionSelected = useSelector((state) => state.multiStepForm.optionSelected);

    return (
        <div>
            <button
                onClick={onClick}
                className={`${!optionSelected ? 'opacity-20 pointer-events-none' : ''} mt-3 rounded-md bg-black text-white px-[1.8rem] py-[5px] xs:px-[2.5rem] xs:py-[8px] xs:text-[17px] sm:px-[3.1rem] sm:py-[11px] sm:text-[19px] font-medium hover:bg-black/90 transition-all duration-100`}
            >
                {buttonText}
            </button>
        </div>
    );
}

export default Button;
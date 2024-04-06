import { useState } from "react";

function StepFour() {
    const [selectedOption, setSelectedOption] = useState(null);

    const handleSelectOption = (option) => {
        setSelectedOption(option);
    };

    return (
        <div className="flex flex-col">
            <div
                className={`m-2 cursor-pointer rounded-md border border-gray-300 p-4 ${selectedOption === 1 ? "bg-gray-200" : ""}`}
                onClick={() => handleSelectOption(1)}
            >
                Option 1
            </div>
            <div
                className={`m-2 cursor-pointer rounded-md border border-gray-300 p-4 ${selectedOption === 2 ? "bg-gray-200" : ""}`}
                onClick={() => handleSelectOption(2)}
            >
                Option 2
            </div>
            <div
                className={`m-2 cursor-pointer rounded-md border border-gray-300 p-4 ${selectedOption === 3 ? "bg-gray-200" : ""}`}
                onClick={() => handleSelectOption(3)}
            >
                Option 3
            </div>
            <div
                className={`m-2 cursor-pointer rounded-md border border-gray-300 p-4 ${selectedOption === 4 ? "bg-gray-200" : ""}`}
                onClick={() => handleSelectOption(4)}
            >
                Option 4
            </div>
        </div>
    );
}

export default StepFour;
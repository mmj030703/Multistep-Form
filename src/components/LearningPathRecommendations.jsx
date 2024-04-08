import { useState } from "react";

function LearningPathRecommendations() {
  const [selectedOption, setSelectedOption] = useState(null);
  const handleSelectOption = (option) => {
    setSelectedOption(option);
  };

  return (
    <div className="mx-auto px-5 flex flex-col justify-center items-center mt-36">
      <div className="text-center">
        <h1 className="text-[1.4rem] xs:text-[1.7rem] sm:text-[2rem] md:text-[2.5rem] text-slate-900 font-bold">Learning paths based on your answers</h1>
        <p className="text-[15px] xs:text-[16px] sm:text-[16.5px] mt-5 text-slate-700">Choose one to get started. You can switch anytime.</p>
      </div>

      <div className="lg:w-[1000px] mt-14 mb-14 flex flex-col md:flex-row justify-center gap-y-[10px]">
        <div className={`relative pt-8 pb-6 hover:shadow-md hover:border-[1px] transition-all duration-200 hover:border-gray-400 flex gap-y-5 flex-col xs:min-[460px]:flex-row items-center gap-x-3 mx-2 cursor-pointer rounded-[5px] border border-gray-200 p-4 ${selectedOption === 1 ? "border-[1px] border-gray-400 shadow-md animate-scale" : ""}`}
          onClick={() => handleSelectOption(1)}
        >
          <p className="w-[200px] font-bold text-[16.3px]">Foundational Math <span className="font-normal">Build your foundational skills in algebra, geometry, and probability.</span></p>
          <img src="https://images.unsplash.com/photo-1698993081947-8a3654303904?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Student Image" className="w-36 h-24 object-cover" />
          <p className="absolute -top-3 left-[60px] xs:min-[460px]:left-[135px] bg-amber-300 text-[13px] font-medium py-[3px] px-4 rounded-2xl">Most Popular</p>
        </div>
        <div className={`relative pt-8 pb-6 hover:shadow-md hover:border-[1px] transition-all duration-200 hover:border-gray-400 flex gap-y-5 flex-col xs:min-[460px]:flex-row items-center  gap-x-3 mx-2 cursor-pointer rounded-[5px] border border-gray-200 p-4 ${selectedOption === 2 ? "border-[1px] border-gray-400 shadow-md animate-scale" : ""}`}
          onClick={() => handleSelectOption(2)}
        >
          <p className="w-[200px] font-bold text-[16.3px]">Mathematical Thinking <span className="font-normal">Build your foundational skills in algebra, geometry, and probability.</span></p>
          <img src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Professional Image" className="w-36 h-24 object-cover" />
        </div>
      </div>
    </div>
  )
}

export default LearningPathRecommendations;
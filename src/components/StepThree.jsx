/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { updateOptionSelected } from "../store/slices/multiStepForm";

function StepThree() {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(updateOptionSelected(true));

        return () => {
            dispatch(updateOptionSelected(false));
        };
    }, []);

    return (
        <div className="mt-10 mb-[2rem] grid md:grid-cols-2 auto-cols-fr gap-y-10 md:gap-x-10">
            <img src="https://images.unsplash.com/photo-1512314889357-e157c22f938d?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Other Image" className="my-auto object-cover" />
            <div className="my-auto">
                <h1 className="text-[1.5rem] xs:text-[1.9rem] text-slate-900 font-bold">You&apos;re in the right place</h1>
                <p className="text-[14px] xs:text-[16.2px] mt-5 text-slate-700">Brilliant gets you hands-on to help improve your professional skills and knowledge. You&apos;ll interact with concepts and solve fun problems in math, science, and computer science.</p>
            </div>

        </div>
    );
}

export default StepThree;
/* eslint-disable react-hooks/exhaustive-deps */
import { faStar } from "@fortawesome/free-solid-svg-icons/faStar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { updateOptionSelected } from "../store/slices/multiStepForm";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

function StepFive() {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(updateOptionSelected(true));

        return () => {
            dispatch(updateOptionSelected(false));
        };
    }, []);

    return (
        <div className="mt-10 mb-[2rem] sm:mb-[4.2rem] grid md:grid-cols-2 auto-cols-fr gap-y-10 md:gap-x-10">
            <LazyLoadImage src="https://images.unsplash.com/photo-1448387473223-5c37445527e7?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Image" className="my-auto object-cover rounded-md shadow-xl" effect="blur" />
            <div className="my-auto">
                <h1 className="text-[1.5rem] xs:text-[1.9rem] text-slate-900 font-bold">You&apos;re on your way!</h1>
                <div className="mt-9">
                    <FontAwesomeIcon icon={faStar} className="text-yellow-500 text-2xl sm:text-3xl" />
                    <FontAwesomeIcon icon={faStar} className="text-yellow-500 text-2xl sm:text-3xl" />
                    <FontAwesomeIcon icon={faStar} className="text-yellow-500 text-2xl sm:text-3xl" />
                    <FontAwesomeIcon icon={faStar} className="text-yellow-500 text-2xl sm:text-3xl" />
                    <FontAwesomeIcon icon={faStar} className="text-yellow-500 text-2xl sm:text-3xl" />
                </div>
                <p className="text-[14px] xs:text-[16.3px] mt-5 italic">&quot;Through its engaging and well-structured courses, Brilliant has taught me mathematical concepts that I previously struggled to understand. I now feel confident approaching both technical job interviews and real world problem solving situations.&quot;</p>
                <p className="mt-6 italic text-[14px] xs:text-[16.3px]">- Jacob S.</p>
            </div>

        </div>
    );
}

export default StepFive;
function Loader() {
    return (
        <div className="px-5 flex flex-col gap-y-6 justify-center items-center h-screen">
            <button
                type="button"
                className="block rounded-full h-14 w-14 xs:h-16 xs:w-16 sm:h-20 sm:w-20 md:h-24 md:w-24 border-[12px] border-black/20 border-t-yellow-500 animate-spin"
                disabled
            >
            </button>
            <p className="max-w-[750px] text-center text-gray-800 font-bold text-[14px] xs:text-[16px] xs:min-[460px]:text-[20px] sm:text-[26px]">Finding learning path recommendations for you based on your responses</p>
        </div>
    );
}

export default Loader;
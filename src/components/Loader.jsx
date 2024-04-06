function Loader() {
    return (
        <div className="flex justify-center items-center h-screen">
            <button
                type="button"
                className="block rounded-full h-20 w-20 border-8 border-black/20 border-t-green-600 animate-spin"
                disabled
            >
            </button>
        </div>
    );
}

export default Loader;
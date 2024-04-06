/* eslint-disable react/prop-types */
function Button({ onClick, buttonText = '' }) {

    return (
        <div>
            <button
                onClick={onClick}
                className="rounded-lg bg-green-400 px-6 py-2 text-lg font-bold hover:bg-green-600"
            >
                {buttonText}
            </button>
        </div>
    );
}

export default Button;
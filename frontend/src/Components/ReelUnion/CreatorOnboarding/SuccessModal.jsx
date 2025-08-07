const SuccessModal = ({ onClose }) => {
    return (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
            <div className="bg-white rounded-xl shadow-xl p-8 max-w-md w-full text-center">
                <h2 className="text-2xl font-bold mb-4">Thank you!</h2>
                <p className="text-gray-700 mb-6">
                    Your application has been received. We’ll be in touch soon.
                </p>
                <button
                    onClick={onClose}
                    className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                >
                    Close
                </button>
            </div>
        </div>
    );
};

export default SuccessModal;

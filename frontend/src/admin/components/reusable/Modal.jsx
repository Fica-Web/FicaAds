import React, { useEffect, useRef } from "react";

const Modal = ({ isOpen, onClose, children }) => {
    const modalRef = useRef(null);

    // Close modal on 'Escape' key press
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === "Escape") onClose();
        };
        if (isOpen) {
            document.addEventListener("keydown", handleKeyDown);
        }
        return () => {
            document.removeEventListener("keydown", handleKeyDown);
        };
    }, [isOpen, onClose]);

    // Close modal when clicking outside of it
    const handleBackdropClick = (e) => {
        if (modalRef.current && !modalRef.current.contains(e.target)) {
            onClose();
        }
    };

    if (!isOpen) return null;

    return (
        <div
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 transition-opacity duration-300"
            onClick={handleBackdropClick}
        >
            <div
                ref={modalRef}
                className="bg-white rounded-lg p-6 w-full max-w-lg relative shadow-lg max-h-[90vh] overflow-y-auto transition-transform transform scale-95 animate-fadeIn"
            >
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-8 right-8 text-lightgray hover:text-black text-2xl z-10"
                >
                    &times;
                </button>

                {children}
            </div>
        </div>
    );
};

export default Modal;
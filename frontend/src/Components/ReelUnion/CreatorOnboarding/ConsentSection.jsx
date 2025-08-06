const ConsentSection = ({ formData, handleChange }) => {
    return (
        <section className="pb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">6. Consent</h2>
            <label className="inline-flex items-start text-sm text-gray-700">
                <input
                    type="checkbox"
                    name="consent"
                    checked={formData.consent}
                    onChange={handleChange}
                    required
                    className="form-checkbox h-4 w-4 text-blue-600 mt-1"
                />
                <span className="ml-2">
                    I consent to The Reel Union using my submitted information for internal matching,
                    project assignment, and community building purposes. I understand that my
                    data will be handled confidentially.
                </span>
            </label>
        </section>
    );
};

export default ConsentSection;
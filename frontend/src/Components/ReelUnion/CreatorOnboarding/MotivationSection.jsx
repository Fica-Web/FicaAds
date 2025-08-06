const MotivationSection = ({ formData, handleChange }) => {
    return (
        <section className="border-b border-gray-200 pb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">5. Motivation</h2>
            <div className="space-y-6">
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Why do you want to join The Reel Union?</label>
                    <textarea
                        name="motivation"
                        required
                        value={formData.motivation}
                        onChange={handleChange}
                        placeholder="Tell us what drives you!"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        rows="4"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Anything else you’d like us to know?</label>
                    <textarea
                        name="anythingElse"
                        value={formData.anythingElse}
                        onChange={handleChange}
                        placeholder="Optional"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        rows="3"
                    />
                </div>
            </div>
        </section>
    );
};

export default MotivationSection;

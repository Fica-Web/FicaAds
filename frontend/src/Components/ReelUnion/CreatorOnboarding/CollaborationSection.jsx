const CollaborationSection = ({ formData, handleChange }) => {
    return (
        <section className="border-b border-gray-200 pb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">4. Collaboration Preferences</h2>
            <div className="space-y-6">
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Preferred Collaboration Mode</label>
                    <select
                        name="collaborationMode"
                        required
                        value={formData.collaborationMode}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                        <option value="">Select an option</option>
                        <option>Solo Projects</option>
                        <option>Collaborations with Other Creators</option>
                        <option>Both</option>
                    </select>
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Mode of Work</label>
                    <div className="flex flex-wrap gap-4">
                        {['Remote', 'On-site (Dubai)', 'Hybrid'].map((mode) => (
                            <label key={mode} className="inline-flex items-center">
                                <input
                                    type="checkbox"
                                    name="workMode"
                                    value={mode}
                                    checked={formData.workMode.includes(mode)}
                                    onChange={handleChange}
                                    className="form-checkbox h-4 w-4 text-blue-600"
                                />
                                <span className="ml-2 text-sm">{mode}</span>
                            </label>
                        ))}
                    </div>
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Availability</label>
                    <input
                        type="text"
                        name="availability"
                        required
                        value={formData.availability}
                        onChange={handleChange}
                        placeholder="Weekdays, Weekends, Part-time etc."
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
            </div>
        </section>
    );
};

export default CollaborationSection;

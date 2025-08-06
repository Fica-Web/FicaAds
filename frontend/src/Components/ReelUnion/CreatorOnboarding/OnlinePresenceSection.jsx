const OnlinePresenceSection = ({ formData, handleChange }) => {
    return (
        <section className="border-b border-gray-200 pb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">2. Online Presence</h2>
            <div className="space-y-6">
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Instagram Handle</label>
                    <input
                        type="text"
                        name="instagramHandle"
                        required
                        value={formData.instagramHandle}
                        onChange={handleChange}
                        placeholder="@yourhandle"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Other Profiles (optional)</label>
                    <textarea
                        name="otherProfiles"
                        value={formData.otherProfiles}
                        onChange={handleChange}
                        placeholder="TikTok, Snapchat, etc."
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        rows="3"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Portfolio / Work Samples</label>
                    <input
                        type="text"
                        name="portfolio"
                        required
                        value={formData.portfolio}
                        onChange={handleChange}
                        placeholder="Google Drive or Website URL"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
            </div>
        </section>
    );
};

export default OnlinePresenceSection;

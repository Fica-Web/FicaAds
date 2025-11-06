import { LuLink2 } from 'react-icons/lu';
import { FormHeading } from "../reusable/FormHeading";

const OnlinePresenceSection = ({ formData, handleChange, errors }) => {
    return (
        <section className="border border-neutral-200 rounded-3xl lg:p-8 p-5 text-sm bg-white">
            <FormHeading 
                icon={LuLink2}
                heading='Social Media & Portfolio'
            />
            <div className="space-y-6">

                {/* Instagram Handle */}
                <div>
                    <label className="block text-sm font-medium text-gray1 mb-1">
                        Instagram Handle
                    </label>
                    <input
                        type="text"
                        name="instagramHandle"
                        value={formData.instagramHandle}
                        onChange={handleChange}
                        placeholder="@yourhandle"
                        className={`w-full px-4 py-2 border border-neutral-300 placeholder:text-sm text-neutral-700 bg-neutral-50 rounded-lg focus:outline-none focus:ring-2${
                            errors.instagramHandle ? 'border-red-500 focus:ring-red-500' : 'border-gray4 focus:ring-blue-500'
                        }`}
                    />
                    {errors.instagramHandle && (
                        <p className="text-sm text-red-500 mt-1">{errors.instagramHandle}</p>
                    )}
                </div>

                {/* Other Profiles */}
                <div>
                    <label className="block text-sm font-medium text-gray1 mb-1">
                        Other Profiles (optional)
                    </label>
                    <textarea
                        name="otherProfiles"
                        value={formData.otherProfiles}
                        onChange={handleChange}
                        placeholder="TikTok, Snapchat, etc."
                        className="w-full px-4 py-2 border border-neutral-300 placeholder:text-sm text-neutral-700 bg-neutral-50 rounded-lg focus:outline-none focus:ring-2"
                        rows="3"
                    />
                </div>

                {/* Portfolio */}
                <div>
                    <label className="block text-sm font-medium text-gray1 mb-1">
                        Portfolio / Work Samples
                    </label>
                    <input
                        type="text"
                        name="portfolio"
                        value={formData.portfolio}
                        onChange={handleChange}
                        placeholder="https://yourportfolio.com"
                        className={`w-full px-4 py-2 border border-neutral-300 placeholder:text-sm text-neutral-700 bg-neutral-50 rounded-lg focus:outline-none focus:ring-2 ${
                            errors.portfolio ? 'border-red-500 focus:ring-red-500' : 'border-gray4 focus:ring-blue-500'
                        }`}
                    />
                    {errors.portfolio && (
                        <p className="text-sm text-red-500 mt-1">{errors.portfolio}</p>
                    )}
                </div>
            </div>
        </section>
    );
};

export default OnlinePresenceSection;
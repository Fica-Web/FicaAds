import { LuClock } from 'react-icons/lu';
import { FormHeading } from "../reusable/FormHeading";

const CollaborationSection = ({ formData, handleChange, errors }) => {
    return (
        <section className="border border-neutral-200 rounded-3xl lg:p-8 p-5 text-sm bg-white">
            <FormHeading 
                icon={LuClock}
                heading='Availability & Work Preferences'
            />
            <div className="space-y-6">
                {/* Collaboration Mode */}
                <div>
                    <label className="block text-sm font-medium text-gray1 mb-1">
                        Preferred Collaboration Mode
                    </label>
                    <select
                        name="collaborationMode"
                        value={formData.collaborationMode}
                        onChange={handleChange}
                        className={`w-full px-4 py-2 border border-neutral-300 placeholder:text-sm text-neutral-700 bg-neutral-50 rounded-lg focus:outline-none focus:ring-2 
                            ${errors.collaborationMode ? 'border-red-500' : 'border-gray4'}`}
                    >
                        <option value="">Select an option</option>
                        <option>Solo Projects</option>
                        <option>Collaborations with Other Creators</option>
                        <option>Both</option>
                    </select>
                    {errors.collaborationMode && (
                        <p className="text-red-500 text-sm mt-1">{errors.collaborationMode}</p>
                    )}
                </div>

                {/* Mode of Work */}
                <div>
                    <label className="block text-sm font-medium text-gray1 mb-2">Mode of Work</label>
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
                                <span className="ml-2 text-sm text-gray1">{mode}</span>
                            </label>
                        ))}
                    </div>
                    {errors.workMode && (
                        <p className="text-red-500 text-sm mt-1">{errors.workMode}</p>
                    )}
                </div>

                {/* Availability */}
                <div>
                    <label className="block text-sm font-medium text-gray1 mb-1">Availability</label>
                    <input
                        type="text"
                        name="availability"
                        value={formData.availability}
                        onChange={handleChange}
                        placeholder="Weekdays, Weekends, Part-time etc."
                        className={`w-full px-4 py-2 border border-neutral-300 placeholder:text-sm text-neutral-700 bg-neutral-50 rounded-lg focus:outline-none focus:ring-2 
                            ${errors.availability ? 'border-red-500' : 'border-gray4'}`}
                    />
                    {errors.availability && (
                        <p className="text-red-500 text-sm mt-1">{errors.availability}</p>
                    )}
                </div>
            </div>
        </section>
    );
};

export default CollaborationSection;
const skillOptions = [
    "Script Writing", "Video Editing", "Photography / Cinematography", "On-Camera Talent / Acting",
    "Voice-over", "Reels / Shortform Content", "Graphic Design / Illustration", "Motion Graphics / Animation",
    "Copywriting", "Content Strategy", "Production Assistance", "AI Video Tools", "BTS & Vlogging"
];

const SkillsSection = ({ formData, handleChange, errors }) => {
    return (
        <section className="border-b border-gray pb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">3. Skills & Experience</h2>
            <div className="space-y-6">

                {/* Skills Checkbox List */}
                <div>
                    <label className="block text-sm font-medium text-gray1 mb-2">What are your current skills?</label>
                    <div className="flex flex-wrap gap-4">
                        {skillOptions.map((skill) => (
                            <label key={skill} className="inline-flex items-center">
                                <input
                                    type="checkbox"
                                    name="skills"
                                    value={skill}
                                    checked={formData.skills.includes(skill)}
                                    onChange={handleChange}
                                    className="form-checkbox h-4 w-4 text-blue-600"
                                />
                                <span className="ml-2 text-sm text-gray1">{skill}</span>
                            </label>
                        ))}
                    </div>
                    {errors.skills && (
                        <p className="text-sm text-red-500 mt-1">{errors.skills}</p>
                    )}
                </div>

                {/* Other Skills */}
                <div>
                    <label className="block text-sm font-medium text-gray1 mb-1">Other Skills (if any)</label>
                    <input
                        type="text"
                        name="otherSkills"
                        value={formData.otherSkills}
                        onChange={handleChange}
                        placeholder="List any other relevant skills"
                        className="w-full px-4 py-2 border border-gray4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    {errors.otherSkills && (
                        <p className="text-sm text-red-500 mt-1">{errors.otherSkills}</p>
                    )}
                </div>

            </div>
        </section>
    );
};

export default SkillsSection;
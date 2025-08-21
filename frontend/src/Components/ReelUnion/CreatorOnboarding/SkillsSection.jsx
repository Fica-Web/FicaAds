import { LuBriefcase } from 'react-icons/lu';
import { FormHeading } from "../reusable/FormHeading";

const skillOptions = [
    "Script Writing", "Video Editing", "Photography", "On-Camera Talent",
    "Voice-over", "Reels ", "Graphic Design ", "Motion Graphics ",
    "Copywriting", "Content Strategy", "AI Video Tools", "BTS & Vlogging", "Production Assistance",
];

const SkillsSection = ({ formData, handleChange, errors }) => {
    return (
        <section className="border border-neutral-200 rounded-3xl lg:p-8 p-5 text-sm bg-white">
            <FormHeading 
                icon={LuBriefcase}
                heading='Skills & Experience'
            />
            <div className="space-y-6">

                {/* Skills Checkbox List */}
                <div>
                    <label className="block text-sm font-medium text-gray1 mb-2">Skills (Select all that apply) *</label>
                    <div className="grid lg:grid-cols-3 grid-cols-2 lg:gap-3 gap-2">
                        {skillOptions.map((skill) => (
                            <label key={skill} className="inline-flex items-center">
                                <input
                                    type="checkbox"
                                    name="skills"
                                    value={skill}
                                    checked={formData.skills.includes(skill)}
                                    onChange={handleChange}
                                    className="form-checkbox h-3 w-3 text-blue-600 cursor-pointer"
                                />
                                <span className="ml-2 text-sm text-neutral-700">{skill}</span>
                            </label>
                        ))}
                    </div>
                    {errors.skills && (
                        <p className="text-sm text-red-500 mt-1">{errors.skills}</p>
                    )}
                </div>

                {/* Other Skills */}
                <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-1">Other Skills (if any)</label>
                    <input
                        type="text"
                        name="otherSkills"
                        value={formData.otherSkills}
                        onChange={handleChange}
                        placeholder="List any other relevant skills"
                        className="w-full px-4 py-2 border border-neutral-300 placeholder:text-sm text-neutral-700 bg-neutral-50 rounded-lg focus:outline-none focus:ring-2"
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
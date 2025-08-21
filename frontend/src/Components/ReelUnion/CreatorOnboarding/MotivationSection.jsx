import { LuHeart } from 'react-icons/lu';
import { FormHeading } from "../reusable/FormHeading";

const MotivationSection = ({ formData, handleChange, errors }) => {
    return (
        <section className="border border-neutral-200 rounded-3xl lg:p-8 p-5 text-sm bg-white">
            <FormHeading 
                icon={LuHeart}
                heading='Tell Us About Yourself'
            />
            <div className="space-y-6">
                {/* Motivation */}
                <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-1">
                        Why do you want to join The Reel Union? *
                    </label>
                    <textarea
                        name="motivation"
                        value={formData.motivation}
                        onChange={handleChange}
                        placeholder="Tell us what drives you!"
                        className={`w-full px-4 py-2 border border-neutral-300 placeholder:text-sm text-neutral-700 bg-neutral-50 rounded-lg focus:outline-none focus:ring-2 
                            ${errors.motivation ? 'border-red-500' : 'border-neutral-300'}`}
                        rows="4"
                    />
                    {errors.motivation && (
                        <p className="text-red-500 text-sm mt-1">{errors.motivation}</p>
                    )}
                </div>

                {/* Anything Else */}
                <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-1">
                        Anything else you’d like us to know?
                    </label>
                    <textarea
                        name="anythingElse"
                        value={formData.anythingElse}
                        onChange={handleChange}
                        placeholder="Optional"
                        className={`w-full px-4 py-2 border border-neutral-300 placeholder:text-sm text-neutral-700 bg-neutral-50 rounded-lg focus:outline-none focus:ring-2 
                            ${errors.anythingElse ? 'border-red-500' : 'border-neutral-300'}`}
                        rows="3"
                    />
                    {errors.anythingElse && (
                        <p className="text-red-500 text-sm mt-1">{errors.anythingElse}</p>
                    )}
                </div>
            </div>
        </section>
    );
};

export default MotivationSection;

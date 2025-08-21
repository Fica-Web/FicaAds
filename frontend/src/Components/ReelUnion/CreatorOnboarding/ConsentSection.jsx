import { FiCheckCircle } from "react-icons/fi";
import { FormHeading } from "../reusable/FormHeading";

const ConsentSection = ({ formData, handleChange, errors }) => {
    return (
        <section className="border border-neutral-200 rounded-3xl lg:p-8 p-5 text-sm bg-white">
            <FormHeading 
                icon={FiCheckCircle}
                heading='Consent & Agreement'
            />
            <div>
                <label className="inline-flex items-start text-sm text-gray-700">
                    <input
                        type="checkbox"
                        name="consent"
                        checked={formData.consent}
                        onChange={handleChange}
                        className={`form-checkbox h-4 w-4 text-blue-600 mt-1 ${
                            errors.consent ? 'border-red-500' : ''
                        }`}
                    />
                    <span className="ml-2">
                        I consent to The Reel Union using my submitted information for internal matching,
                        project assignment, and community building purposes. I understand that my
                        data will be handled confidentially.
                    </span>
                </label>
                {errors.consent && (
                    <p className="text-red-500 text-sm mt-2">{errors.consent}</p>
                )}
            </div>
        </section>
    );
};

export default ConsentSection;
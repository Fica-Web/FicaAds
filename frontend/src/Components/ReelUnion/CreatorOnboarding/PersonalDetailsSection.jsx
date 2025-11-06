import { LuUser } from 'react-icons/lu';
import { FormHeading } from "../reusable/FormHeading";

const PersonalDetailsSection = ({ formData, handleChange, errors }) => {
    return (
        <section className="border border-neutral-200 rounded-3xl lg:p-8 p-5 text-sm bg-white">
            <FormHeading 
                icon={LuUser}
                heading='Personal Information'
            />

            <div className="space-y-6">
                {[
                    { label: 'Full Name', name: 'fullName', type: 'text', placeholder: 'Enter your full name' },
                    { label: 'Date of Birth', name: 'dob', type: 'date', placeholder: '' },
                    { label: 'Phone Number', name: 'phoneNumber', type: 'text', placeholder: 'Enter your phone number' },
                    { label: 'Email Address', name: 'email', type: 'email', placeholder: 'your@gmail.com' },
                ].map((field, i) => (
                    <div key={i}>
                        <label className="block text-xs font-medium text-neutral-700 mb-1">
                            {field.label} *
                        </label>
                        <input
                            type={field.type}
                            name={field.name}
                            value={formData[field.name]}
                            placeholder={field.placeholder}
                            onChange={handleChange}
                            className={`w-full px-4 py-2 border border-neutral-300 placeholder:text-sm text-neutral-700 bg-neutral-50 rounded-lg focus:outline-none focus:ring-2 ${errors?.location
                                    ? 'border-red-500 focus:ring-red-400'
                                    : 'border-gray4 focus:ring-blue-500'
                                }`}
                        />
                        {errors?.[field.name] && (
                            <p className="text-red-600 text-sm mt-1">{errors[field.name]}</p>
                        )}
                    </div>
                ))}
                <div>
                    <label className="block text-xs font-medium text-neutral-700 mb-1">Location *</label>
                    <select
                        name="location"
                        value={formData.location}
                        onChange={handleChange}
                        className={`w-full px-4 py-2 text-neutral-700 bg-neutral-50 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 ${errors?.location
                                ? 'border-red-600 focus:ring-red-400'
                                : 'border-gray4 focus:ring-blue-500'
                            }`}

                    >
                        <option value="">Select a location</option>
                        <option>Dubai</option>
                        <option>Sharjah</option>
                        <option>Calicut</option>
                        <option>Other</option>
                    </select>
                    {errors?.location && (
                        <p className="text-red-600 text-sm mt-1">{errors.location}</p>
                    )}
                </div>
            </div>
        </section>
    );
};

export default PersonalDetailsSection;

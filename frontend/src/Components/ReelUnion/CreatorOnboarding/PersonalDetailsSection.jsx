const PersonalDetailsSection = ({ formData, handleChange, errors }) => {
    console.log('PersonalDetailsSection', formData, errors);
    return (
        <section className="border-b border-gray pb-8">
            <h2 className="text-2xl font-bold text-gray1 mb-4">1. Personal Details</h2>
            <div className="space-y-6">
                {[
                    { label: 'Full Name', name: 'fullName', type: 'text' },
                    { label: 'Date of Birth', name: 'dob', type: 'date' },
                    { label: 'Phone Number', name: 'phoneNumber', type: 'text' },
                    { label: 'Email Address', name: 'email', type: 'email' },
                ].map((field, i) => (
                    <div key={i}>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            {field.label}
                        </label>
                        <input
                            type={field.type}
                            name={field.name}
                            value={formData[field.name]}
                            onChange={handleChange}
                            className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 ${errors?.location
                                    ? 'border-red-500 focus:ring-red-400'
                                    : 'border-gray4 focus:ring-blue-500'
                                }`}
                        />
                        {errors?.[field.name] && (
                            <p className="text-red-500 text-sm mt-1">{errors[field.name]}</p>
                        )}
                    </div>
                ))}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Location</label>
                    <select
                        name="location"
                        value={formData.location}
                        onChange={handleChange}
                        className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 ${errors?.location
                                ? 'border-red-500 focus:ring-red-400'
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
                        <p className="text-red-500 text-sm mt-1">{errors.location}</p>
                    )}
                </div>
            </div>
        </section>
    );
};

export default PersonalDetailsSection;

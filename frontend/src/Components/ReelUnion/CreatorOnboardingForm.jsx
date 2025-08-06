import { useState } from 'react';
import { toast } from 'react-toastify';

const CreatorOnboardingForm = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        dob: '',
        phoneNumber: '',
        email: '',
        location: '',
        instagramHandle: '',
        otherProfiles: '',
        portfolio: '',
        otherSkills: '',
        availability: '',
        motivation: '',
        anythingElse: '',
        consent: false,
        collaborationMode: '',
        skills: [],
        workMode: [],
    });

    const [showModal, setShowModal] = useState(false);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;

        if (type === 'checkbox' && name === 'skills') {
            setFormData(prev => ({
                ...prev,
                skills: checked
                    ? [...prev.skills, value]
                    : prev.skills.filter(skill => skill !== value),
            }));
        } else if (type === 'checkbox' && name === 'workMode') {
            setFormData(prev => ({
                ...prev,
                workMode: checked
                    ? [...prev.workMode, value]
                    : prev.workMode.filter(mode => mode !== value),
            }));
        } else if (type === 'checkbox') {
            setFormData(prev => ({ ...prev, [name]: checked }));
        } else {
            setFormData(prev => ({ ...prev, [name]: value }));
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form Submitted:', formData);
        setShowModal(true);
    };

    const closeModal = () => setShowModal(false);

    const skillsList = [
        "Script Writing", "Video Editing", "Photography / Cinematography", "On-Camera Talent / Acting",
        "Voice-over", "Reels / Shortform Content", "Graphic Design / Illustration", "Motion Graphics / Animation",
        "Copywriting", "Content Strategy", "Production Assistance", "AI Video Tools", "BTS & Vlogging"
    ];

    return (
        <div className="bg-gray-100 min-h-screen flex items-center justify-center p-4 font-inter">
            <div className="bg-white p-8 md:p-12 rounded-2xl shadow-xl w-full max-w-3xl">
                <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-2">The Reel Union – Creator Onboarding</h1>
                <p className="text-gray-600 mb-8">
                    Welcome to The Reel Union—a creator-first ecosystem powered by HOF. Share your details so we can match you to projects, collaborators, and brands that fit your passion and skills.
                </p>

                <form onSubmit={handleSubmit} className="space-y-8">
                    {/* Personal Details */}
                    <section className="border-b border-gray-200 pb-8">
                        <h2 className="text-2xl font-bold text-gray-800 mb-4">1. Personal Details</h2>
                        <div className="space-y-6">
                            {[
                                { label: 'Full Name', name: 'fullName', type: 'text' },
                                { label: 'Date of Birth', name: 'dob', type: 'date' },
                                { label: 'Phone Number', name: 'phoneNumber', type: 'text' },
                                { label: 'Email Address', name: 'email', type: 'email' }
                            ].map((field, i) => (
                                <div key={i}>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">{field.label}</label>
                                    <input
                                        type={field.type}
                                        name={field.name}
                                        required
                                        value={(formData)[field.name]}
                                        onChange={handleChange}
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                                </div>
                            ))}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Location</label>
                                <select
                                    name="location"
                                    required
                                    value={formData.location}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                >
                                    <option value="">Select a location</option>
                                    <option>Dubai</option>
                                    <option>Sharjah</option>
                                    <option>Calicut</option>
                                    <option>Other</option>
                                </select>
                            </div>
                        </div>
                    </section>

                    {/* Online Presence */}
                    <section className="border-b border-gray-200 pb-8">
                        <h2 className="text-2xl font-bold text-gray-800 mb-4">2. Online Presence</h2>
                        {['instagramHandle', 'otherProfiles', 'portfolio'].map((name, i) => (
                            <div key={i}>
                                <label className="block text-sm font-medium text-gray-700 mb-1 capitalize">{name.replace(/([A-Z])/g, ' $1')}</label>
                                <input
                                    type="text"
                                    name={name}
                                    value={(formData)[name]}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>
                        ))}
                    </section>

                    {/* Skills & Interests */}
                    <section className="border-b border-gray-200 pb-8">
                        <h2 className="text-2xl font-bold text-gray-800 mb-4">3. Skills & Interests</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                            {skillsList.map(skill => (
                                <div key={skill} className="flex items-center">
                                    <input
                                        type="checkbox"
                                        id={skill}
                                        name="skills"
                                        value={skill}
                                        checked={formData.skills.includes(skill)}
                                        onChange={handleChange}
                                        className="form-checkbox h-4 w-4 text-blue-600 rounded"
                                    />
                                    <label htmlFor={skill} className="ml-2 text-gray-700">{skill}</label>
                                </div>
                            ))}
                        </div>
                        <div className="mt-6">
                            <label className="block text-sm font-medium text-gray-700 mb-1">Other (please specify)</label>
                            <input
                                type="text"
                                name="otherSkills"
                                value={formData.otherSkills}
                                onChange={handleChange}
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                    </section>

                    {/* Collaboration Mode */}
                    <section className="border-b border-gray-200 pb-8">
                        <h2 className="text-2xl font-bold text-gray-800 mb-4">4. Collaboration Mode</h2>
                        <p className="text-gray-600 mb-4">How would you like to collaborate?</p>
                        {['Full-Time Creator', 'Part-Time / Freelance', 'Volunteer / Unpaid Initially', 'Just Exploring'].map(mode => (
                            <div key={mode} className="flex items-center">
                                <input
                                    type="radio"
                                    name="collaborationMode"
                                    value={mode}
                                    checked={formData.collaborationMode === mode}
                                    onChange={handleChange}
                                    className="form-radio h-4 w-4 text-blue-600"
                                />
                                <label className="ml-2 text-gray-700">{mode}</label>
                            </div>
                        ))}
                        <div className="mt-6">
                            <label className="block text-sm font-medium text-gray-700 mb-1">Availability (days/times available)</label>
                            <textarea
                                name="availability"
                                value={formData.availability}
                                onChange={handleChange}
                                rows={4}
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                        <div className="mt-6">
                            <label className="block text-sm font-medium text-gray-700 mb-1">Preferred Work Mode</label>
                            <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-6">
                                {['On-ground', 'Remote', 'Both'].map(mode => (
                                    <div key={mode} className="flex items-center">
                                        <input
                                            type="checkbox"
                                            name="workMode"
                                            value={mode}
                                            checked={formData.workMode.includes(mode)}
                                            onChange={handleChange}
                                            className="form-checkbox h-4 w-4 text-blue-600 rounded"
                                        />
                                        <label className="ml-2 text-gray-700">{mode} {mode === 'On-ground' && '(Dubai, Sharjah, Calicut)'}</label>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>

                    {/* Motivation */}
                    <section className="border-b border-gray-200 pb-8">
                        <h2 className="text-2xl font-bold text-gray-800 mb-4">5. Motivation</h2>
                        <div className="space-y-6">
                            {[
                                { name: 'motivation', label: 'Why do you want to join The Reel Union?' },
                                { name: 'anythingElse', label: 'Anything else we should know?' }
                            ].map((field, i) => (
                                <div key={i}>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">{field.label}</label>
                                    <textarea
                                        name={field.name}
                                        value={(formData)[field.name]}
                                        onChange={handleChange}
                                        rows={4}
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Consent */}
                    <section className="border-b border-gray-200 pb-8">
                        <div className="flex items-start">
                            <input
                                type="checkbox"
                                name="consent"
                                checked={formData.consent}
                                onChange={handleChange}
                                required
                                className="form-checkbox h-5 w-5 mt-1 text-blue-600 rounded"
                            />
                            <label className="ml-3 text-sm text-gray-700">
                                We may contact you via email or WhatsApp. Recording is for matching you with projects and teams. We respect privacy and don’t share without consent.
                            </label>
                        </div>
                    </section>

                    {/* Submit */}
                    <button
                        type="submit"
                        className="w-full md:w-auto px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-300 ease-in-out focus:outline-none focus:ring-4 focus:ring-blue-300"
                    >
                        Submit
                    </button>
                </form>
            </div>

            {/* Modal */}
            {showModal && (
                <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-75 z-50">
                    <div className="bg-white p-8 rounded-lg shadow-2xl max-w-sm text-center">
                        <h3 className="text-2xl font-bold mb-4">Submission Successful!</h3>
                        <p className="text-gray-700 mb-6">Thank you for onboarding with The Reel Union. We'll be in touch soon!</p>
                        <button
                            onClick={closeModal}
                            className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition"
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default CreatorOnboardingForm;

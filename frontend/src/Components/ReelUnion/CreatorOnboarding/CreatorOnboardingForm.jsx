import { useState } from 'react';
import { sendReelUnionRequest } from '../../../utils/api/reelUnionApi'; // This should point to your backend API call
import PersonalDetailsSection from './PersonalDetailsSection';
import OnlinePresenceSection from './OnlinePresenceSection';
import SkillsSection from './SkillsSection';
import CollaborationSection from './CollaborationSection';
import MotivationSection from './MotivationSection';
import ConsentSection from './ConsentSection';

const initialState = {
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
};

const CreatorOnboardingForm = () => {
    const [formData, setFormData] = useState(initialState);
    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;

        if (type === 'checkbox' && name === 'skills') {
            setFormData((prev) => ({
                ...prev,
                skills: checked
                    ? [...prev.skills, value]
                    : prev.skills.filter((item) => item !== value),
            }));
        } else if (type === 'checkbox' && name === 'workMode') {
            setFormData((prev) => ({
                ...prev,
                workMode: checked
                    ? [...prev.workMode, value]
                    : prev.workMode.filter((item) => item !== value),
            }));
        } else if (type === 'checkbox') {
            setFormData((prev) => ({ ...prev, [name]: checked }));
        } else {
            setFormData((prev) => ({ ...prev, [name]: value }));
        }
    };

    const validate = () => {
        const newErrors = {};

        if (!formData.fullName.trim()) newErrors.fullName = 'Full Name is required.';
        if (!formData.email.includes('@')) newErrors.email = 'Enter a valid email address.';
        if (!formData.phoneNumber.trim()) newErrors.phoneNumber = 'Phone number is required.';
        if (!formData.dob) newErrors.dob = 'Date of birth is required.';
        if (!formData.location) newErrors.location = 'Please select your location.';
        if (!formData.skills.length) newErrors.skills = 'Please select at least one skill.';
        if (!formData.collaborationMode) newErrors.collaborationMode = 'Select a collaboration mode.';
        if (!formData.motivation.trim()) newErrors.motivation = 'This field is required.';
        if (!formData.consent) newErrors.consent = 'You must give your consent.';

        return newErrors;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const validationErrors = validate();
        setErrors(validationErrors);

        if (Object.keys(validationErrors).length === 0) {
            try {
                setLoading(true);
                await sendReelUnionRequest(formData); // 🔁 Sending to your backend
                setFormData(initialState);
            } catch (error) {
                console.error("Form submission failed:", error);
                alert("Something went wrong. Please try again.");
            } finally {
                setLoading(false);
            }
        }
    };

    return (
        <div className="bg-adminGray/60 min-h-screen flex items-center justify-center p-4 font-sans">
            <div className="lg:p-8 rounded-2xl w-full max-w-4xl ">
                <h1 className="text-2xl lg:text-4xl font-semibold text-center text-gray1 font-Switzer-Medium mb-2">
                    Join The Reel Union
                </h1>
                <p className="text-neutral-600 mb-8 text-center">
                    Ready to make real impact? Fill out this application to become part of our creative community.
                </p>

                <form onSubmit={handleSubmit} className="space-y-8">
                    <PersonalDetailsSection formData={formData} handleChange={handleChange} errors={errors} />
                    <OnlinePresenceSection formData={formData} handleChange={handleChange} errors={errors} />
                    <SkillsSection formData={formData} handleChange={handleChange} errors={errors} />
                    <CollaborationSection formData={formData} handleChange={handleChange} errors={errors} />
                    <MotivationSection formData={formData} handleChange={handleChange} errors={errors} />
                    <ConsentSection formData={formData} handleChange={handleChange} errors={errors} />

                    <button
                        type="submit"
                        className="w-full md:w-auto px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-300 ease-in-out focus:outline-none focus:ring-4 focus:ring-blue-300"
                        disabled={loading}
                    >
                        {loading ? "Submitting..." : "Submit"}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default CreatorOnboardingForm;
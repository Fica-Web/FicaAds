import { useState } from 'react';
import { sendReelUnionRequest } from '../../../utils/api/reelUnionApi'; // This should point to your backend API call
import PersonalDetailsSection from './PersonalDetailsSection';
import OnlinePresenceSection from './OnlinePresenceSection';
import SkillsSection from './SkillsSection';
import CollaborationSection from './CollaborationSection';
import MotivationSection from './MotivationSection';
import ConsentSection from './ConsentSection';
import SuccessModal from './SuccessModal';

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
    const [showModal, setShowModal] = useState(false);
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

    const closeModal = () => setShowModal(false);

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
                setShowModal(true);
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
        <div className="bg-adminGray min-h-screen flex items-center justify-center p-4 font-sans">
            <div className="bg-white p-8 md:p-12 rounded-2xl shadow-xl w-full max-w-3xl">
                <h1 className="text-2xl lg:text-4xl font-semibold text-center text-gray1 font-Switzer-Medium uppercase mb-2">
                    The Reel Union – Creator Onboarding
                </h1>
                <p className="text-gray-600 mb-8">
                    Welcome to The Reel Union—a creator-first ecosystem powered by HOF.
                    Share your details so we can match you to projects, collaborators, and
                    brands that fit your passion and skills.
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

            {showModal && <SuccessModal onClose={closeModal} />}
        </div>
    );
};

export default CreatorOnboardingForm;
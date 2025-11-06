import { useState } from "react";
import { createJobApplicationApi } from "../../utils/api/jobApplicationApi";

const JobApplicationForm = ({ position }) => {
    const [form, setForm] = useState({
        fullName: "",
        email: "",
        phone: "",
        position: position,
        profileLink: "",
        resume: null,
    });

    const [errors, setErrors] = useState({});
    const [isLoading, setIsLoading] = useState(false);

    // 🔹 Handle input change
    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((prev) => ({ ...prev, [name]: value }));
        setErrors((prev) => ({ ...prev, [name]: "" })); // clear field error
    };

    // 🔹 Handle file change
    const handleFileChange = (e) => {
        const file = e.target.files[0];
        setForm((prev) => ({ ...prev, resume: file }));
        setErrors((prev) => ({ ...prev, resume: "" }));
    };

    // 🔹 Validation logic
    const validateForm = () => {
        const newErrors = {};

        if (!form.fullName.trim()) newErrors.fullName = "Full name is required.";
        if (!form.email.trim()) {
            newErrors.email = "Email is required.";
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
            newErrors.email = "Enter a valid email address.";
        }

        if (!form.phone.trim()) {
            newErrors.phone = "Phone number is required.";
        } else if (!/^[+]?[\d]{10,15}$/.test(form.phone)) {
            newErrors.phone = "Enter a valid phone number (10–15 digits).";
        }

        if (form.profileLink.trim()) {
            try {
                new URL(form.profileLink); // throws if invalid
            } catch {
                newErrors.profileLink = "Enter a valid URL.";
            }
        }

        if (!form.resume) {
            newErrors.resume = "Please upload your resume.";
        } else if (
            !["application/pdf", "application/msword", "application/vnd.openxmlformats-officedocument.wordprocessingml.document"].includes(
                form.resume.type
            )
        ) {
            newErrors.resume = "Only PDF or Word files are allowed.";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    // 🔹 Submit handler
    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!validateForm()) {
            return;
        }

        setIsLoading(true);
        try {
            await createJobApplicationApi(form);
            setForm({
                fullName: "",
                email: "",
                phone: "",
                position: position,
                profileLink: "",
                resume: null,
            });
        } catch (error) {
            console.error("Error submitting application:", error);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="max-w-lg mx-auto lg:p-6 space-y-4"
        >
            {/* Full Name */}
            <div>
                <label className="block text-sm font-medium text-slate-600 mb-1">
                    Full Name
                </label>
                <input
                    type="text"
                    name="fullName"
                    value={form.fullName}
                    onChange={handleChange}
                    className={`w-full border rounded-lg p-2 focus:ring-2 focus:ring-black/30 outline-none ${
                        errors.fullName ? "border-red-500" : "border-gray-300"
                    }`}
                />
                {errors.fullName && <p className="text-red-500 text-xs mt-1">{errors.fullName}</p>}
            </div>

            {/* Email */}
            <div>
                <label className="block text-sm font-medium text-slate-600 mb-1">
                    Email
                </label>
                <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    className={`w-full border rounded-lg p-2 focus:ring-2 focus:ring-black/30 outline-none ${
                        errors.email ? "border-red-500" : "border-gray-300"
                    }`}
                />
                {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
            </div>

            {/* Phone */}
            <div>
                <label className="block text-sm font-medium text-slate-600 mb-1">
                    Phone Number
                </label>
                <input
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    className={`w-full border rounded-lg p-2 focus:ring-2 focus:ring-black/30 outline-none ${
                        errors.phone ? "border-red-500" : "border-gray-300"
                    }`}
                />
                {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
            </div>

            {/* Profile or Portfolio Link (optional) */}
            <div>
                <label className="block text-sm font-medium text-slate-600 mb-1">
                    Profile or Portfolio Link (optional)
                </label>
                <input
                    type="url"
                    name="profileLink"
                    value={form.profileLink}
                    onChange={handleChange}
                    className={`w-full border rounded-lg p-2 focus:ring-2 focus:ring-black/30 outline-none ${
                        errors.profileLink ? "border-red-500" : "border-gray-300"
                    }`}
                />
                {errors.profileLink && <p className="text-red-500 text-xs mt-1">{errors.profileLink}</p>}
            </div>

            {/* Resume */}
            <div>
                <label className="block text-sm font-medium text-slate-600 mb-1">
                    Upload Resume
                </label>
                <input
                    type="file"
                    name="resume"
                    accept=".pdf,.doc,.docx"
                    onChange={handleFileChange}
                    className={`w-full text-sm ${
                        errors.resume ? "border-red-500" : "border-gray-300"
                    }`}
                />
                {errors.resume && <p className="text-red-500 text-xs mt-1">{errors.resume}</p>}
            </div>

            {/* Submit */}
            <button
                type="submit"
                disabled={isLoading}
                className={`w-full font-medium text-sm md:text-base rounded-lg h-10 px-4 transition-transform transform 
                ${isLoading ? "bg-gray-400 cursor-not-allowed" : "bg-black/20 text-slate-800 hover:scale-105"}`}
            >
                {isLoading ? "Submitting..." : "Apply Now 🚀"}
            </button>
        </form>
    );
};

export default JobApplicationForm;
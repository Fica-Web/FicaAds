import { useState } from "react";
import { createJobApplicationApi } from "../../utils/api/jobApplicationApi";

const JobApplicationForm = () => {
    const [form, setForm] = useState({
        fullName: "",
        email: "",
        phone: "",
        position: "",
        resume: null,
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((prev) => ({ ...prev, [name]: value }));
    };

    const handleFileChange = (e) => {
        setForm((prev) => ({ ...prev, resume: e.target.files[0] }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("Form submitted:", form);
        const response = await createJobApplicationApi(form);
        console.log("Response:", response);
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
                    required
                    className="w-full border border-gray4 rounded-lg p-2 focus:ring-2 focus:ring-black/30 outline-none"
                />
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
                    required
                    className="w-full border border-gray4 rounded-lg p-2 focus:ring-2 focus:ring-black/30 outline-none"
                />
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
                    className="w-full border border-gray4 rounded-lg p-2 focus:ring-2 focus:ring-black/30 outline-none"
                />
            </div>

            {/* Position */}
            <div>
                <label className="block text-sm font-medium text-slate-600 mb-1">
                    Applying For
                </label>
                <select
                    name="position"
                    value={form.position}
                    onChange={handleChange}
                    required
                    className="w-full border border-gray4 rounded-lg p-2 bg-white focus:ring-2 focus:ring-black/30 outline-none"
                >
                    <option value="">Select position</option>
                    <option value="designer">UI/UX Designer</option>
                    <option value="developer">Frontend Developer</option>
                    <option value="marketing">Digital Marketer</option>
                </select>
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
                    required
                    className="w-full text-sm"
                />
            </div>

            {/* Submit */}
            <button
                type="submit"
                className='w-full bg-black/20 text-slate-800 font-medium text-sm md:text-base rounded-lg h-10 px-4 transition-transform transform hover:scale-105'
            >
                Apply Now 🚀
            </button>
        </form>
    );
};

export default JobApplicationForm;
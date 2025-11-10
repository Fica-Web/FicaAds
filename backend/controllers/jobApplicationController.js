import JobApplication from "../models/jobApplicationSchema.js";
import sgMail from "@sendgrid/mail";
import fs from "fs";

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export const createJobApplication = async (req, res) => {
    try {
        const formData = req.body;

        // ✅ Save to DB (optional)
        const jobApplication = await JobApplication.create({
            ...formData,
        });

        // ✅ Read the uploaded file (if exists)
        let attachments = [];
        if (req.file) {
            const fileData = fs.readFileSync(req.file.path).toString("base64");
            attachments = [
                {
                    content: fileData,
                    filename: req.file.originalname,
                    type: req.file.mimetype,
                    disposition: "attachment",
                },
            ];
        }

        // ✅ Build email message
        const msg = {
            to: process.env.TO_EMAIL || "shaithrap@gmail.com", // HR email
            from: {
                email: process.env.FROM_EMAIL, // verified sender on SendGrid
                name: "Career Portal",
            },
            subject: `New Job Application: ${formData.fullName} - ${formData.position}`,
            html: `
        <h2>New Job Application Received</h2>
        <p><strong>Name:</strong> ${formData.fullName}</p>
        <p><strong>Email:</strong> ${formData.email}</p>
        <p><strong>Phone:</strong> ${formData.phone}</p>
        <p><strong>Position:</strong> ${formData.position}</p>
        <p><strong>Profile Link:</strong> ${formData.profileLink}</p>
        <p>The candidate's resume is attached below.</p>
      `,
            attachments,
        };

        // ✅ Send the email via SendGrid API (works on Render)
        const response = await sgMail.send(msg);
        console.log("✅ Email sent successfully via SendGrid", response);

        res.status(201).json({
            success: true,
            message: "Job application sent successfully!",
            jobApplication,
        });
    } catch (error) {
        console.error("❌ Error creating job application:", error);
        res.status(500).json({ error: error.message });
    }
}; 
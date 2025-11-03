import nodemailer from "nodemailer";
import JobApplication from "../models/jobApplicationSchema.js";

export const createJobApplication = async (req, res) => {
    try {
        const formData = req.body;

        // ✅ Save to DB (optional)
        const jobApplication = await JobApplication.create({
            ...formData,
        });

        // ✅ Setup Nodemailer transporter
        const transporter = nodemailer.createTransport({
            service: "gmail", // or smtp.hostinger.com if using your domain email
            auth: {
                user: process.env.FROM_EMAIL, // your HR or sender email
                pass: process.env.FROM_EMAIL_PASSWORD, // app password (for Gmail)
            },
        });

        // ✅ Email content
        const mailOptions = {
            from: `"Career Portal" <${process.env.FROM_EMAIL}>`,
            to: "ajmalmuhd17@gmail.com", // HR email to receive applications
            subject: `New Job Application: ${formData.fullName} - ${formData.position}`,
            html: `
        <h2>New Job Application Received</h2>
        <p><strong>Name:</strong> ${formData.fullName}</p>
        <p><strong>Email:</strong> ${formData.email}</p>
        <p><strong>Phone:</strong> ${formData.phone}</p>
        <p><strong>Position:</strong> ${formData.position}</p>
        <p>The candidate's resume is attached below.</p>
      `,
            attachments: [
                {
                    filename: req.file.originalname,
                    path: req.file.path, // 📎 attach uploaded file directly
                },
            ],
        };

        // ✅ Send mail
        await transporter.sendMail(mailOptions);
        console.log("✅ Email sent successfully");

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
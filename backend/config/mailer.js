import nodemailer from "nodemailer";
import 'dotenv/config';

export const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST || "sandbox.smtp.mailtrap.io",
    port: parseInt(process.env.EMAIL_PORT) || 2525,
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
});

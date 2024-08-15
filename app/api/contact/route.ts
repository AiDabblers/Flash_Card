import type { NextApiRequest, NextApiResponse } from 'next';
import {getNodemailer} from "@/utils/getNodemailer"
import { NextResponse } from 'next/server';

const transporter = getNodemailer()

export async function POST(req: Request) {
        const { name, email, message } =  await req.json();
        if (!name || !email || !message) {
            return NextResponse.json({ message: 'No email, name, or message.' }, {status:400})
        }

        try {
            await transporter.sendMail({
                from: `"Contact Us" ${process.env.EMAIL_USER}`, // Replace with your email
                to: process.env.EMAIL_USER, // Replace with recipient email
                subject: 'New Contact Us Message',
                text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
                html: `<p><strong>Name:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p><p><strong>Message:</strong></p><p>${message}</p>`,
            });
            return NextResponse.json({ message: 'Message sent successfully.' }, {status:200})
        
        } catch (error) {
            console.error('Error sending email:', error);
            return NextResponse.json(error, {
                status: 500,
            });
        }
    
}
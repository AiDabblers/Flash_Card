import nodemailer from "nodemailer";
// TODO - fix contact us email
const nodemailConfig = {
	service: "gmail",
	host: process.env.EMAIL_HOSTNAME, // hostname
	secureConnection: false, // TLS requires secureConnection to be false
	port: 587, // port for secure SMTP
	tls: {
		ciphers: "SSLv3",
	},
	auth: {
		user: process.env.EMAIL_USERNAME,
		pass: process.env.EMAIL_PASSWORD,
	},
	tls: {
		rejectUnauthorized: false, // Optional: Only if you have TLS issues
	},
};

let transporter;

export const getNodemailer = () => {
	if (transporter) return transporter;
	return nodemailer.createTransport(nodemailConfig);
};

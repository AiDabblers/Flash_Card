"use client";
import { useState } from "react";
import {
	Container,
	Box,
	Typography,
	TextField,
	Button,
	Snackbar,
	Alert,
} from "@mui/material";
import { NavBar } from "@/components/NavBar";
import axios from "axios";

export default function ContactUs() {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [message, setMessage] = useState("");
	const [success, setSuccess] = useState(false);
	const [error, setError] = useState("");

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		console.log(name, email, message);
		try {
			const response = await axios.post("/api/contact", {
				name,
				email,
				message,
			});
			// const response = await fetch("/api/contact", {
			// 	method: "POST",
			// 	headers: {
			// 		"Content-Type": "application/json",
			// 	},
			// 	body: { name, email, message },
			// });

			if (response.status == 200) {
				setSuccess(true);
				setName("");
				setEmail("");
				setMessage("");
			} else {
				throw new Error("Failed to send message");
			}
		} catch (err) {
			setError("An error occurred. Please try again.");
		}
	};

	return (
		<>
			<NavBar />
			<Container maxWidth="sm">
				<Box sx={{ mt: 4, mb: 6 }}>
					<Typography variant="h4" gutterBottom>
						Contact Us
					</Typography>
					<form onSubmit={handleSubmit}>
						<TextField
							label="Name"
							variant="outlined"
							fullWidth
							margin="normal"
							value={name}
							onChange={(e) => setName(e.target.value)}
							required
						/>
						<TextField
							label="Email"
							variant="outlined"
							fullWidth
							margin="normal"
							type="email"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							required
						/>
						<TextField
							label="Message"
							variant="outlined"
							fullWidth
							margin="normal"
							multiline
							rows={4}
							value={message}
							onChange={(e) => setMessage(e.target.value)}
							required
						/>
						<Button
							type="submit"
							variant="contained"
							color="primary"
							sx={{ mt: 2 }}
						>
							Send
						</Button>
					</form>
				</Box>

				<Snackbar
					open={success}
					autoHideDuration={6000}
					onClose={() => setSuccess(false)}
				>
					<Alert onClose={() => setSuccess(false)} severity="success">
						Your message has been sent successfully!
					</Alert>
				</Snackbar>

				<Snackbar
					open={!!error}
					autoHideDuration={6000}
					onClose={() => setError("")}
				>
					<Alert onClose={() => setError("")} severity="error">
						{error}
					</Alert>
				</Snackbar>
			</Container>
		</>
	);
}

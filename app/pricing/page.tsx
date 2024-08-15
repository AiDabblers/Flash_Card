// pages/pricing.tsx
import React from "react";
import {
	Container,
	Typography,
	Box,
	Grid,
	Card,
	CardContent,
	Button,
} from "@mui/material";
import { NavBar } from "@/components/NavBar";
import Link from "next/link";

export default function PricingPage() {
	return (
		<>
			<NavBar />
			<Container maxWidth="lg" sx={{ mt: 8, mb: 8 }}>
				{/* Header Section */}
				<Box sx={{ textAlign: "center", mb: 6 }}>
					<Typography
						variant="h3"
						component="h1"
						gutterBottom
						sx={{ fontWeight: "bold" }}
					>
						Choose Your Plan
					</Typography>
					<Typography
						variant="h6"
						component="p"
						color="textSecondary"
					>
						Simple and affordable pricing to suit every need.
					</Typography>
				</Box>

				{/* Pricing Options */}
				<Grid container spacing={8} justifyContent="center">
					{/* Free Plan */}
					<Grid item xs={12} sm={4}>
						<Card
							elevation={3}
							sx={{
								p: 4,
								backgroundColor: "background.paper",
								borderRadius: 2,
								textAlign: "center",
								boxShadow: 2,
							}}
						>
							<CardContent>
								<Typography
									variant="h5"
									component="h2"
									gutterBottom
								>
									Free
								</Typography>
								<Typography
									variant="h4"
									component="p"
									sx={{ mb: 2 }}
								>
									$0
								</Typography>
								<Typography
									variant="body1"
									color="textSecondary"
									sx={{ mb: 4 }}
								>
									Access to basic flashcards and learning
									tools.
								</Typography>
								<Link href={"/sign-up"}>
									<Button variant="contained" color="primary">
										Get Started
									</Button>
								</Link>
							</CardContent>
						</Card>
					</Grid>

					{/* Monthly Subscription Plan */}
					<Grid item xs={12} sm={4}>
						<Card
							elevation={3}
							sx={{
								p: 4,
								backgroundColor: "primary.light",
								color: "primary.contrastText",
								borderRadius: 2,
								textAlign: "center",
								boxShadow: 2,
							}}
						>
							<CardContent>
								<Typography
									variant="h5"
									component="h2"
									gutterBottom
								>
									Yearly
								</Typography>
								<Typography
									variant="h4"
									component="p"
									sx={{ mb: 2 }}
								>
									$0.99
								</Typography>
								<Typography variant="body1" sx={{ mb: 4 }}>
									Full access to all features on a yearly
									basis.
								</Typography>
								<Link href={"/payment"}>
									<Button
										variant="contained"
										color="secondary"
									>
										Subscribe Now
									</Button>
								</Link>
							</CardContent>
						</Card>
					</Grid>
				</Grid>
			</Container>
		</>
	);
}

import React from "react";
import {
	Container,
	Typography,
	Box,
	Grid,
	Card,
	CardContent,
	CardHeader,
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
				<Grid container spacing={4} justifyContent="center">
					{/* Free Plan */}
					<Grid item xs={12} sm={6} md={4}>
						<Card
							elevation={3}
							sx={{
								borderRadius: 4,
								textAlign: "center",
								display: "flex",
								flexDirection: "column",
								justifyContent: "space-between",
								height: "100%",
							}}
						>
							<CardHeader
								title="Free Plan"
								titleTypographyProps={{
									variant: "h5",
									fontWeight: "bold",
								}}
								sx={{ py: 3 }}
							/>
							<CardContent>
								<Typography
									variant="h3"
									color="primary"
									sx={{ mb: 2, fontWeight: 600 }}
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
							</CardContent>
							<Box sx={{ pb: 3 }}>
								<Link href="/sign-up">
									<Button variant="contained" size="large">
										Get Started
									</Button>
								</Link>
							</Box>
						</Card>
					</Grid>

					{/* Yearly Subscription Plan */}
					<Grid item xs={12} sm={6} md={4}>
						<Card
							elevation={3}
							sx={{
								backgroundColor: "primary.main",
								color: "primary.contrastText",
								borderRadius: 4,
								textAlign: "center",
								display: "flex",
								flexDirection: "column",
								justifyContent: "space-between",
								height: "100%",
							}}
						>
							<CardHeader
								title="Yearly Plan"
								titleTypographyProps={{
									variant: "h5",
									fontWeight: "bold",
									color: "inherit",
								}}
								sx={{ py: 3 }}
							/>
							<CardContent>
								<Typography
									variant="h3"
									sx={{ mb: 2, fontWeight: 600 }}
								>
									$9.99/year
								</Typography>
								<Typography variant="body1" sx={{ mb: 4 }}>
									Full access to all features on a yearly
									basis.
								</Typography>
							</CardContent>
							<Box sx={{ pb: 3 }}>
								<Link href="/payment">
									<Button
										variant="contained"
										color="secondary"
										size="large"
									>
										Subscribe Now
									</Button>
								</Link>
							</Box>
						</Card>
					</Grid>
				</Grid>
			</Container>
		</>
	);
}

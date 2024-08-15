import React from "react";
import {
	AppBar,
	Toolbar,
	Typography,
	Button,
	Container,
	Box,
} from "@mui/material";
import Link from "next/link";
import { SignedOut, SignInButton, SignedIn, UserButton } from "@clerk/nextjs";

export const NavBar: React.FC = () => {
	return (
		<AppBar
			position="static"
			sx={{ bgcolor: "primary.main", boxShadow: "none", paddingY: 1 }}
		>
			<Toolbar>
				<Container
					maxWidth="lg"
					sx={{
						display: "flex",
						justifyContent: "space-between",
						alignItems: "center",
					}}
				>
					{/* Brand Name */}
					<Typography
						variant="h6"
						component="div"
						sx={{
							flexGrow: 1,
							fontWeight: "bold",
							fontSize: "1.75rem",
							cursor: "pointer",
						}}
					>
						<Link href="/" passHref>
							MyApp
						</Link>
					</Typography>

					{/* Authentication Buttons */}
					<SignedOut>
						{/* Navigation Links */}
						<Box sx={{ display: "flex", alignItems: "center" }}>
							<Link href={`/`} passHref key={"/"}>
								<Button
									color="inherit"
									sx={{
										ml: 2,
										textTransform: "none",
										fontSize: "1rem",
										"&:hover": {
											backgroundColor:
												"rgba(255, 255, 255, 0.1)",
											borderRadius: 1,
										},
									}}
								>
									Home
								</Button>
							</Link>
							{["About", "Pricing", "Contact"].map((page) => (
								<Link
									href={`/${page.toLowerCase()}`}
									passHref
									key={page}
								>
									<Button
										color="inherit"
										sx={{
											ml: 2,
											textTransform: "none",
											fontSize: "1rem",
											"&:hover": {
												backgroundColor:
													"rgba(255, 255, 255, 0.1)",
												borderRadius: 1,
											},
										}}
									>
										{page}
									</Button>
								</Link>
							))}
							<SignInButton>
								{/* <Button
									variant="contained"
									sx={{
										ml: 2,
										textTransform: "none",
										fontSize: "1rem",
										backgroundImage:
											"linear-gradient(45deg, #FF6F61 30%, #FF3D00 90%)",
										color: "#fff",
										"&:hover": {
											backgroundImage:
												"linear-gradient(45deg, #FF3D00 30%, #FF6F61 90%)",
										},
									}}
								>
									Login
								</Button> */}
								<Button
									variant="contained"
									sx={{
										ml: 2,
										textTransform: "none",
										fontSize: "1rem",
										backgroundImage:
											"linear-gradient(45deg, #4CAF50, #8BC34A)",
										color: "#fff",
										"&:hover": {
											backgroundImage:
												"linear-gradient(45deg, #8BC34A, #4CAF50)",
											opacity: 0.9,
										},
										transition: "all 0.3s",
									}}
								>
									Login
								</Button>
							</SignInButton>
							<Button
								variant="contained"
								sx={{
									ml: 2,
									textTransform: "none",
									fontSize: "1rem",
									backgroundImage:
										"linear-gradient(45deg, #FF6F61, #FF3D00)",
									color: "#fff",
									"&:hover": {
										backgroundImage:
											"linear-gradient(45deg, #FF3D00, #FF6F61)",
										opacity: 0.9,
									},
									transition: "all 0.3s",
								}}
								component="a"
								href="/sign-up"
							>
								Sign Up
							</Button>
						</Box>
					</SignedOut>
					<SignedIn>
						<Box sx={{ display: "flex", alignItems: "center" }}>
							{["Generate", "My Cards", "Public Cards"].map(
								(page) => (
									<Link
										href={`/${page
											.toLowerCase()
											.replaceAll(" ", "-")}`}
										passHref
										key={page}
									>
										<Button
											color="inherit"
											sx={{
												ml: 2,
												textTransform: "none",
												fontSize: "1rem",
												"&:hover": {
													backgroundColor:
														"rgba(255, 255, 255, 0.1)",
													borderRadius: 1,
												},
											}}
										>
											{page}
										</Button>
									</Link>
								)
							)}
							<Box
								sx={{
									ml: 2,
									p: 1,
									display: "flex",
									alignItems: "center",
									borderRadius: 2,
									cursor: "pointer",
									"&:hover": {
										boxShadow: 4,
									},
								}}
							>
								<UserButton />
							</Box>
						</Box>
					</SignedIn>
				</Container>
			</Toolbar>
		</AppBar>
	);
};

"use client";
import React, { useCallback } from "react";
import {
	EmbeddedCheckoutProvider,
	EmbeddedCheckout,
} from "@stripe/react-stripe-js";
import getStripe from "@/utils/get-stripe";
import axios from "axios";
import { NavBar } from "@/components/NavBar";

export default function PaymentPage() {
	const stripePromise = getStripe();
	const fetchClientSecret = useCallback(() => {
		// Create a Checkout Session
		return fetch("/api/checkout_session", {
			method: "POST",
		})
			.then((res) => {
				return res.json();
			})
			.then((data) => {
				return data;
			});
	}, []);

	const options = { fetchClientSecret };

	return (
		<>
			<NavBar />
			<div id="checkout">
				<EmbeddedCheckoutProvider
					stripe={stripePromise}
					options={options}
				>
					<EmbeddedCheckout />
				</EmbeddedCheckoutProvider>
			</div>
		</>
	);
}

# CalcQuest

Welcome to [CalcQuest](https://calcquest.netlify.app/), a dynamic platform designed to help users sharpen their math skills and challenge themselves through engaging activities. This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Live Website

You can access the live version of CalcQuest at:

🔗 [https://calcquest.netlify.app/](https://calcquest.netlify.app/)

## Features

-   **Interactive Math Challenges:** Solve various math problems and puzzles.
-   **User-Friendly Interface:** Intuitive design and easy navigation.
-   **Real-Time Feedback:** Get instant results as you solve challenges.

## Technologies Used

-   [Next.js](https://nextjs.org/)
-   [Material UI](https://mui.com/)
-   [Firebase](https://firebase.google.com/)
-   [Firestore (NoSQL)](https://firebase.google.com/docs/firestore)
-   [Stripe](https://stripe.com/)
-   [Clerk](https://clerk.dev/)
-   [Nodemailer](https://nodemailer.com/about/)
-   [TypeScript](https://www.typescriptlang.org/)

## Getting Started

### Prerequisites

Make sure you have [Node.js](https://nodejs.org/) and npm (or yarn, pnpm, bun) installed.

### Installation

Clone the repository:

```bash
git clone git@github.com:AiDabblers/Flash_Card.git
cd Flash_Card
npm install
```

```bash
.
├── app/
│   ├── api        # API routes
│   ├── page.tsx   # Main page
├── components/    # React components
├── firebase.js    # Firebase configuration
├── utils/         # Utility functions
├── lib/           # API integrations (e.g., Stripe, Clerk, Nodemailer)
├── .env.local     # Environment variables
├── middleware.ts  # Clerk middleware

```

## Firebase Setup

This guide will help you set up Firebase for your Next.js project.

### Prerequisites

Make sure you have a Firebase account and access to the Firebase Console: [Firebase Console](https://console.firebase.google.com/).

You will also need a Firebase project set up in your Firebase Console before proceeding.

### Step 1: Create a Firebase Project

1. Go to the [Firebase Console](https://console.firebase.google.com/).
2. Click on **Add Project** and follow the on-screen instructions to create a new project.
3. Enable **Google Analytics** if needed (optional).

### Step 2: Enable Firestore (NoSQL Database)

1. In your Firebase project, navigate to **Firestore Database** in the left-hand menu.
2. Click on **Create Database** and follow the setup wizard:
    - Choose a **production mode** or **test mode** depending on your needs.
    - Select the default location for your Firestore database.
3. Firestore will now be enabled for your project.

### Step 3: Configure Firebase in Your Next.js Project

Once your Firebase project is set up, you need to configure it within your Next.js app.

1. In your Firebase Console, click on the **Project Settings** (gear icon) on the top left of your project.
2. Scroll down to **Your Apps** and click **</> Add App** to register your web app.
3. You will be provided with the Firebase configuration object. It should look something like this:

```js
// Replace config code in firebase.js
const firebaseConfig = {
	apiKey: "your-api-key",
	authDomain: "your-auth-domain",
	projectId: "your-project-id",
	storageBucket: "your-storage-bucket",
	messagingSenderId: "your-messaging-sender-id",
	appId: "your-app-id",
};
```

## Clerk Integration for Authentication

This guide will help you set up [Clerk](https://clerk.dev/) authentication in your Next.js project.

### Prerequisites

Ensure you have the following before proceeding:

1. A [Clerk account](https://clerk.dev/) and a new Clerk project set up.
2. A Next.js project initialized (either through [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) or another method).
3. [Node.js](https://nodejs.org/) and a package manager (npm, yarn, pnpm, bun) installed.

### Step 1: Set Up a Clerk Project

1. Go to the [Clerk Dashboard](https://dashboard.clerk.dev/).
2. Create a new application by clicking on **"Create Application"**.
3. Copy the **Frontend API Key** and **API Key** provided by Clerk after setting up the project.

### Step 2: Add Environmental Keys

```bash
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=<Your Clerk Publishable Key>
CLERK_SECRET_KEY=<Your Clerk Secret Key>
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
```

## OpenRouter API Integration

This guide will help you integrate and use the OpenRouter API in your project. OpenRouter provides powerful APIs for routing and location-based services.

### Overview

OpenRouter API offers various endpoints for route calculation, geocoding, and more. This document will cover the basic setup and usage for integrating the API into your application.

### Prerequisites

1. **API Key**: Sign up for an API key at the [OpenRouter website](https://openrouter.com/).

### Step 1: Add Environmental Keys

```bash
# Add openrouter api key in .env
OPENROUTER_API_KEY=your-api-key
```

## Stripe API Integration

This guide will help you integrate and use the [Stripe API](https://stripe.com/docs/api) in your project. Stripe provides powerful APIs for payment processing, subscriptions, and more.

### Prerequisites

1. **Stripe Account**: Sign up for a Stripe account at [Stripe](https://stripe.com/).
2. **API Keys**: Obtain your API keys from the [Stripe Dashboard](https://dashboard.stripe.com/).

### Step 1: Add Environmental Keys

```bash
# Add stripe api key in .env
STRIPE_SECRET_KEY=your-secret-key
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=your-publishable-key
```

## Run Development Server

Once the dependencies are installed and environment variables are set up, you can start the development server by running:

This will start the local development server and allow you to access your project at http://localhost:3000.

```bash
npm run dev
```

## How to Contribute

We welcome contributions to improve the platform. Here’s how you can get started:

1. Fork the repository.
2. Make your changes.
3. Submit a pull request with a description of your changes.

## License

This project is open source and available under the [MIT License](LICENSE).

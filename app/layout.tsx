import type { Metadata } from "next";
import {
    ClerkProvider,
    SignInButton,
    SignUpButton,
    SignedIn,
    SignedOut,
    UserButton,
} from '@clerk/nextjs';
import { Poppins, EB_Garamond } from "next/font/google";
import "./globals.css";
import { Footer, Navbar } from "@/components";

const poppins = Poppins({
    subsets: ["latin"],
    weight: ['400'],
    variable: '--font-poppins',
});

const ebGaramond = EB_Garamond({
    subsets: ["latin"],
    weight: ['500', '600', '700'],
    variable: '--font-eb-garamond',
});

export const metadata: Metadata = {
    title: "SocietySphere",
    description: "A modern society security and management system designed to bring safety, transparency, and calm control to residential communities through a clean, aurora-inspired digital experience.",
    icons: {
        icon: "/favicon.svg",
    },
};

export default function RootLayout({
    children,
}: { children: React.ReactNode }) {
    return (
        <ClerkProvider>
            <html lang="en">
                <body className={`${poppins.variable} ${ebGaramond.variable} night-sky-gradient text-[#E6EDF3]`}>
                    <Navbar />
                    {children}
                    <Footer />
                </body>
            </html>
        </ClerkProvider>
    );
}

import type { Metadata } from "next";
import { Poppins, EB_Garamond } from "next/font/google";
import "./globals.css";

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
        <html lang="en">
            <body className={`${poppins.variable} ${ebGaramond.variable}`}>
                {children}
            </body>
        </html>
    );
}

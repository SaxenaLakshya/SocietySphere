import Image from "next/image";
import Link from "next/link";
import { ebGaramond } from "@/lib/fonts";
import { FeatureCard } from "@/components";

function Hero() {
    return (
        <div className="relative h-screen overflow-hidden">

            {/* Background image */}
            <Image
                src="/images/Urban Night Serenity.png"
                alt="Background image"
                fill
                priority
                className="absolute inset-0 z-0 object-cover object-center blur-sm scale-110"
            />

            {/* Content container */}
            <div className="relative z-10 flex h-full flex-col md:flex-row items-center justify-center px-6 md:px-12 gap-8 md:gap-16">

                {/* Left: Logo + Heading */}
                <div className="flex flex-col md:flex-row items-center gap-4 md:gap-12">
                    <Image
                        src="/favicon.svg"
                        alt="SocietySphere Logo"
                        width={256}
                        height={256}
                        className="w-36 sm:w-48 md:w-64 h-auto"
                    />
                    <h1 className={`${ebGaramond.className} text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-wide text-center md:text-left`}>
                        Society<span className="text-[#F2C94C]">Sphere</span>
                    </h1>
                </div>

                {/* Divider */}
                <div className="hidden md:block h-40 w-px bg-white/30" />

                {/* Right: Text Section */}
                <div className="max-w-lg md:max-w-xl text-[#E6EDF3] text-center md:text-left">
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4">
                        <span className="bg-linear-135 from-[#1E90FF] via-[#00BFFF] to-[#87CEFA] bg-clip-text text-transparent">Protect. </span>
                        <span className="bg-linear-135 from-[#FFA500] via-[#FFD700] to-[#FFFF66] bg-clip-text text-transparent">Manage. </span>
                        <span className="bg-linear-135 from-[#00FFCC] via-[#33FFDD] to-[#66FFFF] bg-clip-text text-transparent">Connect. </span>
                    </h2>
                    <p className="text-[#AAB4C3] leading-relaxed text-sm sm:text-base md:text-lg">
                        A modern society security and management platform designed to bring safety, transparency, and calm control to residential communities.
                    </p>
                </div>

            </div>
        </div>
    );
}


function Features() {
    return (
        <section className="w-full py-16">
            {/* Section Heading */}
            <div className="mb-10 text-center">
                <h2 className="text-3xl sm:text-4xl font-semibold text-[#E6EDF3]">
                    Everything your society needs
                </h2>
                <p className="mt-3 text-[#AAB4C3] max-w-2xl mx-auto">
                    A calm, secure, and modern platform designed to simplify daily
                    operations and strengthen community trust.
                </p>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 place-items-stretch justify-items-center">
                <FeatureCard
                    sourceImage="lock"
                    altText="lock logo"
                    title="Centralized Security"
                    description="Real-time tracking of entries, exits, visitors, and incidents — all managed from a single, secure dashboard designed for calm and control."
                />
                <FeatureCard
                    sourceImage="building"
                    altText="building logo"
                    title="Resident and Roles"
                    description="Manage residents, guards, vendors, and administrators with clearly defined roles and permissions for smooth daily operations."
                />
                <FeatureCard
                    sourceImage="loudspeaker"
                    altText="loudspeaker logo"
                    title="Announcements & Communication"
                    description="Send important updates, alerts, and notices to residents instantly — no more lost messages or scattered WhatsApp groups."
                />
                <FeatureCard
                    sourceImage="camera"
                    altText="camera logo"
                    title="Incident Reporting"
                    description="Allow residents or guards to report incidents with images and descriptions, ensuring transparency and faster resolution."
                />
                <FeatureCard
                    sourceImage="information"
                    altText="information logo"
                    title="Activity History"
                    description="Automatically maintain logs of visitors, deliveries, vehicles, and events — searchable, organized, and always available."
                />
                <FeatureCard
                    sourceImage="puzzle"
                    altText="puzzle logo"
                    title="Designed for Simplicity"
                    description="A clean, aurora-inspired interface built to be intuitive, calm, and easy to use for everyone — from residents to management."
                />
            </div>
        </section>
    )
}


function CTASection() {
    return (
        <section className="w-full bg-[#0B1020] py-20">
            <div className="mx-auto max-w-7xl px-6">
                <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">

                    {/* LEFT CONTENT */}
                    <div>
                        <h2 className="text-4xl font-semibold leading-tight text-[#E6EDF3]">
                            Ready to bring calm control to your society?
                        </h2>

                        <p className="mt-4 max-w-xl text-[#AAB4C3]">
                            Start managing security, communication, and daily operations
                            from one modern platform designed for clarity and peace of mind.
                        </p>

                        {/* FEATURES */}
                        <ul className="mt-6 space-y-3">
                            {[
                                "Centralized society management",
                                "Secure access and role-based control",
                                "Calm, intuitive user experience",
                            ].map((item, index) => (
                                <li key={index} className="flex items-center gap-3">
                                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#2DD4BF]/20 text-[#2DD4BF]">
                                        ✓
                                    </span>
                                    <span className="text-[#E6EDF3]">{item}</span>
                                </li>
                            ))}
                        </ul>

                        {/* CTA BUTTONS */}
                        <div className="mt-8 flex flex-wrap gap-4">
                            <Link
                                href="/register"
                                className="relative inline-flex items-center overflow-hidden rounded-xl bg-linear-to-r from-[#1F4F7A]/40 to-[#2DD4BF]/40 backdrop-blur-md border border-white/20 px-6 py-3 font-medium text-white shadow-lg shadow-[#2DD4BF]/20 transition hover:scale-105 hover:shadow-[#2DD4BF]/40 animate-pulse"
                            >
                                Get Started
                            </Link>

                            <button className="relative overflow-hidden rounded-xl bg-linear-to-r from-white/10 to-white/5 backdrop-blur-md border border-white/20 px-6 py-3 font-medium text-[#E6EDF3] shadow-lg transition hover:bg-white/15 hover:scale-105">
                                Explore the System
                            </button>
                        </div>
                    </div>

                    {/* RIGHT IMAGE */}
                    <div className="relative h-80 sm:h-100 lg:h-115">
                        <div className="overflow-hidden rounded-2xl h-full w-full">
                            <Image
                                src="/images/Aurora Night Serenity.png"
                                alt="SocietySphere platform preview"
                                fill
                                priority
                                className="object-cover rounded-2xl"
                            />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};


export default function Home() {
    return (
        <div>
            <Hero />
            <Features />
            <CTASection />
        </div>
    );
}

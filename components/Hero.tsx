import Image from "next/image";
import { ebGaramond } from "@/lib/fonts";

export default function Hero() {
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

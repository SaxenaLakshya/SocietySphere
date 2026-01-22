import Image from "next/image";
import { ebGaramond } from "@/lib/fonts";

export default function About() {
    return (
        <main className="relative min-h-screen bg-[#0B1020] px-6 py-20 overflow-hidden">

            {/* Ambient Background Glow */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-20 left-1/4 h-125 w-125 rounded-full bg-[#2DD4BF]/10 blur-[140px]" />
                <div className="absolute bottom-0 right-1/3 h-100 w-100 bg-[#1F4F7A]/20 blur-[120px]" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-14 items-center">

                {/* LEFT: CONTENT */}
                <div className="space-y-8">

                    <h1 className={`text-4xl md:text-5xl font-semibold text-[#E6EDF3]`}>
                        About <span className={ebGaramond.className}>Society<span className="text-[#F2C94C]">Sphere</span></span>
                    </h1>

                    <p className="text-[#AAB4C3] text-lg leading-relaxed">
                        SocietySphere was created with a simple belief —
                        <span className="text-[#2DD4BF]"> safety, clarity, and peace of mind </span>
                        should never be complicated.
                    </p>

                    <p className="text-[#AAB4C3] leading-relaxed">
                        Residential communities today rely on fragmented tools, noisy chat groups,
                        and manual processes that create confusion instead of comfort.
                        SocietySphere brings everything together into a single, calm, and secure platform.
                    </p>

                    <p className="text-[#AAB4C3] leading-relaxed">
                        From managing visitors and security logs to sharing important announcements
                        and maintaining transparency — every feature is designed to feel intuitive,
                        respectful of privacy, and effortless to use.
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6">

                        <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6">
                            <h3 className="text-[#FACC15] font-medium mb-2">
                                Our Vision
                            </h3>
                            <p className="text-sm text-[#AAB4C3] leading-relaxed">
                                To redefine how residential societies experience security,
                                communication, and management — quietly and effectively.
                            </p>
                        </div>

                        <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6">
                            <h3 className="text-[#2DD4BF] font-medium mb-2">
                                Our Principles
                            </h3>
                            <p className="text-sm text-[#AAB4C3] leading-relaxed">
                                Privacy-first design, human-centric workflows,
                                and technology that stays out of the way.
                            </p>
                        </div>

                    </div>
                </div>

                {/* RIGHT: IMAGE */}
                <div className="relative group">

                    {/* Glow */}
                    <div
                        className="pointer-events-none absolute inset-0 rounded-3xl blur-3xl opacity-70 transition-opacity duration-500 group-hover:opacity-100"
                        style={{
                            background:
                                "radial-gradient(600px circle at center, rgba(45,212,191,0.25), transparent 45%)",
                        }}
                    />

                    {/* Image Card */}
                    <div className="relative h-105 w-full overflow-hidden rounded-3xl border border-white/10
                        transform-gpu transition-transform duration-500 ease-out group-hover:scale-[1.02]">

                        <Image
                            src="/images/Aurora Night Water View.png"
                            alt="SocietySphere vision illustration"
                            fill
                            priority
                            className="object-cover"
                        />
                    </div>
                </div>

            </div>
        </main>
    );
}

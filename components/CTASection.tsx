import Image from "next/image";
import Link from "next/link";

export default function CTASection() {
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

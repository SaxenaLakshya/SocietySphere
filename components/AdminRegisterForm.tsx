"use client"

import Image from "next/image";
import Link from "next/link";

export default function AdminRegisterForm() {
    return (
        <main className="min-h-[calc(100vh-4rem)] py-25 bg-[#0B1020] flex items-center justify-center px-6">

            {/* Ambient Glow */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-1/4 left-1/4 h-125 w-125 rounded-full bg-[#2DD4BF]/10 blur-[140px]" />
                <div className="absolute bottom-0 right-1/3 h-100 w-100 bg-[#FACC15]/10 blur-[120px]" />
            </div>

            <div className="relative z-10 w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

                {/* LEFT: FORM */}
                <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-10 shadow-2xl">

                    <h1 className="text-3xl font-semibold text-[#E6EDF3] mb-2">
                        Create your society
                    </h1>
                    <p className="text-sm text-[#AAB4C3] mb-8">
                        Register as a society admin and bring your community to SocietySphere.
                    </p>

                    <form className="space-y-6">

                        {/* Admin Name */}
                        <div>
                            <label className="block text-sm text-[#AAB4C3] mb-2">
                                Admin full name
                            </label>
                            <input
                                type="text"
                                placeholder="Society President / Admin"
                                className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-[#E6EDF3]
                                placeholder:text-[#6B7280] focus:outline-none focus:ring-2 focus:ring-[#2DD4BF]/40"
                            />
                        </div>

                        {/* Email */}
                        <div>
                            <label className="block text-sm text-[#AAB4C3] mb-2">
                                Admin email
                            </label>
                            <input
                                type="email"
                                placeholder="admin@societysphere.com"
                                className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-[#E6EDF3]
                                placeholder:text-[#6B7280] focus:outline-none focus:ring-2 focus:ring-[#2DD4BF]/40"
                            />
                        </div>

                        {/* Mobile */}
                        <div>
                            <label className="block text-sm text-[#AAB4C3] mb-2">
                                Mobile number
                            </label>
                            <input
                                type="tel"
                                placeholder="+91 XXXXX XXXXX"
                                className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-[#E6EDF3]
                                placeholder:text-[#6B7280] focus:outline-none focus:ring-2 focus:ring-[#2DD4BF]/40"
                            />
                        </div>

                        {/* Society Name */}
                        <div>
                            <label className="block text-sm text-[#AAB4C3] mb-2">
                                Society name
                            </label>
                            <input
                                type="text"
                                placeholder="Green Valley Residency"
                                className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-[#E6EDF3]
                                placeholder:text-[#6B7280] focus:outline-none focus:ring-2 focus:ring-[#2DD4BF]/40"
                            />
                        </div>

                        {/* Location */}
                        <div className="grid grid-cols-2 gap-4">
                            <input
                                type="text"
                                placeholder="City"
                                className="rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-[#E6EDF3]
                                placeholder:text-[#6B7280] focus:outline-none focus:ring-2 focus:ring-[#2DD4BF]/40"
                            />
                            <input
                                type="text"
                                placeholder="State"
                                className="rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-[#E6EDF3]
                                placeholder:text-[#6B7280] focus:outline-none focus:ring-2 focus:ring-[#2DD4BF]/40"
                            />
                        </div>

                        {/* Society Size */}
                        <div className="grid grid-cols-2 gap-4">
                            <input
                                type="number"
                                placeholder="Total towers"
                                className="rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-[#E6EDF3]
                                placeholder:text-[#6B7280] focus:outline-none focus:ring-2 focus:ring-[#2DD4BF]/40"
                            />
                            <input
                                type="number"
                                placeholder="Total flats"
                                className="rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-[#E6EDF3]
                                placeholder:text-[#6B7280] focus:outline-none focus:ring-2 focus:ring-[#2DD4BF]/40"
                            />
                        </div>

                        {/* Password */}
                        <div>
                            <label className="block text-sm text-[#AAB4C3] mb-2">
                                Password
                            </label>
                            <input
                                type="password"
                                placeholder="••••••••"
                                className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-[#E6EDF3]
                                placeholder:text-[#6B7280] focus:outline-none focus:ring-2 focus:ring-[#2DD4BF]/40"
                            />
                        </div>

                        {/* Confirm Password */}
                        <div>
                            <label className="block text-sm text-[#AAB4C3] mb-2">
                                Confirm password
                            </label>
                            <input
                                type="password"
                                placeholder="••••••••"
                                className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-[#E6EDF3]
                                placeholder:text-[#6B7280] focus:outline-none focus:ring-2 focus:ring-[#2DD4BF]/40"
                            />
                        </div>

                        {/* Submit */}
                        <button
                            type="submit"
                            className="w-full rounded-xl bg-linear-to-r from-[#FACC15] to-[#2DD4BF]
                            py-3 font-medium text-[#0B1020] transition hover:shadow-lg hover:shadow-[#FACC15]/30"
                        >
                            Create society
                        </button>
                    </form>

                    <p className="mt-8 text-sm text-[#AAB4C3]">
                        Already have a society?{" "}
                        <Link href="/login" className="text-[#2DD4BF] hover:underline">
                            Sign in
                        </Link>
                    </p>
                </div>

                {/* RIGHT: IMAGE */}
                <div
                    className="hidden md:block relative h-full group"
                    onMouseMove={(e) => {
                        const rect = e.currentTarget.getBoundingClientRect();
                        const x = e.clientX - rect.left;
                        const y = e.clientY - rect.top;

                        const rotateX = ((y / rect.height) - 0.5) * -8;
                        const rotateY = ((x / rect.width) - 0.5) * 8;

                        e.currentTarget.style.setProperty("--rx", `${rotateX}deg`);
                        e.currentTarget.style.setProperty("--ry", `${rotateY}deg`);
                        e.currentTarget.style.setProperty("--gx", `${x}px`);
                        e.currentTarget.style.setProperty("--gy", `${y}px`);
                    }}
                    onMouseLeave={(e) => {
                        e.currentTarget.style.setProperty("--rx", `0deg`);
                        e.currentTarget.style.setProperty("--ry", `0deg`);
                    }}
                >
                    {/* Glow */}
                    <div
                        className="pointer-events-none absolute inset-0 rounded-3xl blur-3xl opacity-80 transition-opacity duration-500 group-hover:opacity-100"
                        style={{
                            background: "radial-gradient(600px circle at var(--gx, 50%) var(--gy, 50%), rgba(250,204,21,0.25), transparent 40%)",
                        }}
                    />

                    {/* Image Card */}
                    <div
                        className="relative h-full overflow-hidden rounded-3xl border border-white/10
                    transform-gpu transition-transform duration-300 ease-out"
                        style={{
                            transform: "perspective(1000px) rotateX(var(--rx)) rotateY(var(--ry))",
                        }}
                    >
                        <Image
                            src="/images/Admin Society Room.png"
                            alt="Society onboarding illustration"
                            fill
                            priority
                            className="object-cover transition-transform duration-700 ease-out"
                            style={{ transform: "translateZ(30px)" }}
                        />
                    </div>
                </div>

            </div>
        </main>
    );
}

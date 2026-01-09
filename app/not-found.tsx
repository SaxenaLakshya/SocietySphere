import Link from "next/link";
import Image from "next/image";

export default function NotFound() {
    return (
        <main className="relative min-h-screen bg-[#0B1020] overflow-hidden">

            {/* Background Glow */}
            <div className="absolute inset-0">
                <div className="absolute -top-32 left-1/2 h-125 w-125 -translate-x-1/2 rounded-full bg-[#2DD4BF]/10 blur-[120px]" />
                <div className="absolute bottom-0 right-0 h-100 w-100 bg-[#1F4F7A]/20 blur-[120px]" />
            </div>

            {/* Content */}
            <div className="relative z-10 mx-auto max-w-7xl px-6 py-24">
                <div className="grid grid-cols-1 items-center gap-16 md:grid-cols-2">

                    {/* LEFT: TEXT */}
                    <div>
                        <p className="mb-2 text-sm uppercase tracking-widest text-[#2DD4BF]">
                            Error 404
                        </p>

                        <h1 className="mb-6 text-4xl font-semibold leading-tight text-[#E6EDF3] md:text-5xl">
                            This page is not under surveillance
                        </h1>

                        <p className="mb-8 max-w-md text-[#AAB4C3]">
                            The page you're trying to access doesn't exist or has been moved.
                            Let's get you back to a secure place.
                        </p>

                        <div className="flex flex-wrap gap-4">
                            <Link
                                href="/"
                                className="rounded-xl bg-linear-to-r from-[#1F4F7A] to-[#2DD4BF] px-6 py-3 text-sm font-medium text-white shadow-lg transition hover:shadow-[#2DD4BF]/40"
                            >
                                Go to Home
                            </Link>

                            <Link
                                href="/contact"
                                className="rounded-xl border border-white/15 px-6 py-3 text-sm text-[#E6EDF3] transition hover:bg-white/5"
                            >
                                Contact Support
                            </Link>
                        </div>
                    </div>

                    {/* RIGHT: IMAGE */}
                    <div className="relative">
                        <div className="absolute inset-0 rounded-3xl bg-linear-to-tr from-[#2DD4BF]/20 to-transparent blur-2xl" />
                        <div className="relative overflow-hidden rounded-3xl border border-white/10">
                            <Image
                                src="/images/404 Aurora Night City.png"
                                alt="404 - Page not found"
                                width={900}
                                height={600}
                                className="object-cover"
                                priority
                            />
                        </div>
                    </div>

                </div>
            </div>
        </main>
    );
}

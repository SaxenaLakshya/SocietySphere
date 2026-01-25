import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
    return (
        <header className="fixed top-0 z-50 w-full">
            {/* Glass background */}
            <div className="backdrop-blur-xl bg-[#0B1020]/70 border-b border-white/10">
                <div className="mx-auto max-w-7xl px-6">
                    <div className="flex h-16 items-center justify-between">

                        {/* LEFT: LOGO */}
                        <Link href="/" className="flex items-center gap-3">
                            <Image
                                src="/favicon.svg"
                                alt="SocietySphere Logo"
                                width={36}
                                height={36}
                                priority
                            />
                            <span className="text-lg font-semibold text-[#E6EDF3]">
                                Society<span className="text-[#F2C94C]">Sphere</span>
                            </span>
                        </Link>

                        {/* CENTER: NAV LINKS */}
                        <nav className="hidden md:flex items-center gap-8 text-sm">
                            {[
                                { name: "Home", href: "/" },
                                { name: "Security", href: "#security" },
                                { name: "About", href: "/about" },
                                { name: "Contact", href: "/contact" },
                            ].map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className="text-[#AAB4C3] transition-colors hover:text-[#2DD4BF]"
                                >
                                    {item.name}
                                </Link>
                            ))}
                        </nav>

                        {/* RIGHT: ACTIONS */}
                        <div className="flex items-center gap-4">
                            <Link
                                href="/login"
                                className="hidden sm:inline-block text-sm text-[#AAB4C3] hover:text-[#E6EDF3] transition"
                            >
                                Sign in
                            </Link>

                            <Link
                                href="/register"
                                className="rounded-xl bg-linear-to-r from-[#1F4F7A] to-[#2DD4BF] px-5 py-2.5 text-sm font-medium text-white shadow-md transition hover:shadow-[#2DD4BF]/40"
                            >
                                Get Started
                            </Link>
                        </div>

                    </div>
                </div>
            </div>
        </header>
    );
}

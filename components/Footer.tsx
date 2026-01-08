import Image from "next/image";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="w-full bg-[#0B1020] border-t border-white/10">
            <div className="mx-auto max-w-7xl px-6 py-14">
                <div className="grid grid-cols-1 gap-10 md:grid-cols-3 items-center">

                    {/* LEFT: BRAND */}
                    <div className="text-center md:text-left">
                        <h3 className="text-xl font-semibold text-[#E6EDF3]">
                            SocietySphere
                        </h3>
                        <p className="mt-2 text-sm text-[#AAB4C3] max-w-sm">
                            A modern society security and management platform built for calm,
                            control, and connected communities.
                        </p>
                    </div>

                    {/* CENTER: LINKS */}
                    <nav className="flex justify-center gap-8 text-sm">
                        <Link
                            href="/about"
                            className="text-[#AAB4C3] transition-colors hover:text-[#2DD4BF]"
                        >
                            About
                        </Link>

                        <Link
                            href="/contact"
                            className="text-[#AAB4C3] transition-colors hover:text-[#2DD4BF]"
                        >
                            Contact
                        </Link>

                        <Link
                            href="/careers"
                            className="text-[#AAB4C3] transition-colors hover:text-[#2DD4BF]"
                        >
                            Careers
                        </Link>

                        <Link
                            href="/privacy"
                            className="text-[#AAB4C3] transition-colors hover:text-[#2DD4BF]"
                        >
                            Privacy
                        </Link>
                    </nav>

                    {/* RIGHT: SOCIALS */}
                    <div className="flex justify-center md:justify-end gap-6">

                        {/* LinkedIn */}
                        <Link
                            href="https://linkedin.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group"
                        >
                            <Image
                                src="/linkedin.svg" // LinkedIn icon path
                                alt="LinkedIn"
                                width={24}
                                height={24}
                                className="opacity-80 transition-all duration-300
                                    group-hover:opacity-100
                                    group-hover:drop-shadow-[0_0_12px_rgba(56,189,248,0.6)]"
                            />
                        </Link>

                        {/* Instagram */}
                        <Link
                            href="https://instagram.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group"
                        >
                            <Image
                                src="instagram.svg" // Instagram icon path
                                alt="Instagram"
                                width={24}
                                height={24}
                                className="opacity-80 transition-all duration-300
                                    group-hover:opacity-100
                                    group-hover:drop-shadow-[0_0_12px_rgba(62,228,176,0.6)]"
                            />
                        </Link>

                        {/* GitHub */}
                        <Link
                            href="https://github.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group"
                        >
                            <Image
                                src="github.svg" // GitHub icon path
                                alt="GitHub"
                                width={24}
                                height={24}
                                className="opacity-80 transition-all duration-300
                                    group-hover:opacity-100
                                    group-hover:drop-shadow-[0_0_12px_rgba(230,237,243,0.6)]"
                            />
                        </Link>

                    </div>
                </div>

                {/* BOTTOM */}
                <div className="mt-10 border-t border-white/10 pt-6 text-center text-sm text-[#7A8699]">
                    © {new Date().getFullYear()} SocietySphere. All rights reserved.
                </div>
            </div>
        </footer>
    );
}

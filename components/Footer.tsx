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
                        {["About", "Contact", "Careers", "Privacy"].map((item) => (
                            <a
                                key={item}
                                href="#"
                                className="text-[#AAB4C3] transition-colors hover:text-[#2DD4BF]"
                            >
                                {item}
                            </a>
                        ))}
                    </nav>

                    {/* RIGHT: SOCIALS */}
                    <div className="flex justify-center md:justify-end gap-6">

                        {/* LinkedIn */}
                        <a
                            href="https://linkedin.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group"
                        >
                            <svg
                                className="h-6 w-6 fill-[#AAB4C3] transition-all duration-300
                           group-hover:fill-[#38BDF8]
                           group-hover:drop-shadow-[0_0_12px_rgba(56,189,248,0.6)]"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                            >
                                <path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM.5 8h4V24h-4V8zM8.5 8h3.8v2.2h.1c.5-.9 1.8-2.2 3.7-2.2 4 0 4.7 2.6 4.7 6v9h-4v-8c0-1.9 0-4.3-2.6-4.3-2.6 0-3 2-3 4.1v8.2h-4V8z" />
                            </svg>
                        </a>

                        {/* Instagram */}
                        <a
                            href="https://instagram.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group"
                        >
                            <svg
                                className="h-6 w-6 fill-[#AAB4C3] transition-all duration-300
                           group-hover:fill-[#3EE4B0]
                           group-hover:drop-shadow-[0_0_12px_rgba(62,228,176,0.6)]"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                            >
                                <path d="M7 2C4.2 2 2 4.2 2 7v10c0 2.8 2.2 5 5 5h10c2.8 0 5-2.2 5-5V7c0-2.8-2.2-5-5-5H7zm10 2c1.7 0 3 1.3 3 3v10c0 1.7-1.3 3-3 3H7c-1.7 0-3-1.3-3-3V7c0-1.7 1.3-3 3-3h10zm-5 3.5A4.5 4.5 0 1016.5 12 4.5 4.5 0 0012 7.5zm0 7.3A2.8 2.8 0 1114.8 12 2.8 2.8 0 0112 14.8zM17.8 6.2a1 1 0 11-1-1 1 1 0 011 1z" />
                            </svg>
                        </a>

                        {/* GitHub */}
                        <a
                            href="https://github.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group"
                        >
                            <svg
                                className="h-6 w-6 fill-[#AAB4C3] transition-all duration-300
                           group-hover:fill-[#E6EDF3]
                           group-hover:drop-shadow-[0_0_12px_rgba(230,237,243,0.6)]"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                            >
                                <path d="M12 .5C5.7.5.5 5.7.5 12c0 5.1 3.3 9.4 7.9 10.9.6.1.8-.3.8-.6v-2.2c-3.2.7-3.9-1.4-3.9-1.4-.5-1.3-1.2-1.6-1.2-1.6-1-.7.1-.7.1-.7 1.1.1 1.7 1.1 1.7 1.1 1 .1.8-.7.8-.7-.4-.1-.8-.4-1-.8-.2-.4-.1-.8.1-1.1.6-.6 1.4-1 2.4-1 .7 0 1.4.2 2 .5.6-.4 1.3-.6 2-.6 1 0 1.9.4 2.4 1 .2.3.3.7.1 1.1-.2.4-.6.7-1 .8 0 0-.2.8.8.7 0 0 .6-1 1.7-1.1 0 0 1.1 0 .1.7 0 0-.7.3-1.2 1.6 0 0-.7 2.1-3.9 1.4v2.2c0 .3.2.7.8.6A11.5 11.5 0 0023.5 12C23.5 5.7 18.3.5 12 .5z" />
                            </svg>
                        </a>

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

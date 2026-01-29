"use client";

import { useState } from "react";
import { UserRegisterForm, AdminRegisterForm } from "@/components";

export default function Register() {
    const [mode, setMode] = useState<"user" | "admin">("user");

    return (
        <main className="relative min-h-[calc(100vh-4rem)] bg-[#0B1020] flex items-center justify-center px-6 py-24 overflow-hidden">

            {/* Ambient Glow */}
            <div className="pointer-events-none absolute inset-0">
                <div className="absolute top-1/3 left-1/4 h-128 w-lg rounded-full bg-[#2DD4BF]/10 blur-[160px] animate-pulse-slow" />
                <div className="absolute bottom-0 right-1/3 h-96 w-96 rounded-full bg-[#FACC15]/10 blur-[140px] animate-pulse-slower" />
            </div>

            <div className="relative z-10 w-full max-w-6xl">

                {/* SWITCH */}
                <div className="flex justify-center mb-12">
                    <div className="relative flex bg-white/5 backdrop-blur-xl border border-white/10 rounded-full p-1 w-[320px]">

                        {/* Animated Slider */}
                        <div
                            className={`absolute inset-y-1 left-1 w-[calc(50%-0.25rem)] rounded-full bg-linear-to-r from-[#1F4F7A] to-[#2DD4BF] transition-transform duration-500 ease-in-out
              ${mode === "admin" ? "translate-x-full" : "translate-x-0"}`}
                        />

                        {/* Buttons */}
                        <button
                            onClick={() => setMode("user")}
                            className={`relative z-10 flex-1 py-2 text-sm font-medium rounded-full transition-colors duration-300
              ${mode === "user"
                                    ? "text-[#0B1020]"
                                    : "text-[#AAB4C3] hover:text-white"
                                }`}
                        >
                            Join a society
                        </button>

                        <button
                            onClick={() => setMode("admin")}
                            className={`relative z-10 flex-1 py-2 text-sm font-medium rounded-full transition-colors duration-300
              ${mode === "admin"
                                    ? "text-[#0B1020]"
                                    : "text-[#AAB4C3] hover:text-white"
                                }`}
                        >
                            Create a society
                        </button>
                    </div>
                </div>

                {/* FORM CONTAINER */}
                <div className="relative min-h-130">

                    {/* USER FORM */}
                    <div
                        className={`transition-all duration-500 ease-in-out
            ${mode === "user"
                                ? "opacity-100 translate-y-0 scale-100 pointer-events-auto"
                                : "opacity-0 translate-y-4 scale-[0.98] pointer-events-none absolute inset-0"
                            }`}
                    >
                        <UserRegisterForm />
                    </div>

                    {/* ADMIN FORM */}
                    <div
                        className={`transition-all duration-500 ease-in-out
            ${mode === "admin"
                                ? "opacity-100 translate-y-0 scale-100 pointer-events-auto"
                                : "opacity-0 translate-y-4 scale-[0.98] pointer-events-none absolute inset-0"
                            }`}
                    >
                        <AdminRegisterForm />
                    </div>

                </div>
            </div>
        </main>
    );
}

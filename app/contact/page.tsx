"use client"

import Image from "next/image";
import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { GlobalAlert } from "@/components";
import { ContactFormInput, GlobalAlertProps } from "@/types";

export default function ContactPage() {
    const [alert, setAlert] = useState<GlobalAlertProps | null>(null);


    const {
        register,
        handleSubmit,
        watch,
        reset,
        formState: { errors, isSubmitted },
    } = useForm<ContactFormInput>()

    const onSubmit: SubmitHandler<ContactFormInput> = async (formData) => {
        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData)
            })

            const data = await response.json()

            setAlert({
                type: "success",
                message: data.message,
            })
            reset()
        } catch {
            setAlert({
                type: "error",
                message: "Registration failed. Please try again.",
            })
        }
    }


    return (
        <main className="relative min-h-screen bg-[#0B1020] flex items-center justify-center px-6 py-20 overflow-hidden">

            {alert && (
                <GlobalAlert type={alert.type} message={alert.message} />
            )}

            {/* Ambient Background Glow */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-1/4 left-1/3 h-125 w-125 rounded-full bg-[#2DD4BF]/10 blur-[140px]" />
                <div className="absolute bottom-0 right-1/4 h-100 w-100 bg-[#1F4F7A]/20 blur-[120px]" />
            </div>

            <div className="relative z-10 w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-14 items-center">

                {/* LEFT: FORM */}
                <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-10 shadow-2xl">

                    <h1 className="text-3xl font-semibold text-[#E6EDF3] mb-2">
                        Get in touch
                    </h1>
                    <p className="text-sm text-[#AAB4C3] mb-8">
                        Have a question, feedback, or idea? We'd love to hear from you.
                    </p>

                    <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>

                        {/* Email */}
                        <div>
                            <label className="block text-sm text-[#AAB4C3] mb-2">
                                Email address
                            </label>
                            <input
                                type="email"
                                placeholder="you@societysphere.com"
                                className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-[#E6EDF3] placeholder:text-[#6B7280] focus:outline-none focus:ring-2 focus:ring-[#2DD4BF]/40"
                                {...register("email", {
                                    required: "Email address is required", pattern: {
                                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                        message: "Invalid email address",
                                    }
                                })}
                            />
                        </div>

                        {/* Message */}
                        <div>
                            <label className="block text-sm text-[#AAB4C3] mb-2">
                                Message
                            </label>
                            <textarea
                                rows={5}
                                placeholder="Write your message here..."
                                className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-[#E6EDF3] placeholder:text-[#6B7280] resize-none focus:outline-none focus:ring-2 focus:ring-[#2DD4BF]/40"
                                {...register("message", { required: true })}
                            />
                        </div>

                        {/* Submit */}
                        <button
                            type="submit"
                            className="w-full rounded-xl bg-linear-to-r from-[#1F4F7A] to-[#2DD4BF] py-3 font-medium text-white transition hover:shadow-lg hover:shadow-[#2DD4BF]/30"
                        >
                            Send message
                        </button>
                    </form>

                    <p className="mt-6 text-xs text-[#6B7280]">
                        We usually respond within 24-48 hours.
                    </p>
                </div>

                {/* RIGHT: VISUAL */}
                <div className="relative group hidden md:block">

                    {/* Glow */}
                    <div
                        className="pointer-events-none absolute inset-0 rounded-3xl blur-3xl opacity-70 transition-opacity duration-500 group-hover:opacity-100"
                        style={{
                            background:
                                "radial-gradient(600px circle at center, rgba(45,212,191,0.25), transparent 45%)",
                        }}
                    />

                    {/* Image Card */}
                    <div className="relative h-105 w-full overflow-hidden rounded-3xl border border-white/10 transform-gpu transition-transform duration-500 ease-out group-hover:scale-[1.02]">

                        <Image
                            src="/images/Aurora Contact Serenity.png"
                            alt="Contact SocietySphere illustration"
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

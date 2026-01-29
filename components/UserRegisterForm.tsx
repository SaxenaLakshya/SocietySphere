"use client"

import Image from "next/image";
import Link from "next/link";
import GlobalAlert from "./GlobalAlert";
import { GlobalAlertProps, RegisterFormInputs } from "@/types";
import { useState, useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

export default function UserRegisterForm() {
    const [alert, setAlert] = useState<GlobalAlertProps | null>(null);

    const [showPassword, setShowPassword] = useState<boolean>(false);

    const {
        register,
        handleSubmit,
        watch,
        reset,
        formState: { errors, isSubmitted },
    } = useForm<RegisterFormInputs>()

    const onSubmit: SubmitHandler<RegisterFormInputs> = (formData) => {
        try {
            console.log(formData)
            setAlert({
                type: "success",
                message: "Account created successfully!",
            })
            reset()
        } catch {
            setAlert({
                type: "error",
                message: "Registration failed. Please try again.",
            })
        }
    }

    const onError = () => {
        setAlert({
            type: "warning",
            message: "Please check all the fields and accept the Terms before submitting.",
        })
    }

    useEffect(() => {
        if (!alert) return

        const timer = setTimeout(() => setAlert(null), 4000)
        return () => clearTimeout(timer)
    }, [alert])

    useEffect(() => {
        setAlert({
            type: "info",
            message: "All fields are required. Please fill in accurate details.",
        })
    }, [])


    return (
        <main className="relative min-h-screen bg-[#0B1020] flex items-center justify-center px-6">

            {alert && (
                <GlobalAlert type={alert.type} message={alert.message} />
            )}

            {/* Ambient Background Glow */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-1/3 left-1/4 h-125 w-125 rounded-full bg-[#2DD4BF]/10 blur-[140px]" />
                <div className="absolute bottom-0 right-1/4 h-100 w-100 bg-[#FACC15]/10 blur-[120px]" />
            </div>

            <div className="relative z-10 w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

                {/* LEFT: FORM */}
                <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-10 shadow-2xl">

                    <h1 className="text-3xl font-semibold text-[#E6EDF3] mb-2">
                        Create your account
                    </h1>
                    <p className="text-sm text-[#AAB4C3] mb-8">
                        Join your residential community with secure access and seamless management.
                    </p>

                    <form className="space-y-6" onSubmit={handleSubmit(onSubmit, onError)}>

                        {/* Full Name */}
                        <div>
                            <label className="block text-sm text-[#AAB4C3] mb-2">
                                Full name
                            </label>
                            <input
                                type="text"
                                placeholder="Your Name"
                                className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-[#E6EDF3] placeholder:text-[#6B7280] focus:outline-none focus:ring-2 focus:ring-[#2DD4BF]/40"
                                {...register("fullName", { required: "Full name is required" })}
                            />
                        </div>

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

                        {/* Mobile */}
                        <div>
                            <label className="block text-sm text-[#AAB4C3] mb-2">
                                Mobile number
                            </label>
                            <input
                                type="tel"
                                placeholder="+91 XXXXX XXXXX"
                                className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-[#E6EDF3] placeholder:text-[#6B7280] focus:outline-none focus:ring-2 focus:ring-[#2DD4BF]/40"
                                {...register("mobileNumber", {
                                    required: "Contact number is required", pattern: {
                                        value: /^[0-9]{10}$/,
                                        message: "Invalid phone number",
                                    }
                                })}
                            />
                        </div>

                        {/* Society Code */}
                        <div>
                            <label className="block text-sm text-[#AAB4C3] mb-2">
                                Society invite code
                            </label>
                            <input
                                type="text"
                                placeholder="e.g. SS-1024"
                                className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-[#E6EDF3] placeholder:text-[#6B7280] focus:outline-none focus:ring-2 focus:ring-[#2DD4BF]/40"
                                {...register("societyCode", {
                                    required: "Society Code is required", pattern: {
                                        value: /^[A-Z]{2}-\d{4}$/,
                                        message: "Invalid society code",
                                    }
                                })}
                            />
                        </div>

                        {/* Role */}
                        <div>
                            <label className="block text-sm text-[#AAB4C3] mb-2">
                                Role in society
                            </label>
                            <select
                                className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-[#E6EDF3] focus:outline-none focus:ring-2 focus:ring-[#2DD4BF]/40"
                                {...register("role", { required: "Please select a role" })}
                            >
                                <option value="">Select Role</option>
                                <option value="resident" className="bg-[#0B1020]">Resident</option>
                                <option value="tenant" className="bg-[#0B1020]">Tenant</option>
                                <option value="staff" className="bg-[#0B1020]">Security Staff</option>
                            </select>
                        </div>

                        {/* Password */}
                        <div>
                            <label className="block text-sm text-[#AAB4C3] mb-2">
                                Password
                            </label>

                            <div className="relative">
                                <input
                                    type={showPassword ? "text" : "password"}
                                    placeholder="Your password"
                                    className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 pr-12 text-[#E6EDF3] placeholder:text-[#6B7280] focus:outline-none focus:ring-2 focus:ring-[#2DD4BF]/40"
                                    {...register("password", { required: "Password is required" })}
                                />

                                <button
                                    type="button"
                                    onClick={() => { setShowPassword(!showPassword) }}
                                    className="absolute inset-y-0 right-4 flex items-center cursor-pointer"
                                >
                                    <Image
                                        src={showPassword ? "/eye open.svg" : "/eye close.svg"}
                                        alt="show password button"
                                        width={18}
                                        height={18}
                                        className="brightness-0 invert opacity-70"
                                    />
                                </button>
                            </div>
                        </div>

                        {/* Terms */}
                        <label className="flex items-start gap-2 text-sm text-[#AAB4C3]">
                            <input
                                type="checkbox"
                                className="accent-[#2DD4BF] mt-1"
                                {...register("terms", {
                                    required: "You must accept the Terms & Privacy Policy",
                                })}
                            />                            I agree to the{" "}
                            <Link href="/terms" className="text-[#2DD4BF] hover:underline">
                                Terms & Privacy Policy
                            </Link>
                        </label>

                        {/* Submit */}
                        <button
                            type="submit"
                            className="w-full rounded-xl bg-linear-to-r from-[#FACC15] to-[#2DD4BF] py-3 font-medium text-[#0B1020] transition hover:shadow-lg hover:shadow-[#FACC15]/30"
                        >
                            Create account
                        </button>
                    </form>

                    <p className="mt-8 text-sm text-[#AAB4C3]">
                        Already have an account?{" "}
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
                            src="/images/Futuristic Dawn Serenity.png"
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
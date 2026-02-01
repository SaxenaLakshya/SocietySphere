"use client"

import Image from "next/image";
import Link from "next/link";
import { GlobalAlertProps, AdminFormInputs } from "@/types";
import GlobalAlert from "./GlobalAlert";
import { useState, useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

export default function AdminRegisterForm() {
    const [alert, setAlert] = useState<GlobalAlertProps | null>(null);

    const [showPassword, setShowPassword] = useState<boolean>(false);

    const {
        register,
        handleSubmit,
        watch,
        reset,
        formState: { errors, isSubmitted },
    } = useForm<AdminFormInputs>()

    const onSubmit: SubmitHandler<AdminFormInputs> = async (formData) => {
        try {
            const response = await fetch("/api/auth/register/admin", {
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

            {/* Ambient Glow */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-1/4 left-1/4 h-125 w-125 rounded-full bg-[#2DD4BF]/10 blur-[140px]" />
                <div className="absolute bottom-0 right-1/3 h-100 w-100 bg-[#FACC15]/10 blur-[120px]" />
            </div>

            <div className="relative z-10 w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

                <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-10 shadow-2xl">

                    <h1 className="text-3xl font-semibold text-[#E6EDF3] mb-2">
                        Create your society
                    </h1>
                    <p className="text-sm text-[#AAB4C3] mb-8">
                        Register as a society admin and bring your community to SocietySphere.
                    </p>

                    <form className="space-y-6" onSubmit={handleSubmit(onSubmit, onError)}>

                        {/* Admin Name */}
                        <div>
                            <label className="block text-sm text-[#AAB4C3] mb-2">
                                Admin full name
                            </label>
                            <input
                                type="text"
                                placeholder="Society President / Admin"
                                className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-[#E6EDF3] placeholder:text-[#6B7280] focus:outline-none focus:ring-2 focus:ring-[#2DD4BF]/40"
                                {...register("fullName", { required: "Full name is required" })}
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

                        {/* Society Name */}
                        <div>
                            <label className="block text-sm text-[#AAB4C3] mb-2">
                                Society name
                            </label>
                            <input
                                type="text"
                                placeholder="Green Valley Residency"
                                className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-[#E6EDF3] placeholder:text-[#6B7280] focus:outline-none focus:ring-2 focus:ring-[#2DD4BF]/40"
                                {...register("societyName", { required: "Society name is required" })}
                            />
                        </div>

                        {/* Location */}
                        <div>
                            <p className="block text-sm text-[#AAB4C3] mb-2">
                                Society location
                            </p>
                            <div className="grid grid-cols-2 gap-4">
                                <input
                                    type="text"
                                    placeholder="City"
                                    className="rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-[#E6EDF3] placeholder:text-[#6B7280] focus:outline-none focus:ring-2 focus:ring-[#2DD4BF]/40"
                                    {...register("city", { required: "City of the society is required" })}
                                />
                                <input
                                    type="text"
                                    placeholder="State"
                                    className="rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-[#E6EDF3] placeholder:text-[#6B7280] focus:outline-none focus:ring-2 focus:ring-[#2DD4BF]/40"
                                    {...register("state", { required: "State of the society is require" })}
                                />
                            </div>
                        </div>

                        {/* Society Info */}
                        <div>
                            <p className="block text-sm text-[#AAB4C3] mb-2">
                                Society information
                            </p>
                            <div className="grid grid-cols-2 gap-4">
                                <input
                                    type="number"
                                    placeholder="Total towers"
                                    className="rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-[#E6EDF3] placeholder:text-[#6B7280] focus:outline-none focus:ring-2 focus:ring-[#2DD4BF]/40"
                                    {...register("towers", { required: "Number of towers in the society is required" })}
                                />
                                <input
                                    type="number"
                                    placeholder="Total houses"
                                    className="rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-[#E6EDF3] placeholder:text-[#6B7280] focus:outline-none focus:ring-2 focus:ring-[#2DD4BF]/40"
                                    {...register("houses", { required: "Number of houses in the society is required" })}
                                />
                            </div>
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
                        className="relative h-full overflow-hidden rounded-3xl border border-white/10 transform-gpu transition-transform duration-300 ease-out"
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

"use client"

import Image from "next/image";
import Link from "next/link";
import { useForm, SubmitHandler } from "react-hook-form";
import { LoginFormInput, GlobalAlertProps } from "@/types";
import { GlobalAlert } from "@/components";
import { useState, useEffect } from "react";

export default function LoginPage() {
    const [alert, setAlert] = useState<GlobalAlertProps | null>(null);

    const [showPassword, setShowPassword] = useState<boolean>(false);

    const {
        register,
        handleSubmit,
        watch,
        reset,
        formState: { errors, isSubmitted },
    } = useForm<LoginFormInput>()

    const onSubmit: SubmitHandler<LoginFormInput> = (data) => {
        try {
            console.log(data)
            setAlert({
                type: "success",
                message: "Logging In!",
            })
            reset()
        } catch {
            setAlert({
                type: "error",
                message: "Login failed. Please try again.",
            })
        }
    }

    const onError = () => {
        setAlert({
            type: "warning",
            message: "Please check all the fields before submitting.",
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
        <main className="min-h-screen bg-[#0B1020] flex items-center justify-center px-6">

            {alert && (
                <GlobalAlert type={alert.type} message={alert.message} />
            )}

            {/* Ambient Background Glow */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-1/4 left-1/3 h-125 w-125 rounded-full bg-[#2DD4BF]/10 blur-[140px]" />
                <div className="absolute bottom-0 right-0 h-100 w-100 bg-[#1F4F7A]/20 blur-[120px]" />
            </div>

            <div className="relative z-10 w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

                {/* LEFT: FORM */}
                <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-10 shadow-2xl">

                    <h1 className="text-3xl font-semibold text-[#E6EDF3] mb-2">
                        Welcome back
                    </h1>
                    <p className="text-sm text-[#AAB4C3] mb-8">
                        Sign in to continue managing your society securely.
                    </p>

                    <form className="space-y-6" onSubmit={handleSubmit(onSubmit, onError)}>

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

                        {/* Actions */}
                        <div className="flex items-center justify-between text-sm">
                            <label className="flex items-center gap-2 text-[#AAB4C3]">
                                <input
                                    type="checkbox"
                                    className="accent-[#2DD4BF]"
                                    {...register("rememberMe")}
                                />
                                Remember me
                            </label>

                            <Link
                                href="/forgot-password"
                                className="text-[#2DD4BF] hover:underline"
                            >
                                Forgot password?
                            </Link>
                        </div>

                        {/* Submit */}
                        <button
                            type="submit"
                            className="w-full rounded-xl bg-linear-to-r from-[#1F4F7A] to-[#2DD4BF] py-3 font-medium text-white transition hover:shadow-lg hover:shadow-[#2DD4BF]/30"
                        >
                            Sign in
                        </button>
                    </form>

                    <p className="mt-8 text-sm text-[#AAB4C3]">
                        Don't have an account?{" "}
                        <Link href="/register" className="text-[#2DD4BF] hover:underline">
                            Create one
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
                    {/* Glow follows cursor */}
                    <div
                        className="pointer-events-none absolute inset-0 rounded-3xl blur-3xl opacity-80 transition-opacity duration-500 group-hover:opacity-100"
                        style={{
                            background: "radial-gradient(600px circle at var(--gx, 50%) var(--gy, 50%), rgba(45,212,191,0.25), transparent 40%)",
                        }}
                    />

                    {/* Card */}
                    <div
                        className="relative h-full overflow-hidden rounded-3xl border border-white/10
               transform-gpu transition-transform duration-300 ease-out"
                        style={{
                            transform: "perspective(1000px) rotateX(var(--rx)) rotateY(var(--ry))",
                        }}
                    >
                        <Image
                            src="/images/Login Aurora City from Glass.png"
                            alt="Secure login illustration"
                            fill
                            priority
                            className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                            style={{
                                transform: "translateZ(30px)",
                            }}
                        />
                    </div>
                </div>

            </div>
        </main>
    );
}

"use client"

import { GlobalAlertProps } from "@/types"
import { useEffect, useRef, useState } from "react"

const alertColors: Record<
    GlobalAlertProps["type"],
    { border: string; bg: string; text: string }
> = {
    success: {
        border: "border-[#3EE4B0]/40",
        bg: "bg-[#3EE4B0]/10",
        text: "text-[#3EE4B0]",
    },
    info: {
        border: "border-[#38BDF8]/40",
        bg: "bg-[#38BDF8]/10",
        text: "text-[#38BDF8]",
    },
    warning: {
        border: "border-[#F2C94C]/40",
        bg: "bg-[#F2C94C]/10",
        text: "text-[#F2C94C]",
    },
    error: {
        border: "border-[#F87171]/40",
        bg: "bg-[#F87171]/10",
        text: "text-[#F87171]",
    },
}

export default function GlobalAlert({ type, message }: GlobalAlertProps) {
    const colors = alertColors[type]
    const [visible, setVisible] = useState(false)
    const [render, setRender] = useState(true)

    const alertRef = useRef<HTMLDivElement | null>(null)

    useEffect(() => {
        setVisible(true)

        // Focus when alert appears (no scroll jump)
        requestAnimationFrame(() => {
            alertRef.current?.focus()
        })

        const timer = setTimeout(() => setVisible(false), 3500)
        const removeTimer = setTimeout(() => setRender(false), 4000)

        return () => {
            clearTimeout(timer)
            clearTimeout(removeTimer)
        }
    }, [])

    if (!render) return null

    return (
        <div
            ref={alertRef}
            tabIndex={-1}
            role="alert"
            aria-live="assertive"
            className={`fixed top-1/2 left-1/2 z-60 w-[92%] max-w-3xl -translate-x-1/2 -translate-y-[60%] outline-none transition-all duration-500 ease-in-out ${visible ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}
        >
            <div
                className={`backdrop-blur-xl bg-[#0B1020]/90 border ${colors.border} shadow-xl flex items-center gap-3 rounded-xl px-4 py-3`}
            >
                <span
                    className="h-10 w-1 rounded-full"
                    style={{ backgroundColor: colors.text.replace("text-", "") }}
                />
                <span className={`text-sm font-medium ${colors.text}`}>
                    {message}
                </span>
            </div>
        </div>
    )
}

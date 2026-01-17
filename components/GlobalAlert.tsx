"use client"

import { GlobalAlertProps } from "@/types"
import { useEffect, useState } from "react"

const alertColors: Record<GlobalAlertProps["type"], { border: string; bg: string; text: string }> = {
    success: { border: "border-[#3EE4B0]/40", bg: "bg-[#3EE4B0]/10", text: "text-[#3EE4B0]" },
    info: { border: "border-[#38BDF8]/40", bg: "bg-[#38BDF8]/10", text: "text-[#38BDF8]" },
    warning: { border: "border-[#F2C94C]/40", bg: "bg-[#F2C94C]/10", text: "text-[#F2C94C]" },
    error: { border: "border-[#F87171]/40", bg: "bg-[#F87171]/10", text: "text-[#F87171]" },
}

export function GlobalAlert({ type, message }: GlobalAlertProps) {
    const colors = alertColors[type]
    const [visible, setVisible] = useState(false)
    const [render, setRender] = useState(true) // Keep in DOM while fading out

    useEffect(() => {
        setVisible(true) // Trigger fade-in

        // Start fade-out after 3.5s
        const timer = setTimeout(() => setVisible(false), 3500)

        // Remove from DOM after fade-out completes (500ms)
        const removeTimer = setTimeout(() => setRender(false), 4000)

        return () => {
            clearTimeout(timer)
            clearTimeout(removeTimer)
        }
    }, [])

    if (!render) return null

    return (
        <div
            className={`fixed top-22 left-1/2 z-60 w-[92%] max-w-3xl -translate-x-1/2 transition-all duration-500 ease-in-out ${visible ? "translate-y-0 opacity-100" : "-translate-y-8 opacity-0"}`}
        >
            <div
                role="alert"
                className={`alert backdrop-blur-xl bg-[#0B1020]/90 border ${colors.border} shadow-xl flex items-center gap-3 transition-all duration-500`}
            >
                <span className="h-10 w-1 rounded-full" style={{ backgroundColor: colors.text.replace("text-", "") }} />
                <span className={`text-sm font-medium ${colors.text}`}>{message}</span>
            </div>
        </div>
    )
}

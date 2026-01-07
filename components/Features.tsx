import FeatureCard from "./FeatureCard"

export default function Features() {
    return (
        <section className="w-full py-16">
            {/* Section Heading */}
            <div className="mb-10 text-center">
                <h2 className="text-3xl sm:text-4xl font-semibold text-[#E6EDF3]">
                    Everything your society needs
                </h2>
                <p className="mt-3 text-[#AAB4C3] max-w-2xl mx-auto">
                    A calm, secure, and modern platform designed to simplify daily
                    operations and strengthen community trust.
                </p>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 place-items-stretch justify-items-center">
                <FeatureCard
                    sourceImage="lock"
                    altText="lock logo"
                    title="Centralized Security"
                    description="Real-time tracking of entries, exits, visitors, and incidents — all managed from a single, secure dashboard designed for calm and control."
                />
                <FeatureCard
                    sourceImage="building"
                    altText="building logo"
                    title="Resident and Roles"
                    description="Manage residents, guards, vendors, and administrators with clearly defined roles and permissions for smooth daily operations."
                />
                <FeatureCard
                    sourceImage="loudspeaker"
                    altText="loudspeaker logo"
                    title="Announcements & Communication"
                    description="Send important updates, alerts, and notices to residents instantly — no more lost messages or scattered WhatsApp groups."
                />
                <FeatureCard
                    sourceImage="camera"
                    altText="camera logo"
                    title="Incident Reporting"
                    description="Allow residents or guards to report incidents with images and descriptions, ensuring transparency and faster resolution."
                />
                <FeatureCard
                    sourceImage="information"
                    altText="information logo"
                    title="Activity History"
                    description="Automatically maintain logs of visitors, deliveries, vehicles, and events — searchable, organized, and always available."
                />
                <FeatureCard
                    sourceImage="puzzle"
                    altText="puzzle logo"
                    title="Designed for Simplicity"
                    description="A clean, aurora-inspired interface built to be intuitive, calm, and easy to use for everyone — from residents to management."
                />
            </div>
        </section>
    )
}

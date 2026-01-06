import FeatureCard from "./FeatureCard"

export default function Features() {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 place-items-stretch">
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
    )
};
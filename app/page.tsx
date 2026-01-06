import Image from "next/image";
import { Hero, FeatureCard } from "@/components";

export default function Home() {
    return (
        <div>
            <Hero />
            <div className="flex">
                <FeatureCard />
                <FeatureCard />
                <FeatureCard />
                <FeatureCard />
                <FeatureCard />
                <FeatureCard />
            </div>
            Below, the rest is under contruction.
        </div>
    );
}

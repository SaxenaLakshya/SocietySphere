import Image from "next/image";
import { Hero, Features, CTASection } from "@/components";

export default function Home() {
    return (
        <div>
            <Hero />
            <Features />
            <CTASection />
        </div>
    );
}

import Image from "next/image"
import { FeatureCardProps } from "@/types"

export default function FeatureCard({ sourceImage, altText, title, description }: FeatureCardProps) {
    return (
        <div className="m-10 w-96 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">

            {/* Feature Icon */}
            <div className="flex justify-center pt-10">
                <div className="p-4 rounded-xl bg-white/20 backdrop-blur-md">
                    <Image
                        src={`/${sourceImage}.svg`}
                        alt={`${altText}`}
                        width={80}
                        height={80}
                    />
                </div>
            </div>

            {/* Card Content */}
            <div className="px-6 py-6 text-center text-white">
                <h2 className="text-lg font-semibold mb-2">
                    {`${title}`}
                </h2>
                <p className="text-sm text-white/80 leading-relaxed">
                    {`${description}`}
                </p>
            </div>
        </div>
    )
};
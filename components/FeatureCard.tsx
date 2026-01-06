import Image from "next/image"

export default function FeatureCard() {
    return (
        <div className="m-10 w-96 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">

            {/* Feature Icon */}
            <div className="flex justify-center pt-10">
                <div className="p-4 rounded-xl bg-white/20 backdrop-blur-md">
                    <Image
                        src="/lock.svg"
                        alt="lock icon"
                        width={80}
                        height={80}
                    />
                </div>
            </div>

            {/* Card Content */}
            <div className="px-6 py-6 text-center text-white">
                <h2 className="text-lg font-semibold mb-2">
                    Secure by Design
                </h2>
                <p className="text-sm text-white/80 leading-relaxed">
                    Built with modern security practices to keep your data protected at all times.
                </p>
            </div>
        </div>
    )
};
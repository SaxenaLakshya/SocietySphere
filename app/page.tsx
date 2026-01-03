import Image from "next/image";
import { ebGaramond } from "@/lib/fonts";

export default function Home() {
    return (
        <div className="night-sky-gradient h-screen text-[#E6EDF3] w-full flex items-center justify-center">
            <Image
                src="favicon.svg"
                alt="SocietySphere Logo"
                height={600}
                width={600}
            />
            <h1 className={`${ebGaramond.className} text-9xl`}>Society<span className="text-[#F2C94C]">Sphere</span></h1>
        </div>
    );
}

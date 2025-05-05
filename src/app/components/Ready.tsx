import Image from "next/image";
import Link from "next/link";

export default function Ready() {
  return (
    <div
        style={{
            backgroundImage: "url('/images/oval.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
        }}
        className="w-full p-8 flex flex-col items-center relative md:justify-between gap-4 overflow-hidden">
            <h1 className="font-bold text-2xl md:text-5xl">Ready to start?</h1>
            <p>Sign up for free and start building with AI</p>
					<Link
						href="/create"
						className="bg-purple-600 hover:bg-purple-700 text-white font-medium py-3 px-8 rounded-full inline-flex items-center justify-center gap-2 transition-all text-lg"
					>
						Learn More
					</Link>

                        <div className="absolute -top-10 left-0">
                            <Image
                                src="/images/cone.png"
                                alt="Cone"
                                width={130}
                                height={130}
                                className="w-full opacity-20 md:opacity-100 animate-float"
                            />
                        </div>

                                    <div className="absolute transform rotate-180 -bottom-10 right-0">
                                        <Image
                                            src="/images/cone.png"
                                            alt="Cone"
                                            width={130}
                                            height={130}
                                            className="w-full opacity-20 md:opacity-100 animate-float"
                                        />
                                    </div>
        </div>
  )
}

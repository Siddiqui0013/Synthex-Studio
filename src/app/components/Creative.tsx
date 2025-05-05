import Image from "next/image";

export default function Creative() {
    return (
        <div
            style={{
                backgroundImage: "url('/images/oval.png')",
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
            className="w-full relative min-h-screen p-8 flex flex-col md:flex-row items-center md:justify-between"
        >
                <Image
                    src="/images/creative.png"
                    alt="Strategy"
                    width={500}
                    height={500}
                    className="z-10"
                    style={{
                      animation: "spin 5s ease-in-out infinite",
                      animationDelay: "0.2s",
                    }}
                />

                            <div className="absolute top-[15%] left-[7%] z-20">
                                <Image
                                    src="/images/creative-bg.png"
                                    alt="Cone"
                                    width={370}
                                    height={370}
                                    className=" w-full opacity-20 md:opacity-100 animate-float"
                                />
                            </div>

            <div className="transform z-0 md:-translate-x-14 border border-gray-600 md:pl-16 py-8 px-2 
            rounded-3xl w-full md:min-w-[60%]">
                <h1 className="text-2xl md:text-4xl leading-tight text-center md:text-left">
                Streamline Your Creative Process, Generate Content and Designs Instantly
                </h1>
                <div className="w-full flex flex-col md:flex-row items-center gap-12 py-8 text-white">
      
      <div className="flex flex-col items-start text-left max-w-xs">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-12 h-12 text-purple-500 mb-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1}
        >
          <path d="M9 12l2 2 4-4" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" />
          <path d="M15 9h2v2" stroke="currentColor" strokeWidth="2" />
        </svg>
        <h2 className="text-xl font-semibold">Generate Ideas Faster with AI</h2>
        <p className="text-gray-300 mt-2">
          Whether you’re crafting marketing<br />copy, developing visuals
        </p>
      </div>

      <div className="flex flex-col items-start text-left max-w-xs">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-12 h-12 text-purple-500 mb-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" />
          <path d="M9 12l3-3 3 3" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M12 15v-6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <h2 className="text-xl font-semibold">Generate Ideas Faster with AI</h2>
        <p className="text-gray-300 mt-2">
          Whether you’re crafting marketing<br />copy, developing visuals
        </p>
      </div>
    </div>
            </div>
        </div>
    );
}
import Image from "next/image";
import Link from "next/link";

export default function Strategy() {
	return (
		<div
			style={{
				backgroundImage: "url('/images/oval.png')",
				backgroundSize: "cover",
				backgroundPosition: "center",
			}}
			className="w-full relative min-h-screen p-8 flex flex-col md:flex-row items-center md:justify-between gap-8"
		>
            <div className="absolute -top-10 -left-10">
                <Image
                    src="/images/cone.png"
                    alt="Cone"
                    width={300}
                    height={300}
                    className="w-full opacity-20 md:opacity-100 animate-float"
                />
            </div>
			<div className="flex flex-col md:w-[30%] items-center justify-center text-white">
				<Image
					src="/images/image5.png"
					alt="Strategy"
					width={300}
					height={300}
					className="w-full bg-transparent"
				/>
				<div className="md:text-center text-left mt-6 flex gap-10">
					<div className="box">
						<h1 className="text-2xl md:text-3xl font-bold">2001+</h1>
						<p>Happy Customers</p>
					</div>
					<div className="box">
						<h1 className="text-2xl md:text-3xl font-bold">4001+</h1>
						<p>AI Driven Solutions</p>
					</div>
				</div>
			</div>

			<div className="flex flex-col text-center md:text-left justify-between w-full md:w-[60%] h-full text-white">
				<h1 className="text-3xl md:text-6xl font-bold leading-tight">
					Content Strategy with AI Driven Solutions
				</h1>
				<p className="text-lg md:text-xl mt-6 font-light text-gray-200">
					Our platform enables businesses, creators, and innovators to generate
					high-quality content, designs, and ideas in seconds. Whether you’re crafting
					marketing copy, developing visuals, or brainstorming new concepts,
					AI Generate accelerates your creative process.
				</p>
				<div className="mt-6">
					<Link
						href="/create"
						className="bg-purple-600 hover:bg-purple-700 text-white font-medium py-3 px-8 rounded-full inline-flex items-center justify-center gap-2 transition-all text-lg"
					>
						Learn More
					</Link>
				</div>
			</div>
		</div>
	);
}
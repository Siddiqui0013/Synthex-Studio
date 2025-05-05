export default function Services() {
    return (
      <div 
      style={{
        backgroundImage: "url('/images/oval.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="w-full overflow-hidden">

        <div className="flex flex-col md:flex-row gap-4 items-start justify-start w-full md:p-8 p-4">
        <h1 className="font-bold text-2xl md:text-5xl">
        Transform Your Vision into Reality with AI-Driven Innovation!
        </h1>
        <p className="text-lg font-light text-gray-200 max-w-2xl">
          Our platform enables businesses, creators, and innovators to generate high-quality content, designs, and ideas in seconds. Whether you’re crafting marketing copy, developing visuals, or brainstorming new concepts, AI Generate accelerates your creative process.
        </p>
        </div>

        <div className="md:relative w-full min-h-[700px] overflow-hidden flex items-center justify-center flex-col gap-4">

        <div className="md:absolute top-[20%] left-[10%] w-[300px] space-y-4 border border-white/20 rounded-2xl p-4 bg-white/5">
          <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
            <path d="M10 10H50V15H15V50H10V10Z" stroke="#7C3AED" strokeWidth="2" />
            <path d="M20 20H60V25H25V60H20V20Z" stroke="#7C3AED" strokeWidth="2" />
            <rect x="30" y="30" width="30" height="30" rx="4" fill="#7C3AED" />
          </svg>
          <p className="text-lg text-gray-200 max-w-2xl">Generate Content And Designs Instantly</p>
        </div>
  
        <div className="md:absolute top-1/2 left-1/2 transform md:-translate-x-1/2 md:-translate-y-1/2 
         w-[300px] space-y-4 border border-white/20 rounded-2xl p-4 bg-white/5">
          <svg width="100" height="60" viewBox="0 0 100 60" fill="none">
            <circle cx="20" cy="20" r="10" fill="#7C3AED" />
            <circle cx="80" cy="40" r="10" fill="#7C3AED" />
            <path d="M25 25C40 30 60 30 75 35" stroke="#7C3AED" strokeWidth="3" fill="none" />
          </svg>
          <p className="text-lg text-gray-200 max-w-2xl">Creating Together Just a Few Clicks!</p>
        </div>
  
        <div className="md:absolute bottom-[20%] right-[10%]  w-[300px] space-y-4 border border-white/20 rounded-2xl p-4 bg-white/5">
          <svg width="100" height="80" viewBox="0 0 100 80" fill="none">
            <circle cx="20" cy="60" r="8" fill="#7C3AED" />
            <circle cx="50" cy="60" r="8" fill="#7C3AED" />
            <circle cx="20" cy="20" r="8" fill="#7C3AED" />
            <circle cx="50" cy="20" r="8" fill="#7C3AED" />
            <circle cx="80" cy="20" r="8" fill="#7C3AED" />
  
            <line x1="20" y1="28" x2="20" y2="52" stroke="#7C3AED" strokeWidth="3" />
            <line x1="50" y1="28" x2="50" y2="52" stroke="#7C3AED" strokeWidth="3" />
  
            <line x1="28" y1="20" x2="42" y2="20" stroke="#7C3AED" strokeWidth="3" />
            <line x1="58" y1="20" x2="72" y2="20" stroke="#7C3AED" strokeWidth="3" />
            <line x1="28" y1="60" x2="42" y2="60" stroke="#7C3AED" strokeWidth="3" />
  
            <path d="M80 28C80 40 90 40 90 50" stroke="#7C3AED" strokeWidth="3" fill="none" />
          </svg>
          <p className="text-lg text-gray-200 max-w-2xl">Content Strategy with AI-Driven Solutions</p>
        </div>

        <p className="md:absolute bottom-[20%] left-[10%] md:w-2/4 p-2 text-center">
        Our platform enables businesses, creators, and innovators to generate high-quality content, designs, and ideas in seconds. Whether you’re crafting marketing
        </p>

        <div className="text-center hidden  md:absolute top-[20%] right-[10%] md:flex flex-col  gap-10">
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

      </div>
    )
  }
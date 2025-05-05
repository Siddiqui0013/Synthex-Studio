import Image from 'next/image';
import Link from 'next/link';
import Navbar from './Navbar';

export default function HeroSection() {
  return (
    <div
    style={{
        backgroundImage: "url('/images/hero-gr.png'), url('/images/hero-bg.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      
      className='flex flex-col items-center justify-center backdrop-brightness-50 md:min-h-screen w-full md:pt-4'>
        <Navbar />
        
        <div 
    className="relative w-full min-h-screen px-6 pt-8 flex flex-col items-center ">
      <div className="absolute left-4 md:left-12 opacity-20 md:opacity-100 md:bottom-32 w-32 md:w-44 lg:w-56 animate-float">
        <Image
          src="/images/gear.png"
          alt="3D Gear"
          width={200}
          height={200}
          priority
        />
      </div>
      
      <div className="absolute right-4 md:right-12 bottom-40 md:bottom-24 opacity-20 md:opacity-100 w-36 md:w-48 lg:w-64 animate-float-delayed">
        <Image
          src="/images/rocket.png"
          alt="3D Rocket"
          width={220}
          height={220}
          priority
        />
      </div>
      
      <div className="relative z-10 text-center md:px-12 px-4">
        <div className="mb-4">
          <span className="bg-white/10 backdrop-blur-sm text-white px-4 py-1 rounded-full text-sm">
            AI WEBSITE BUILDER
          </span>
        </div>
        
        <h1 className="text-4xl md:text-7xl font-bold text-white mb-6 leading-tight">
          From Thought to Product - Build SaaS & Web Apps in Minutes!
        </h1>
        
        <p className="text-white/80 text-lg md:text-xl mb-8 max-w-3xl mx-auto">
          Our platform enables businesses, creators, and innovators to generate high-quality content, designs, and ideas in seconds.
          Whether you are crafting marketing copy, developing visuals, or brainstorming new concepts.
        </p>
        
        <div className="flex flex-col md:flex-row items-center justify-center gap-4">
          <Link 
            href="/create" 
            className="bg-purple-600 hover:bg-purple-700 text-white font-medium py-3 px-8 rounded-full flex items-center justify-center gap-2 transition-all text-lg"
          >
            Create with AI
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 4L10.59 5.41L16.17 11H4V13H16.17L10.59 18.59L12 20L20 12L12 4Z" fill="currentColor"/>
            </svg>
          </Link>
        </div>
        
        <p className="text-white/60 text-sm mt-6">
          Start for free. No credit card required.
        </p>
      </div>
    </div>
    </div>
  );
}
import Image from "next/image"
import Link from "next/link"
import { ChevronRight } from "lucide-react"

export default function ThirdSection() {
  return (
    <main className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="flex items-center justify-between px-4 py-4 md:px-8 lg:px-16">
        <div className="flex items-center">
          <div className="flex items-center">
            <div className="h-8 w-8 rounded-full bg-[#00A8FF] flex items-center justify-center mr-2">
              <div className="h-4 w-4 rounded-full bg-white"></div>
            </div>
            <span className="text-[#00A8FF] font-bold text-xl">HealNet</span>
          </div>
        </div>
        <div className="hidden md:flex items-center space-x-6">
          <Link href="#" className="text-sm font-medium hover:text-[#00A8FF]">
            Home
          </Link>
          <Link href="#" className="text-sm font-medium hover:text-[#00A8FF]">
            Services
          </Link>
          <Link href="#" className="text-sm font-medium hover:text-[#00A8FF]">
            Find Doctors
          </Link>
          <Link href="#" className="text-sm font-medium hover:text-[#00A8FF]">
            About us
          </Link>
          <Link href="#" className="text-sm font-medium hover:text-[#00A8FF]">
            Blog
          </Link>
          <Link href="#" className="text-sm font-medium hover:text-[#00A8FF]">
            Contact us
          </Link>
        </div>
        <Link
          href="#"
          className="hidden md:block bg-[#00A8FF] text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-[#0096e0] transition-colors"
        >
          Join us
        </Link>
        <button className="md:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
        </button>
      </nav>

      {/* Hero Section */}
      <section className="relative px-4 py-12 md:py-16 lg:py-20 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 items-center">
          <div className="z-10">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Your <span className="text-[#00A8FF]">Trusted Partner</span> <br />
              in <span className="text-[#00A8FF]">Digital</span> Healthcare.
            </h1>
            <p className="text-gray-600 mb-6 max-w-lg">
              Empowering Your Health at Every Step. Experience personalized medical care from the comfort of your home.
              Connect with certified doctors, or medical experts for a consultation. Need immediate assistance to take
              care of your health?
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Link
                href="#"
                className="bg-[#00A8FF] text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-[#0096e0] transition-colors flex items-center justify-center"
              >
                Book an appointment <ChevronRight className="ml-2 h-4 w-4" />
              </Link>
              <Link
                href="#"
                className="text-[#00A8FF] border border-[#00A8FF] px-6 py-3 rounded-full text-sm font-medium hover:bg-[#f0f9ff] transition-colors flex items-center justify-center"
              >
                Get Started
              </Link>
            </div>
            <p className="text-sm text-gray-500 mb-6">Trusted by millions across the globe</p>
            <div className="grid grid-cols-3 gap-4 max-w-md">
              <div className="bg-[#00A8FF] text-white p-4 rounded-lg text-center">
                <div className="text-2xl font-bold">24/7</div>
                <div className="text-xs">Online Support</div>
              </div>
              <div className="bg-[#00A8FF] text-white p-4 rounded-lg text-center">
                <div className="text-2xl font-bold">100+</div>
                <div className="text-xs">Doctors</div>
              </div>
              <div className="bg-[#00A8FF] text-white p-4 rounded-lg text-center">
                <div className="text-2xl font-bold">1M+</div>
                <div className="text-xs">Happy Patients</div>
              </div>
            </div>
          </div>
          <div className="relative hidden md:block">
            <div className="absolute top-0 right-0 w-full h-full bg-[#f0f9ff] rounded-bl-[100px] -z-10"></div>
            <Image
              src="/placeholder.svg?height=600&width=500"
              alt="Doctor with stethoscope"
              width={500}
              height={600}
              className="relative z-10 mx-auto"
            />
            <div className="absolute top-10 right-10 bg-white p-4 rounded-lg shadow-lg z-20">
              <div className="flex items-center mb-2">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="h-8 w-8 rounded-full bg-gray-200 border-2 border-white"></div>
                  ))}
                </div>
                <div className="ml-2">
                  <div className="font-bold">2400+</div>
                  <div className="text-xs text-gray-500">Happy Customers</div>
                </div>
              </div>
              <div className="flex items-center">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <svg key={i} className="h-4 w-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <div className="ml-2 text-xs text-gray-500">5.0 (2400)</div>
              </div>
            </div>
            <div className="absolute bottom-10 left-0 bg-white p-3 rounded-lg shadow-lg z-20">
              <div className="text-xs font-medium">Easy Appointment Booking</div>
            </div>
          </div>
        </div>
      </section>

      {/* AI Chat Section */}
      <section className="px-4 py-12 md:px-8 lg:px-16">
        <div className="max-w-4xl mx-auto">
          <div className="border border-[#e0f2ff] rounded-xl p-6 relative">
            <div className="absolute -top-3 left-6 bg-white px-2 text-[#00A8FF] font-medium">
              Ask your problem to AI
            </div>
            <div className="flex items-center">
              <input
                type="text"
                placeholder="Type your message..."
                className="flex-1 border-none outline-none text-gray-700"
              />
              <button className="bg-[#00A8FF] text-white px-4 py-2 rounded-full text-sm">Chat with AI</button>
            </div>
          </div>
        </div>
      </section>

      {/* Specialties Section */}
      <section className="px-4 py-12 md:py-16 lg:py-20 md:px-8 lg:px-16 bg-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="relative w-64 h-64 mx-auto">
              <div className="absolute inset-0 rounded-full bg-[#00A8FF] flex items-center justify-center">
                <div className="text-white text-center">
                  <div className="font-bold">Our</div>
                  <div className="font-bold text-xl">Speciality</div>
                </div>
              </div>

              {/* Specialty Icons */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-lg">
                <div className="h-10 w-10 rounded-full bg-[#f0f9ff] flex items-center justify-center text-[#00A8FF]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                  </svg>
                </div>
              </div>

              <div className="absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-lg">
                <div className="h-10 w-10 rounded-full bg-[#f0f9ff] flex items-center justify-center text-[#00A8FF]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </svg>
                </div>
              </div>

              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 bg-white p-2 rounded-full shadow-lg">
                <div className="h-10 w-10 rounded-full bg-[#f0f9ff] flex items-center justify-center text-[#00A8FF]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                    <polyline points="9 22 9 12 15 12 15 22"></polyline>
                  </svg>
                </div>
              </div>

              <div className="absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-lg">
                <div className="h-10 w-10 rounded-full bg-[#f0f9ff] flex items-center justify-center text-[#00A8FF]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M20 11A8.1 8.1 0 0 0 4.5 9"></path>
                    <path d="M4 22h16"></path>
                    <path d="M12 12a4 4 0 0 0-4 4v4h8v-4a4 4 0 0 0-4-4z"></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-4">There is no way to live life now unless you always want to.</h2>
            <p className="text-gray-600 mb-8">
              Chat enforcement photography lorem or semirural propaganda gate in. Police cannot hold no, pregnant
              photography wants overtime at but the normal vehicle.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-6">
              <button className="bg-white border border-gray-200 rounded-full py-2 px-4 text-sm hover:bg-gray-50 transition-colors">
                Dentist
              </button>
              <button className="bg-white border border-gray-200 rounded-full py-2 px-4 text-sm hover:bg-gray-50 transition-colors">
                Pediatric
              </button>
              <button className="bg-white border border-gray-200 rounded-full py-2 px-4 text-sm hover:bg-gray-50 transition-colors">
                Cardiology
              </button>
              <button className="bg-[#00A8FF] text-white rounded-full py-2 px-4 text-sm hover:bg-[#0096e0] transition-colors">
                Orthopedic
              </button>
              <button className="bg-[#00A8FF] text-white rounded-full py-2 px-4 text-sm hover:bg-[#0096e0] transition-colors">
                Traumatology
              </button>
              <button className="bg-[#00A8FF] text-white rounded-full py-2 px-4 text-sm hover:bg-[#0096e0] transition-colors">
                Anesthesiology
              </button>
              <button className="bg-white border border-gray-200 rounded-full py-2 px-4 text-sm hover:bg-gray-50 transition-colors">
                Rheumatology
              </button>
              <button className="bg-white border border-gray-200 rounded-full py-2 px-4 text-sm hover:bg-gray-50 transition-colors">
                Audiology
              </button>
              <button className="bg-white border border-gray-200 rounded-full py-2 px-4 text-sm hover:bg-gray-50 transition-colors">
                Oncohema
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="px-4 py-12 md:py-16 lg:py-20 md:px-8 lg:px-16 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">
            Top <span className="text-[#00A8FF]">services</span> we offer
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                <div className="h-12 w-12 rounded-full bg-[#f0f9ff] flex items-center justify-center text-[#00A8FF] mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Online Consultation</h3>
                <p className="text-gray-600 mb-4">
                  Connect with certified doctors from the comfort of your home for personalized medical advice.
                </p>
                <Link href="#" className="text-[#00A8FF] font-medium flex items-center hover:underline">
                  Learn more <ChevronRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="#"
              className="bg-[#7000FF] text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-[#6000d0] transition-colors inline-block"
            >
              Read More
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}

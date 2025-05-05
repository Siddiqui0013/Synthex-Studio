import { Facebook, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer
    style={{
        backgroundImage: "url('/images/oval.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
    }}
    className="w-full py-8 px-8 bg-white/5">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="flex flex-col md:flex-row justify-between gap-8 pb-8">

          {/* Navigation Sections */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 flex-1">
            {/* Explore */}
            <div>
              <h3 className="text-purple-500 font-semibold mb-4">EXPLORE</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Our Mission</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Meet the Team</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Success Stories</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Collaborations</a></li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-purple-500 font-semibold mb-4">SERVICES</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Creative Collaborations</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Branding & Visual Identity</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Workshops & Masterclasses</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Consultation Services</a></li>
              </ul>
            </div>

            {/* Connect */}
            <div>
              <h3 className="text-purple-500 font-semibold mb-4">CONNECT</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Contact Us</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Join Our Newsletter</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Follow Us</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Instagram</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Like Us on Facebook</a></li>
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h3 className="text-purple-500 font-semibold mb-4">RESOURCES</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Creative Tools</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Industry Trends</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Event</a></li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h3 className="text-purple-500 font-semibold mb-4">LEGAL</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Cookie Policy</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Refund Policy</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Copyright</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex gap-8">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">Terms</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">Cookies</a>
          </div>
          
          <div className="text-gray-400">
            © 2024 By Creative. All Rights Reserved.
          </div>
          
          <div className="flex gap-4">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <Facebook />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <Linkedin />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <Instagram />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
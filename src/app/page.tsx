import HeroSection from './components/HeroSection'
import Video from './components/Video'
import Generated from './components/Generated'
import Strategy from './components/Strategy'
import Creative from './components/Creative'
import Services from './components/Services'
import Ready from './components/Ready'
import FAQSection from './components/Faq'
import Footer from './components/Footer'


export default function page() {
  return (
    <div className='overflow-x-hidden'>
    <HeroSection />
    <Video />
    <Generated />
    <Strategy />
    <Creative />
    <Services />
    <Ready />
    <FAQSection />
    <Footer />
    </div>
  )
}

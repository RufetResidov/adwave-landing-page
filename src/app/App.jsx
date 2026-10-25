import Header from '../components/layout/Header.jsx'
import Footer from '../components/layout/Footer.jsx'
import HeroSection from '../components/sections/HeroSection.jsx'
import IntroSection from '../components/sections/IntroSection.jsx'
import HowItWorksSection from '../components/sections/HowItWorksSection.jsx'
import PlatformSection from '../components/sections/PlatformSection.jsx'
import BenefitsSection from '../components/sections/BenefitsSection.jsx'
import UseCasesSection from '../components/sections/UseCasesSection.jsx'
import PreviewSection from '../components/sections/PreviewSection.jsx'
import FaqSection from '../components/sections/FaqSection.jsx'
import CtaSection from '../components/sections/CtaSection.jsx'
import { useReveal } from '../hooks/useReveal.js'

export default function App() {
  useReveal()
  return <><Header /><main><HeroSection /><IntroSection /><HowItWorksSection /><PlatformSection /><BenefitsSection /><UseCasesSection /><PreviewSection /><FaqSection /><CtaSection /></main><Footer /></>
}

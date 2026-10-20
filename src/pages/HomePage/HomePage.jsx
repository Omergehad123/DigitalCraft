import HeroSection from './HeroSection'
import AboutSection from './AboutSection'
import ServicesSection from './ServicesSection'
import ProjectsSection from './ProjectsSection'
import AdvantagesSection from './AdvantagesSection'
import OurMethodology from './OurMethodology'
import CTAsection from '../../component/layout/CTAsection'

export default function HomePage() {
    return (
        <div >
            <HeroSection />
            <AboutSection />
            <ServicesSection />
            <ProjectsSection />
            <AdvantagesSection />
            <OurMethodology />
            <CTAsection />
        </div>
    )
}
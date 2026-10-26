import { motion } from 'framer-motion';
import HeroSection from './HeroSection';
import AboutSection from './AboutSection';
import ServicesSection from './ServicesSection';
import ProjectsSection from './ProjectsSection';
import AdvantagesSection from './AdvantagesSection';
import OurMethodology from './OurMethodology';
import CTAsection from '../../component/layout/CTAsection';
import { useEffect } from 'react';

export default function HomePage() {
    // Scroll to the top of the page on component mount
    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
    }, []);
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="w-full"
        >
            <HeroSection />
            <AboutSection />
            <ServicesSection />
            <ProjectsSection />
            <AdvantagesSection />
            <OurMethodology />
            <CTAsection />
        </motion.div>
    );
}

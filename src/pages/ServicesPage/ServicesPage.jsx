import { motion } from 'framer-motion';
import HeroSection from './HeroSection';
import ServicesSection from './ServicesSection';
import CTAsection from '../../component/layout/CTAsection';
import { useEffect } from 'react';

function ServicesPage() {
    // Scroll to the top of the page on component mount
    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
    }, []);
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="w-full bg-(--bg-color)"
        >
            <HeroSection />
            <ServicesSection />
            <CTAsection />
        </motion.div>
    );
}

export default ServicesPage;

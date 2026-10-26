import { motion } from 'framer-motion';
import HeroSection from './HeroSection';
import ContactFormSection from './ContactFormSection';
import { useEffect } from 'react';

export default function ContactPage() {
    // Scroll to the top of the page on component mount
    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
    }, []);
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
            className='bg-(--bg-color) min-h-screen w-full'
        >
            <HeroSection />
            <ContactFormSection />
        </motion.div>
    );
}



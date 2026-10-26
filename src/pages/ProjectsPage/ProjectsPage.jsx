import { useEffect } from 'react';
import { motion } from 'framer-motion';
import HeroSection from './HeroSection';
import ProjectsSection from './ProjectsSection';
import useProjectsStore from '../../store/projectsStore';
import CTAsection from '../../component/layout/CTAsection';

function ProjectsPage() {
    const categories = useProjectsStore((state) => state.categories);
    const activeCategory = useProjectsStore((state) => state.activeCategory);
    const setActiveCategory = useProjectsStore((state) => state.setActiveCategory);

    const categoryNames = categories.map((c) => c.name);

    const handleCategoryChange = (categoryName) => {
        setActiveCategory(categoryName);
        const targetCategory = categories.find((c) => c.name === categoryName);
        if (targetCategory) {
            const targetElement = document.getElementById(`category-${targetCategory.id}`);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
        }
    };

    // Scroll to the top of the page on component mount
    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
    }, []);

    return (
        <motion.main
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="w-full bg-(--bg-color)"
        >
            <HeroSection
                categories={categoryNames}
                active={activeCategory}
                onChange={handleCategoryChange}
                scrollTo="#projects"
            />
            <ProjectsSection />
            <CTAsection />
        </motion.main>
    );
}

export default ProjectsPage;
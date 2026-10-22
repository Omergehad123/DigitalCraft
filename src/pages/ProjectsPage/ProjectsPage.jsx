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

    return (
        <main className="w-full bg-[#05130d]">
            <HeroSection
                categories={categoryNames}
                active={activeCategory}
                onChange={handleCategoryChange}
                scrollTo="#projects"
            />
            <ProjectsSection />
            <CTAsection />
        </main>
    );
}

export default ProjectsPage;
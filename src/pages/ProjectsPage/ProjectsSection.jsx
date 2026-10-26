import { useEffect, useRef } from 'react';
import { FaExternalLinkAlt } from 'react-icons/fa';
import { FiArrowDown, FiChevronRight } from 'react-icons/fi';
import { motion } from 'framer-motion';
import useProjectsStore from '../../store/projectsStore';
import useLanguageStore from '../../store/languageStore';


/**
 * Hook to manage smooth horizontal translation based on vertical scroll.
 */
function useHorizontalScrollTrack({ containerRef, trackRef, progressRef, isAr }) {
  useEffect(() => {
    let frameId;

    const updateScroll = () => {
      if (!containerRef.current || !trackRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const scrollableDistance = containerRef.current.offsetHeight - window.innerHeight;

      if (scrollableDistance <= 0) return;

      const progress = Math.min(Math.max(-rect.top / scrollableDistance, 0), 1);
      const track = trackRef.current;
      const maxTranslate = Math.max(0, track.scrollWidth - window.innerWidth + 96);

      const sign = isAr ? '' : '-';
      track.style.transform = `translate3d(${sign}${progress * maxTranslate}px, 0, 0)`;

      if (progressRef.current) {
        progressRef.current.style.width = `${progress * 100}%`;
      }
    };

    const handleScroll = () => {
      cancelAnimationFrame(frameId);
      frameId = requestAnimationFrame(updateScroll);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll);
    updateScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
      cancelAnimationFrame(frameId);
    };
  }, [isAr, containerRef, trackRef, progressRef]);
}

/**
 * Visual media container for project card (image, badges, external link).
 */
function ProjectVisual({ project, projectLink }) {
  return (
    <div className="relative h-52 sm:h-56 w-full rounded-xl overflow-hidden border border-black/10 bg-linear-to-br from-emerald-950 via-[#062016] to-[#03110b]">
      <img
        src={project.image}
        alt={project.title}
        loading="lazy"
        className="w-full h-full object-cover opacity-80 group-hover:opacity-95 group-hover:scale-105 transition-all duration-500"
      />
      <div className="absolute inset-0 bg-linear-to-t from-[#061911] via-transparent to-black/30" />

      {/* Top Floating Controls */}
      <div className="absolute top-3 start-3 end-3 flex justify-between items-start">
        <span className="text-[11px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full bg-black/60 text-emerald-300 border border-emerald-500/30 backdrop-blur-sm">
          {project.category}
        </span>
        {projectLink && (
          <a
            href={projectLink}
            target="_blank"
            rel="noreferrer"
            className="p-2 rounded-full bg-black/60 text-white/80 hover:text-white hover:bg-(--second-color) border border-white/10 transition-colors"
            aria-label={`Open direct link to ${project.title}`}
          >
            <FaExternalLinkAlt className="w-3 h-3" />
          </a>
        )}
      </div>

      {/* Bottom Floating Info */}
      <div className="absolute bottom-3 start-3 end-3">
        <p className="text-xs text-white/90 line-clamp-1 font-medium">{project.tagline}</p>
        {project.badges?.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mt-2">
            {project.badges.map((badge, idx) => (
              <span
                key={idx}
                className="text-[10px] font-medium px-2 py-0.5 rounded-md bg-emerald-400/20 text-emerald-200 border border-emerald-400/25"
              >
                {badge}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

/**
 * Textual details for project card (number, title, tools, footer link).
 */
function ProjectDetails({ project, projectLink, isAr, isTop }) {
  return (
    <div className={`${isTop ? 'mb-4' : 'mt-4'} flex flex-col justify-between flex-1`}>
      <div>
        <div className="flex items-baseline justify-between gap-4">
          <span className="text-4xl sm:text-5xl font-black text-(--main-color)/20 group-hover:text-(--second-color)/35 tracking-tight font-serif transition-colors">
            {project.number}
          </span>
          <div className="text-end">
            <h3 className="text-xl sm:text-2xl font-bold text-(--main-color) group-hover:text-(--second-color) transition-colors">
              {project.title}
            </h3>
            <p className="text-xs text-(--second-color) font-semibold tracking-wide">
              {project.category}
            </p>
          </div>
        </div>

        <div className="mt-4 pt-3 border-t border-(--second-color)/10">
          <p className="text-sm font-bold text-(--main-color) tracking-wide mb-1.5">
            {isAr ? 'الأدوات والتقنيات' : 'Tools and features'}
          </p>
          <p className="text-xs text-[#52726B] leading-relaxed font-mono">{project.tools}</p>
        </div>
      </div>

      <div className="pt-3 flex items-center justify-between text-xs text-(--main-color)/50">
        {projectLink ? (
          <a
            href={projectLink}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1 font-semibold text-(--second-color) hover:text-(--main-color) transition-colors"
          >
            {isAr ? 'رابط مباشر' : 'Direct link'} <FiChevronRight className="rtl:rotate-180" />
          </a>
        ) : (
          <span className="inline-flex items-center gap-1 font-semibold text-(--second-color) hover:text-(--main-color) transition-colors">
            {isAr ? 'استعراض المشروع' : 'Explore project'} <FiChevronRight className="rtl:rotate-180" />
          </span>
        )}
        <span className="font-mono text-[11px] text-(--main-color)/40">#{project.id}</span>
      </div>
    </div>
  );
}

/**
 * Single project card with alternating top/bottom visual placement.
 */
function ProjectCard({ project, index, isAr }) {
  const isImageTop = index % 2 === 0;
  const projectLink = project.link || project.demo;

  return (
    <motion.article
      whileHover={{ y: -8, scale: 1.01 }}
      transition={{ duration: 0.3 }}
      className="w-[360px] sm:w-[420px] lg:w-[460px] shrink-0 h-[490px] sm:h-[520px] rounded-2xl border border-[rgba(22,117,79,0.15)] bg-white/95 backdrop-blur-md p-6 flex flex-col justify-between group hover:border-(--second-color)/50 hover:shadow-2xl hover:shadow-[rgba(1,62,44,0.12)] transition-colors duration-300"
    >
      {isImageTop ? (
        <>
          <ProjectVisual project={project} projectLink={projectLink} />
          <ProjectDetails project={project} projectLink={projectLink} isAr={isAr} isTop={false} />
        </>
      ) : (
        <>
          <ProjectDetails project={project} projectLink={projectLink} isAr={isAr} isTop={true} />
          <ProjectVisual project={project} projectLink={projectLink} />
        </>
      )}
    </motion.article>
  );
}

/**
 * Top header bar displaying category badge, title, scroll hint, and progress track.
 */
function CategoryHeaderBar({ category, index, total, isAr, progressRef }) {
  return (
    <motion.header
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className="w-full max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 flex flex-col sm:flex-row sm:items-end justify-between gap-4 z-10 shrink-0"
    >
      <div>
        <div className="flex items-center gap-3 mb-2">
          <span className="text-xs uppercase tracking-[3px] font-bold text-(--second-color) bg-(--second-color)/10 px-3 py-1 rounded-full border border-(--second-color)/20">
            {category.badge}
          </span>
          <span className="text-xs text-(--main-color)/60 font-mono">
            {String(index + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
          </span>
        </div>
        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-(--main-color) flex items-center gap-3">
          <span className="bg-linear-to-r from-(--main-color) via-(--second-color) to-emerald-700 bg-clip-text text-transparent">
            {category.name}
          </span>
        </h2>
      </div>

      {/* Scroll indicator & progress bar */}
      <div className="flex items-center gap-4 text-xs text-(--main-color)/70 font-mono">
        <span className="hidden sm:inline-flex items-center gap-1.5 font-medium text-(--second-color)">
          <FiArrowDown className="animate-bounce text-(--second-color)" />
          {isAr ? 'مرر للأسفل للتنقل بين المشاريع' : 'Scroll down to slide projects'}
        </span>
        <div className="w-32 h-1.5 bg-(--main-color)/10 rounded-full overflow-hidden">
          <div
            ref={progressRef}
            className="h-full bg-linear-to-r from-(--second-color) to-(--main-color) w-0 transition-[width] duration-75"
          />
        </div>
      </div>
    </motion.header>
  );
}

/**
 * Card indicating the end of a category or the end of all projects.
 */
function CategoryEndCard({ index, total, isAr }) {
  const hasNextCategory = index + 1 < total;

  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      transition={{ duration: 0.25 }}
      className="w-[280px] shrink-0 h-[490px] sm:h-[520px] rounded-2xl border border-dashed border-(--second-color)/25 p-6 flex flex-col justify-center items-center text-center bg-white/70 backdrop-blur-xs shadow-sm"
    >
      <span className="w-12 h-12 rounded-full bg-(--second-color)/10 text-(--second-color) border border-(--second-color)/20 flex items-center justify-center text-xl mb-4">
        <FiArrowDown />
      </span>
      <h4 className="text-xl font-bold text-(--main-color) mb-2">
        {hasNextCategory
          ? (isAr ? 'المجال التالي' : 'Next Category')
          : (isAr ? 'تم استعراض جميع المشاريع' : 'All Projects Viewed')}
      </h4>
      <p className="text-xs text-[#52726B] mb-4 max-w-[200px] leading-relaxed">
        {hasNextCategory
          ? (isAr ? 'تابع التمرير للأسفل لاستكشاف مشاريع المجال التالي' : 'Keep scrolling down to explore next category projects')
          : (isAr ? 'لقد اطلعت على جميع مجالات أعمالنا.' : 'You have explored all portfolio categories.')}
      </p>
      {hasNextCategory && (
        <span className="text-xs font-bold text-(--second-color) uppercase tracking-wider">
          {isAr ? 'مرر ↓' : 'Scroll ↓'}
        </span>
      )}
    </motion.div>
  );
}

/**
 * Bottom status bar showing category description and project counter.
 */
function CategoryStatusBar({ category, isAr }) {

  return (
    <footer className="w-full max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 flex items-center justify-between text-xs text-(--main-color)/70 border-t border-(--second-color)/15 pt-4 z-10 shrink-0">
      <p className="line-clamp-1 max-w-xl text-[#52726B]">{category.description}</p>
      <div className="flex items-center gap-2">
        <span className="inline-block w-2 h-2 rounded-full bg-(--second-color) animate-pulse" />
        <span className="font-mono text-(--second-color) font-bold">
          {isAr ? `${category.projects.length} مشاريع` : `${category.projects.length} Projects`}
        </span>
      </div>
    </footer>
  );
}

/**
 * Section for a single category with horizontal pinned scrolling.
 */
function CategoryTrackSection({ category, index, total }) {
  const containerRef = useRef(null);
  const trackRef = useRef(null);
  const progressRef = useRef(null);
  const { language } = useLanguageStore();
  const isAr = language === 'ar';

  useHorizontalScrollTrack({ containerRef, trackRef, progressRef, isAr });

  return (
    <section
      ref={containerRef}
      id={`category-${category.id}`}
      className="relative h-[270vh]"
    >
      <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col justify-between py-6 sm:py-8 lg:py-10">
        <CategoryHeaderBar
          category={category}
          index={index}
          total={total}
          isAr={isAr}
          progressRef={progressRef}
        />

        {/* Horizontal Track Area */}
        <div className="relative w-full overflow-hidden my-auto py-4 z-10">
          <div
            ref={trackRef}
            className="flex gap-6 sm:gap-8 items-center px-6 sm:px-12 lg:px-24 will-change-transform"
          >
            {category.projects.map((project, pIndex) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={pIndex}
                isAr={isAr}
              />
            ))}

            <CategoryEndCard
              index={index}
              total={total}
              isAr={isAr}
            />
          </div>
        </div>

        <CategoryStatusBar
          category={category}
          isAr={isAr}
        />
      </div>
    </section>
  );
}

/**
 * ProjectsSection - Main container for portfolio project tracks.
 */
function ProjectsSection() {
  const categories = useProjectsStore((state) => state.categories);

  return (
    <div id="projects" className="w-full bg-(--bg-color)">
      {categories.map((category, index) => (
        <CategoryTrackSection
          key={category.id}
          category={category}
          index={index}
          total={categories.length}
        />
      ))}
    </div>
  );
}

export default ProjectsSection;
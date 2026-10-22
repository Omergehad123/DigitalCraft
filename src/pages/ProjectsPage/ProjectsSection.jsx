import { useEffect, useRef } from 'react';
import { FaExternalLinkAlt } from 'react-icons/fa';
import { FiArrowDown, FiChevronRight } from 'react-icons/fi';
import useProjectsStore from '../../store/projectsStore';
import useLanguageStore from '../../store/languageStore';

function ProjectCard({ project, index, isAr }) {
  const isImageTop = index % 2 === 0;
  const projectLink = project.link || project.demo;

  return (
    <article className="w-[360px] sm:w-[420px] lg:w-[460px] shrink-0 h-[490px] sm:h-[520px] rounded-2xl border border-white/10 bg-[#071d14]/75 backdrop-blur-md p-6 flex flex-col justify-between group hover:border-emerald-400/50 hover:shadow-2xl hover:shadow-emerald-950/60 transition-all duration-300">
      {isImageTop ? (
        <>
          {/* Visual Mockup Top */}
          <div className="relative h-52 sm:h-56 w-full rounded-xl overflow-hidden border border-white/10 bg-linear-to-br from-emerald-950 via-[#062016] to-[#03110b]">
            <img
              src={project.image}
              alt={project.title}
              loading="lazy"
              className="w-full h-full object-cover opacity-60 group-hover:opacity-85 group-hover:scale-105 transition-all duration-500"
            />
            <div className="absolute inset-0 bg-linear-to-t from-[#061911] via-transparent to-black/30" />

            <div className="absolute top-3 start-3 end-3 flex justify-between items-start">
              <span className="text-[11px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full bg-black/60 text-emerald-300 border border-emerald-500/30 backdrop-blur-sm">
                {project.category}
              </span>
              {projectLink && (
                <a
                  href={projectLink}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 rounded-full bg-black/60 text-white/70 hover:text-white hover:bg-emerald-500 border border-white/10 transition-colors"
                  aria-label={`Open direct link to ${project.title}`}
                >
                  <FaExternalLinkAlt className="w-3 h-3" />
                </a>
              )}
            </div>

            <div className="absolute bottom-3 start-3 end-3">
              <p className="text-xs text-white/80 line-clamp-1 font-medium">{project.tagline}</p>
              <div className="flex flex-wrap gap-1.5 mt-2">
                {project.badges?.map((badge, idx) => (
                  <span
                    key={idx}
                    className="text-[10px] font-medium px-2 py-0.5 rounded-md bg-emerald-400/15 text-emerald-200 border border-emerald-400/20"
                  >
                    {badge}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Details Bottom */}
          <div className="mt-4 flex flex-col justify-between flex-1">
            <div>
              <div className="flex items-baseline justify-between gap-4">
                <span className="text-4xl sm:text-5xl font-black text-white/90 tracking-tight font-serif">
                  {project.number}
                </span>
                <div className="text-end">
                  <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-emerald-300 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs text-emerald-400/90 font-medium tracking-wide">
                    {project.category}
                  </p>
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-white/10">
                <p className="text-sm font-bold text-white tracking-wide mb-1.5">
                  {isAr ? 'الأدوات والتقنيات' : 'Tools and features'}
                </p>
                <p className="text-xs text-white/60 leading-relaxed font-mono">{project.tools}</p>
              </div>
            </div>

            <div className="pt-3 flex items-center justify-between text-xs text-white/40">
              {projectLink ? (
                <a
                  href={projectLink}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 group-hover:text-emerald-300 transition-colors"
                >
                  {isAr ? 'رابط مباشر' : 'Direct link'} <FiChevronRight className="rtl:rotate-180" />
                </a>
              ) : (
                <span className="inline-flex items-center gap-1 group-hover:text-emerald-300 transition-colors">
                  {isAr ? 'استعراض المشروع' : 'Explore project'} <FiChevronRight className="rtl:rotate-180" />
                </span>
              )}
              <span className="font-mono text-[11px]">#{project.id}</span>
            </div>
          </div>
        </>
      ) : (
        <>
          {/* Details Top */}
          <div className="mb-4 flex flex-col justify-between flex-1">
            <div>
              <div className="flex items-baseline justify-between gap-4">
                <span className="text-4xl sm:text-5xl font-black text-white/90 tracking-tight font-serif">
                  {project.number}
                </span>
                <div className="text-end">
                  <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-emerald-300 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs text-emerald-400/90 font-medium tracking-wide">
                    {project.category}
                  </p>
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-white/10">
                <p className="text-sm font-bold text-white tracking-wide mb-1.5">
                  {isAr ? 'الأدوات والتقنيات' : 'Tools and features'}
                </p>
                <p className="text-xs text-white/60 leading-relaxed font-mono">{project.tools}</p>
              </div>
            </div>

            <div className="pt-3 flex items-center justify-between text-xs text-white/40">
              {projectLink ? (
                <a
                  href={projectLink}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 group-hover:text-emerald-300 transition-colors"
                >
                  {isAr ? 'رابط مباشر' : 'Direct link'} <FiChevronRight className="rtl:rotate-180" />
                </a>
              ) : (
                <span className="inline-flex items-center gap-1 group-hover:text-emerald-300 transition-colors">
                  {isAr ? 'استعراض المشروع' : 'Explore project'} <FiChevronRight className="rtl:rotate-180" />
                </span>
              )}
              <span className="font-mono text-[11px]">#{project.id}</span>
            </div>
          </div>

          {/* Visual Mockup Bottom */}
          <div className="relative h-52 sm:h-56 w-full rounded-xl overflow-hidden border border-white/10 bg-linear-to-br from-emerald-950 via-[#062016] to-[#03110b]">
            <img
              src={project.image}
              alt={project.title}
              loading="lazy"
              className="w-full h-full object-cover opacity-60 group-hover:opacity-85 group-hover:scale-105 transition-all duration-500"
            />
            <div className="absolute inset-0 bg-linear-to-t from-[#061911] via-transparent to-black/30" />

            <div className="absolute top-3 start-3 end-3 flex justify-between items-start">
              <span className="text-[11px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full bg-black/60 text-emerald-300 border border-emerald-500/30 backdrop-blur-sm">
                {project.category}
              </span>
              {projectLink && (
                <a
                  href={projectLink}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 rounded-full bg-black/60 text-white/70 hover:text-white hover:bg-emerald-500 border border-white/10 transition-colors"
                  aria-label={`Open direct link to ${project.title}`}
                >
                  <FaExternalLinkAlt className="w-3 h-3" />
                </a>
              )}
            </div>

            <div className="absolute bottom-3 start-3 end-3">
              <p className="text-xs text-white/80 line-clamp-1 font-medium">{project.tagline}</p>
              <div className="flex flex-wrap gap-1.5 mt-2">
                {project.badges?.map((badge, idx) => (
                  <span
                    key={idx}
                    className="text-[10px] font-medium px-2 py-0.5 rounded-md bg-emerald-400/15 text-emerald-200 border border-emerald-400/20"
                  >
                    {badge}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </>
      )}
    </article>
  );
}

function CategoryTrackSection({ category, index, total }) {
  const containerRef = useRef(null);
  const trackRef = useRef(null);
  const progressRef = useRef(null);
  const { language } = useLanguageStore();
  const isAr = language === 'ar';

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
  }, [isAr]);

  return (
    <section
      ref={containerRef}
      id={`category-${category.id}`}
      className="relative h-[270vh] bg-[#05130d] text-white"
    >
      <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col justify-between py-6 sm:py-8 lg:py-10">
        {/* Glow Effects */}
        <div className="pointer-events-none absolute -top-24 start-1/4 w-96 h-96 rounded-full bg-emerald-500/15 blur-[120px]" />
        <div className="pointer-events-none absolute bottom-0 end-10 w-96 h-96 rounded-full bg-teal-500/10 blur-[130px]" />

        {/* Top Header Bar */}
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 flex flex-col sm:flex-row sm:items-end justify-between gap-4 z-10 shrink-0">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <span className="text-xs uppercase tracking-[3px] font-bold text-emerald-400 bg-emerald-400/10 px-3 py-1 rounded-full border border-emerald-400/20">
                {category.badge}
              </span>
              <span className="text-xs text-white/50 font-mono">
                {String(index + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white flex items-center gap-3">
              <span className="bg-linear-to-r from-emerald-300 via-teal-200 to-emerald-400 bg-clip-text text-transparent">
                {category.name}
              </span>
            </h2>
          </div>

          {/* scrollbar */}
          <div className="flex items-center gap-4 text-xs text-white/60 font-mono">
            <span className="hidden sm:inline-flex items-center gap-1.5">
              <FiArrowDown className="animate-bounce text-emerald-300" />
              {isAr ? 'مرر للأسفل للتنقل بين المشاريع' : 'Scroll down to slide projects'}
            </span>
            <div className="w-32 h-1.5 bg-white/10 rounded-full overflow-hidden">
              <div
                ref={progressRef}
                className="h-full bg-linear-to-r from-emerald-400 to-teal-300 w-0 transition-[width] duration-75"
              />
            </div>
          </div>
        </div>

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

            {/* End of Category Card */}
            <div className="w-[280px] shrink-0 h-[490px] sm:h-[520px] rounded-2xl border border-dashed border-white/20 p-6 flex flex-col justify-center items-center text-center bg-emerald-950/20">
              <span className="w-12 h-12 rounded-full bg-emerald-400/10 text-emerald-300 border border-emerald-400/30 flex items-center justify-center text-xl mb-4">
                <FiArrowDown />
              </span>
              <h4 className="text-xl font-bold text-white mb-2">
                {index + 1 < total
                  ? (isAr ? 'المجال التالي' : 'Next Category')
                  : (isAr ? 'تم استعراض جميع المشاريع' : 'All Projects Viewed')}
              </h4>
              <p className="text-xs text-white/60 mb-4 max-w-[200px]">
                {index + 1 < total
                  ? (isAr ? 'تابع التمرير للأسفل لاستكشاف مشاريع المجال التالي' : 'Keep scrolling down to explore next category projects')
                  : (isAr ? 'لقد اطلعت على جميع مجالات أعمالنا.' : 'You have explored all portfolio categories.')}
              </p>
              {index + 1 < total && (
                <span className="text-xs font-semibold text-emerald-300 uppercase tracking-wider">
                  {isAr ? 'مرر ↓' : 'Scroll ↓'}
                </span>
              )}
            </div>
          </div>
        </div>

        {/* Bottom Category Status Footer */}
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 flex items-center justify-between text-xs text-white/50 border-t border-white/10 pt-4 z-10 shrink-0">
          <p className="line-clamp-1 max-w-xl">{category.description}</p>
          <div className="flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="font-mono text-emerald-300">
              {isAr ? `${category.projects.length} مشاريع` : `${category.projects.length} Projects`}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

function ProjectsSection() {
  const categories = useProjectsStore((state) => state.categories);

  return (
    <div id="projects" className="w-full bg-[#05130d]">
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
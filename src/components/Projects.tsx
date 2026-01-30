import { ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useScrollAnimation, fadeInUpVariants, staggerContainerVariants } from '@/hooks/useScrollAnimation';

const projects = [
  {
    title: 'Commercial Tower Complex',
    category: 'Architecture & MEP',
    location: 'Dubai, UAE',
    image: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&q=80',
  },
  {
    title: 'Healthcare Facility',
    category: 'Full BIM Coordination',
    location: 'Mumbai, India',
    image: 'https://images.unsplash.com/photo-1587351021759-3e566b6af7cc?w=800&q=80',
  },
  {
    title: 'Residential Development',
    category: 'Structural BIM',
    location: 'Singapore',
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=80',
  },
  {
    title: 'Industrial Complex',
    category: 'MEP Systems',
    location: 'Qatar',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80',
  },
];

const Projects = () => {
  const { ref: headerRef, isInView: headerInView } = useScrollAnimation();
  const { ref: gridRef, isInView: gridInView } = useScrollAnimation();

  return (
    <section id="projects" className="section">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          ref={headerRef}
          initial="hidden"
          animate={headerInView ? 'visible' : 'hidden'}
          variants={staggerContainerVariants}
          className="flex flex-col items-center text-center gap-4 mb-16"
        >
          <motion.p
            variants={fadeInUpVariants}
            className="text-xs md:text-sm font-bold text-primary uppercase tracking-[0.3em] mb-2"
          >
            Portfolio
          </motion.p>
          <motion.h2
            variants={fadeInUpVariants}
            className="text-3xl md:text-5xl font-black text-slate-900 mb-6 leading-tight"
          >
            Featured Projects
          </motion.h2>
          <motion.div variants={fadeInUpVariants}>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 text-sm font-bold text-primary hover:gap-3 transition-all uppercase tracking-widest"
            >
              View all projects <ArrowUpRight size={16} />
            </Link>
          </motion.div>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          ref={gridRef}
          initial="hidden"
          animate={gridInView ? 'visible' : 'hidden'}
          variants={staggerContainerVariants}
          className="grid md:grid-cols-2 gap-8 md:gap-12"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              variants={fadeInUpVariants}
              whileHover={{ y: -12 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              className={`group relative overflow-hidden rounded-3xl aspect-[16/10] cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-500 ${index % 2 === 1 ? 'md:mt-12' : ''
                }`}
            >
              {/* Image with Zoom Effect */}
              <motion.img
                src={project.image}
                alt={project.title}
                className="absolute inset-0 w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-700"
                initial={{ scale: 1 }}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
              />

              {/* Sophisticated Darkening Overlay */}
              <div className="absolute inset-0 bg-background/20 group-hover:bg-background/40 transition-colors duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />

              {/* Glass Details Card (Shows on Hover) */}
              <div className="absolute inset-0 p-12 flex flex-col justify-end">
                <div className="translate-y-8 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                  <motion.div
                    className="inline-block px-4 py-2 glass-card-strong text-slate-900 text-[9px] font-semibold uppercase tracking-wider rounded-full mb-5 border border-white/20 shadow-lg"
                  >
                    {project.category}
                  </motion.div>
                  <h3 className="text-3xl font-semibold text-slate-900 mb-3 tracking-tight">
                    {project.title}
                  </h3>
                  <p className="text-slate-600 text-sm font-medium flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                    {project.location}
                  </p>
                </div>

                {/* Arrow Icon */}
                <motion.div
                  className="absolute top-12 right-12 w-16 h-16 rounded-3xl glass-card flex items-center justify-center opacity-0 group-hover:opacity-100 scale-75 group-hover:scale-100 transition-all duration-500 border border-white/20 shadow-2xl"
                >
                  <ArrowUpRight className="text-slate-900" size={28} />
                </motion.div>
              </div>
            </motion.div>
          ))
          }
        </motion.div >
      </div >
    </section >
  );
};

export default Projects;

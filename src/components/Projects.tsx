import { ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';
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
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12"
        >
          <div>
            <motion.p 
              variants={fadeInUpVariants}
              className="text-sm font-medium text-primary uppercase tracking-widest mb-4"
            >
              Our Work
            </motion.p>
            <motion.h2 
              variants={fadeInUpVariants}
              className="text-foreground"
            >
              Featured Projects
            </motion.h2>
          </div>
          <motion.a
            variants={fadeInUpVariants}
            href="#contact"
            className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:gap-3 transition-all"
            whileHover={{ x: 4 }}
          >
            View all projects <ArrowUpRight size={16} />
          </motion.a>
        </motion.div>

        {/* Projects Grid */}
        <motion.div 
          ref={gridRef}
          initial="hidden"
          animate={gridInView ? 'visible' : 'hidden'}
          variants={staggerContainerVariants}
          className="grid md:grid-cols-2 gap-6 md:gap-8"
        >
          {projects.map((project) => (
            <motion.div
              key={project.title}
              variants={fadeInUpVariants}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.4 }}
              className="group relative overflow-hidden rounded-3xl aspect-[4/3] cursor-pointer"
            >
              {/* Image with Zoom Effect */}
              <motion.img
                src={project.image}
                alt={project.title}
                className="absolute inset-0 w-full h-full object-cover"
                initial={{ scale: 1 }}
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.7, ease: [0.25, 0.4, 0.25, 1] }}
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500" />

              {/* Content */}
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <motion.div
                  initial={{ y: 20, opacity: 0.8 }}
                  whileHover={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <span className="inline-block px-3 py-1 bg-primary/20 backdrop-blur-sm text-primary-foreground text-xs font-medium rounded-full mb-3">
                    {project.category}
                  </span>
                  <h3 className="text-2xl font-semibold text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-white/70 text-sm">
                    {project.location}
                  </p>
                </motion.div>

                {/* Arrow */}
                <motion.div 
                  className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center"
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileHover={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <ArrowUpRight className="text-white" size={20} />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;

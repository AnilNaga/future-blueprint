
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { archProjects } from '@/data/architectureProjects';

const ArchProjects = () => {
    return (
        <div className="min-h-screen bg-white font-sans selection:bg-purple-100">
            <Navbar />

            {/* HERO SECTION */}
            <section className="pt-32 pb-20 bg-slate-50">
                <div className="container mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="max-w-4xl"
                    >
                        <h1 className="text-5xl md:text-7xl font-bold text-slate-900 mb-6 tracking-tight">
                            Architectural Excellence
                        </h1>
                        <p className="text-xl md:text-2xl text-slate-600 font-light leading-relaxed max-w-2xl">
                            A showcase of our most complex architectural BIM projects, delivered with precision and data-driven intelligence across the globe.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* PROJECT GRID */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-6">
                    <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
                        {archProjects.map((project, index) => (
                            <motion.div
                                key={project.id}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: index * 0.1 }}
                                viewport={{ once: true }}
                            >
                                <Link to={`/projects/architecture/${project.slug}`} className="group block space-y-4 cursor-pointer">
                                    {/* Image Card */}
                                    <div className="aspect-[4/3] overflow-hidden rounded-2xl bg-slate-100 relative shadow-sm group-hover:shadow-xl transition-all duration-500">
                                        <img
                                            src={project.heroImage}
                                            alt={project.title}
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                                        />

                                        {/* Overlay */}
                                        <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/40 transition-colors duration-500 flex items-center justify-center">
                                            <div className="opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                                                <span className="inline-flex items-center gap-2 px-6 py-3 bg-white text-slate-900 rounded-full font-bold text-sm tracking-wide uppercase">
                                                    View Project <ArrowUpRight size={16} />
                                                </span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="space-y-2">
                                        <div className="flex items-center justify-between">
                                            <span className="text-sm font-bold tracking-widest text-primary uppercase">
                                                {project.category}
                                            </span>
                                            <span className="text-sm font-medium text-slate-400">
                                                {project.location} — {project.year}
                                            </span>
                                        </div>
                                        <h3 className="text-3xl font-bold text-slate-900 group-hover:text-[#8846CF] transition-colors">
                                            {project.title}
                                        </h3>
                                        <p className="text-slate-500 text-lg leading-relaxed line-clamp-2">
                                            {project.technicalDescription}
                                        </p>
                                    </div>
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default ArchProjects;

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { Zap, MapPin, Calendar, ArrowRight, Settings } from 'lucide-react';
import { useScrollAnimation, fadeInUpVariants, staggerContainerVariants } from '@/hooks/useScrollAnimation';

const projects = [
    {
        title: 'Metro Center Infrastructure',
        category: 'Transportation',
        location: 'Berlin, Germany',
        year: '2023',
        description: 'Complex MEP coordination and clash detection for an underground transit hub expansion.',
        imageAlt: 'MEP Project 1'
    },
    {
        title: 'Global Data Sanctuary',
        category: 'Data Center',
        location: 'Stockholm, Sweden',
        year: '2024',
        description: 'High-precision modeling of cooling systems and electrical distribution networks.',
        imageAlt: 'MEP Project 2'
    },
    {
        title: 'Industrial Life-Sciences Lab',
        category: 'Healthcare & Research',
        location: 'Boston, USA',
        year: '2023',
        description: 'Specialized lab systems routing with ultra-tight spatial constraints and regulatory compliance.',
        imageAlt: 'MEP Project 3'
    },
    {
        title: 'Harbor Plaza Towers',
        category: 'Mixed-Use Residential',
        location: 'Sydney, Australia',
        year: '2022',
        description: 'Integrated plumbing and HVAC coordination for a triple-tower luxury waterfront development.',
        imageAlt: 'MEP Project 4'
    }
];

const MEPProjects = () => {
    const { ref: heroRef, isInView: heroInView } = useScrollAnimation();
    const { ref: galleryRef, isInView: galleryInView } = useScrollAnimation({ amount: 0.1 });

    return (
        <div className="min-h-screen bg-slate-50/50">
            <Navbar />

            <main className="pt-24 pb-20">
                {/* Portfolio Hero */}
                <section className="container mx-auto px-6 mb-16">
                    <motion.div
                        ref={heroRef}
                        initial="hidden"
                        animate={heroInView ? 'visible' : 'hidden'}
                        variants={staggerContainerVariants}
                        className="max-w-5xl mx-auto flex flex-col items-center text-center"
                    >
                        <motion.div variants={fadeInUpVariants} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-50 text-emerald-600 text-[11px] font-bold uppercase tracking-widest mb-8 border border-emerald-100">
                            Portfolio
                        </motion.div>
                        <motion.h1 variants={fadeInUpVariants} className="text-4xl sm:text-5xl md:text-[68px] font-bold text-slate-900 leading-[1.05] tracking-tight mb-8">
                            MEP Systems <br />
                            <span className="text-slate-400">Integration.</span>
                        </motion.h1>
                        <motion.p variants={fadeInUpVariants} className="text-base md:text-xl text-slate-600 leading-relaxed font-normal max-w-3xl mx-auto">
                            Specialized MEP coordination and BIM engineering for highly technical environments, ensuring zero clashes and optimal system performance.
                        </motion.p>
                    </motion.div>
                </section>

                {/* Project Grid */}
                <section className="container mx-auto px-6">
                    <motion.div
                        ref={galleryRef}
                        initial="hidden"
                        animate={galleryInView ? 'visible' : 'hidden'}
                        variants={staggerContainerVariants}
                        className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
                    >
                        {projects.map((project, index) => (
                            <motion.div
                                key={index}
                                variants={fadeInUpVariants}
                                className="group relative bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-lg transition-all duration-500"
                            >
                                <div className="aspect-[1.5/1] bg-emerald-50/5 relative overflow-hidden">
                                    <div className="absolute inset-0 bg-emerald-600/5 opacity-0 group-hover:opacity-5 transition-opacity" />
                                    <div className="absolute inset-0 flex items-center justify-center opacity-[0.15] transition-transform duration-700 group-hover:scale-105">
                                        <Settings size={60} className="text-emerald-200" />
                                    </div>
                                    <div className="absolute top-3 left-3 flex gap-2">
                                        <span className="px-2.5 py-1 rounded-md bg-white/95 backdrop-blur-md text-[8px] font-bold text-emerald-600 border border-emerald-100 uppercase tracking-widest shadow-sm">
                                            {project.category}
                                        </span>
                                    </div>
                                </div>

                                <div className="p-5">
                                    <div className="flex justify-between items-start mb-2">
                                        <div>
                                            <h3 className="text-base font-bold text-slate-900 group-hover:text-emerald-600 transition-colors leading-tight">{project.title}</h3>
                                            <div className="flex items-center gap-2.5 mt-1 text-slate-400 text-[10px] font-medium">
                                                <span className="flex items-center gap-1 font-normal opacity-70">
                                                    <MapPin size={10} className="text-slate-300" />
                                                    {project.location}
                                                </span>
                                                <span className="flex items-center gap-1 font-normal opacity-70">
                                                    <Calendar size={10} className="text-slate-300" />
                                                    {project.year}
                                                </span>
                                            </div>
                                        </div>
                                        <div className="p-2 rounded-full bg-slate-50 text-slate-300 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-300 shrink-0">
                                            <ArrowRight size={14} />
                                        </div>
                                    </div>
                                    <p className="text-slate-500 leading-relaxed font-normal text-[12px] line-clamp-2">
                                        {project.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </section>
            </main>

            <Footer />
        </div>
    );
};

export default MEPProjects;

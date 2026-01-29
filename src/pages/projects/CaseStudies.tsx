import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { Globe, MapPin, Calendar, ArrowRight, Award } from 'lucide-react';
import { useScrollAnimation, fadeInUpVariants, staggerContainerVariants } from '@/hooks/useScrollAnimation';

const projects = [
    {
        title: 'Middle-East Smart City',
        category: 'Urban Planning',
        location: 'NEOM, Saudi Arabia',
        year: '2024',
        description: 'Multi-discipline BIM management for an entire smart city district, integrating thousands of assets.',
        imageAlt: 'Case Study 1'
    },
    {
        title: 'Scandinavian Sustainability Hub',
        category: 'Net-Zero Design',
        location: 'Oslo, Norway',
        year: '2023',
        description: 'How we used automated BIM workflows to reduce construction waste by 40% for a carbon-neutral park.',
        imageAlt: 'Case Study 2'
    },
    {
        title: 'Pan-Asian Logistics Network',
        category: 'Supply Chain',
        location: 'Multiple Locations',
        year: '2022',
        description: 'Standardizing BIM processes across 12 countries for a unified digital twin logistics platform.',
        imageAlt: 'Case Study 3'
    }
];

const CaseStudies = () => {
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
                        className="max-w-3xl"
                    >
                        <motion.div variants={fadeInUpVariants} className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-50 text-amber-600 text-[10px] font-bold uppercase tracking-widest mb-6 border border-amber-100">
                            Global Success
                        </motion.div>
                        <motion.h1 variants={fadeInUpVariants} className="text-[40px] md:text-[60px] font-bold text-slate-900 leading-[1.1] tracking-tight mb-6">
                            BIM Case <br />
                            <span className="text-slate-400">Studies.</span>
                        </motion.h1>
                        <motion.p variants={fadeInUpVariants} className="text-lg text-slate-500 leading-relaxed font-normal max-w-xl">
                            Real-world impact. Explore how our strategic BIM consultancy and engineering services solve mission-critical challenges for enterprise clients.
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
                                className="group relative bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-md transition-all duration-500 flex flex-col"
                            >
                                <div className="aspect-[1.5/1] bg-amber-50/5 relative overflow-hidden">
                                    <div className="absolute inset-0 bg-amber-600/5 opacity-0 group-hover:opacity-5 transition-opacity" />
                                    <div className="absolute inset-0 flex items-center justify-center opacity-[0.15] transition-transform duration-700 group-hover:scale-105">
                                        <Award size={60} className="text-amber-200" />
                                    </div>
                                </div>

                                <div className="p-5 flex flex-col h-full">
                                    <div className="mb-3">
                                        <span className="text-[8px] font-bold text-amber-600 uppercase tracking-widest mb-1.5 block">{project.category}</span>
                                        <h3 className="text-base font-bold text-slate-900 group-hover:text-amber-600 transition-colors">{project.title}</h3>
                                        <div className="flex items-center gap-3 mt-1.5 text-slate-400 text-[10px] font-medium">
                                            <span className="flex items-center gap-1 font-normal opacity-70">
                                                <Globe size={10} className="text-slate-300" />
                                                {project.location}
                                            </span>
                                            <span className="flex items-center gap-1 font-normal opacity-70">
                                                <Calendar size={10} className="text-slate-300" />
                                                {project.year}
                                            </span>
                                        </div>
                                    </div>
                                    <p className="text-slate-500 leading-relaxed font-normal text-[12px] mb-4 line-clamp-3">
                                        {project.description}
                                    </p>
                                    <button className="flex items-center gap-2 text-slate-900 text-[10px] font-bold group/btn mt-auto">
                                        Success Story
                                        <div className="p-1 rounded-full bg-slate-50 group-hover/btn:bg-amber-600 group-hover/btn:text-white transition-all">
                                            <ArrowRight size={10} />
                                        </div>
                                    </button>
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

export default CaseStudies;

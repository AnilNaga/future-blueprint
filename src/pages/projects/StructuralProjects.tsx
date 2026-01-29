import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { Landmark, MapPin, Calendar, ArrowRight, Layers } from 'lucide-react';
import { useScrollAnimation, fadeInUpVariants, staggerContainerVariants } from '@/hooks/useScrollAnimation';

const projects = [
    {
        title: 'Olympic Stadium Revitalization',
        category: 'Sports & Arena',
        location: 'Paris, France',
        year: '2023',
        description: 'Large-span steel structure modeling and complex RC connection detailing for stadium upgrades.',
        imageAlt: 'Structural Project 1'
    },
    {
        title: 'The Diamond Bridge',
        category: 'Infrastructure',
        location: 'Doha, Qatar',
        year: '2024',
        description: 'Advanced structural BIM for a post-tensioned cable-stayed bridge with LOD 500 detailing.',
        imageAlt: 'Structural Project 2'
    },
    {
        title: 'Titan Industrial Complex',
        category: 'Heavy Industry',
        location: 'Mumbai, India',
        year: '2023',
        description: 'Seismic-resistant structural modeling for a large-scale manufacturing facility with complex equipment loads.',
        imageAlt: 'Structural Project 3'
    },
    {
        title: 'Sky-Gazer Observation Deck',
        category: 'Tourism & Leisure',
        location: 'New York, USA',
        year: '2022',
        description: 'Intricate cantilevered steel structure modeling for a high-altitude observation platform.',
        imageAlt: 'Structural Project 4'
    }
];

const StructuralProjects = () => {
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
                        <motion.div variants={fadeInUpVariants} className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-100 text-slate-600 text-[10px] font-bold uppercase tracking-widest mb-6 border border-slate-200">
                            Portfolio
                        </motion.div>
                        <motion.h1 variants={fadeInUpVariants} className="text-[40px] md:text-[60px] font-bold text-slate-900 leading-[1.1] tracking-tight mb-6">
                            Structural <br />
                            <span className="text-slate-400">Integrity.</span>
                        </motion.h1>
                        <motion.p variants={fadeInUpVariants} className="text-lg text-slate-500 leading-relaxed font-normal max-w-xl">
                            High-fidelity structural modeling and detailing for complex steel and RC structures, ensuring construction feasibility and structural safety.
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
                                <div className="aspect-[1.5/1] bg-slate-50 relative overflow-hidden">
                                    <div className="absolute inset-0 bg-slate-400/5 opacity-0 group-hover:opacity-5 transition-opacity" />
                                    <div className="absolute inset-0 flex items-center justify-center opacity-[0.15] transition-transform duration-700 group-hover:scale-105">
                                        <Layers size={60} className="text-slate-300" />
                                    </div>
                                    <div className="absolute top-3 left-3 flex gap-2">
                                        <span className="px-2.5 py-1 rounded-md bg-white/95 backdrop-blur-md text-[8px] font-bold text-slate-700 border border-slate-200 uppercase tracking-widest shadow-sm">
                                            {project.category}
                                        </span>
                                    </div>
                                </div>

                                <div className="p-5">
                                    <div className="flex justify-between items-start mb-2">
                                        <div>
                                            <h3 className="text-base font-bold text-slate-900 group-hover:text-slate-700 transition-colors leading-tight">{project.title}</h3>
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
                                        <div className="p-2 rounded-full bg-slate-50 text-slate-300 group-hover:bg-slate-700 group-hover:text-white transition-all duration-300 shrink-0">
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

export default StructuralProjects;

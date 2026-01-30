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
        image: '/neom_smart_city_bim_1769750344028.png'
    },
    {
        title: 'Scandinavian Sustainability Hub',
        category: 'Net-Zero Design',
        location: 'Oslo, Norway',
        year: '2023',
        description: 'How we used automated BIM workflows to reduce construction waste by 40% for a carbon-neutral park.',
        image: '/images/atrium_section_bim.png'
    },
    {
        title: 'Pan-Asian Logistics Network',
        category: 'Supply Chain',
        location: 'Multiple Locations',
        year: '2022',
        description: 'Standardizing BIM processes across 12 countries for a unified digital twin logistics platform.',
        image: '/images/building_walkthrough_3d_1769580061469.png'
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
                        className="max-w-5xl mx-auto flex flex-col items-center text-center"
                    >
                        <motion.div variants={fadeInUpVariants} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-50 text-amber-600 text-[11px] font-bold uppercase tracking-widest mb-8 border border-amber-100">
                            Global Success
                        </motion.div>
                        <motion.h1 variants={fadeInUpVariants} className="text-4xl sm:text-5xl md:text-[68px] font-black text-slate-900 leading-[1.05] tracking-tight mb-8">
                            BIM Case <br />
                            <span className="text-slate-400">Studies.</span>
                        </motion.h1>
                        <motion.p variants={fadeInUpVariants} className="text-base md:text-xl text-slate-600 leading-relaxed font-normal max-w-3xl mx-auto">
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
                                <div className="aspect-[1.5/1] bg-amber-50 relative overflow-hidden">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                    />
                                    <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-slate-900/0 transition-colors" />
                                    <div className="absolute top-3 left-3 flex gap-2">
                                        <span className="px-2.5 py-1 rounded-md bg-white/95 backdrop-blur-md text-[8px] font-bold text-amber-600 border border-amber-100 uppercase tracking-widest shadow-sm">
                                            {project.category}
                                        </span>
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
                {/* Dynamic Innovation Reels - Videos Section */}
                <section className="container mx-auto px-6 py-20 bg-slate-900 rounded-[40px] mb-20 overflow-hidden relative">
                    <div className="absolute inset-0 opacity-10"
                        style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

                    <div className="relative z-10 text-center mb-16">
                        <span className="text-amber-500 font-bold uppercase tracking-[0.3em] text-[10px] mb-4 block">Innovation Reels</span>
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Digital Twin Masterclasses</h2>
                        <p className="text-white/60 max-w-2xl mx-auto">Explore the deep-tech workflows behind our most complex engineering coordiation efforts.</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
                        {[
                            { title: 'Global Infrastructure Coordination', desc: 'BIM-powered spatial coordination for complex transit hubs.' },
                            { title: 'Automated 4D Construction', desc: 'Integrating schedule data into real-time digital twins.' }
                        ].map((video, idx) => (
                            <div key={idx} className="group cursor-pointer">
                                <div className="aspect-video rounded-3xl bg-slate-800 border border-white/10 overflow-hidden relative group-hover:border-amber-500/50 transition-all duration-500">
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center group-hover:scale-110 group-hover:bg-amber-600 transition-all duration-500">
                                            <ArrowRight className="text-white rotate-[-45deg]" />
                                        </div>
                                    </div>
                                    <div className="absolute bottom-6 left-6 right-6">
                                        <h3 className="text-white font-bold text-lg mb-1">{video.title}</h3>
                                        <p className="text-white/40 text-xs">{video.desc}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
};

export default CaseStudies;

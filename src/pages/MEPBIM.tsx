import Navbar from '@/components/Navbar';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Wind, Droplets, Zap, ShieldCheck, ArrowRight, Settings2 } from 'lucide-react';
import { useScrollAnimation, fadeInUpVariants, staggerContainerVariants } from '@/hooks/useScrollAnimation';
import Footer from '@/components/Footer';
import Contact from '@/components/Contact';

const capabilities = [
    {
        title: 'HVAC Routing',
        description: 'Precision ductwork design and routing optimized for performance, accessibility, and installation efficiency.',
        icon: Wind
    },
    {
        title: 'Plumbing & Drainage',
        description: 'Fully coordinated water supply, drainage, and sanitary piping systems aligned with architectural and structural models.',
        icon: Droplets
    },
    {
        title: 'Clash Detection',
        description: 'Advanced automated clash detection to eliminate conflicts before construction begins.',
        icon: ShieldCheck
    },
    {
        title: 'MEP Coordination',
        description: 'Seamless integration of mechanical, electrical, plumbing, and fire-life safety systems within a unified BIM environment.',
        icon: Settings2
    }
];

const MEPBIM = () => {
    const { ref: heroRef, isInView: heroInView } = useScrollAnimation();
    const { ref: capabilityRef, isInView: capabilityInView } = useScrollAnimation();

    return (
        <div className="min-h-screen bg-background text-foreground relative overflow-x-hidden">
            <Navbar />
            <main>
                {/* MEP BIM Hero - Premium White Theme */}
                <section className="relative pt-16 pb-12 md:pt-24 md:pb-16 overflow-hidden bg-white">
                    {/* Soft Alpine Blue-Gray Tint Overlay */}
                    <div className="absolute inset-0 bg-grad-royal opacity-20" />

                    {/* Animated Engineering Grid */}
                    <div className="absolute inset-0 opacity-[0.03] pointer-events-none overflow-hidden">
                        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8846CF_1px,transparent_1px),linear-gradient(to_bottom,#8846CF_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
                    </div>

                    <div className="container mx-auto px-6 relative z-10">
                        <motion.div
                            ref={heroRef}
                            initial="hidden"
                            animate={heroInView ? 'visible' : 'hidden'}
                            variants={staggerContainerVariants}
                            className="max-w-4xl"
                        >
                            <motion.div
                                variants={fadeInUpVariants}
                                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/5 border border-primary/10 text-primary text-[11px] font-semibold mb-6"
                            >
                                <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                                Technical Precision MEP
                            </motion.div>

                            <motion.h1
                                variants={fadeInUpVariants}
                                className="text-3xl sm:text-4xl md:text-[46px] font-black text-slate-900 mb-6 leading-[1.1] tracking-tight"
                            >
                                Intelligent MEP <br />
                                <span className="text-slate-400 font-medium tracking-tight">Coordination Systems.</span>
                            </motion.h1>

                            <motion.p
                                variants={fadeInUpVariants}
                                className="text-base md:text-lg text-slate-600 mb-10 max-w-2xl leading-relaxed font-normal"
                            >
                                Drive construction efficiency with fully coordinated, clash-free MEP BIM models. We specialize in HVAC, plumbing, drainage, and fire-life safety systems for high-performance buildings.
                            </motion.p>

                            <motion.div variants={fadeInUpVariants}>
                                <Link to="/contact" className="btn-primary px-7 py-3 text-[15px] group shadow-premium-hover inline-block">
                                    Start MEP Coordination
                                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </Link>
                            </motion.div>
                        </motion.div>
                    </div>
                </section>

                {/* MEP Core Services - Dense Layout */}
                <section className="py-12 md:py-16 bg-white border-b border-slate-100">
                    <div className="container mx-auto px-6">
                        <motion.div
                            variants={fadeInUpVariants}
                            initial="hidden"
                            whileInView="visible"
                            className="mb-10"
                        >
                            <h2 className="text-[26px] md:text-[30px] font-semibold text-slate-900 tracking-tight flex items-center gap-3">
                                <div className="w-1 h-8 bg-primary rounded-full" />
                                MEP Core Services
                            </h2>
                        </motion.div>

                        <motion.div
                            ref={capabilityRef}
                            initial="hidden"
                            animate={capabilityInView ? 'visible' : 'hidden'}
                            variants={staggerContainerVariants}
                            className="grid md:grid-cols-2 lg:grid-cols-4 gap-0 border border-slate-100 rounded-[32px] overflow-hidden shadow-sm"
                        >
                            {capabilities.map((item, index) => (
                                <motion.div
                                    key={item.title}
                                    variants={fadeInUpVariants}
                                    className={`p-8 bg-white hover:bg-slate-50 transition-all group relative ${index !== capabilities.length - 1 ? 'md:border-r border-slate-100' : ''
                                        }`}
                                >
                                    <div className="w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center text-slate-400 mb-6 group-hover:scale-105 group-hover:bg-primary/5 group-hover:text-primary transition-all duration-300">
                                        <item.icon size={24} />
                                    </div>
                                    <h3 className="text-[17px] font-semibold text-slate-900 mb-3 tracking-tight">{item.title}</h3>
                                    <p className="text-slate-500 leading-relaxed font-normal text-[14px] line-clamp-3">
                                        {item.description}
                                    </p>

                                    {/* Sub-Card Divider */}
                                    <div className="absolute top-8 bottom-8 right-0 w-[1px] bg-slate-100 hidden lg:block opacity-0 group-hover:opacity-100 transition-opacity" />
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </section>

                {/* Clash-Free Workflow - Split Layout */}
                <section className="py-12 md:py-16 bg-slate-50">
                    <div className="container mx-auto px-6">
                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            <motion.div variants={fadeInUpVariants} initial="hidden" whileInView="visible" className="max-w-xl">
                                <div className="inline-block px-3 py-1 bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-wider rounded-md mb-6">
                                    Engineering Workflow
                                </div>
                                <h2 className="text-[32px] md:text-[42px] font-semibold text-slate-900 mb-8 leading-[1.1] tracking-tight">
                                    Clash-Free <br />
                                    <span className="text-slate-400 font-medium">Workflow.</span>
                                </h2>

                                <p className="text-[15px] md:text-[16px] text-slate-600 mb-10 leading-relaxed font-normal">
                                    Our MEP lifecycle methodology ensures that design intent translates directly to fabrication and site execution—reducing rework, delays, and material waste.
                                </p>

                                <div className="space-y-8">
                                    {[
                                        { step: '01', title: 'Route Optimization', desc: 'Determining the most efficient spatial paths for ducting, piping, and cable trays.' },
                                        { step: '02', title: 'Discipline Integration', desc: 'Merging architectural, structural, and MEP data for complete spatial and constructability audits.' },
                                        { step: '03', title: 'Fabrication Outputs', desc: 'Generating shop drawings and spool sheets directly from coordinated 3D BIM models.' }
                                    ].map((item) => (
                                        <div key={item.step} className="flex gap-6 group">
                                            <div className="text-slate-200 font-bold text-3xl leading-none group-hover:text-primary transition-colors duration-300">{item.step}</div>
                                            <div>
                                                <h4 className="text-[17px] font-semibold text-slate-900 mb-2">{item.title}</h4>
                                                <p className="text-slate-500 text-[14px] leading-relaxed max-w-sm">{item.desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>

                            <div className="relative group">
                                <div className="aspect-[4/3] rounded-[32px] overflow-hidden glass-card shadow-xl bg-slate-900 border border-white/5">
                                    {/* Visual Metaphor for coordination */}
                                    <div className="absolute inset-0 bg-[#0F172A] flex items-center justify-center overflow-hidden">
                                        <div className="absolute inset-0 bg-[linear-gradient(to_right,#3b82f60d_1px,transparent_1px),linear-gradient(to_bottom,#3b82f60d_1px,transparent_1px)] bg-[size:20px_20px]" />
                                        <Settings2 size={80} className="text-primary/20 animate-spin-slow" />

                                        {/* Floating Layer Metaphor */}
                                        <motion.div
                                            animate={{
                                                opacity: [0.1, 0.3, 0.1],
                                                scale: [1, 1.1, 1]
                                            }}
                                            transition={{ duration: 6, repeat: Infinity }}
                                            className="absolute inset-20 border border-primary/10 rounded-full"
                                        />
                                    </div>
                                </div>
                                {/* Clean Label */}
                                <div className="absolute bottom-6 left-6 flex items-center gap-2 px-3 py-1.5 rounded-lg bg-black/40 backdrop-blur-md border border-white/10 text-[10px] text-white/60 font-medium tracking-widest uppercase">
                                    <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                                    Coordination Visual
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <Contact />
            </main>
            <Footer />
        </div >
    );
};

export default MEPBIM;

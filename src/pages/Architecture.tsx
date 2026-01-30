import Navbar from '@/components/Navbar';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Building2, PencilRuler, Maximize2, Presentation, ArrowRight, CheckCircle2 } from 'lucide-react';
import { useScrollAnimation, fadeInUpVariants, staggerContainerVariants } from '@/hooks/useScrollAnimation';
import Footer from '@/components/Footer';
import Contact from '@/components/Contact';

const capabilities = [
    {
        title: 'Floor Plans',
        description: 'Highly detailed 2D architectural layouts with precise spatial coordination and compliance-ready documentation.',
        icon: PencilRuler
    },
    {
        title: 'Sections & Elevations',
        description: 'Accurate vertical and sectional drawings extracted directly from coordinated 3D BIM models.',
        icon: Building2
    },
    {
        title: '3D Modeling',
        description: 'Construction-ready architectural models with high Levels of Detail (LOD 100–500) for design and execution.',
        icon: Maximize2
    },
    {
        title: 'High-End Rendering',
        description: 'Photorealistic visualizations for design validation, stakeholder alignment, and client presentations.',
        icon: Presentation
    }
];

const Architecture = () => {
    const { ref: heroRef, isInView: heroInView } = useScrollAnimation();
    const { ref: capabilityRef, isInView: capabilityInView } = useScrollAnimation();

    return (
        <div className="min-h-screen bg-background text-foreground relative overflow-x-hidden">
            <Navbar />
            <main>
                {/* Architecture Hero - Premium White Theme */}
                <section className="relative pt-16 pb-12 md:pt-24 md:pb-16 overflow-hidden bg-white">
                    {/* Soft Alpine Blue Tint Overlay */}
                    <div className="absolute inset-0 bg-grad-navy opacity-30" />

                    {/* Animated Wireframe Background Placeholder */}
                    <div className="absolute inset-0 opacity-[0.03] pointer-events-none overflow-hidden">
                        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8846CF_1px,transparent_1px),linear-gradient(to_bottom,#8846CF_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
                    </div>

                    <div className="container mx-auto px-6 relative z-10">
                        <motion.div
                            ref={heroRef}
                            initial="hidden"
                            animate={heroInView ? 'visible' : 'hidden'}
                            variants={staggerContainerVariants}
                            className="max-w-5xl mx-auto flex flex-col items-center text-center"
                        >
                            <motion.div
                                variants={fadeInUpVariants}
                                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/5 border border-primary/20 text-primary text-[12px] font-bold mb-8 shadow-sm"
                            >
                                <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                                Expert Architecture BIM
                            </motion.div>

                            <motion.h1
                                variants={fadeInUpVariants}
                                className="text-4xl sm:text-5xl md:text-[68px] font-black text-slate-900 mb-8 leading-[1.05] tracking-tight"
                            >
                                Precision Architecture. <br />
                                <span className="text-slate-400 font-medium tracking-tight">Defined by Data.</span>
                            </motion.h1>

                            <motion.p
                                variants={fadeInUpVariants}
                                className="text-base md:text-xl text-slate-600 mb-12 max-w-3xl leading-relaxed font-normal"
                            >
                                From concept to construction, we deliver intelligent 3D BIM models and highly accurate 2D documentation for complex architectural projects worldwide.
                            </motion.p>

                            <motion.div variants={fadeInUpVariants}>
                                <Link to="/contact" className="btn-primary px-8 py-4 text-[16px] group shadow-premium-hover flex items-center">
                                    Discuss Architecture BIM
                                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </Link>
                            </motion.div>
                        </motion.div>
                    </div>
                </section>

                {/* Core Architecture Services - Dense Layout */}
                <section className="py-12 md:py-16 bg-white border-b border-slate-100">
                    <div className="container mx-auto px-6">
                        <motion.div
                            variants={fadeInUpVariants}
                            initial="hidden"
                            whileInView="visible"
                            className="mb-16 flex flex-col items-center text-center"
                        >
                            <h2 className="text-[28px] md:text-[36px] font-bold text-slate-900 tracking-tight flex flex-col items-center gap-4">
                                <div className="w-12 h-1 bg-primary rounded-full" />
                                Core Architecture Services
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
                                    <h3 className="text-[18px] font-semibold text-slate-900 mb-3 tracking-tight">{item.title}</h3>
                                    <p className="text-slate-500 leading-relaxed font-normal text-[14px]">
                                        {item.description}
                                    </p>

                                    {/* Subtle Divider Lines */}
                                    <div className="absolute top-8 bottom-8 right-0 w-[1px] bg-slate-100 hidden lg:block opacity-0 group-hover:opacity-100 transition-opacity" />
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </section>

                {/* Intelligent Design Validation Platform - Split Layout */}
                <section className="py-12 md:py-16 bg-slate-50">
                    <div className="container mx-auto px-6">
                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            <motion.div variants={fadeInUpVariants} initial="hidden" whileInView="visible" className="max-w-xl">
                                <div className="inline-block px-3 py-1 bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-wider rounded-md mb-6">
                                    Validation Platform
                                </div>
                                <h2 className="text-[32px] md:text-[42px] font-semibold text-slate-900 mb-8 leading-[1.1] tracking-tight">
                                    Intelligent Design <br />
                                    <span className="text-slate-400 font-medium">Validation Platform.</span>
                                </h2>

                                <p className="text-[15px] md:text-[16px] text-slate-600 mb-10 leading-relaxed font-normal">
                                    A unified BIM environment ensuring accuracy, coordination, and constructability through every phase of the project lifecycle.
                                </p>

                                <div className="space-y-5">
                                    {[
                                        'Cross-discipline design coordination',
                                        'High LOD modeling (LOD 100–500)',
                                        'Automated quantity take-offs from BIM models',
                                        'Construction visualization and 4D simulations'
                                    ].map((text) => (
                                        <div key={text} className="flex items-center gap-4 group">
                                            <div className="w-5 h-5 rounded-full bg-white border border-slate-200 shadow-sm flex items-center justify-center text-primary group-hover:border-primary transition-colors">
                                                <CheckCircle2 size={12} />
                                            </div>
                                            <p className="text-slate-700 font-medium text-[15px]">{text}</p>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>

                            <div className="relative group">
                                <div className="aspect-video rounded-[32px] overflow-hidden glass-card shadow-xl bg-slate-900 border border-white/5">
                                    {/* Visual Metaphor for animated wireframe -> solid model transition */}
                                    <div className="absolute inset-0 bg-[#0F172A] flex items-center justify-center overflow-hidden">
                                        <div className="absolute inset-0 bg-[linear-gradient(to_right,#3b82f60d_1px,transparent_1px),linear-gradient(to_bottom,#3b82f60d_1px,transparent_1px)] bg-[size:20px_20px]" />
                                        <Building2 size={80} className="text-primary/20 animate-pulse" />

                                        {/* Floating Tech Elements */}
                                        <motion.div
                                            animate={{
                                                opacity: [0.3, 0.6, 0.3],
                                                y: [0, -10, 0]
                                            }}
                                            transition={{ duration: 4, repeat: Infinity }}
                                            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 border border-primary/20 rounded-full"
                                        />
                                    </div>
                                </div>
                                {/* Clean Indicator */}
                                <div className="absolute bottom-6 left-6 flex items-center gap-2 px-3 py-1.5 rounded-lg bg-black/40 backdrop-blur-md border border-white/10 text-[10px] text-white/60 font-medium tracking-widest uppercase">
                                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                                    Live Platform Preview
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

export default Architecture;

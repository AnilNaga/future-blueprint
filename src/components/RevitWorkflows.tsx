
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useScrollAnimation, fadeInUpVariants, staggerContainerVariants } from '@/hooks/useScrollAnimation';
import { Target, Box, AlertCircle, FileCheck } from 'lucide-react';
import { useRef } from 'react';

const workflowSteps = [
    {
        number: "01",
        icon: Target,
        title: 'Strategic Planning',
        description: 'We define the BIM execution plan (BEP) and level of development (LOD) requirements tailored to your specific project goals.',
        gradient: 'from-[#8846CF] to-purple-700'
    },
    {
        number: "02",
        icon: Box,
        title: 'Precision Modeling',
        description: 'Our experts build highly detailed 3D Revit models for Architecture, MEP, and Structural disciplines with surgical precision.',
        gradient: 'from-fuchsia-500 to-pink-600'
    },
    {
        number: "03",
        icon: AlertCircle,
        title: 'Clash Coordination',
        description: 'Using Navisworks and BIM Collaborate Pro, we identify and resolve spatial conflicts before they reach the construction site.',
        gradient: 'from-violet-500 to-purple-600'
    },
    {
        number: "04",
        icon: FileCheck,
        title: 'Construction Records',
        description: 'We generate accurate shop drawings, BOQs, and as-built models that serve as a digital twin for the entire lifecycle.',
        gradient: 'from-pink-500 to-rose-600'
    }
];

const RevitWorkflows = () => {
    const { ref: headerRef, isInView: headerInView } = useScrollAnimation({});
    const containerRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const scaleY = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    const { ref: contentRef, isInView: contentInView } = useScrollAnimation({ amount: 0.1 });

    return (
        <section id="workflows" className="section relative overflow-hidden bg-slate-50/50">
            {/* Background Decorative Elements */}
            <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="absolute inset-0 opacity-[0.02] pointer-events-none"
                style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '60px 60px' }} />

            <div className="container mx-auto px-6">
                {/* Header */}
                <motion.div
                    ref={headerRef}
                    initial="hidden"
                    animate={headerInView ? 'visible' : 'hidden'}
                    variants={staggerContainerVariants}
                    className="max-w-3xl mx-auto text-center mb-32"
                >
                    <motion.p
                        variants={fadeInUpVariants}
                        className="text-[10px] font-bold text-primary uppercase tracking-[0.3em] mb-4"
                    >
                        Digital Lifecycle
                    </motion.p>
                    <motion.h2
                        variants={fadeInUpVariants}
                        className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 mb-8"
                    >
                        Integrated Revit Workflows
                    </motion.h2>
                    <motion.p
                        variants={fadeInUpVariants}
                        className="text-xl text-slate-500 leading-relaxed max-w-2xl mx-auto"
                    >
                        Our systematic approach transforms complex engineering challenges
                        into coordinated, data-rich digital models.
                    </motion.p>
                </motion.div>

                {/* Workflow Steps - Vertical Storytelling */}
                <div ref={containerRef} className="relative max-w-6xl mx-auto">
                    {/* Middle Line - Dynamic Path */}
                    <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-slate-200 -translate-x-1/2 z-0" />
                    <motion.div
                        style={{ scaleY }}
                        className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-purple-500 to-violet-600 -translate-x-1/2 z-10 origin-top"
                    />

                    <div ref={contentRef} className="space-y-24 md:space-y-0 relative z-10">
                        {workflowSteps.map((step, index) => (
                            <motion.div
                                key={step.title}
                                initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100, y: 50 }}
                                animate={contentInView ? { opacity: 1, x: 0, y: 0 } : { opacity: 0, x: index % 2 === 0 ? -100 : 100, y: 50 }}
                                transition={{
                                    duration: 1.2,
                                    delay: index * 0.2,
                                    ease: [0.16, 1, 0.3, 1]
                                }}
                                className={`relative flex flex-col md:flex-row items-center gap-12 ${index % 2 === 1 ? 'md:flex-row-reverse' : ''
                                    } md:min-h-[300px] pb-16 md:pb-0`}
                            >
                                {/* Animated Dot on Line */}
                                <motion.div
                                    animate={contentInView ? { scale: [0, 1.2, 1], opacity: 1 } : { scale: 0, opacity: 0 }}
                                    transition={{ delay: (index * 0.2) + 0.5, duration: 0.5 }}
                                    className="absolute left-4 md:left-1/2 top-0 md:top-1/2 w-5 h-5 rounded-full bg-white border-4 border-primary shadow-[0_0_20px_rgba(var(--primary-rgb),0.3)] -translate-x-1/2 md:-translate-y-1/2 z-20 hidden md:block"
                                />

                                {/* Content Card */}
                                <div className={`w-full md:w-[45%] ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                                    <motion.div
                                        whileHover={{ y: -12, scale: 1.02 }}
                                        className={`relative p-6 rounded-[24px] bg-gradient-to-br ${step.gradient} shadow-2xl transition-all duration-700 overflow-hidden group border border-white/20`}
                                    >
                                        {/* Glossy Overlay */}
                                        <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 blur-[40px] rounded-full -translate-y-1/2 translate-x-1/2" />

                                        <div className={`relative z-10 flex flex-col ${index % 2 === 0 ? 'md:items-end' : 'md:items-start'} gap-3`}>
                                            <div className="w-14 h-14 rounded-[16px] bg-white/20 backdrop-blur-md flex items-center justify-center shadow-xl group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500 border border-white/30">
                                                <step.icon className="w-6 h-6 text-white" />
                                            </div>

                                            <div>
                                                <span className="block text-[9px] font-black text-white/40 uppercase tracking-[0.2em] mb-2">
                                                    Step {step.number}
                                                </span>
                                                <h3 className="text-xl font-bold text-white mb-2 tracking-tight">
                                                    {step.title}
                                                </h3>
                                                <p className="text-white/80 text-sm leading-relaxed font-medium">
                                                    {step.description}
                                                </p>
                                            </div>
                                        </div>

                                        {/* Parallax background icon */}
                                        <motion.div
                                            style={{
                                                y: useTransform(scrollYProgress, [0, 1], [20, -20]),
                                                rotate: useTransform(scrollYProgress, [0, 1], [0, 15])
                                            }}
                                            className={`absolute ${index % 2 === 0 ? '-left-12' : '-right-12'} -bottom-12 w-48 h-48 opacity-[0.08] group-hover:opacity-15 transition-opacity duration-700 text-white pointer-events-none`}
                                        >
                                            <step.icon className="w-full h-full" />
                                        </motion.div>
                                    </motion.div>
                                </div>

                                {/* Placeholder for balance */}
                                <div className="hidden md:block md:w-[45%]" />
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Bottom CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={contentInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    className="mt-32 text-center"
                >
                    <div className="inline-flex flex-col items-center">
                        <div className="w-20 h-1 bg-gradient-to-r from-transparent via-primary/20 to-transparent mb-12" />
                        <h4 className="text-2xl md:text-3xl font-bold text-slate-900 mb-10">
                            Ready to digitize your engineering workflow?
                        </h4>
                        <Link
                            to="/contact"
                            className="btn-primary flex items-center gap-3 px-10 py-5 text-lg inline-block text-center"
                        >
                            Get Started Now
                            <Target className="w-6 h-6 inline-block ml-2" />
                        </Link>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default RevitWorkflows;

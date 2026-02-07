import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useScrollAnimation, fadeInUpVariants, staggerContainerVariants } from '@/hooks/useScrollAnimation';
import { Target, Box, AlertCircle, FileCheck, ArrowRight } from 'lucide-react';
import { useRef } from 'react';

const workflowSteps = [
    {
        number: "01",
        icon: Target,
        title: 'Strategic Planning',
        description: 'We define the BIM execution plan (BEP) and level of development (LOD) requirements tailored to your specific project goals.',
    },
    {
        number: "02",
        icon: Box,
        title: 'Precision Modeling',
        description: 'Our experts build highly detailed 3D Revit models for Architecture, MEP, and Structural disciplines with surgical precision.',
    },
    {
        number: "03",
        icon: AlertCircle,
        title: 'Clash Coordination',
        description: 'Using Navisworks and BIM Collaborate Pro, we identify and resolve spatial conflicts before they reach the construction site.',
    },
    {
        number: "04",
        icon: FileCheck,
        title: 'Construction Records',
        description: 'We generate accurate shop drawings, BOQs, and as-built models that serve as a digital twin for the entire lifecycle.',
    }
];

const WorkflowCard = ({ step, index, isInView }: { step: any; index: number; isInView: boolean }) => {
    return (
        <motion.div
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={fadeInUpVariants}
            transition={{ duration: 0.8, delay: index * 0.1, ease: [0.25, 1, 0.5, 1] }}
            whileHover={{ y: -10, transition: { duration: 0.4, ease: "easeOut" } }}
            className={`relative p-6 md:p-8 rounded-[2rem] bg-[#914694] border border-white/10 shadow-[0_15px_40px_rgba(0,0,0,0.1)] hover:shadow-[0_30px_60px_rgba(145,70,148,0.3)] transition-shadow duration-500 overflow-hidden group`}
        >
            <div className="relative z-10 flex flex-col gap-6">
                <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-xl bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20 group-hover:scale-110 group-hover:bg-white group-hover:shadow-lg transition-all duration-500">
                        <step.icon className="w-5 h-5 text-white group-hover:text-[#914694] transition-colors duration-500" />
                    </div>
                    <motion.span
                        initial={{ opacity: 0, x: 10 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: (index * 0.15) + 0.6 }}
                        className="text-[9px] font-black text-white/40 uppercase tracking-[0.5em]"
                    >
                        Step {step.number}
                    </motion.span>
                </div>

                <div>
                    <motion.h3
                        initial={{ opacity: 0, y: 10 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: (index * 0.15) + 0.5 }}
                        className="text-xl md:text-2xl font-black text-white mb-3 tracking-tight leading-tight"
                    >
                        {step.title}
                    </motion.h3>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={isInView ? { opacity: 0.8, y: 0 } : {}}
                        transition={{ delay: (index * 0.15) + 0.7 }}
                        className="text-white text-sm md:text-base leading-relaxed font-medium"
                    >
                        {step.description}
                    </motion.p>
                </div>
            </div>

            {/* Background Depth Gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />
        </motion.div>
    );
};

const WaterDroplet = ({ top, left, size, delay, index }: { top: string; left: string; size: number; delay: number; index: number }) => {
    const { scrollYProgress } = useScroll();
    const y = useTransform(scrollYProgress, [0, 1], [0, -50 + (index % 3) * 30]);
    const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.2, 0.4, 0.2]);

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 4 + Math.random() * 4, repeat: Infinity, delay }}
            className="absolute rounded-full backdrop-blur-[1px] shadow-[inset_0_1px_2px_rgba(255,255,255,0.8),0_1px_2px_rgba(0,0,0,0.05)] border border-white/30"
            style={{
                top,
                left,
                width: size,
                height: size,
                backgroundColor: 'rgba(255, 255, 255, 0.5)',
                y,
                opacity
            }}
        />
    );
};

const RevitWorkflows = () => {
    const { ref: headerRef, isInView: headerInView } = useScrollAnimation({});
    const containerRef = useRef<HTMLDivElement>(null);

    const droplets = [
        { top: '10%', left: '15%', size: 6, delay: 0 },
        { top: '25%', left: '80%', size: 10, delay: 1 },
        { top: '45%', left: '25%', size: 8, delay: 2 },
        { top: '65%', left: '75%', size: 12, delay: 0.5 },
        { top: '85%', left: '15%', size: 7, delay: 1.5 },
        { top: '15%', left: '60%', size: 9, delay: 2.5 },
        { top: '40%', left: '85%', size: 6, delay: 3 },
        { top: '75%', left: '35%', size: 10, delay: 0.2 },
        { top: '90%', left: '80%', size: 8, delay: 1.2 },
        { top: '5%', left: '45%', size: 7, delay: 2.2 },
        { top: '35%', left: '15%', size: 11, delay: 0.8 },
        { top: '60%', left: '90%', size: 9, delay: 1.8 },
        { top: '80%', left: '55%', size: 12, delay: 2.8 },
        { top: '22%', left: '35%', size: 7, delay: 0.4 },
        { top: '55%', left: '65%', size: 9, delay: 1.4 },
    ];

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const scaleY = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    const { ref: contentRef, isInView: contentInView } = useScrollAnimation({ amount: 0.05 });

    return (
        <section id="workflows" className="section relative overflow-hidden py-32 md:py-56 px-6 border-t border-slate-900/5">
            {/* Sticky BIM Background Image (same as About section) */}
            {/* The Droplet Engine (Between base and glass) */}
            {/* Sticky Scoped Background */}
            <div
                className="absolute inset-0 z-0 hidden md:block"
                style={{
                    backgroundImage: 'url(/images/about-bim-background.png)',
                    backgroundAttachment: 'fixed',
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                }}
            />
            <div
                className="absolute inset-0 z-0 md:hidden"
                style={{
                    backgroundImage: 'url(/images/about-bim-background.png)',
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                }}
            />
            <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
                {droplets.map((d, i) => (
                    <WaterDroplet key={i} {...d} index={i} />
                ))}
            </div>

            {/* Glass Surface Layer */}
            <div
                className="absolute inset-0 z-0 backdrop-blur-[100px] pointer-events-none"
                style={{ backgroundColor: 'rgba(255, 255, 255, 0.5)' }}
            />

            <div className="container mx-auto relative z-10">
                {/* Cinematic Header Reveal */}
                <motion.div
                    ref={headerRef}
                    initial="hidden"
                    animate={headerInView ? 'visible' : 'hidden'}
                    variants={staggerContainerVariants}
                    className="max-w-4xl mx-auto text-center mb-24 md:mb-40"
                >
                    <motion.div
                        variants={fadeInUpVariants}
                        className="inline-block px-6 py-2 mb-8 rounded-full bg-white border border-slate-900/5 shadow-lg shadow-slate-200/50"
                    >
                        <span className="text-[10px] md:text-xs font-black uppercase tracking-[0.5em] text-[#914694]">Strategic Process</span>
                    </motion.div>

                    <motion.h2
                        variants={fadeInUpVariants}
                        className="text-4xl md:text-[5rem] font-black text-slate-900 mb-8 tracking-[-0.04em] leading-[0.95]"
                    >
                        Integrated Revit <br />
                        <span className="text-[#914694]">Workflows</span>
                    </motion.h2>

                    <motion.p
                        variants={fadeInUpVariants}
                        className="text-lg md:text-xl text-slate-500 max-w-3xl mx-auto leading-relaxed font-medium tracking-tight"
                    >
                        Our systematic approach transforms complex engineering challenges
                        into coordinated, data-rich digital twins.
                    </motion.p>
                </motion.div>

                {/* Vertical Process Narrative */}
                <div ref={containerRef} className="relative max-w-5xl mx-auto px-4 md:px-0">
                    {/* High-Contrast Process Path */}
                    <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-[2px] bg-slate-100 -translate-x-1/2 z-0" />
                    <motion.div
                        style={{ scaleY }}
                        className="absolute left-6 md:left-1/2 top-0 bottom-0 w-[2px] bg-[#914694] -translate-x-1/2 z-10 origin-top shadow-[0_0_15px_rgba(145,70,148,0.3)]"
                    />

                    <div ref={contentRef} className="space-y-24 md:space-y-0 relative z-10">
                        {workflowSteps.map((step, index) => (
                            <div
                                key={step.title}
                                className={`relative flex flex-col md:flex-row items-center gap-12 md:gap-20 ${index % 2 === 1 ? 'md:flex-row-reverse' : ''} md:min-h-[350px]`}
                            >
                                {/* Active Node Indicator */}
                                <div className="absolute left-6 md:left-1/2 top-0 md:top-1/2 -translate-x-1/2 md:-translate-y-1/2 z-20">
                                    <motion.div
                                        animate={contentInView ? { scale: [1, 1.4, 1], opacity: [1, 0.6, 1] } : {}}
                                        transition={{ duration: 3, repeat: Infinity }}
                                        className="w-4 h-4 rounded-full bg-white border-[3px] border-[#914694] shadow-[0_0_12px_rgba(145,70,148,0.4)]"
                                    />
                                </div>

                                {/* Workflow Card */}
                                <div className="w-full md:w-[42%] pl-16 md:pl-0">
                                    <WorkflowCard step={step} index={index} isInView={contentInView} />
                                </div>

                                <div className="hidden md:block md:w-[42%]" />
                            </div>
                        ))}
                    </div>
                </div>

                {/* High-Impact Bottom CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={contentInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 1, delay: 0.8 }}
                    className="mt-40 text-center"
                >
                    <div className="inline-flex flex-col items-center">
                        <div className="w-16 h-px bg-gradient-to-r from-transparent via-[#914694]/20 to-transparent mb-12" />
                        <h4 className="text-2xl md:text-4xl font-black text-slate-900 mb-10 tracking-tight">
                            Ready to digitize your <br className="hidden md:block" /> engineering workflow?
                        </h4>
                        <Link
                            to="/contact"
                            className="group relative px-10 py-5 rounded-full bg-[#914694] text-white font-black text-base overflow-hidden transition-all hover:scale-105 shadow-[0_20px_40px_rgba(145,70,148,0.2)]"
                        >
                            <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                            <span className="relative z-10 flex items-center gap-3">
                                Get Started Now
                                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                            </span>
                        </Link>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default RevitWorkflows;

import { motion, useScroll, useTransform, useSpring, useMotionValue, useMotionTemplate, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useScrollAnimation, fadeInUpVariants, staggerContainerVariants } from '@/hooks/useScrollAnimation';
import { Target, Layers, AlertCircle, FileCheck, Workflow, ArrowRight, Grid3X3 } from 'lucide-react';
import { useRef, useState } from 'react';

const workflowSteps = [
    {
        number: "01",
        icon: Target,
        title: 'Strategic Planning',
        description: 'We define the BIM execution plan (BEP) and level of development (LOD) requirements tailored to your specific project goals.',
        visual: 'blueprint',
        color: 'from-violet-500 to-purple-600',
    },
    {
        number: "02",
        icon: Layers,
        title: 'Precision Modeling',
        description: 'Our experts build highly detailed 3D Revit models for Architecture, MEP, and Structural disciplines with surgical precision.',
        visual: '3d-model',
        color: 'from-blue-500 to-cyan-500',
    },
    {
        number: "03",
        icon: AlertCircle,
        title: 'Clash Coordination',
        description: 'Using Navisworks and BIM Collaborate Pro, we identify and resolve spatial conflicts before they reach the construction site.',
        visual: 'clash',
        color: 'from-orange-500 to-amber-500',
    },
    {
        number: "04",
        icon: FileCheck,
        title: 'Construction Records',
        description: 'We generate accurate shop drawings, BOQs, and as-built models that serve as a digital twin for the entire lifecycle.',
        visual: 'docs',
        color: 'from-emerald-500 to-teal-500',
    }
];

const BlueprintAnimation = () => (
    <motion.div className="relative w-full h-full flex items-center justify-center">
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 200 200">
            {[...Array(10)].map((_, i) => (
                <motion.line
                    key={`h-${i}`}
                    x1="0" y1={i * 20 + 10} x2="200" y2={i * 20 + 10}
                    stroke="currentColor"
                    strokeOpacity="0.1"
                    strokeWidth="0.5"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 1.5, delay: i * 0.1 }}
                />
            ))}
            {[...Array(10)].map((_, i) => (
                <motion.line
                    key={`v-${i}`}
                    x1={i * 20 + 10} y1="0" x2={i * 20 + 10} y2="200"
                    stroke="currentColor"
                    strokeOpacity="0.1"
                    strokeWidth="0.5"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 1.5, delay: i * 0.1 }}
                />
            ))}
            <motion.rect
                x="30" y="30" width="140" height="100" rx="2"
                fill="none" stroke="currentColor" strokeWidth="2"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 2, delay: 0.5 }}
            />
            <motion.rect
                x="50" y="50" width="40" height="30"
                fill="currentColor" fillOpacity="0.1"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 1.5 }}
            />
            <motion.rect
                x="110" y="50" width="40" height="30"
                fill="currentColor" fillOpacity="0.1"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 1.7 }}
            />
        </svg>
        <motion.div
            className="absolute"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 2, duration: 0.5 }}
        >
            <Grid3X3 className="w-12 h-12 text-white/60" />
        </motion.div>
    </motion.div>
);

const Model3DAnimation = () => (
    <motion.div className="relative w-full h-full flex items-center justify-center" style={{ perspective: '1000px' }}>
        <div className="relative w-32 h-32" style={{ transformStyle: 'preserve-3d' }}>
            {[0, 1, 2].map((layer) => (
                <motion.div
                    key={layer}
                    className="absolute inset-0 border-2 border-white/30 rounded-lg bg-white/5"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: -layer * 20 }}
                    transition={{ duration: 1, delay: layer * 0.3, ease: [0.16, 1, 0.3, 1] }}
                    style={{ transform: `rotateX(-20deg) rotateY(-20deg) translateZ(${layer * 15}px)` }}
                />
            ))}
        </div>
        <motion.div
            className="absolute bottom-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
        >
            <span className="text-xs text-white/40 uppercase tracking-widest">LOD 400</span>
        </motion.div>
    </motion.div>
);

const ClashAnimation = () => {
    const [clash, setClash] = useState(false);
    
    return (
        <motion.div 
            className="relative w-full h-full flex items-center justify-center"
            onViewportEnter={() => setTimeout(() => setClash(true), 1000)}
        >
            <svg className="w-full h-full" viewBox="0 0 200 200">
                <motion.line
                    x1="20" y1="100" x2="180" y2="100"
                    stroke="#3b82f6" strokeWidth="12" strokeLinecap="round"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 1 }}
                />
                <motion.line
                    x1="100" y1="20" x2="100" y2="180"
                    stroke="#f97316" strokeWidth="12" strokeLinecap="round"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 1, delay: 0.5 }}
                />
                <AnimatePresence>
                    {clash && (
                        <motion.circle
                            cx="100" cy="100" r="25"
                            fill="none" stroke="#ef4444" strokeWidth="3"
                            initial={{ scale: 0, opacity: 0 }}
                            animate={{ scale: [0, 1.5, 1], opacity: [0, 1, 1] }}
                            exit={{ scale: 0, opacity: 0 }}
                            transition={{ duration: 0.5 }}
                        />
                    )}
                </AnimatePresence>
            </svg>
            <motion.div
                className="absolute"
                initial={{ scale: 0 }}
                animate={{ scale: clash ? 1 : 0 }}
                transition={{ delay: 1.5, type: 'spring' }}
            >
                <AlertCircle className="w-8 h-8 text-red-400" />
            </motion.div>
        </motion.div>
    );
};

const DocsAnimation = () => (
    <motion.div className="relative w-full h-full flex items-center justify-center">
        {[0, 1, 2].map((i) => (
            <motion.div
                key={i}
                className="absolute w-24 h-32 bg-white/10 border border-white/20 rounded-lg backdrop-blur-sm"
                initial={{ opacity: 0, y: 50, x: 0, rotate: 0 }}
                animate={{ opacity: 1, y: 0, x: (i - 1) * 15, rotate: (i - 1) * 5 }}
                transition={{ duration: 0.8, delay: i * 0.2 }}
            >
                <div className="p-3 space-y-2">
                    {[...Array(4)].map((_, j) => (
                        <motion.div
                            key={j}
                            className="h-1.5 bg-white/20 rounded"
                            style={{ width: `${60 + (j * 10)}%` }}
                            initial={{ scaleX: 0 }}
                            animate={{ scaleX: 1 }}
                            transition={{ delay: i * 0.2 + j * 0.1 + 0.5 }}
                        />
                    ))}
                </div>
            </motion.div>
        ))}
        <motion.div
            className="absolute bottom-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
        >
            <FileCheck className="w-6 h-6 text-white/50" />
        </motion.div>
    </motion.div>
);

const visualComponents: Record<string, React.FC> = {
    'blueprint': BlueprintAnimation,
    '3d-model': Model3DAnimation,
    'clash': ClashAnimation,
    'docs': DocsAnimation
};

interface WorkflowCardProps {
    step: typeof workflowSteps[0];
    index: number;
    scrollProgress: ReturnType<typeof useScroll>['scrollYProgress'];
}

const WorkflowCard = ({ step, index, scrollProgress }: WorkflowCardProps) => {
    const cardRef = useRef<HTMLDivElement>(null);
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);
    
    const handleMouseMove = (e: React.MouseEvent) => {
        if (!cardRef.current) return;
        const rect = cardRef.current.getBoundingClientRect();
        mouseX.set(e.clientX - rect.left);
        mouseY.set(e.clientY - rect.top);
    };
    
    const spotlightBackground = useMotionTemplate`radial-gradient(400px circle at ${mouseX}px ${mouseY}px, rgba(255,255,255,0.1), transparent 80%)`;
    
    const VisualComponent = visualComponents[step.visual];
    
    const y = useTransform(scrollProgress, [0, 1], [100, -100]);
    const rotate = useTransform(scrollProgress, [0, 1], [5, -5]);

    return (
        <motion.div
            ref={cardRef}
            initial={{ opacity: 0, y: 100, rotateX: 15 }}
            whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1.2, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
            onMouseMove={handleMouseMove}
            className="group relative"
            style={{ perspective: '1000px' }}
        >
            <motion.div
                whileHover={{ y: -20, scale: 1.02, rotateX: 5, rotateY: index % 2 === 0 ? 5 : -5 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className={`relative h-[500px] rounded-[32px] bg-gradient-to-br ${step.color} p-8 overflow-hidden shadow-2xl`}
                style={{ transformStyle: 'preserve-3d' }}
            >
                <motion.div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                    style={{ background: spotlightBackground }}
                />
                
                <motion.div
                    className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-white/10 blur-3xl"
                    style={{ y, rotate }}
                />
                <motion.div
                    className="absolute -bottom-20 -left-20 w-48 h-48 rounded-full bg-black/10 blur-3xl"
                    animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
                    transition={{ duration: 4, repeat: Infinity }}
                />
                
                <div className="absolute inset-0 rounded-[32px] border border-white/20" />
                <div className="absolute inset-[1px] rounded-[31px] border border-white/10" />
                
                <div className="relative z-10 h-full flex flex-col">
                    <div className="flex items-start justify-between mb-8">
                        <motion.div
                            whileHover={{ scale: 1.1, rotate: 10 }}
                            className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30 shadow-xl"
                        >
                            <step.icon className="w-8 h-8 text-white" />
                        </motion.div>
                        <span className="text-7xl font-black text-white/10">{step.number}</span>
                    </div>
                    
                    <div className="flex-1 relative text-white">
                        <VisualComponent />
                    </div>
                    
                    <div className="mt-auto">
                        <h3 className="text-2xl font-bold text-white mb-3">{step.title}</h3>
                        <p className="text-white/70 leading-relaxed">{step.description}</p>
                    </div>
                </div>
                
                <motion.div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none"
                    style={{ background: 'linear-gradient(135deg, transparent 40%, rgba(255,255,255,0.1) 50%, transparent 60%)' }}
                    initial={{ x: '-100%' }}
                    whileHover={{ x: '200%' }}
                    transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 2 }}
                />
            </motion.div>
        </motion.div>
    );
};

const RevitWorkflows = () => {
    const { ref: headerRef, isInView: headerInView } = useScrollAnimation({});
    const containerRef = useRef<HTMLDivElement>(null);
    const stickyRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    const { scrollYProgress: parallaxProgress } = useScroll({
        target: stickyRef,
        offset: ["start end", "end start"]
    });

    const smoothProgress = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    const backgroundY = useTransform(parallaxProgress, [0, 1], ['0%', '30%']);
    const backgroundScale = useTransform(parallaxProgress, [0, 0.5, 1], [1, 1.1, 1]);

    return (
        <section id="workflows" ref={stickyRef} className="relative overflow-hidden">
            <motion.div 
                className="absolute inset-0 bg-gradient-to-b from-slate-50 via-white to-slate-50"
                style={{ y: backgroundY, scale: backgroundScale }}
            />
            
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
                <motion.div
                    className="absolute inset-0"
                    style={{ 
                        backgroundImage: 'linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)',
                        backgroundSize: '80px 80px'
                    }}
                    animate={{ backgroundPosition: ['0px 0px', '80px 80px'] }}
                    transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                />
            </div>
            
            <motion.div
                className="absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-gradient-to-r from-violet-500/10 to-purple-500/10 blur-3xl"
                animate={{ y: [0, -50, 0], x: [0, 30, 0], scale: [1, 1.1, 1] }}
                transition={{ duration: 10, repeat: Infinity }}
            />
            <motion.div
                className="absolute bottom-1/4 -right-32 w-96 h-96 rounded-full bg-gradient-to-r from-cyan-500/10 to-blue-500/10 blur-3xl"
                animate={{ y: [0, 50, 0], x: [0, -30, 0], scale: [1, 1.2, 1] }}
                transition={{ duration: 12, repeat: Infinity }}
            />

            <div className="relative z-10 py-32">
                <div className="container mx-auto px-6">
                    <motion.div
                        ref={headerRef}
                        initial="hidden"
                        animate={headerInView ? 'visible' : 'hidden'}
                        variants={staggerContainerVariants}
                        className="max-w-4xl mx-auto text-center mb-24"
                    >
                        <motion.div
                            variants={fadeInUpVariants}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/5 border border-primary/10 mb-6"
                        >
                            <Workflow className="w-4 h-4 text-primary" />
                            <span className="text-xs font-bold text-primary uppercase tracking-widest">Digital Lifecycle</span>
                        </motion.div>
                        
                        <motion.h2
                            variants={fadeInUpVariants}
                            className="text-5xl md:text-6xl lg:text-7xl font-black text-slate-900 mb-8 leading-[0.9]"
                        >
                            Integrated Revit
                            <span className="block bg-gradient-to-r from-primary via-purple-500 to-violet-500 bg-clip-text text-transparent">
                                Workflows
                            </span>
                        </motion.h2>
                        
                        <motion.p
                            variants={fadeInUpVariants}
                            className="text-xl md:text-2xl text-slate-500 leading-relaxed max-w-3xl mx-auto"
                        >
                            Our systematic approach transforms complex engineering challenges
                            into coordinated, data-rich digital models.
                        </motion.p>
                    </motion.div>

                    <div className="hidden lg:block fixed right-8 top-1/2 -translate-y-1/2 z-50">
                        <div className="relative h-48 w-1 bg-slate-200 rounded-full overflow-hidden">
                            <motion.div
                                className="absolute top-0 left-0 right-0 bg-gradient-to-b from-primary to-violet-500 rounded-full origin-top"
                                style={{ scaleY: smoothProgress }}
                            />
                        </div>
                        <div className="mt-4 text-center">
                            <motion.span 
                                className="text-xs font-bold text-slate-400"
                                style={{ opacity: useTransform(smoothProgress, [0, 0.1], [0, 1]) }}
                            >
                                {workflowSteps.length} Steps
                            </motion.span>
                        </div>
                    </div>

                    <div ref={containerRef} className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                        {workflowSteps.map((step, index) => (
                            <WorkflowCard 
                                key={step.title} 
                                step={step} 
                                index={index}
                                scrollProgress={parallaxProgress}
                            />
                        ))}
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className="mt-32 text-center"
                    >
                        <motion.div
                            initial={{ scaleX: 0 }}
                            whileInView={{ scaleX: 1 }}
                            viewport={{ once: true }}
                            className="w-32 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent mx-auto mb-12"
                        />
                        
                        <h4 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8">
                            Ready to digitize your engineering workflow?
                        </h4>
                        
                        <Link
                            to="/contact"
                            className="group inline-flex items-center gap-4 px-10 py-5 bg-gradient-to-r from-primary to-violet-600 text-white rounded-full font-bold text-lg shadow-2xl shadow-primary/25 hover:shadow-primary/40 transition-all duration-500 hover:-translate-y-1"
                        >
                            Get Started Now
                            <motion.span
                                className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/20"
                                whileHover={{ x: 5 }}
                            >
                                <ArrowRight className="w-5 h-5" />
                            </motion.span>
                        </Link>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default RevitWorkflows;
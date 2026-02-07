import Navbar from '@/components/Navbar';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Construction, Layers, Calculator, Microscope, ArrowRight, Table, ShieldCheck } from 'lucide-react';
import { useScrollAnimation, fadeInUpVariants, staggerContainerVariants } from '@/hooks/useScrollAnimation';
import Footer from '@/components/Footer';
import Contact from '@/components/Contact';

const capabilities = [
    {
        title: 'Rebar Detailing',
        description: 'High-precision reinforcement modeling aligned with international codes and fabrication standards.',
        icon: Layers
    },
    {
        title: 'Beams & Columns',
        description: 'Accurate modeling of primary structural elements with constructability-driven detailing.',
        icon: Construction
    },
    {
        title: 'BOQs & Quantification',
        description: 'Automated quantity extraction directly from BIM models to ensure cost accuracy.',
        icon: Calculator
    },
    {
        title: 'Structural Analysis Support',
        description: 'BIM models structured to integrate seamlessly with analysis and design platforms.',
        icon: Microscope
    }
];

const Structural = () => {
    const { ref: heroRef, isInView: heroInView } = useScrollAnimation();
    const { ref: capabilityRef, isInView: capabilityInView } = useScrollAnimation();

    return (
        <div className="min-h-screen bg-background text-foreground relative overflow-x-hidden">
            <Navbar />
            <main>
                {/* Structural BIM Hero - Premium White Theme */}
                <section className="relative pt-16 pb-12 md:pt-24 md:pb-16 overflow-hidden bg-white">
                    {/* Soft Alpine Blue-Gray Tint Overlay */}
                    <div className="absolute inset-0 bg-grad-blue opacity-20" />

                    {/* Animated Structural Grid */}
                    <div className="absolute inset-0 opacity-[0.03] pointer-events-none overflow-hidden">
                        <div className="absolute inset-0 bg-[linear-gradient(to_right,#914694_1px,transparent_1px),linear-gradient(to_bottom,#914694_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

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
                                Portfolio
                            </motion.div>

                            <motion.h1
                                variants={fadeInUpVariants}
                                className="text-4xl sm:text-5xl md:text-[68px] font-black text-slate-900 mb-8 leading-[1.05] tracking-tight"
                            >
                                Structural <br />
                                <span className="text-slate-400 font-medium tracking-tight">Integrity.</span>
                            </motion.h1>

                            <motion.p
                                variants={fadeInUpVariants}
                                className="text-base md:text-xl text-slate-600 mb-12 max-w-3xl leading-relaxed font-normal"
                            >
                                High-fidelity structural modeling and detailing for complex steel and RC structures, ensuring construction feasibility and structural safety.
                            </motion.p>

                            <motion.div variants={fadeInUpVariants}>
                                <Link to="/contact" className="btn-primary px-8 py-4 text-[16px] group shadow-premium-hover flex items-center">
                                    Discuss Structural BIM
                                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </Link>
                            </motion.div>
                        </motion.div>
                    </div>
                </section>

                {/* Structural Core Capabilities - Dense Layout */}
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
                                Structural Core Capabilities
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
                                    <p className="text-slate-500 leading-relaxed font-normal text-[14px]">
                                        {item.description}
                                    </p>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </section>

                {/* High LOD Delivery - Split Layout */}
                <section className="py-12 md:py-16 bg-slate-50">
                    <div className="container mx-auto px-6">
                        <div className="grid lg:grid-cols-2 gap-16 items-start">
                            <motion.div variants={fadeInUpVariants} initial="hidden" whileInView="visible">
                                <div className="inline-block px-3 py-1 bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-wider rounded-md mb-6">
                                    Structural Workflow
                                </div>
                                <h2 className="text-[32px] md:text-[42px] font-semibold text-slate-900 mb-8 leading-[1.1] tracking-tight">
                                    Structural Delivery <br />
                                    <span className="text-slate-400 font-medium">Workflow.</span>
                                </h2>

                                <div className="space-y-10">
                                    {[
                                        { step: '01', title: 'Structural Modeling', desc: 'Creation of high LOD (LOD 300–500) structural models with complete element intelligence.' },
                                        { step: '02', title: 'Reinforcement Coordination', desc: 'Detailed rebar modeling with clash-free integration across architectural and MEP systems.' },
                                        { step: '03', title: 'Fabrication & Outputs', desc: 'Generation of bar bending schedules, shop drawings, and quantities ready for execution.' }
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

                            <motion.div variants={fadeInUpVariants} initial="hidden" whileInView="visible" className="lg:sticky lg:top-32">
                                <div className="p-10 rounded-[40px] bg-white border border-slate-100 shadow-premium">
                                    <h3 className="text-[22px] font-semibold text-slate-900 mb-8 tracking-tight">Engineering Confidence</h3>
                                    <div className="space-y-6">
                                        {[
                                            'Code-compliant modeling (IS, ACI, BS, Eurocode)',
                                            'High-accuracy rebar congestion control',
                                            'Reliable quantities for procurement and planning',
                                            'Reduced site errors and rework'
                                        ].map((text) => (
                                            <div key={text} className="flex items-center gap-4 py-4 border-b border-slate-50 last:border-0 group">
                                                <div className="w-5 h-5 rounded-full bg-primary/5 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
                                                    <ShieldCheck size={12} />
                                                </div>
                                                <p className="text-slate-700 font-medium text-[15px]">{text}</p>
                                            </div>
                                        ))}
                                    </div>
                                    <Link
                                        to="/contact"
                                        className="mt-10 p-6 rounded-2xl bg-slate-900 text-white flex items-center justify-between group cursor-pointer hover:bg-primary transition-colors duration-300"
                                    >
                                        <div className="text-[14px] font-semibold">Start Structural Consultation</div>
                                        <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                                    </Link>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </section>

                <Contact />
            </main>
            <Footer />
        </div>
    );
};

export default Structural;

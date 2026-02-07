import { motion } from 'framer-motion';
import { useScrollAnimation, fadeInUpVariants, staggerContainerVariants } from '@/hooks/useScrollAnimation';
import { ShieldCheck, Zap, BarChart, Settings, Users, Briefcase } from 'lucide-react';

const consultancyServices = [
    {
        icon: ShieldCheck,
        title: 'BIM Implementation',
        description: 'We develop custom BIM standards, templates, and protocols to align your organization with industry-leading digital workflows.',
    },
    {
        icon: Zap,
        title: 'Digital Transformation',
        description: 'Transitioning legacy engineering firms into high-performance digital powerhouses through Revit and BIM automation.',
    },
    {
        icon: BarChart,
        title: 'Strategic Auditing',
        description: 'Comprehensive auditing of your BIM models for quality assurance, data integrity, and project profitability.',
    },
    {
        icon: Settings,
        title: 'VDC Coordination',
        description: 'Providing Virtual Design and Construction (VDC) management for complex, multi-disciplinary megaprojects.',
    }
];

const BIMConsultancy = () => {
    const { ref: headerRef, isInView: headerInView } = useScrollAnimation();
    const { ref: gridRef, isInView: gridInView } = useScrollAnimation();

    return (
        <section id="consultancy" className="section relative transition-colors duration-500" style={{ backgroundColor: 'rgb(252, 250, 225)' }}>
            <div className="container mx-auto px-6">
                {/* Header */}
                <motion.div
                    ref={headerRef}
                    initial="hidden"
                    animate={headerInView ? 'visible' : 'hidden'}
                    variants={staggerContainerVariants}
                    className="max-w-4xl mx-auto text-center mb-12"
                >
                    <motion.p
                        variants={fadeInUpVariants}
                        className="text-xs font-bold text-primary uppercase tracking-[0.3em] mb-4"
                    >
                        Enterprise Solutions
                    </motion.p>
                    <motion.h2
                        variants={fadeInUpVariants}
                        className="mb-6"
                    >
                        BIM & Digital <span className="gradient-text">Consultancy</span>
                    </motion.h2>
                    <motion.p
                        variants={fadeInUpVariants}
                        className="text-base text-slate-500 leading-relaxed max-w-2xl mx-auto font-medium"
                    >
                        Beyond modeling, we provide strategic leadership to help your organization
                        master the digital construction era.
                    </motion.p>
                </motion.div>

                {/* Consultancy Grid */}
                <motion.div
                    ref={gridRef}
                    initial="hidden"
                    animate={gridInView ? 'visible' : 'hidden'}
                    variants={staggerContainerVariants}
                    className="grid md:grid-cols-2 gap-6 md:gap-8"
                >
                    {consultancyServices.map((service) => (
                        <motion.div
                            key={service.title}
                            variants={fadeInUpVariants}
                            whileHover={{ y: -6, scale: 1.01 }}
                            transition={{ duration: 0.4, ease: 'easeOut' }}
                            className="glass-card p-8 md:p-10 rounded-[32px] group relative overflow-hidden border border-white/20 shadow-xl"
                        >
                            {/* Background Glow */}
                            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 blur-[40px] group-hover:bg-primary/10 transition-colors duration-500" />

                            <div className="relative z-10 flex flex-col sm:flex-row gap-8 items-start">
                                <div className="w-14 h-14 rounded-xl bg-white shadow-lg flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:scale-105 transition-all duration-500 ring-4 ring-slate-50 group-hover:ring-primary/10 border border-slate-100">
                                    <service.icon className="w-7 h-7 text-primary group-hover:text-white transition-colors duration-500" />
                                </div>

                                <div>
                                    <h3 className="group-hover:text-primary transition-colors mb-2 text-xl font-semibold">
                                        {service.title}
                                    </h3>
                                    <p className="text-slate-500 leading-relaxed font-medium text-base mb-6">
                                        {service.description}
                                    </p>

                                    <div className="flex items-center gap-3 text-[9px] font-bold text-slate-400 group-hover:text-primary transition-colors cursor-pointer uppercase tracking-widest">
                                        <Briefcase className="w-3.5 h-3.5" />
                                        <span>Enterprise Support</span>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default BIMConsultancy;

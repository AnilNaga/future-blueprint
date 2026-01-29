import Navbar from '@/components/Navbar';
import { motion } from 'framer-motion';
import { useScrollAnimation, fadeInUpVariants, staggerContainerVariants } from '@/hooks/useScrollAnimation';
import Footer from '@/components/Footer';
import { GraduationCap, BookOpen, Users, Briefcase, CheckCircle2, Clock, Award, Building2, Settings, Layers } from 'lucide-react';

const academyTracks = [
    {
        icon: <Building2 className="w-6 h-6" />,
        title: 'Revit Architecture',
        duration: '8 Weeks',
        level: 'Beginner to Advanced',
        description: 'Master architectural modeling, documentation, and visualization using world-class Revit standards.',
        features: ['BIM Fundamentals', 'Parametric Modeling', 'High-end Rendering', 'CD Set Generation']
    },
    {
        icon: <Settings className="w-6 h-6" />,
        title: 'Revit MEP',
        duration: '10 Weeks',
        level: 'Intermediate',
        description: 'Specialize in HVAC, Plumbing, and Electrical systems coordination within a unified BIM environment.',
        features: ['System Routing', 'Clash Coordination', 'Load Calculations', 'Shop Drawings']
    },
    {
        icon: <Layers className="w-6 h-6" />,
        title: 'Revit Structural',
        duration: '8 Weeks',
        level: 'Intermediate',
        description: 'Learn complex rebar detailing, steel connections, and structural analysis integration.',
        features: ['RC Detailing', 'Steel Connections', 'Analytical Models', 'BOQ Extraction']
    }
];

const features = [
    {
        icon: Users,
        title: 'Internship Programs',
        description: 'Real-world project exposure with mentorship from industry experts.'
    },
    {
        icon: Briefcase,
        title: 'Job Pipeline',
        description: 'Direct placement opportunities with our global network of AEC partners.'
    },
    {
        icon: CheckCircle2,
        title: 'Certification',
        description: 'Industry-recognized certificates that validate your professional BIM expertise.'
    }
];

const Academy = () => {
    const { ref: heroRef, isInView: heroInView } = useScrollAnimation();
    const { ref: tracksRef, isInView: tracksInView } = useScrollAnimation({ amount: 0.1 });

    return (
        <div className="min-h-screen bg-white">
            <Navbar />

            {/* Hero Section */}
            <section className="relative pt-24 pb-16 md:pt-32 md:pb-20 overflow-hidden">
                <div className="absolute top-0 right-0 w-1/2 h-full bg-slate-50 -z-10 skew-x-12 translate-x-1/4" />
                <div className="container mx-auto px-6">
                    <motion.div
                        ref={heroRef}
                        initial="hidden"
                        animate={heroInView ? 'visible' : 'hidden'}
                        variants={staggerContainerVariants}
                        className="max-w-4xl mx-auto text-center"
                    >
                        <motion.p variants={fadeInUpVariants} className="text-primary font-bold uppercase tracking-[0.3em] text-[10px] md:text-xs mb-6">
                            Jithesh Academy
                        </motion.p>
                        <motion.h1 variants={fadeInUpVariants} className="text-3xl sm:text-4xl md:text-7xl font-black text-slate-900 mb-8 leading-tight">
                            Build Your Career in <span className="text-primary">Global BIM.</span>
                        </motion.h1>
                        <motion.p variants={fadeInUpVariants} className="text-base md:text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed mb-10 font-medium">
                            Elite training programs designed to transform engineers into BIM professionals.
                            Learn the workflows used by the world's leading architecture firms.
                        </motion.p>
                    </motion.div>
                </div>
            </section>

            {/* Feature Bar */}
            <section className="py-12 bg-slate-900 text-white">
                <div className="container mx-auto px-6">
                    <div className="grid md:grid-cols-3 gap-8 md:gap-12">
                        {features.map((f, i) => (
                            <div key={i} className="flex gap-6 items-start">
                                <div className="p-3 bg-white/10 rounded-xl">
                                    <f.icon className="w-6 h-6 text-primary" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg mb-2">{f.title}</h3>
                                    <p className="text-slate-400 text-sm leading-relaxed">{f.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Internship Experience Gallery */}
            <section className="py-24 bg-white overflow-hidden">
                <div className="container mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <h2 className="text-4xl font-black text-slate-900 mb-6 leading-tight">Hands-on Experience in a <br /><span className="text-primary">Professional Environment.</span></h2>
                            <p className="text-lg text-slate-500 mb-8 leading-relaxed font-medium">
                                At Jithesh Academy, you don't just learn theory. You are immersed in a high-tech engineering studio, working on real international projects alongside senior BIM experts.
                            </p>
                            <div className="grid grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <h4 className="font-bold text-slate-900">Modern Infrastructure</h4>
                                    <p className="text-sm text-slate-400">High-end workstations and dual-monitor setups for complex modeling.</p>
                                </div>
                                <div className="space-y-2">
                                    <h4 className="font-bold text-slate-900">Expert Mentorship</h4>
                                    <p className="text-sm text-slate-400">One-on-one sessions with industry veterans guiding your every step.</p>
                                </div>
                            </div>
                        </motion.div>

                        <div className="grid grid-cols-2 gap-4 h-[500px]">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                                className="relative rounded-[32px] overflow-hidden shadow-2xl"
                            >
                                <img
                                    src="/images/interns_collaboration.png"
                                    alt="Interns Collaborating"
                                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, y: -20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: 0.4 }}
                                className="relative rounded-[32px] overflow-hidden shadow-2xl mt-12"
                            >
                                <img
                                    src="/images/mentor_guidance.png"
                                    alt="Mentor Guidance"
                                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Training Tracks */}
            <section className="section bg-slate-50/50">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-20">
                        <h2 className="text-4xl font-black text-slate-900 mb-4">Specialized Tracks</h2>
                        <p className="text-slate-500">Pick your discipline and master the industry standards.</p>
                    </div>

                    <motion.div
                        ref={tracksRef}
                        initial="hidden"
                        animate={tracksInView ? 'visible' : 'hidden'}
                        variants={staggerContainerVariants}
                        className="grid lg:grid-cols-3 gap-8"
                    >
                        {academyTracks.map((track, index) => (
                            <motion.div
                                key={index}
                                variants={fadeInUpVariants}
                                className="group bg-white/80 backdrop-blur-md rounded-3xl p-7 border border-slate-100 shadow-sm hover:shadow-lg transition-all duration-300"
                            >
                                <div className="w-12 h-12 rounded-2xl bg-primary/5 flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
                                    {track.icon}
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-2">{track.title}</h3>
                                <p className="text-slate-500 text-sm leading-relaxed mb-6 font-normal">
                                    {track.description}
                                </p>
                                <div className="flex items-center gap-3 py-3 border-t border-slate-50">
                                    <div className="flex items-center gap-1.5 text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                                        <Clock size={12} />
                                        {track.duration}
                                    </div>
                                    <div className="w-1 h-1 rounded-full bg-slate-200" />
                                    <div className="flex items-center gap-1.5 text-[11px] font-bold text-primary uppercase tracking-wider">
                                        <Award size={12} />
                                        {track.level}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* CTA */}
            <section className="section">
                <div className="container mx-auto px-6">
                    <div className="glass-card bg-slate-900 p-12 md:p-20 rounded-[64px] text-center relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 blur-[100px] -translate-y-1/2 translate-x-1/2" />
                        <div className="relative z-10">
                            <h2 className="text-4xl md:text-5xl font-black text-white mb-8">Ready to Start Your Internship?</h2>
                            <p className="text-slate-400 text-lg mb-12 max-w-2xl mx-auto">
                                Join our next cohort and get hands-on experience on live international projects.
                                Limited seats available for the upcoming session.
                            </p>
                            <div className="flex flex-col md:flex-row justify-center gap-6">
                                <button className="btn-primary px-10 py-5 text-lg">Apply Now</button>
                                <button className="px-10 py-5 text-lg font-bold text-white border border-white/20 rounded-full hover:bg-white/5 transition-colors">
                                    Schedule a Call
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    );
};

export default Academy;

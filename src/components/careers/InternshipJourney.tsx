import { motion } from "framer-motion";
import { GraduationCap, FolderOpen, UserCheck, Award, Briefcase, Star } from "lucide-react";
import { useScrollAnimation, fadeInUpVariants, staggerContainerVariants } from "@/hooks/useScrollAnimation";

const InternshipJourney = () => {
    const { ref: headerRef, isInView: headerInView } = useScrollAnimation();
    const { ref: gridRef, isInView: gridInView } = useScrollAnimation({ amount: 0.1 });

    return (
        <section className="relative py-24 md:py-32 bg-[#FDFDFD] overflow-hidden">
            {/* Background Texture & Glows */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#000 0.5px, transparent 0.5px)', backgroundSize: '24px 24px' }} />
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-50/50 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
                <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-purple-50/50 rounded-full blur-[140px] translate-y-1/2 -translate-x-1/2" />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                {/* Header Section */}
                <motion.div
                    ref={headerRef}
                    initial="hidden"
                    animate={headerInView ? 'visible' : 'hidden'}
                    variants={staggerContainerVariants}
                    className="max-w-3xl mx-auto text-center mb-20"
                >
                    <motion.p
                        variants={fadeInUpVariants}
                        className="text-[13px] font-bold tracking-[0.2em] text-[#8846CF] uppercase mb-4"
                        style={{ color: 'rgb(136, 70, 207)' }}
                    >
                        Internship → Full-Time Journey
                    </motion.p>
                    <motion.h3
                        variants={fadeInUpVariants}
                        className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 mb-6 leading-[1.1] tracking-tight"
                    >
                        From Learning to Leadership
                    </motion.h3>
                    <motion.p
                        variants={fadeInUpVariants}
                        className="text-lg text-slate-500 leading-relaxed font-normal max-w-2xl mx-auto"
                    >
                        Our internship programs are designed as professional entry points — not classroom training.
                        Interns work on live projects, guided by senior engineers, with a clear pathway to full-time roles.
                    </motion.p>
                </motion.div>

                {/* Bento Grid */}
                <motion.div
                    ref={gridRef}
                    initial="hidden"
                    animate={gridInView ? 'visible' : 'hidden'}
                    variants={staggerContainerVariants}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6 md:gap-8"
                >
                    {/* Card 1: Internship Program (Large) */}
                    <motion.div
                        variants={fadeInUpVariants}
                        className="lg:col-span-3 bg-white rounded-[40px] p-8 md:p-10 border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-500 group relative overflow-hidden flex flex-col justify-between h-[450px]"
                    >
                        <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none group-hover:scale-110 transition-transform duration-700">
                            <GraduationCap size={200} />
                        </div>

                        {/* Visual Mockup: Team List */}
                        <div className="relative h-48 mb-8">
                            <div className="absolute inset-0 bg-blue-50/30 rounded-3xl overflow-hidden">
                                <div className="p-6 space-y-4">
                                    {[1, 2, 3].map((i) => (
                                        <motion.div
                                            key={i}
                                            initial={{ x: -20, opacity: 0 }}
                                            animate={gridInView ? { x: 0, opacity: 1 } : {}}
                                            transition={{ delay: 0.1 * i }}
                                            className="bg-white rounded-xl p-3 border border-slate-100 shadow-sm flex items-center gap-3 w-[80%]"
                                        >
                                            <div className="w-8 h-8 rounded-full bg-slate-100 overflow-hidden">
                                                <img src={`https://i.pravatar.cc/150?u=${i}`} alt="user" className="w-full h-full object-cover" />
                                            </div>
                                            <div className="space-y-1">
                                                <div className="h-2 w-24 bg-slate-100 rounded" />
                                                <div className="h-1.5 w-16 bg-slate-50 rounded" />
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div>
                            <h4 className="text-2xl font-bold text-slate-900 mb-3 tracking-tight">Internship Program</h4>
                            <p className="text-slate-500 leading-relaxed max-w-sm">
                                Structured learning designed as a professional entry point, not just classroom training.
                            </p>
                        </div>
                        <div className="mt-6 flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest text-[#8846CF]">
                            <span>Step 01</span>
                        </div>
                    </motion.div>

                    {/* Card 2: Live Project Exposure */}
                    <motion.div
                        variants={fadeInUpVariants}
                        className="lg:col-span-3 bg-white rounded-[40px] p-8 md:p-10 border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-500 group relative overflow-hidden flex flex-col justify-between h-[450px]"
                    >
                        {/* Visual Mockup: Tasks */}
                        <div className="relative h-48 mb-8">
                            <div className="absolute inset-0 bg-purple-50/30 rounded-3xl overflow-hidden flex items-center justify-center">
                                <motion.div
                                    animate={{ y: [0, -10, 0] }}
                                    transition={{ duration: 4, repeat: Infinity }}
                                    className="bg-white rounded-2xl p-5 border border-slate-100 shadow-xl w-[70%]"
                                >
                                    <div className="flex justify-between items-center mb-4">
                                        <div className="h-2 w-12 bg-slate-100 rounded" />
                                        <div className="h-2 w-8 bg-indigo-100 rounded" />
                                    </div>
                                    <div className="space-y-3">
                                        <div className="h-3 w-full bg-slate-50 rounded" />
                                        <div className="h-3 w-[80%] bg-slate-50 rounded" />
                                        <div className="h-3 w-full bg-slate-50 rounded" />
                                    </div>
                                </motion.div>
                                <div className="absolute top-10 right-10 bg-indigo-600 text-white text-[10px] font-bold px-3 py-1 rounded-full shadow-lg">Peter</div>
                                <div className="absolute bottom-10 left-10 bg-indigo-600 text-white text-[10px] font-bold px-3 py-1 rounded-full shadow-lg">Viani</div>
                            </div>
                        </div>

                        <div>
                            <h4 className="text-2xl font-bold text-slate-900 mb-3 tracking-tight">Live Project Exposure</h4>
                            <p className="text-slate-500 leading-relaxed max-w-sm">
                                Work on real-world architecture & engineering projects under guidance.
                            </p>
                        </div>
                        <div className="mt-6 flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest text-[#8846CF]">
                            <span>Step 02</span>
                        </div>
                    </motion.div>

                    {/* Card 3: Mentorship & Reviews (Small/Medium) */}
                    <motion.div
                        variants={fadeInUpVariants}
                        className="lg:col-span-2 bg-white rounded-[40px] p-8 md:p-10 border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-500 group relative overflow-hidden flex flex-col justify-between h-[450px]"
                    >
                        {/* Visual Mockup: Mentorship Connection */}
                        <div className="relative h-48 mb-8 flex items-center justify-center">
                            <div className="relative w-full h-full bg-slate-50/50 rounded-3xl flex items-center justify-center p-8">
                                <div className="relative w-16 h-16 rounded-full bg-indigo-600 flex items-center justify-center shadow-lg z-10 overflow-hidden border-4 border-white">
                                    <img src="https://i.pravatar.cc/150?u=mentor" alt="mentor" className="w-full h-full object-cover" />
                                </div>
                                <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20">
                                    <path d="M50,100 C80,100 120,50 150,50" stroke="rgb(79, 70, 229)" strokeWidth="2" fill="none" strokeDasharray="4" />
                                    <path d="M50,100 C80,100 120,150 150,150" stroke="rgb(79, 70, 229)" strokeWidth="2" fill="none" strokeDasharray="4" />
                                </svg>
                                <div className="absolute top-1/4 right-8 w-10 h-10 rounded-full bg-white border border-slate-200 overflow-hidden">
                                    <img src="https://i.pravatar.cc/150?u=12" alt="p" className="w-full h-full object-cover" />
                                </div>
                                <div className="absolute bottom-1/4 right-8 w-10 h-10 rounded-full bg-white border border-slate-200 overflow-hidden">
                                    <img src="https://i.pravatar.cc/150?u=18" alt="p" className="w-full h-full object-cover" />
                                </div>
                            </div>
                        </div>

                        <div>
                            <h4 className="text-2xl font-bold text-slate-900 mb-3 tracking-tight">Mentorship & Reviews</h4>
                            <p className="text-slate-500 leading-relaxed">
                                One-on-one guidance from senior engineers with evaluations.
                            </p>
                        </div>
                        <div className="mt-6 flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest text-[#8846CF]">
                            <span>Step 03</span>
                        </div>
                    </motion.div>

                    {/* Card 4: Skill Validation (Wide/Large) */}
                    <motion.div
                        variants={fadeInUpVariants}
                        className="lg:col-span-4 bg-white rounded-[40px] p-8 md:p-10 border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-500 group relative overflow-hidden flex flex-col lg:flex-row gap-10 items-center h-[450px]"
                    >
                        <div className="flex-1">
                            <h4 className="text-2xl font-bold text-slate-900 mb-3 tracking-tight">Skill Validation</h4>
                            <p className="text-slate-500 leading-relaxed max-w-sm mb-6">
                                Rigorous assessment of technical accuracy, process adherence, and collaboration.
                            </p>
                            <div className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest text-[#8846CF]">
                                <span>Step 04</span>
                            </div>
                        </div>

                        {/* Visual Mockup: Ratings */}
                        <div className="flex-1 w-full h-full relative">
                            <div className="absolute inset-0 bg-emerald-50/20 rounded-3xl p-6 flex flex-col gap-4">
                                <motion.div
                                    whileHover={{ scale: 1.05 }}
                                    className="bg-white rounded-2xl p-5 border border-slate-100 shadow-xl flex justify-between items-center"
                                >
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-full overflow-hidden bg-slate-100">
                                            <img src="https://i.pravatar.cc/150?u=berlina" alt="p" className="w-full h-full object-cover" />
                                        </div>
                                        <div>
                                            <div className="text-sm font-bold text-slate-900">Berlina</div>
                                            <div className="text-[10px] text-slate-400">Junior BIM Modeler</div>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-2 bg-blue-50 px-3 py-1 rounded-full">
                                        <Star className="w-3 h-3 text-blue-600 fill-blue-600" />
                                        <span className="text-sm font-black text-blue-600">4.9</span>
                                    </div>
                                </motion.div>
                                <motion.div
                                    whileHover={{ scale: 1.05 }}
                                    className="bg-white rounded-2xl p-5 border border-slate-100 shadow-xl flex justify-between items-center ml-10"
                                >
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-full overflow-hidden bg-slate-100">
                                            <img src="https://i.pravatar.cc/150?u=peter" alt="p" className="w-full h-full object-cover" />
                                        </div>
                                        <div>
                                            <div className="text-sm font-bold text-slate-900">Peter</div>
                                            <div className="text-[10px] text-slate-400">Trainee Engineer</div>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-2 bg-blue-50 px-3 py-1 rounded-full">
                                        <Star className="w-3 h-3 text-blue-600 fill-blue-600" />
                                        <span className="text-sm font-black text-blue-600">4.8</span>
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Card 5: Final Goal - Full Time Transition */}
                    <motion.div
                        variants={fadeInUpVariants}
                        className="lg:col-span-6 bg-slate-900 rounded-[40px] p-10 md:p-16 text-center relative overflow-hidden group"
                    >
                        <div className="absolute inset-0 opacity-20 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#fff 0.5px, transparent 0.5px)', backgroundSize: '24px 24px' }} />
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-indigo-500/20 rounded-full blur-[120px]" />

                        <div className="relative z-10 max-w-2xl mx-auto">
                            <div className="w-20 h-20 rounded-full bg-white/10 backdrop-blur-xl mx-auto mb-8 flex items-center justify-center border border-white/20">
                                <Briefcase className="w-10 h-10 text-white" />
                            </div>
                            <h4 className="text-3xl md:text-5xl font-black text-white mb-6">Transition to Full-Time</h4>
                            <p className="text-slate-400 text-lg mb-10 leading-relaxed">
                                Our ultimate goal is for you to lead. Exceptional performers transition into permanent roles with international engineering exposure.
                            </p>
                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="bg-white text-slate-900 px-10 py-4 rounded-full font-bold text-lg shadow-2xl hover:bg-slate-50 transition-colors"
                            >
                                Build Your Future
                            </motion.button>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default InternshipJourney;

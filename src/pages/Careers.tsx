import { ArrowRight, CheckCircle2, MapPin, Briefcase } from "lucide-react";
import { motion } from "framer-motion";
import InternshipJourney from "../components/careers/InternshipJourney";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Careers = () => {
    return (
        <div className="min-h-screen bg-white font-sans selection:bg-blue-100">
            <Navbar />
            {/* 🎥 CAREERS LANDING HERO (Premium Refined) */}
            <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-20">
                {/* Background Image with Dynamic Tinted Overlay */}
                <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
                    <div
                        className="absolute inset-0 bg-cover bg-center transition-transform duration-[20s] hover:scale-110"
                        style={{
                            backgroundImage: 'url("https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=2069&auto=format&fit=crop")',
                        }}
                    ></div>

                    {/* Dynamic Tinted Overlay (Cycles through requested colors) */}
                    <motion.div
                        animate={{
                            backgroundColor: [
                                'rgb(163, 157, 70)', // Gold/Olive
                                'rgb(45, 60, 74)',   // Dark Blue/Grey
                                'rgb(171, 124, 63)', // Bronze
                                'rgb(29, 85, 128)',  // Deep Blue
                                'rgb(163, 157, 70)'  // Loop back
                            ]
                        }}
                        transition={{
                            duration: 12, // 3 seconds per color
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                        className="absolute inset-0 mix-blend-multiply opacity-80"
                    />

                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/90"></div>

                    {/* Subtle Engineering Elements (Glows & Grid) */}
                    <motion.div
                        animate={{
                            opacity: [0.1, 0.2, 0.1],
                            scale: [1, 1.2, 1],
                        }}
                        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full rounded-full blur-[120px]"
                        style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
                    />

                    <div
                        className="absolute inset-0 opacity-[0.05]"
                        style={{
                            backgroundImage: 'linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)',
                            backgroundSize: '100px 100px'
                        }}
                    />
                </div>

                <div className="relative z-10 container mx-auto px-6 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                    >
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="inline-block px-5 py-2 mb-8 rounded-full bg-white/10 border border-white/20 backdrop-blur-md shadow-2xl"
                        >
                            <span className="text-[11px] md:text-xs font-bold uppercase tracking-[0.4em] text-white">Careers at JES BIM</span>
                        </motion.div>

                        <h1 className="text-5xl md:text-8xl font-black tracking-tight mb-8 leading-[1.05] text-white">
                            Build Global Engineering <br />
                            <span className="text-[#914694] drop-shadow-[0_0_20px_rgba(145,70,148,0.4)]">Careers with BIM</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-white/90 font-bold mb-8 tracking-widest uppercase">
                            Architecture • MEP • Structural • International Projects
                        </p>
                        <p className="text-xl md:text-2xl text-white/80 font-medium mb-16 max-w-4xl mx-auto leading-relaxed drop-shadow-sm">
                            Join a team shaping the future of digital construction through precision, collaboration, and Revit-driven excellence.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-20">
                            <Link to="/contact">
                                <Button size="lg" className="bg-[#914694] text-white hover:bg-[#7a3b7d] rounded-full px-12 py-8 text-xl font-black transition-all hover:scale-105 shadow-2xl shadow-black/40">
                                    View Open Roles
                                </Button>
                            </Link>
                            <Link to="/contact">
                                <Button variant="outline" size="lg" className="border-white/30 text-white hover:bg-white hover:text-slate-900 rounded-full px-12 py-8 text-xl font-black transition-all hover:scale-105 bg-white/10 backdrop-blur-md">
                                    Join Our BIM Academy
                                </Button>
                            </Link>
                        </div>

                        {/* Scroll Indicator (White variant) */}
                        <motion.div
                            animate={{ y: [0, 10, 0] }}
                            transition={{ duration: 2, repeat: Infinity }}
                            className="flex flex-col items-center gap-3 text-white/40"
                        >
                            <span className="text-[10px] font-bold uppercase tracking-[0.2em]">Scroll to explore</span>
                            <div className="w-[1px] h-12 bg-gradient-to-b from-white/40 to-transparent" />
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* 🧭 WHY WORK WITH US */}
            <section className="py-12 bg-white/50">
                <div className="container mx-auto px-6">
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-sm font-bold tracking-widest text-blue-600 uppercase mb-3">Why Work With Us</h2>
                            <h3 className="text-4xl font-bold text-slate-900 mb-6">Engineering Excellence.<br />Human-Centered Growth.</h3>
                            <div className="prose text-slate-600 text-lg leading-relaxed space-y-6">
                                <p>
                                    At Jithesh Technologies, careers are built on precision, accountability, and continuous learning.
                                    We work with architecture, engineering, and construction teams across national and international projects,
                                    delivering coordinated BIM solutions that shape real-world environments.
                                </p>
                                <p>
                                    Our people are not resources — they are professionals trusted with responsibility, ownership, and growth.
                                </p>
                            </div>
                        </div>

                        <div className="space-y-6">
                            {[
                                "Exposure to complex global BIM projects",
                                "Structured mentorship and technical leadership",
                                "Engineering-first culture, not sales-driven",
                                "Long-term career progression paths",
                                "International-quality standards and workflows"
                            ].map((item, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ delay: i * 0.1 }}
                                    className="flex items-start gap-4 p-4 rounded-xl bg-white border border-slate-100 shadow-sm hover:shadow-md transition-all"
                                >
                                    <CheckCircle2 className="text-blue-600 shrink-0 mt-1" size={20} />
                                    <span className="text-slate-700 font-medium">{item}</span>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* 🧱 CAREER PATHWAYS */}
            <section className="py-12 bg-slate-50">
                <div className="container mx-auto px-6">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Career Pathways</h2>
                        <p className="text-lg text-slate-600">Clearly defined tracks for every stage of your journey.</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { title: "BIM Architect", desc: "Focus on architectural modeling, documentation, and design coordination using Revit." },
                            { title: "BIM MEP Engineer", desc: "Specialize in HVAC, plumbing, drainage, and fire-life safety coordination for large-scale buildings." },
                            { title: "Structural BIM Engineer", desc: "Develop construction-ready structural models with rebar detailing and analytical accuracy." },
                            { title: "BIM Coordinator", desc: "Lead multi-discipline coordination, clash detection, and stakeholder integration.", colSpan: "md:col-span-1" },
                            { title: "BIM Manager", desc: "Oversee BIM strategy, standards, execution plans, and global collaboration.", colSpan: "md:col-span-2" },
                        ].map((path, i) => (
                            <div key={i} className={`bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-lg hover:border-blue-100 transition-all duration-300 ${path.colSpan || ''}`}>
                                <h4 className="text-xl font-bold text-slate-900 mb-3">{path.title}</h4>
                                <p className="text-slate-600 leading-relaxed">{path.desc}</p>
                                <div className="mt-6 pt-6 border-t border-slate-50">
                                    <span className="text-blue-600 text-sm font-semibold flex items-center gap-2 group cursor-pointer">
                                        View Track <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 🔄 INTERNSHIP → FULL-TIME JOURNEY */}
            <InternshipJourney />


            {/* 🌍 LIFE AT JITHESH */}
            <div className="bg-white py-12 md:py-24">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-sm font-bold tracking-widest text-slate-500 uppercase mb-3">Life at Jithesh</h2>
                        <h3 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">A Culture Built on Trust</h3>
                        <div className="prose text-slate-600 mb-12 md:mb-16 leading-relaxed max-w-2xl mx-auto font-medium">
                            <p>
                                We foster a calm, respectful, and focused work culture where engineers can do their best work.
                                Our environment encourages collaboration, accountability, and continuous improvement.
                            </p>
                        </div>

                        <div className="grid grid-cols-2 gap-6 md:gap-10 items-start">
                            <div className="aspect-square rounded-[40px] bg-slate-100 overflow-hidden shadow-2xl border border-slate-100">
                                <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop" alt="Office" className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" />
                            </div>
                            <div className="aspect-square rounded-[40px] bg-slate-100 overflow-hidden shadow-2xl border border-slate-100 mt-12 md:mt-20">
                                <img src="https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=2070&auto=format&fit=crop" alt="Meeting" className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* 🧑💻 APPLY SECTION */}
            <section className="py-24 bg-white text-center border-t border-slate-100">
                <div className="container mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight">Start Your Career Journey</h2>
                        <p className="text-slate-500 text-lg md:text-xl mb-12 max-w-2xl mx-auto font-medium">
                            Share your profile with us. Our team will review and connect with you.
                        </p>
                        <Link to="/contact">
                            <Button
                                size="lg"
                                className="text-white h-14 px-12 text-lg rounded-full font-bold shadow-xl transition-all hover:scale-105 active:scale-95 shadow-indigo-200"
                                style={{ backgroundColor: 'rgb(145, 70, 148)' }}

                            >
                                Submit Application
                            </Button>
                        </Link>
                    </motion.div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default Careers;

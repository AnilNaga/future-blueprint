import { ArrowRight, CheckCircle2, MapPin, Briefcase } from "lucide-react";
import { motion } from "framer-motion";
import InternshipJourney from "../components/careers/InternshipJourney";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Careers = () => {
    return (
        <div className="min-h-screen bg-white font-sans selection:bg-blue-100">
            <Navbar />
            {/* 🎥 HERO SECTION (Light Theme) */}
            <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden bg-white">
                {/* Background */}
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-10 grayscale"></div>
                    <div className="absolute inset-0 bg-gradient-to-b from-white/90 via-white/60 to-white/90"></div>
                </div>

                <div className="relative z-10 container mx-auto px-6 text-center text-slate-900">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-tight text-slate-900">
                            Build Global Engineering<br /> Careers with BIM
                        </h1>
                        <p className="text-xl md:text-2xl text-slate-600 font-light mb-8 tracking-wide">
                            Architecture • MEP • Structural • International Projects
                        </p>
                        <p className="max-w-2xl mx-auto text-slate-500 text-lg mb-10 leading-relaxed font-medium">
                            Join a team shaping the future of digital construction through precision, collaboration, and Revit-driven excellence.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                            <Button size="lg" className="bg-slate-900 text-white hover:bg-slate-800 rounded-full px-8 py-6 text-lg font-medium transition-transform hover:scale-105 shadow-xl shadow-slate-200">
                                View Open Roles
                            </Button>
                            <Button variant="outline" size="lg" className="border-slate-300 text-slate-700 hover:bg-slate-50 hover:text-slate-900 rounded-full px-8 py-6 text-lg font-medium transition-transform hover:scale-105">
                                Join Our BIM Academy
                            </Button>
                        </div>
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

            {/* 📋 OPEN POSITIONS & 🌍 LIFE AT JITHESH */}
            <div className="bg-white py-12">
                <div className="container mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-20">
                        {/* Open Positions */}
                        <div>
                            <div className="mb-10">
                                <h2 className="text-3xl font-bold text-slate-900 mb-4">Current Opportunities</h2>
                                <p className="text-slate-600 text-lg">We are looking for skilled professionals committed to excellence.</p>
                            </div>

                            <div className="space-y-4">
                                {[
                                    { role: "BIM Architect – Revit", exp: "1–5 Years", loc: "Hybrid" },
                                    { role: "BIM MEP Engineer", exp: "2–6 Years", loc: "Onsite" },
                                    { role: "Structural BIM Engineer", exp: "2–5 Years", loc: "Hybrid" },
                                ].map((job, i) => (
                                    <div key={i} className="group bg-slate-50 border border-slate-100 rounded-xl p-6 hover:bg-white hover:shadow-xl hover:border-[#8846CF]/30 transition-all duration-300 cursor-pointer flex items-center justify-between">
                                        <div>
                                            <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-[#8846CF] transition-colors">{job.role}</h3>
                                            <div className="flex items-center gap-4 text-sm text-slate-500">
                                                <span className="flex items-center gap-1"><Briefcase size={14} /> {job.exp}</span>
                                                <span className="flex items-center gap-1"><MapPin size={14} /> {job.loc}</span>
                                            </div>
                                        </div>
                                        <div
                                            className="h-10 w-10 rounded-full bg-white border border-slate-200 flex items-center justify-center transition-colors group-hover:border-transparent"
                                            style={{ backgroundColor: 'white' }}
                                        >
                                            <ArrowRight size={18} className="text-slate-400 group-hover:text-[#8846CF] transition-colors" />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Life at Jithesh */}
                        <div className="flex flex-col justify-center">
                            <h2 className="text-sm font-bold tracking-widest text-slate-500 uppercase mb-3">Life at Jithesh</h2>
                            <h3 className="text-3xl font-bold text-slate-900 mb-6">A Culture Built on Trust</h3>
                            <div className="prose text-slate-600 mb-10 leading-relaxed">
                                <p>
                                    We foster a calm, respectful, and focused work culture where engineers can do their best work.
                                    Our environment encourages collaboration, accountability, and continuous improvement.
                                </p>
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div className="aspect-square rounded-2xl bg-slate-100 overflow-hidden shadow-sm">
                                    <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop" alt="Office" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
                                </div>
                                <div className="aspect-square rounded-2xl bg-slate-100 overflow-hidden shadow-sm mt-8">
                                    <img src="https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=2070&auto=format&fit=crop" alt="Meeting" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
                                </div>
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
                        <Button
                            size="lg"
                            className="text-white h-14 px-12 text-lg rounded-full font-bold shadow-xl transition-all hover:scale-105 active:scale-95 shadow-indigo-200"
                            style={{ backgroundColor: 'rgb(136, 70, 207)' }}
                        >
                            Submit Application
                        </Button>
                    </motion.div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default Careers;

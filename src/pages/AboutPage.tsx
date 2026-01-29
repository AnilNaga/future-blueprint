import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";
import { useScrollAnimation, fadeInUpVariants, staggerContainerVariants } from "@/hooks/useScrollAnimation";
import { CheckCircle2, Users, Target, Globe, Play } from "lucide-react";
import Footer from "@/components/Footer";

const FeatureCard = ({ icon: Icon, title, description, gradient }: any) => (
    <motion.div
        variants={fadeInUpVariants}
        whileHover={{ y: -12, scale: 1.02 }}
        className="relative group h-full"
    >
        {/* Glow Shadow */}
        <div className={`absolute -inset-2 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-20 blur-2xl transition-opacity duration-500 rounded-[40px]`} />

        <div className={`relative h-full p-10 rounded-[40px] bg-gradient-to-br ${gradient} border border-white/20 shadow-2xl shadow-slate-200/40 transition-all duration-500 overflow-hidden group`}>
            {/* Glossy Overlay */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 blur-[80px] rounded-full -translate-y-1/2 translate-x-1/2" />

            <div className="relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center mb-8 shadow-lg group-hover:scale-110 transition-transform duration-500 border border-white/30">
                    <Icon className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-2xl font-bold mb-4 text-white tracking-tight">{title}</h3>
                <p className="text-white/90 leading-relaxed font-medium">
                    {description}
                </p>
            </div>

            {/* Subtle background icon decoration */}
            <Icon className="absolute -right-12 -bottom-12 w-48 h-48 opacity-10 group-hover:opacity-20 group-hover:rotate-12 transition-all duration-700 text-white" />
        </div>
    </motion.div>
);

const AboutPage = () => {
    const { ref: heroRef, isInView: heroInView } = useScrollAnimation({});
    const { ref: contentRef, isInView: contentInView } = useScrollAnimation({});

    const images = [
        {
            url: "/images/revit_engineers_working_1769580008807.png",
            label: "Consultancy"
        },
        {
            url: "/images/bim_coordination_meeting_1769580026189.png",
            label: "Coordination"
        },
        {
            url: "/images/mep_hvac_routing_bim_1769580043911.png",
            label: "Engineering"
        },
        {
            url: "/images/building_walkthrough_3d_1769580061469.png",
            label: "Visualization"
        }
    ];

    return (
        <div className="min-h-screen bg-transparent text-foreground relative overflow-x-hidden">
            <Navbar />
            <main>
                {/* Hero Section - Soft Warm Gradient Backdrop */}
                <section className="relative pt-24 pb-16 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent pointer-events-none" />
                    {/* Decorative background elements */}
                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
                    <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2" />

                    <motion.div
                        ref={heroRef}
                        initial="hidden"
                        animate={heroInView ? "visible" : "hidden"}
                        variants={staggerContainerVariants}
                        className="container mx-auto max-w-5xl text-center relative z-10"
                    >
                        <motion.p
                            variants={fadeInUpVariants}
                            className="text-primary font-bold tracking-[0.3em] uppercase text-[10px] md:text-xs mb-6"
                        >
                            About Us
                        </motion.p>
                        <motion.h1
                            variants={fadeInUpVariants}
                            className="text-3xl sm:text-4xl md:text-7xl font-black text-slate-900 mb-8 leading-[1.1]"
                        >
                            Delivering BIM Excellence with <br className="hidden md:block" />
                            <span className="text-primary">Revit-Driven</span> Precision
                        </motion.h1>
                        <motion.p
                            variants={fadeInUpVariants}
                            className="text-base md:text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed"
                        >
                            We bridge the gap between architectural vision and construction reality using advanced digital engineering workflows.
                        </motion.p>
                    </motion.div>
                </section>

                {/* 2. Image Strip Section */}
                <section className="pb-20 px-6">
                    <div className="container mx-auto">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                            {images.map((img, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 40 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: i * 0.1, duration: 0.8 }}
                                    viewport={{ once: true }}
                                    className="relative aspect-[4/5] rounded-[32px] overflow-hidden group shadow-lg"
                                >
                                    <img
                                        src={img.url}
                                        alt={img.label}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                                        <p className="text-slate-900 font-bold text-lg">{img.label}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* 3. Content Block - What We Do */}
                <section className="py-20 px-6">
                    <div className="container mx-auto max-w-6xl">
                        <div className="grid lg:grid-cols-2 gap-16 items-center">
                            <motion.div
                                initial={{ opacity: 0, x: -40 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8 }}
                                viewport={{ once: true }}
                                className="order-2 lg:order-1"
                            >
                                <div className="w-16 h-1 bg-primary mb-10" />
                                <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-8 leading-tight">
                                    We Make Complex BIM Ideas <br className="hidden md:block" />
                                    Work in the Real World
                                </h2>
                                <div className="space-y-6 text-lg text-text-secondary leading-relaxed">
                                    <p>
                                        Jithesh Technologies Private Limited is a BIM-focused engineering consultancy
                                        delivering Revit-based solutions across architecture, MEP, and structural disciplines.
                                    </p>
                                    <p>
                                        We support global construction teams with accurate modeling, coordination,
                                        and documentation. Our mission is to empower professionals with data-rich 3D models
                                        that reduce waste and improve project outcomes.
                                    </p>
                                </div>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 1 }}
                                viewport={{ once: true }}
                                className="order-1 lg:order-2 relative"
                            >
                                <div className="aspect-square rounded-[40px] overflow-hidden shadow-2xl relative">
                                    <img
                                        src="/images/revit_engineers_working_1769580008807.png"
                                        alt="Engineers working"
                                        className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                                    />
                                </div>
                                {/* floating badge */}
                                <div className="absolute -bottom-10 -left-10 bg-background-alt/80 backdrop-blur-xl p-8 rounded-[32px] shadow-xl border border-white/10 hidden md:block">
                                    <h3 className="text-2xl font-bold mb-4 text-slate-900">100+</h3>
                                    <p className="text-slate-600 leading-relaxed text-lg">Global Projects</p>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* 4. Highlight Section - Empowering Businesses */}
                <section className="py-20 px-6">
                    <div className="container mx-auto max-w-6xl">
                        <div className="grid lg:grid-cols-2 gap-16 items-center">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 1 }}
                                viewport={{ once: true }}
                                className="relative group cursor-pointer"
                            >
                                <div className="aspect-[16/10] rounded-[40px] overflow-hidden shadow-2xl relative group">
                                    <video
                                        autoPlay
                                        muted
                                        loop
                                        playsInline
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    >
                                        <source src="/videos/about-bim-process.mp4" type="video/mp4" />
                                    </video>
                                    <div className="absolute inset-0 bg-background/20 flex items-center justify-center">
                                        <div className="w-20 h-20 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform">
                                            <Play className="w-8 h-8 text-primary fill-primary ml-1" />
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-6 ml-4">
                                    <p className="text-primary font-bold text-sm tracking-wide uppercase">Engineering the Future with BIM & Revit</p>
                                </div>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, x: 40 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8 }}
                                viewport={{ once: true }}
                            >
                                <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-8 leading-tight">
                                    Our Global <span className="gradient-text">Excellence</span>
                                </h2>
                                <p className="text-lg text-slate-600 mb-10 leading-relaxed font-medium">
                                    We believe in engineering beyond boundaries. From our hubs in the Middle East and India, we provide end-to-end BIM support for international projects.
                                </p>
                                <ul className="space-y-4">
                                    {['Dubai & Middle East Presence', 'India Global Support Hub', '24/7 Project Coordination', 'Enterprise Scale Delivery'].map((item) => (
                                        <li key={item} className="flex items-center gap-3 text-slate-900 font-bold">
                                            <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center">
                                                <div className="w-2 h-2 rounded-full bg-primary" />
                                            </div>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* 5. Growth & Value Section */}
                <section className="py-20 px-6">
                    <div className="container mx-auto max-w-6xl">
                        <motion.div
                            variants={fadeInUpVariants}
                            className="text-center"
                        >
                            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-8 shadow-sm">
                                We Help Projects Grow Faster, <br className="hidden md:block" />
                                Smarter, and More Accurate
                            </h2>
                        </motion.div>

                        <motion.div
                            ref={contentRef}
                            initial="hidden"
                            animate={contentInView ? "visible" : "hidden"}
                            variants={staggerContainerVariants}
                            className="grid md:grid-cols-3 gap-8"
                        >
                            <FeatureCard
                                icon={Users}
                                title="Professional BIM Team"
                                description="Experienced Revit architects, MEP engineers, and structural modelers dedicated to your vision."
                                gradient="from-[#8846CF] to-[#6a32a1]"
                            />
                            <FeatureCard
                                icon={Target}
                                title="Target-Oriented Delivery"
                                description="Clash-free models, accurate BOQs, and deadline-driven execution for reliable project planning."
                                gradient="from-emerald-500 to-teal-600"
                            />
                            <FeatureCard
                                icon={Globe}
                                title="Quality & Global Standards"
                                description="ISO-aligned workflows supporting international construction projects with localized expertise."
                                gradient="from-sky-400 to-cyan-500"
                            />
                        </motion.div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
};

export default AboutPage;

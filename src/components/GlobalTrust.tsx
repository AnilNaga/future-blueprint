import { motion } from 'framer-motion';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const locations = [
    "New York", "London", "Dubai", "Singapore", "Riyadh", "Sydney",
    "Toronto", "Berlin", "Mumbai", "Tokyo", "Chicago", "Paris"
];

const nodes = [
    { x: 25, y: 35, label: "USA" },
    { x: 48, y: 30, label: "UK" },
    { x: 55, y: 45, label: "UAE" },
    { x: 72, y: 55, label: "India" },
    { x: 80, y: 60, label: "Singapore" },
];

const GlobalTrust = () => {
    const { ref, isInView } = useScrollAnimation();

    return (
        <section className="relative py-32 md:py-48 bg-white z-10 overflow-hidden border-t border-slate-900/5">
            {/* Cinematic World Blueprint Background */}
            <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.05]">
                <svg viewBox="0 0 1000 500" className="w-full h-full object-cover">
                    <path
                        d="M 150,150 Q 250,50 350,150 T 550,150 T 750,150"
                        fill="none"
                        stroke="#914694"
                        strokeWidth="0.5"
                        strokeDasharray="4 4"
                    />
                    {/* Minimalist World Map Outline Placeholder */}
                    <path
                        d="M100,200 L120,180 L150,190 L180,160 L220,170 L250,150 L300,160 L350,140 L400,150 L450,130 L500,140 L550,120 L600,130 L650,150 L700,170 L750,190 L800,210 L850,230 L900,250"
                        fill="none"
                        stroke="#914694"
                        strokeWidth="0.2"
                    />
                    {nodes.map((node, i) => (
                        <g key={i}>
                            <motion.circle
                                cx={node.x * 10}
                                cy={node.y * 5}
                                r="4"
                                fill="#914694"
                                initial={{ scale: 0, opacity: 0 }}
                                animate={isInView ? { scale: [1, 1.5, 1], opacity: [0.3, 0.6, 0.3] } : {}}
                                transition={{ duration: 3, repeat: Infinity, delay: i * 0.5 }}
                            />
                            <circle cx={node.x * 10} cy={node.y * 5} r="1.5" fill="#914694" />
                        </g>
                    ))}
                </svg>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div ref={ref} className="max-w-6xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                        className="inline-flex items-center gap-4 px-8 py-3 mb-10 rounded-full bg-white border border-slate-900/5 shadow-2xl shadow-slate-200/50"
                    >
                        <div className="w-2 h-2 rounded-full bg-[#914694] animate-ping" />
                        <span className="text-xs md:text-sm font-black uppercase tracking-[0.5em] text-[#914694]">Worldwide Impact</span>
                    </motion.div>

                    <div className="overflow-hidden mb-8">
                        <motion.h2
                            initial={{ y: "110%" }}
                            animate={isInView ? { y: 0 } : {}}
                            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                            className="text-4xl md:text-7xl font-black text-slate-900 tracking-[-0.05em] leading-[1]"
                        >
                            Trusted Worldwide.
                        </motion.h2>
                    </div>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 1, delay: 0.4 }}
                        className="text-xl md:text-2xl text-slate-400 font-medium max-w-3xl mx-auto mb-20 tracking-tight"
                    >
                        Empowering Global Leaders through high-fidelity BIM engineering and digital transformation workflows.
                    </motion.p>
                </div>

                {/* Infinite Project Location Marquee */}
                <div className="relative mt-12 overflow-hidden py-10">
                    <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#fcfcfd] to-transparent z-10" />
                    <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#fcfcfd] to-transparent z-10" />

                    <motion.div
                        animate={{ x: [0, -1000] }}
                        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                        className="flex whitespace-nowrap items-center gap-12"
                    >
                        {[...locations, ...locations].map((city, i) => (
                            <div key={i} className="flex items-center gap-6">
                                <span className="text-2xl md:text-4xl font-black text-slate-900/10 hover:text-[#914694]/30 transition-colors duration-500 uppercase tracking-tighter">
                                    {city}
                                </span>
                                <div className="w-1.5 h-1.5 rounded-full bg-[#914694]/20" />
                            </div>
                        ))}
                    </motion.div>
                </div>

                {/* Excellence Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-32 max-w-5xl mx-auto">
                    {[
                        { label: "Global Reach", value: "20+ Countries" },
                        { label: "Precision Code", value: "IFC 4.0 Standard" },
                        { label: "Project Load", value: "500+ Delivered" },
                        { label: "Strategic Impact", value: "Elite Partners" }
                    ].map((stat, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.8, delay: 0.6 + (i * 0.1) }}
                            className="flex flex-col items-center md:items-start"
                        >
                            <span className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight mb-2">{stat.value}</span>
                            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-slate-400">{stat.label}</span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default GlobalTrust;

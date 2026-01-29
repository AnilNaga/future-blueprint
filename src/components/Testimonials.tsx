import { motion } from 'framer-motion';
import { useScrollAnimation, fadeInUpVariants, staggerContainerVariants } from '@/hooks/useScrollAnimation';
import { Star, Quote } from 'lucide-react';

const testimonials = [
    {
        name: 'Sarah Chen',
        role: 'Principal Architect, Vertex Design',
        quote: "Jithesh Technologies transformed our workflow. Their BIM expertise allowed us to coordinate a 50-story tower with zero on-site clashes. They is a true partner in digital excellence.",
    },
    {
        name: 'Marcus Thorne',
        role: 'MEP Director, Global Engineering Corp',
        quote: "The level of detail in their Revit models is unparalleled. Their structural and MEP coordination saved us months of rework and significantly improved our project ROI.",
    },
    {
        name: 'Elena Rodriguez',
        role: 'Project Manager, Urban Developers',
        quote: "Professional, precise, and proactive. They don't just follow instructions; they provide strategic insights that make the BIM process actually work for the contractor.",
    }
];

const clientLogos = ['LOGOTYPE A', 'LOGOTYPE B', 'LOGOTYPE C', 'LOGOTYPE D', 'LOGOTYPE E'];

const Testimonials = () => {
    const { ref: headerRef, isInView: headerInView } = useScrollAnimation();
    const { ref: gridRef, isInView: gridInView } = useScrollAnimation({ amount: 0.1 });

    return (
        <section id="testimonials" className="section relative overflow-hidden bg-slate-50/30 py-32">
            {/* Background Accents */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
            <div className="absolute top-1/4 -right-20 w-80 h-80 bg-primary/5 rounded-full blur-[100px]" />
            <div className="absolute bottom-1/4 -left-20 w-80 h-80 bg-[#8846CF]/5 rounded-full blur-[100px]" />

            <div className="container mx-auto px-6 relative z-10">
                {/* Header */}
                <motion.div
                    ref={headerRef}
                    initial="hidden"
                    animate={headerInView ? 'visible' : 'hidden'}
                    variants={staggerContainerVariants}
                    className="max-w-4xl mx-auto text-center mb-28"
                >
                    <motion.p
                        variants={fadeInUpVariants}
                        className="text-[10px] font-bold text-primary/60 uppercase tracking-[0.4em] mb-6"
                    >
                        Trust & Excellence
                    </motion.p>
                    <motion.h2
                        variants={fadeInUpVariants}
                        className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 mb-10 tracking-tight"
                    >
                        Client Voices
                    </motion.h2>
                    <motion.p
                        variants={fadeInUpVariants}
                        className="text-lg md:text-xl text-slate-500 leading-relaxed max-w-2xl mx-auto"
                    >
                        Hear from leading architecture and engineering firms about
                        their experience partnering with us.
                    </motion.p>
                </motion.div>

                {/* Testimonials Grid */}
                <motion.div
                    ref={gridRef}
                    initial="hidden"
                    animate={gridInView ? 'visible' : 'hidden'}
                    variants={staggerContainerVariants}
                    className="grid md:grid-cols-3 gap-8 lg:gap-12"
                >
                    {testimonials.map((testimonial) => (
                        <motion.div
                            key={testimonial.name}
                            variants={fadeInUpVariants}
                            whileHover={{ y: -12 }}
                            className="relative group h-full"
                        >
                            <div className="h-full p-10 md:p-12 rounded-[48px] bg-white border border-slate-100 shadow-xl shadow-slate-200/20 group-hover:shadow-2xl group-hover:shadow-primary/5 transition-all duration-500 flex flex-col justify-between overflow-hidden">
                                {/* Quote mark accent */}
                                <Quote className="w-12 h-12 text-primary/5 absolute top-10 right-10 group-hover:text-primary/10 transition-colors duration-500" />

                                <div className="relative z-10">
                                    <div className="flex gap-1 mb-8">
                                        {[...Array(5)].map((_, i) => (
                                            <Star key={i} className="w-3.5 h-3.5 fill-primary text-primary opacity-80" />
                                        ))}
                                    </div>

                                    <p className="text-slate-600 text-lg leading-relaxed mb-12 font-medium">
                                        "{testimonial.quote}"
                                    </p>
                                </div>

                                <div className="relative z-10">
                                    <div className="w-12 h-px bg-slate-100 mb-6" />
                                    <h4 className="font-bold text-slate-900 text-lg mb-1">
                                        {testimonial.name}
                                    </h4>
                                    <p className="text-primary text-[11px] font-bold uppercase tracking-wider">
                                        {testimonial.role}
                                    </p>
                                </div>

                                {/* Decorative gradient hover indicator */}
                                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-[#8846CF] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

            </div>
        </section>
    );
};

export default Testimonials;

import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useScrollAnimation, fadeInUpVariants, staggerContainerVariants } from '@/hooks/useScrollAnimation';
import { Star, Quote } from 'lucide-react';
import React from 'react';

const testimonials = [
    {
        name: 'Sarah Chen',
        role: 'Principal Architect, Vertex Design',
        quote: "Jithesh Technologies transformed our workflow. Their BIM expertise allowed us to coordinate a 50-story tower with zero on-site clashes. They are a true partner in digital excellence.",
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
    },
    {
        name: 'Sarah Chen',
        role: 'Principal Architect, Vertex Design',
        quote: "Jithesh Technologies transformed our workflow. Their BIM expertise allowed us to coordinate a 50-story tower with zero on-site clashes. They are a true partner in digital excellence.",
    }
];

const AetherSlab = ({ testimonial, index, isInView }: { testimonial: any; index: number; isInView: boolean }) => {
    return (
        <motion.div
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={fadeInUpVariants}
            transition={{ duration: 0.8, delay: index * 0.1, ease: [0.25, 1, 0.5, 1] }}
            className="relative p-6 md:p-8 rounded-[2rem] bg-white border border-slate-100 shadow-[0_15px_45px_-12px_rgba(0,0,0,0.04)] hover:shadow-[0_25px_60px_-15px_rgba(145,70,148,0.1)] transition-shadow duration-500 overflow-hidden group h-full flex flex-col justify-between"
        >
            {/* Content Layer */}
            <div className="relative z-10">
                <div className="flex gap-1 mb-6">
                    {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3 h-3 fill-[#914694] text-[#914694] opacity-80" />
                    ))}
                </div>

                <Quote className="w-10 h-10 text-[#914694]/5 absolute -top-4 -right-2 opacity-50" />

                <p className="text-slate-600 text-base md:text-lg leading-relaxed font-medium mb-8">
                    "{testimonial.quote}"
                </p>
            </div>

            {/* Author Layer */}
            <div className="relative z-10">
                <div className="w-10 h-1 bg-[#914694]/10 mb-4 rounded-full" />
                <h4 className="text-lg font-black text-slate-900 mb-0.5 tracking-tight">
                    {testimonial.name}
                </h4>
                <p className="text-[#914694] text-[9px] font-black uppercase tracking-[0.25em]">
                    {testimonial.role}
                </p>
            </div>
        </motion.div>
    );
};

const Testimonials = () => {
    const { ref: headerRef, isInView: headerInView } = useScrollAnimation();
    const { ref: gridRef, isInView: gridInView } = useScrollAnimation({ amount: 0.1 });

    return (
        <section id="testimonials" className="section relative overflow-hidden bg-white py-24 md:py-48 px-6 border-t border-slate-100">
            {/* World-Class Background Atmospherics */}
            <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
                <div className="absolute top-1/4 -right-20 w-[800px] h-[800px] bg-[#914694]/3 blur-[160px] rounded-full" />
                <div className="absolute bottom-1/4 -left-20 w-[600px] h-[600px] bg-slate-100/50 blur-[140px] rounded-full" />
            </div>

            <div className="container mx-auto relative z-10">
                {/* Header */}
                <motion.div
                    ref={headerRef}
                    initial="hidden"
                    animate={headerInView ? 'visible' : 'hidden'}
                    variants={staggerContainerVariants}
                    className="max-w-4xl mx-auto text-center mb-24 md:mb-32"
                >
                    <motion.div
                        variants={fadeInUpVariants}
                        className="inline-block px-5 py-1.5 mb-8 rounded-full bg-slate-50 border border-slate-100 shadow-sm"
                    >
                        <span className="text-[9px] font-black text-[#914694] uppercase tracking-[0.4em]">Trust & Excellence</span>
                    </motion.div>

                    <motion.h2
                        variants={fadeInUpVariants}
                        className="text-4xl md:text-[5rem] font-black text-slate-900 mb-8 tracking-[-0.05em] leading-[1]"
                    >
                        Client <span className="text-[#914694]">Voices</span>
                    </motion.h2>

                    <motion.p
                        variants={fadeInUpVariants}
                        className="text-lg md:text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed font-medium tracking-tight"
                    >
                        Hear from leading architecture and engineering firms about
                        their experience partnering with us.
                    </motion.p>
                </motion.div>

                {/* Aether-Grid */}
                <div ref={gridRef} className="grid md:grid-cols-2 gap-6 md:gap-8 max-w-6xl mx-auto">
                    {testimonials.map((testimonial, index) => (
                        <AetherSlab
                            key={`${testimonial.name}-${index}`}
                            testimonial={testimonial}
                            index={index}
                            isInView={gridInView}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;

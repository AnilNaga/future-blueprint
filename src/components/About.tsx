import { Building2, Globe, Award, Users, ArrowRight } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useScrollAnimation, fadeInUpVariants, staggerContainerVariants, slideInLeftVariants, slideInRightVariants } from '@/hooks/useScrollAnimation';
import { Link } from 'react-router-dom';

const stats = [
  { icon: Building2, value: '500+', label: 'Projects Delivered' },
  { icon: Globe, value: '15+', label: 'Countries Served' },
  { icon: Award, value: '12+', label: 'Years Experience' },
  { icon: Users, value: '50+', label: 'Expert Engineers' },
];

const About = () => {
  const { ref: contentRef, isInView: contentInView } = useScrollAnimation();
  const { ref: imageRef, isInView: imageInView } = useScrollAnimation();
  const { ref: trustRef, isInView: trustInView } = useScrollAnimation();

  return (
    <section id="about" className="section relative overflow-hidden">
      {/* Fixed and Sticky Background Layer */}
      {/* Background Image - Fixed & Sticky Effect (Scoped) */}
      <div 
        className="absolute inset-0 z-0 hidden md:block"
        style={{
          backgroundImage: 'url(/images/about-bim-background.png?v=9)',
          backgroundAttachment: 'fixed',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          opacity: 0.5,
        }}
      />

      {/* Mobile Scroll Background */}
      <div 
        className="absolute inset-0 z-0 md:hidden"
        style={{
          backgroundImage: 'url(/images/about-bim-background.png?v=9)',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          opacity: 0.5,
        }}
      />
      <motion.div
        className="absolute -top-12 -right-12 w-96 h-96 bg-primary/10 blur-[140px] rounded-full z-0"
        style={{ y: useTransform(useScroll().scrollY, [0, 1000], [0, -150]) }}
      />
      <motion.div
        className="absolute -bottom-12 -left-12 w-80 h-80 bg-accent/10 blur-[120px] rounded-full z-0"
        style={{ y: useTransform(useScroll().scrollY, [0, 1000], [0, 150]) }}
      />
      <div className="container mx-auto px-6 py-24 relative z-10 space-y-32">
        
        {/* SECTION 1: INTRO + IMAGE */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
            {/* Left Content */}
            <motion.div 
                ref={contentRef}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={staggerContainerVariants}
                className="order-2 lg:order-1 space-y-8"
            >
                <motion.p variants={fadeInUpVariants} className="text-sm font-bold text-primary uppercase tracking-[0.3em]">About Us</motion.p>
                <motion.h2 variants={fadeInUpVariants} className="text-4xl md:text-6xl font-black text-slate-900 leading-tight">
                    Delivering BIM Excellence with <br/><span className="gradient-text">Revit-Driven Precision</span>
                </motion.h2>
                <motion.p variants={fadeInUpVariants} className="text-lg text-slate-600 font-medium leading-relaxed max-w-xl">
                    We bridge the gap between architectural vision and construction reality using advanced digital engineering workflows.
                </motion.p>
                <motion.div variants={fadeInUpVariants} className="pt-4">
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-widest flex items-center gap-3">
                        Scroll to discover <ArrowRight className="w-4 h-4 rotate-90 text-primary" />
                    </span>
                </motion.div>
            </motion.div>
            
            {/* Right Image */}
            <motion.div
                ref={imageRef}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={slideInRightVariants}
                className="order-1 lg:order-2 relative"
            >
                <div className="relative z-10 rounded-[32px] md:rounded-[40px] overflow-hidden glass-card p-2 md:p-3 border border-white/10 shadow-2xl">
                  <div className="aspect-[4/5] relative rounded-[24px] md:rounded-[32px] overflow-hidden">
                    <img
                      src="/images/lead-engineer.png"
                      alt="Lead BIM Engineer"
                      className="w-full h-full object-cover grayscale-[0.2] hover:grayscale-0 transition-all duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-60" />
                    {/* Floating Badge */}
                    <div className="absolute bottom-4 left-4 right-4 md:bottom-8 md:left-8 md:right-8 glass-card-strong py-3 md:py-4 px-4 md:px-6 rounded-xl md:rounded-2xl border border-white/20 backdrop-blur-xl shadow-xl">
                      <p className="text-slate-900 font-bold text-xs md:text-sm tracking-wide">BIM Engineers delivering global projects with precision</p>
                    </div>
                  </div>
                </div>
                <div className="absolute -top-12 -right-12 w-64 h-64 bg-primary/10 blur-[100px] rounded-full -z-10" />
                <div className="absolute -bottom-12 -left-12 w-48 h-48 bg-accent/5 blur-[80px] rounded-full -z-10" />
            </motion.div>
        </div>

        {/* SECTION 2: SERVICES LIST */}
        <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainerVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
            {['Consultancy', 'Coordination', 'Engineering', 'Visualization'].map((service, i) => (
                <motion.div 
                    key={service} 
                    variants={fadeInUpVariants}
                    whileHover={{ y: -5 }}
                    className="glass-card p-10 rounded-[2rem] border border-white/20 text-center hover:bg-white/40 transition-all duration-300 group shadow-lg"
                >
                    <h3 className="text-xl font-bold text-slate-800 group-hover:text-primary transition-colors tracking-tight">{service}</h3>
                </motion.div>
            ))}
        </motion.div>

        {/* SECTION 3: MISSION STATEMENT */}
        <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUpVariants}
            className="text-center max-w-5xl mx-auto space-y-10 glass-card p-12 md:p-20 rounded-[3rem] border border-white/20 relative overflow-hidden shadow-2xl"
        >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 -z-10" />
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 leading-tight">
                We Make Complex BIM Ideas <br/>
                <span className="gradient-text">Work in the Real World</span>
            </h2>
            <div className="space-y-6 text-lg md:text-xl text-slate-600 font-medium leading-relaxed max-w-3xl mx-auto">
                <p>
                    Jithesh Technologies Private Limited is a BIM-focused engineering consultancy 
                    delivering Revit-based solutions across architecture, MEP, and structural disciplines.
                </p>
                <p>
                    We support global construction teams with accurate modeling, coordination, and documentation. 
                    Our mission is to empower professionals with data-rich 3D models that reduce waste and improve project outcomes.
                </p>
            </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;




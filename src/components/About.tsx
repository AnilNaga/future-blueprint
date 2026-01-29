import { Building2, Globe, Award, Users, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
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
    <section id="about" className="section relative overflow-hidden py-20 px-6">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">

          {/* Left Column: Content & Metrics */}
          <motion.div
            ref={contentRef}
            initial="hidden"
            animate={contentInView ? 'visible' : 'hidden'}
            variants={staggerContainerVariants}
            className="order-2 lg:order-1"
          >
            <motion.p
              variants={fadeInUpVariants}
              className="text-xs md:text-sm font-semibold text-primary uppercase tracking-[0.3em] mb-4"
            >
              About Jithesh Technologies
            </motion.p>
            <motion.h2
              variants={fadeInUpVariants}
              className="text-3xl md:text-5xl font-black text-slate-900 mb-8 leading-tight"
            >
              Global BIM Expertise.
              <br />
              <span className="gradient-text">Engineering Precision.</span>
            </motion.h2>
            <motion.p
              variants={fadeInUpVariants}
              className="text-base md:text-lg text-text-secondary leading-relaxed font-normal mb-10 max-w-xl"
            >
              Jithesh Technologies Private Limited is a specialized BIM engineering consultancy
              delivering Revit-based solutions for high-complexity construction projects worldwide.
            </motion.p>

            <motion.div variants={fadeInUpVariants} className="mb-10">
              <Link
                to="/about"
                className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all duration-300 group"
              >
                Read Full Story
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>

            <div className="grid grid-cols-2 gap-8 md:gap-12 pt-12 border-t border-slate-200">
              {stats.map((stat) => (
                <motion.div
                  key={stat.label}
                  variants={fadeInUpVariants}
                  className="group"
                >
                  <div className="text-2xl md:text-3xl font-black text-slate-900 mb-1 tracking-tight group-hover:text-primary transition-colors">
                    {stat.value}
                  </div>
                  <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Column: Human Visual Anchor */}
          <motion.div
            ref={imageRef}
            initial="hidden"
            animate={imageInView ? 'visible' : 'hidden'}
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

            {/* Background Decorative Rings */}
            <div className="absolute -top-12 -right-12 w-64 h-64 bg-primary/10 blur-[100px] rounded-full -z-10" />
            <div className="absolute -bottom-12 -left-12 w-48 h-48 bg-accent/5 blur-[80px] rounded-full -z-10" />
          </motion.div>
        </div>

        {/* Refined Trust Section (Empowering Global Leaders) */}
        <motion.div
          ref={trustRef}
          initial="hidden"
          animate={trustInView ? 'visible' : 'hidden'}
          variants={staggerContainerVariants}
          className="mt-32 pt-24 border-t border-slate-100"
        >
          <div className="text-center mb-16 md:mb-20">
            <motion.p
              variants={fadeInUpVariants}
              className="text-[12px] md:text-[13px] font-medium text-slate-400 uppercase tracking-[0.08em] mb-6"
            >
              Trusted worldwide
            </motion.p>
            <motion.h2
              variants={fadeInUpVariants}
              className="text-[28px] md:text-[32px] font-semibold text-[#0A0A0A] leading-[1.2] tracking-tight"
            >
              Empowering Global Leaders
            </motion.h2>
          </div>

          <motion.div
            className="grid grid-cols-2 lg:grid-cols-5 gap-y-12 gap-x-12 items-center justify-items-center"
            initial="hidden"
            animate={trustInView ? 'visible' : 'hidden'}
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.04
                }
              }
            }}
          >
            {[
              { name: 'ACME CORP', id: 'acme' },
              { name: 'GLOBAL ARCH', id: 'global' },
              { name: 'BIM FLOW', id: 'bim' },
              { name: 'TECH RHYTHM', id: 'tech' },
              { name: 'ELITE ENG', id: 'elite' },
            ].map((logo) => (
              <motion.div
                key={logo.id}
                variants={{
                  hidden: { opacity: 0 },
                  visible: { opacity: 1 }
                }}
                className="w-full flex justify-center"
              >
                <motion.div
                  initial={{ opacity: 0.5 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.2 }}
                  className="group cursor-default select-none flex items-center gap-2"
                >
                  <div className="w-8 h-8 rounded bg-slate-100 group-hover:bg-slate-200 transition-colors flex items-center justify-center border border-slate-200/50">
                    <div className="w-4 h-4 rounded-full border-2 border-slate-900/10 group-hover:border-slate-900/20" />
                  </div>
                  <span className="text-sm md:text-base font-bold text-slate-800 tracking-tighter opacity-80 group-hover:opacity-100 transition-all">
                    {logo.name}
                  </span>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;

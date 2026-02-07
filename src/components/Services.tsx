import { Building, Thermometer, Columns, Layers, Calculator, ArrowRight } from 'lucide-react';
import { motion, useMotionValue, useSpring, useTransform, useScroll } from 'framer-motion';
import { useScrollAnimation, fadeInUpVariants, staggerContainerVariants } from '@/hooks/useScrollAnimation';
import { Link } from 'react-router-dom';
import React from 'react';

const services = [
  {
    title: 'ArchitectureBIM',
    description: '2D plans, sections, elevations, and intelligent 3D models built for precision.',
    features: ['Floor Plans', '3D Models', 'Documentation'],
    href: '/architecture',
    color: 'bg-white',
    accent: '#914694'
  },
  {
    title: 'MEPBIM',
    description: 'HVAC, plumbing, drainage, and fire fighting systems with clash-free coordination.',
    features: ['HVAC Systems', 'Plumbing', 'Fire Fighting'],
    href: '/mep-bim',
    color: 'bg-white',
    accent: '#914694'
  },
  {
    title: 'StructuralBIM',
    description: 'Rebar detailing, beams, columns, and construction-ready structural models.',
    features: ['Rebar Detailing', 'Foundations', 'Shop Drawings'],
    href: '/structural',
    color: 'bg-white',
    accent: '#914694'
  },
  {
    title: 'BOQs&Coordination',
    description: 'Accurate take-offs and clash detection directly from federated BIM models.',
    features: ['Clash Detection', 'Quantity Take-offs', 'Reporting'],
    href: '/architecture',
    color: 'bg-white',
    accent: '#914694'
  },
];

const ServiceCard = ({ service, index, isInView }: { service: any; index: number; isInView: boolean }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["7deg", "-7deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-7deg", "7deg"]);

  const shineX = useTransform(mouseXSpring, [-0.5, 0.5], ["0%", "100%"]);
  const shineY = useTransform(mouseYSpring, [-0.5, 0.5], ["0%", "100%"]);

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = event.clientX - rect.left;
    const mouseY = event.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <Link key={service.title} to={service.href} className="group flex perspective-1000">
      <motion.div
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        variants={{
          hidden: { opacity: 0, y: 40, rotateX: 10 },
          visible: {
            opacity: 1,
            y: 0,
            rotateX: 0,
            transition: { duration: 1, ease: [0.16, 1, 0.3, 1] }
          }
        }}
        whileHover={{
          y: -12,
          scale: 1.02,
          rotateX: -2,
          rotateY: 2,
          transition: { duration: 0.4, ease: "easeOut" }
        }}
        className={`relative flex-1 rounded-[3rem] p-10 ${service.color} border border-white/50 backdrop-blur-xl overflow-hidden transition-all duration-700 shadow-[0_20px_50px_rgba(0,0,0,0.05)] hover:shadow-[0_40px_80px_rgba(145,70,148,0.12)]`}
      >

        <div className="relative z-10 flex flex-col h-full">
          <div className="mb-10">
            <h3 className="text-2xl md:text-3xl font-black text-slate-900 leading-[1.2] tracking-tight">
              {service.title}
            </h3>
          </div>

          <p className="text-slate-500/80 mb-12 leading-relaxed text-sm font-medium tracking-wide">
            {service.description}
          </p>

          <div className="mt-auto flex flex-col gap-6">
            <div className="flex flex-col gap-4">
              {service.features.map((feature: string, fIdx: number) => (
                <motion.div
                  key={feature}
                  initial={{ opacity: 0, x: -15 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -15 }}
                  transition={{ delay: 1 + (index * 0.1) + (fIdx * 0.1), ease: "easeOut" }}
                  className="flex items-center gap-4 group/item"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-[#914694]/30 group-hover/item:scale-150 group-hover/item:bg-[#914694] transition-all duration-500" />
                  <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-slate-400 group-hover:text-slate-900 transition-colors">
                    {feature}
                  </span>
                </motion.div>
              ))}
            </div>

            <div className="pt-10 mt-6 border-t border-slate-900/5 flex items-center justify-between group-hover:border-[#914694]/20 transition-colors">
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-[#914694]">Explore</span>
              <motion.div
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <ArrowRight size={18} className="text-[#914694]" />
              </motion.div>
            </div>
          </div>
        </div>

        {/* Sublte Cinematic Branding Overlay */}
        <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#914694]/5 blur-3xl rounded-full group-hover:bg-[#914694]/10 transition-colors duration-1000" />
      </motion.div>
    </Link>
  );
};

const Services = () => {
  const { ref: headerRef, isInView: headerInView } = useScrollAnimation();
  const { ref: gridRef, isInView: gridInView } = useScrollAnimation();
  const { ref: sectionRef, isInView: sectionInView } = useScrollAnimation();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const backgroundOpacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.6, 1, 1, 0.6]);
  const backgroundY = useTransform(scrollYProgress, [0, 1], [0, -100]);

  return (
    <section id="services" ref={sectionRef} className="relative py-32 px-6 overflow-hidden">
      {/* Sticky Background Layer with Scroll Reveal */}
      <motion.div
        className="absolute inset-0 z-0 sticky top-0"
        style={{
          opacity: backgroundOpacity,
          backgroundColor: '#fcfbe1'
        }}
      >
        <motion.div
          className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#914694]/5 blur-[120px] rounded-full"
          style={{ y: backgroundY }}
        />
        <motion.div
          className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#914694]/3 blur-[120px] rounded-full"
          style={{ y: useTransform(backgroundY, (v) => -v) }}
        />
      </motion.div>

      <div className="container mx-auto relative z-10">
        {/* Header */}
        <motion.div
          ref={headerRef}
          initial="hidden"
          animate={headerInView ? 'visible' : 'hidden'}
          variants={staggerContainerVariants}
          className="max-w-4xl mx-auto text-center mb-24"
        >
          <motion.div
            variants={fadeInUpVariants}
            className="inline-block px-4 py-1.5 mb-6 rounded-full bg-slate-900/5 border border-slate-900/10 backdrop-blur-md"
          >
            <span className="text-[10px] md:text-xs font-bold uppercase tracking-[0.4em] text-[#914694]">Capabilities</span>
          </motion.div>
          <motion.h2
            variants={fadeInUpVariants}
            className="text-4xl md:text-6xl font-black text-slate-900 mb-8 tracking-tight leading-[1.1]"
          >
            Elite BIM Engineering <br />
            <span className="text-[#914694]">Precision Workflows</span>
          </motion.h2>
          <motion.p
            variants={fadeInUpVariants}
            className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed font-medium"
          >
            We deploy advanced digital twins and intelligent data structures to transform complex architectural visions into constructible reality.
          </motion.p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          ref={gridRef}
          initial="hidden"
          animate={gridInView ? 'visible' : 'hidden'}
          variants={staggerContainerVariants}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {services.map((service, index) => (
            <ServiceCard
              key={service.title}
              service={service}
              index={index}
              isInView={gridInView}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;

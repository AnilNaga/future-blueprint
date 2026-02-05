import { Building, Thermometer, Columns, Calculator, ArrowRight } from 'lucide-react';
import { motion, useMotionValue, useMotionTemplate, useTransform, useScroll } from 'framer-motion';
import { useScrollAnimation, fadeInUpVariants, staggerContainerVariants } from '@/hooks/useScrollAnimation';
import { Link } from 'react-router-dom';
import { useRef } from 'react';

const services = [
  {
    title: 'Architecture BIM',
    description: '2D plans, sections, elevations, and intelligent 3D models built for precision.',
    gradient: 'from-violet-500 to-purple-600',
    icon: Building,
    features: ['Floor Plans', '3D Models', 'Documentation'],
    href: '/architecture'
  },
  {
    title: 'MEP BIM',
    description: 'HVAC, plumbing, drainage, and fire fighting systems with clash-free coordination.',
    gradient: 'from-blue-500 to-cyan-500',
    icon: Thermometer,
    features: ['HVAC Systems', 'Plumbing', 'Fire Fighting'],
    href: '/mep-bim'
  },
  {
    title: 'Structural BIM',
    description: 'Rebar detailing, beams, columns, and construction-ready structural models.',
    gradient: 'from-emerald-500 to-teal-500',
    icon: Columns,
    features: ['Rebar Detailing', 'Foundations', 'Shop Drawings'],
    href: '/structural'
  },
  {
    title: 'BOQs & Coordination',
    description: 'Accurate take-offs and clash detection directly from federated BIM models.',
    gradient: 'from-orange-500 to-amber-500',
    icon: Calculator,
    features: ['Clash Detection', 'Quantity Take-offs', 'Reporting'],
    href: '/architecture'
  },
];

interface ServiceCardProps {
  service: typeof services[0];
  index: number;
}

const ServiceCard = ({ service, index }: ServiceCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };
  
  const spotlightBackground = useMotionTemplate`radial-gradient(350px circle at ${mouseX}px ${mouseY}px, rgba(255,255,255,0.15), transparent 70%)`;
  
  return (
    <Link to={service.href}>
      <motion.div
        ref={cardRef}
        variants={fadeInUpVariants}
        onMouseMove={handleMouseMove}
        whileHover={{ y: -12, scale: 1.02, rotateX: 5, rotateY: index % 2 === 0 ? 3 : -3 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className={`relative h-full rounded-[28px] p-8 bg-gradient-to-br ${service.gradient} shadow-2xl overflow-hidden group cursor-pointer border border-white/20`}
        style={{ perspective: '1000px', transformStyle: 'preserve-3d' }}
      >
        {/* Spotlight effect */}
        <motion.div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-[28px]"
          style={{ background: spotlightBackground }}
        />
        
        {/* Animated gradient orbs */}
        <motion.div 
          className="absolute top-0 right-0 w-48 h-48 bg-white/10 blur-[60px] rounded-full -translate-y-1/2 translate-x-1/2"
          animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 4, repeat: Infinity }}
        />
        <motion.div 
          className="absolute bottom-0 left-0 w-32 h-32 bg-black/10 blur-[40px] rounded-full translate-y-1/2 -translate-x-1/2"
        />
        
        {/* Glass border */}
        <div className="absolute inset-0 rounded-[28px] border border-white/30" />
        <div className="absolute inset-[1px] rounded-[27px] border border-white/10" />

        <div className="relative z-10 flex flex-col h-full">
          {/* Icon */}
          <motion.div
            whileHover={{ scale: 1.1, rotate: 10 }}
            className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center mb-6 border border-white/30 shadow-xl"
          >
            <service.icon className="w-8 h-8 text-white" />
          </motion.div>
          
          <h3 className="mb-3 text-white text-2xl font-bold tracking-tight">
            {service.title}
          </h3>
          <p className="text-white/80 mb-6 leading-relaxed text-base flex-1">
            {service.description}
          </p>

          <div className="flex flex-wrap gap-2 mt-auto">
            {service.features.map((feature, i) => (
              <motion.span
                key={feature}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 + i * 0.1 }}
                className="px-3 py-1.5 text-xs font-bold uppercase tracking-wider bg-white/15 backdrop-blur-lg rounded-lg text-white border border-white/10"
              >
                {feature}
              </motion.span>
            ))}
          </div>
        </div>

        {/* Floating background icon */}
        <motion.div
          className="absolute right-[-30px] bottom-[-50px] opacity-[0.08] group-hover:opacity-[0.15] transition-opacity duration-700 pointer-events-none"
          animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        >
          <service.icon className="w-72 h-72 text-white" />
        </motion.div>

        {/* Hover arrow */}
        <motion.div 
          className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/20 backdrop-blur-xl border border-white/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-lg"
          initial={{ x: -10, opacity: 0 }}
          whileHover={{ scale: 1.1 }}
        >
          <ArrowRight className="w-5 h-5 text-white" />
        </motion.div>
        
        {/* Shine effect */}
        <motion.div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none rounded-[28px]"
          style={{ background: 'linear-gradient(135deg, transparent 40%, rgba(255,255,255,0.1) 50%, transparent 60%)' }}
          initial={{ x: '-100%' }}
          whileHover={{ x: '200%' }}
          transition={{ duration: 1, repeat: Infinity, repeatDelay: 1 }}
        />
      </motion.div>
    </Link>
  );
};

const Services = () => {
  const { ref: headerRef, isInView: headerInView } = useScrollAnimation();
  const { ref: gridRef, isInView: gridInView } = useScrollAnimation();
  const sectionRef = useRef<HTMLElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });
  
  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);

  return (
    <section id="services" ref={sectionRef} className="relative py-32 overflow-hidden">
      {/* Parallax background */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-b from-slate-50 via-white to-slate-50/50"
        style={{ y: backgroundY }}
      />
      
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{ backgroundImage: 'radial-gradient(hsl(var(--foreground)) 1px, transparent 1px)', backgroundSize: '50px 50px' }} />
      
      <motion.div
        className="absolute top-1/4 -right-32 w-96 h-96 rounded-full bg-gradient-to-r from-primary/10 to-violet-500/10 blur-3xl"
        animate={{ y: [0, -30, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 10, repeat: Infinity }}
      />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          ref={headerRef}
          initial="hidden"
          animate={headerInView ? 'visible' : 'hidden'}
          variants={staggerContainerVariants}
          className="max-w-4xl mx-auto text-center mb-20"
        >
          <motion.div
            variants={fadeInUpVariants}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/5 border border-primary/10 mb-6"
          >
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-xs font-bold text-primary uppercase tracking-widest">Our Capabilities</span>
          </motion.div>
          <motion.h2
            variants={fadeInUpVariants}
            className="text-4xl md:text-6xl font-black text-foreground mb-8 leading-[0.95]"
          >
            Comprehensive BIM
            <span className="block bg-gradient-to-r from-primary via-purple-500 to-violet-500 bg-clip-text text-transparent">
              Solutions
            </span>
          </motion.h2>
          <motion.p
            variants={fadeInUpVariants}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed"
          >
            End-to-end BIM services for architecture, MEP, and structural engineering projects of any scale.
          </motion.p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          ref={gridRef}
          initial="hidden"
          animate={gridInView ? 'visible' : 'hidden'}
          variants={staggerContainerVariants}
          className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto"
        >
          {services.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;

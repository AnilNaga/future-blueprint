import { Building, Thermometer, Columns, Layers, Calculator, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { useScrollAnimation, fadeInUpVariants, staggerContainerVariants } from '@/hooks/useScrollAnimation';
import { Link } from 'react-router-dom';

const services = [
  {
    title: 'Architecture BIM',
    description: '2D plans, sections, elevations, and intelligent 3D models built for precision.',
    gradient: 'from-[rgb(176,119,237)] to-[#9a5ed6]',
    icon: Building,
    features: ['Floor Plans', '3D Models', 'Documentation'],
    href: '/architecture'
  },
  {
    title: 'MEP BIM',
    description: 'HVAC, plumbing, drainage, and fire fighting systems with clash-free coordination.',
    gradient: 'from-[rgb(176,119,237)] to-[#9a5ed6]',
    icon: Thermometer,
    features: ['HVAC Systems', 'Plumbing', 'Fire Fighting'],
    href: '/mep-bim'
  },
  {
    title: 'Structural BIM',
    description: 'Rebar detailing, beams, columns, and construction-ready structural models.',
    gradient: 'from-[rgb(176,119,237)] to-[#9a5ed6]',
    icon: Columns,
    features: ['Rebar Detailing', 'Foundations', 'Shop Drawings'],
    href: '/structural'
  },
  {
    title: 'BOQs & Coordination',
    description: 'Accurate take-offs and clash detection directly from federated BIM models.',
    gradient: 'from-[rgb(176,119,237)] to-[#9a5ed6]',
    icon: Calculator,
    features: ['Clash Detection', 'Quantity Take-offs', 'Reporting'],
    href: '/architecture'
  },
];

const Services = () => {
  const { ref: headerRef, isInView: headerInView } = useScrollAnimation();
  const { ref: gridRef, isInView: gridInView } = useScrollAnimation();

  return (
    <section id="services" className="section section-alt py-20 px-6">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          ref={headerRef}
          initial="hidden"
          animate={headerInView ? 'visible' : 'hidden'}
          variants={staggerContainerVariants}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <motion.p
            variants={fadeInUpVariants}
            className="text-xs md:text-sm font-semibold text-primary uppercase tracking-[0.3em] mb-4"
          >
            Capabilities
          </motion.p>
          <motion.h2
            variants={fadeInUpVariants}
            className="text-3xl md:text-5xl font-black text-slate-900 mb-6 leading-tight"
          >
            Comprehensive BIM Solutions
          </motion.h2>
          <motion.p
            variants={fadeInUpVariants}
            className="text-base md:text-lg text-text-secondary max-w-2xl mx-auto leading-relaxed"
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
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          {services.map((service, index) => (
            <Link key={service.title} to={service.href}>
              <motion.div
                variants={fadeInUpVariants}
                whileHover={{ y: -6, scale: 1.01 }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
                className={`relative h-full rounded-2xl p-6 bg-gradient-to-br ${service.gradient} shadow-lg shadow-slate-200/40 overflow-hidden group cursor-pointer border border-white/20`}
              >
                <div className="absolute top-0 right-0 w-48 h-48 bg-white/10 blur-[60px] rounded-full -translate-y-1/2 translate-x-1/2" />

                <div className="relative z-10 max-w-[90%] flex flex-col h-full">
                  <h3 className="mb-2 text-white text-lg font-bold">
                    {service.title}
                  </h3>
                  <p className="text-white/80 mb-5 leading-relaxed text-[13px] font-normal">
                    {service.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mt-auto">
                    {service.features.map((feature) => (
                      <span
                        key={feature}
                        className="px-3 py-1 text-[8px] font-bold uppercase tracking-wider bg-white/15 backdrop-blur-lg rounded-md text-white border border-white/5"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                <motion.div
                  className="absolute right-[-20px] bottom-[-40px] opacity-10 group-hover:opacity-20 transition-opacity pointer-events-none"
                  animate={{
                    y: [0, -15, 0]
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <service.icon className="w-64 h-64 text-white" />
                </motion.div>

                <div className="absolute top-8 right-8 w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-xl border border-white/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all shadow-lg">
                  <ArrowRight className="w-6 h-6 text-white" />
                </div>
              </motion.div>
            </Link>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;

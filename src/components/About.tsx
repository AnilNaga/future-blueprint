import { Building2, Globe, Award, Users } from 'lucide-react';
import { motion } from 'framer-motion';
import { useScrollAnimation, fadeInUpVariants, staggerContainerVariants } from '@/hooks/useScrollAnimation';

const stats = [
  { icon: Building2, value: '500+', label: 'Projects Delivered' },
  { icon: Globe, value: '15+', label: 'Countries Served' },
  { icon: Award, value: '12+', label: 'Years Experience' },
  { icon: Users, value: '50+', label: 'Expert Engineers' },
];

const About = () => {
  const { ref: headerRef, isInView: headerInView } = useScrollAnimation();
  const { ref: statsRef, isInView: statsInView } = useScrollAnimation();
  const { ref: trustRef, isInView: trustInView } = useScrollAnimation();

  return (
    <section id="about" className="section">
      <div className="container mx-auto px-6">
        <motion.div 
          ref={headerRef}
          initial="hidden"
          animate={headerInView ? 'visible' : 'hidden'}
          variants={staggerContainerVariants}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <motion.p 
            variants={fadeInUpVariants}
            className="text-sm font-medium text-primary uppercase tracking-widest mb-4"
          >
            About Us
          </motion.p>
          <motion.h2 
            variants={fadeInUpVariants}
            className="text-foreground mb-6"
          >
            Global BIM Expertise.
            <br />
            <span className="gradient-text">Engineering Precision.</span>
          </motion.h2>
          <motion.p 
            variants={fadeInUpVariants}
            className="text-lg text-muted-foreground leading-relaxed"
          >
            Jithesh Technologies Private Limited is a BIM-focused engineering consultancy 
            delivering Revit-based solutions for complex construction projects worldwide. 
            We partner with architects, engineers, and developers to transform vision into reality.
          </motion.p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div 
          ref={statsRef}
          initial="hidden"
          animate={statsInView ? 'visible' : 'hidden'}
          variants={staggerContainerVariants}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8"
        >
          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              variants={fadeInUpVariants}
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="glass-card rounded-2xl p-6 md:p-8 text-center group"
            >
              <motion.div 
                className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors duration-300"
                whileHover={{ scale: 1.1, rotate: 5 }}
              >
                <stat.icon className="w-6 h-6 text-primary" />
              </motion.div>
              <div className="text-3xl md:text-4xl font-bold text-foreground mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Trust Statement */}
        <motion.div 
          ref={trustRef}
          initial="hidden"
          animate={trustInView ? 'visible' : 'hidden'}
          variants={staggerContainerVariants}
          className="mt-20 text-center"
        >
          <motion.p 
            variants={fadeInUpVariants}
            className="text-muted-foreground text-sm uppercase tracking-widest mb-8"
          >
            Trusted by leading firms worldwide
          </motion.p>
          <motion.div 
            variants={fadeInUpVariants}
            className="flex flex-wrap items-center justify-center gap-12 opacity-60"
          >
            {['Architecture Firms', 'MEP Consultants', 'Contractors', 'Developers'].map((client, index) => (
              <motion.div 
                key={client} 
                className="text-foreground font-medium"
                initial={{ opacity: 0 }}
                animate={trustInView ? { opacity: 0.6 } : { opacity: 0 }}
                transition={{ delay: 0.1 * index, duration: 0.5 }}
                whileHover={{ opacity: 1, scale: 1.05 }}
              >
                {client}
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;

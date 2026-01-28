import { ChevronDown } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';
import heroVideo from '@/assets/bim-hero-video.mp4';

const Hero = () => {
  const { scrollY } = useScroll();
  
  // Parallax effects
  const videoY = useTransform(scrollY, [0, 800], [0, 200]);
  const contentY = useTransform(scrollY, [0, 600], [0, 100]);
  const contentOpacity = useTransform(scrollY, [0, 400], [1, 0]);
  const overlayOpacity = useTransform(scrollY, [0, 400], [0.55, 0.95]);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Video Background with Parallax */}
      <motion.div 
        className="absolute inset-0"
        style={{ y: videoY }}
      >
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-[120%] object-cover"
        >
          <source src={heroVideo} type="video/mp4" />
        </video>
      </motion.div>

      {/* Animated Light Overlay */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-b from-background/55 via-background/70 to-background/90"
        style={{ opacity: overlayOpacity }}
      />

      {/* Content with Parallax */}
      <motion.div 
        className="relative z-10 flex h-full items-center justify-center text-center px-6"
        style={{ y: contentY, opacity: contentOpacity }}
      >
        <div className="max-w-5xl">
          <motion.h1 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-[1.1]"
          >
            Engineering the Future
            <br />
            <span className="gradient-text">with BIM & Revit</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.4, 0.25, 1] }}
            className="mt-6 md:mt-8 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto"
          >
            Architecture • MEP • Structural • Global Consultancy
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.25, 0.4, 0.25, 1] }}
            className="mt-10 md:mt-12 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <motion.a 
              href="#contact" 
              className="btn-primary"
              whileHover={{ y: -4, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.2 }}
            >
              Request Consultation
            </motion.a>
            <motion.a 
              href="#projects" 
              className="btn-secondary"
              whileHover={{ y: -4, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.2 }}
            >
              View Projects
            </motion.a>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.a 
          href="#about" 
          className="flex flex-col items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <span className="text-xs font-medium uppercase tracking-widest">Scroll</span>
          <ChevronDown size={20} />
        </motion.a>
      </motion.div>
    </section>
  );
};

export default Hero;

import { ChevronDown, Play, ArrowRight } from 'lucide-react';
import { motion, useScroll, useTransform, useSpring, useMotionValue, useMotionTemplate } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useRef } from 'react';

const Hero = () => {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollY } = useScroll();
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Parallax effects
  const videoY = useTransform(scrollY, [0, 1000], [0, 300]);
  const videoScale = useTransform(scrollY, [0, 1000], [1, 1.2]);
  const contentY = useTransform(scrollY, [0, 600], [0, 150]);
  const contentOpacity = useTransform(scrollY, [0, 500], [1, 0]);
  const overlayOpacity = useTransform(scrollY, [0, 400], [0.6, 0.98]);
  
  // Smooth spring animations
  const smoothVideoY = useSpring(videoY, { stiffness: 100, damping: 30 });
  const smoothContentY = useSpring(contentY, { stiffness: 100, damping: 30 });
  
  // Mouse spotlight effect
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };
  
  const spotlightBackground = useMotionTemplate`radial-gradient(800px circle at ${mouseX}px ${mouseY}px, rgba(136, 70, 207, 0.08), transparent 60%)`;

  return (
    <section 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative min-h-screen w-full overflow-hidden flex items-center"
    >
      {/* Video Background with Parallax */}
      <motion.div
        className="absolute inset-0"
        style={{ y: smoothVideoY, scale: videoScale }}
      >
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-[130%] object-cover"
        >
          <source src="/videos/hero-bim-future.mp4" type="video/mp4" />
        </video>
      </motion.div>
      
      {/* Animated gradient orbs */}
      <motion.div
        className="absolute top-1/4 -left-32 w-[500px] h-[500px] rounded-full bg-gradient-to-r from-primary/20 to-violet-500/20 blur-[100px]"
        animate={{ 
          x: [0, 50, 0],
          y: [0, -30, 0],
          scale: [1, 1.1, 1]
        }}
        transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-1/4 -right-32 w-[400px] h-[400px] rounded-full bg-gradient-to-r from-cyan-500/15 to-blue-500/15 blur-[100px]"
        animate={{ 
          x: [0, -40, 0],
          y: [0, 40, 0],
          scale: [1, 1.2, 1]
        }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Cinematic Dark Overlay */}
      <motion.div
        className="absolute inset-0 hero-overlay"
        style={{ opacity: overlayOpacity }}
      />
      
      {/* Mouse spotlight */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{ background: spotlightBackground }}
      />

      {/* Content with Parallax and Top Padding */}
      <motion.div
        className="relative z-10 flex h-full items-center justify-center text-center px-6 w-full"
        style={{ y: smoothContentY, opacity: contentOpacity }}
      >
        <div className="max-w-5xl">
          {/* Animated badge */}
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-8 shadow-xl"
          >
            <motion.div
              className="w-2 h-2 rounded-full bg-primary"
              animate={{ scale: [1, 1.3, 1], opacity: [1, 0.7, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <span className="text-sm font-semibold text-slate-700">Global BIM & Revit Consultancy</span>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black text-slate-900 leading-[0.95] tracking-tight px-2">
              Engineering the Future
              <br />
              <motion.span 
                className="gradient-text inline-block"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.4 }}
              >
                with BIM & Revit
              </motion.span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="mt-6 md:mt-10 text-lg md:text-2xl text-slate-600 max-w-2xl mx-auto font-medium"
          >
            <span className="inline-flex items-center gap-3 flex-wrap justify-center">
              <span>Architecture</span>
              <span className="w-1.5 h-1.5 rounded-full bg-primary/50" />
              <span>MEP</span>
              <span className="w-1.5 h-1.5 rounded-full bg-primary/50" />
              <span>Structural</span>
              <span className="w-1.5 h-1.5 rounded-full bg-primary/50" />
              <span>Global Consultancy</span>
            </span>
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="mt-12 md:mt-16 flex flex-col sm:flex-row items-center justify-center gap-5"
          >
            <motion.div whileHover={{ scale: 1.05, y: -4 }} whileTap={{ scale: 0.98 }}>
              <Link
                to="/contact"
                className="group inline-flex items-center gap-3 px-8 py-5 rounded-full bg-gradient-to-r from-primary to-violet-600 text-white font-bold text-base shadow-2xl shadow-primary/30 hover:shadow-primary/50 transition-all duration-500"
              >
                Start Your Project
                <motion.span
                  className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-white/20"
                  whileHover={{ x: 4 }}
                >
                  <ArrowRight className="w-4 h-4" />
                </motion.span>
              </Link>
            </motion.div>
            
            <motion.a
              href="#projects"
              className="group inline-flex items-center gap-3 px-8 py-5 rounded-full bg-white/80 backdrop-blur-md border border-slate-200/80 text-slate-800 font-bold text-base shadow-lg hover:bg-white hover:shadow-xl transition-all duration-300"
              whileHover={{ y: -4, scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              <Play className="w-5 h-5 text-primary" />
              View Projects
            </motion.a>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.a
          href="#about"
          className="flex flex-col items-center gap-3 text-muted-foreground hover:text-foreground transition-colors group"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <span className="text-xs font-bold uppercase tracking-[0.2em]">Discover</span>
          <motion.div
            className="w-10 h-10 rounded-full border-2 border-slate-300 flex items-center justify-center group-hover:border-primary transition-colors"
            whileHover={{ scale: 1.1 }}
          >
            <ChevronDown size={18} className="text-primary" />
          </motion.div>
        </motion.a>
      </motion.div>
      
      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent pointer-events-none" />
    </section>
  );
};

export default Hero;

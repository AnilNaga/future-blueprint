import { ChevronDown } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import heroVideo from '@/assets/bim-hero-video.mp4';

const Hero = () => {
  const { scrollY } = useScroll();

  // Parallax effects
  const videoY = useTransform(scrollY, [0, 800], [0, 200]);
  const contentY = useTransform(scrollY, [0, 600], [0, 100]);
  const contentOpacity = useTransform(scrollY, [0, 400], [1, 0]);
  const overlayOpacity = useTransform(scrollY, [0, 400], [0.55, 0.95]);

  return (
    <section className="relative min-h-[calc(100vh-72px)] w-full overflow-hidden flex items-center">
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
          <source src="/videos/hero-bim-future.mp4" type="video/mp4" />
        </video>
      </motion.div>

      {/* Cinematic Dark Overlay */}
      <motion.div
        className="absolute inset-0 hero-overlay"
        style={{ opacity: overlayOpacity }}
      />

      {/* Content with Parallax and Top Padding */}
      <motion.div
        className="relative z-10 flex h-full items-center justify-center text-center px-6 w-full"
        style={{ y: contentY, opacity: contentOpacity }}
      >
        <div className="max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
          >
            <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-black text-slate-900 leading-[1.1] tracking-tight px-2">
              Engineering the Future
              <br />
              <span className="gradient-text">with BIM & Revit</span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.4, 0.25, 1] }}
            className="mt-4 md:mt-8 text-base md:text-xl text-slate-600 max-w-2xl mx-auto font-medium"
          >
            Architecture • MEP • Structural • Global Consultancy
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.25, 0.4, 0.25, 1] }}
            className="mt-10 md:mt-12 flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            <Link
              to="/contact"
              className="px-8 py-4 rounded-full bg-[#8846CF] text-white font-black text-sm shadow-xl shadow-[#8846CF]/20 inline-block"
            >
              Start Your Project
            </Link>
            <motion.a
              href="#projects"
              className="btn-secondary bg-white border-slate-200 text-slate-700 hover:bg-slate-50"
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
          <ChevronDown size={20} className="text-primary" />
        </motion.a>
      </motion.div>
    </section>
  );
};

export default Hero;

import { ChevronDown } from 'lucide-react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import logo from '../assets/logo.jpg';

const slides = [
  { type: 'video', src: "/videos/hero-bim-future.mp4" },
  { type: 'video', src: "/videos/hero-relevance.mp4" },
  { type: 'video', src: "/videos/hero-bim-future.mp4" }
];

const VideoSlide = ({ src, onEnded, isActive }: { src: string; onEnded: () => void; isActive: boolean }) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (isActive && videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play().catch(err => {
        console.warn("Video auto-playback was blocked or failed:", err);
      });
    }
  }, [isActive, src]);

  return (
    <video
      ref={videoRef}
      src={src}
      className="w-full h-[120%] object-cover"
      muted
      playsInline
      onEnded={onEnded}
      onError={onEnded} // Skip on error
    />
  );
};

const Hero = () => {
  const { scrollY } = useScroll();
  const [currentIndex, setCurrentIndex] = useState(0);

  // Parallax effects
  const backgroundY = useTransform(scrollY, [0, 800], [0, 200]);
  const contentY = useTransform(scrollY, [0, 600], [0, 100]);
  const contentOpacity = useTransform(scrollY, [0, 400], [1, 0]);
  const overlayOpacity = useTransform(scrollY, [0, 400], [0.55, 0.95]);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  };

  return (
    <section className="relative z-10 min-h-[calc(100vh-72px)] w-full overflow-hidden flex items-center bg-slate-900">
      {/* Sequential Background with Parallax */}
      <motion.div
        className="absolute inset-0"
        style={{ y: backgroundY }}
      >
        <AnimatePresence initial={false}>
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute inset-0 z-0"
          >
            <VideoSlide
              src={slides[currentIndex].src}
              onEnded={handleNext}
              isActive={true}
            />
          </motion.div>
        </AnimatePresence>
      </motion.div>

      {/* Cinematic Dark Overlay */}
      <motion.div
        className="absolute inset-0 z-[1]"
        style={{
          opacity: overlayOpacity,
          background: 'linear-gradient(to bottom, rgba(15, 23, 42, 0.4) 0%, rgba(15, 23, 42, 0.7) 60%, rgba(15, 23, 42, 0.95) 100%)'
        }}
      />

      {/* Slide Indicators */}
      <div className="absolute right-10 bottom-24 z-20 flex flex-col gap-3">
        {slides.map((_, idx) => (
          <motion.div
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`w-1.5 h-12 rounded-full cursor-pointer transition-all duration-500 ${idx === currentIndex ? 'bg-[#e2a8e4] scale-x-150 shadow-[0_0_15px_rgba(226,168,228,0.6)]' : 'bg-white/20 hover:bg-white/40'
              }`}
            animate={{
              height: idx === currentIndex ? 48 : 24,
              opacity: idx === currentIndex ? 1 : 0.4
            }}
          />
        ))}
      </div>


      {/* Content with Parallax */}
      <motion.div
        className="relative z-10 flex h-full items-center justify-center text-center px-6 w-full"
        style={{ y: contentY, opacity: contentOpacity }}
      >
        <div className="max-w-6xl">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.1
                }
              }
            }}
          >
            <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-black text-white leading-[1.1] tracking-tight px-2 drop-shadow-2xl">
              <div className="overflow-hidden mb-2">
                {"Engineering the Future".split("").map((char, i) => (
                  <motion.span
                    key={i}
                    variants={{
                      hidden: { y: "110%", rotate: 5, opacity: 0 },
                      visible: {
                        y: 0,
                        rotate: 0,
                        opacity: 1,
                        transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
                      }
                    }}
                    className="inline-block"
                  >
                    {char === " " ? "\u00A0" : char}
                  </motion.span>
                ))}
              </div>
              <motion.div
                variants={{
                  hidden: { opacity: 0, scale: 0.95, filter: "blur(10px)" },
                  visible: {
                    opacity: 1,
                    scale: 1,
                    filter: "blur(0px)",
                    transition: { duration: 1.2, delay: 0.5, ease: "easeOut" }
                  }
                }}
                className="inline-block mt-6 px-10 py-3 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 shadow-[0_20px_40px_rgba(0,0,0,0.3)]"
              >
                <span className="text-slate-900 font-black text-xl sm:text-2xl md:text-4xl lg:text-5xl tracking-tighter uppercase">
                  with JITHESH BIM CONSULTANTS
                </span>
              </motion.div>
            </h1>
          </motion.div>

          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.05,
                  delayChildren: 1.2
                }
              }
            }}
            className="mt-6 md:mt-10 flex flex-wrap justify-center gap-x-4 gap-y-2 text-[10px] md:text-sm font-black tracking-[0.3em] text-white/40 uppercase"
          >
            {"AUTOCAD • MEP • BIM ARCHITECTURE • STRUCTURE • SERVICES AND TRAINING".split(" ").map((word, i) => (
              <motion.span
                key={i}
                variants={{
                  hidden: { opacity: 0, y: 10 },
                  visible: { opacity: 1, y: 0 }
                }}
                className="hover:text-[#914694] transition-colors duration-300"
              >
                {word}
              </motion.span>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.8, ease: [0.16, 1, 0.3, 1] }}
            className="mt-12 md:mt-16 flex flex-col sm:flex-row items-center justify-center gap-8"
          >
            <Link
              to="/contact"
              className="group relative px-10 py-5 rounded-full bg-[#914694] text-white font-black text-sm overflow-hidden transition-transform hover:scale-105"
            >
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
              <span className="relative z-10">Start Your Project</span>
            </Link>
            <motion.a
              href="#projects"
              className="px-10 py-5 rounded-full bg-white/5 backdrop-blur-xl border border-white/10 text-white font-black text-sm hover:bg-white/10 transition-all"
              whileHover={{ y: -4, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
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
        className="absolute bottom-12 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.a
          href="#about"
          className="flex flex-col items-center gap-3 text-white/40 hover:text-white transition-colors"
        >
          <span className="text-[10px] font-bold uppercase tracking-[0.3em]">Explore</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          >
            <ChevronDown size={24} />
          </motion.div>
        </motion.a>
      </motion.div>
    </section>
  );
};

export default Hero;

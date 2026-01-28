import { ChevronDown } from 'lucide-react';
import heroVideo from '@/assets/bim-hero-video.mp4';

const Hero = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Video Background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src={heroVideo} type="video/mp4" />
      </video>

      {/* Light Overlay */}
      <div className="absolute inset-0 hero-overlay" />

      {/* Content */}
      <div className="relative z-10 flex h-full items-center justify-center text-center px-6">
        <div className="max-w-5xl">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-[1.1] animate-fade-in-up">
            Engineering the Future
            <br />
            <span className="gradient-text">with BIM & Revit</span>
          </h1>
          
          <p className="mt-6 md:mt-8 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in-up animation-delay-200">
            Architecture • MEP • Structural • Global Consultancy
          </p>

          <div className="mt-10 md:mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up animation-delay-300">
            <a href="#contact" className="btn-primary">
              Request Consultation
            </a>
            <a href="#projects" className="btn-secondary">
              View Projects
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <a href="#about" className="flex flex-col items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
          <span className="text-xs font-medium uppercase tracking-widest">Scroll</span>
          <ChevronDown size={20} />
        </a>
      </div>
    </section>
  );
};

export default Hero;

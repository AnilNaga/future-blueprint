import { useState, useEffect } from 'react';
import { Menu, X, Building2, Zap, Layers, FileSpreadsheet, Workflow, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useActiveSection } from '@/hooks/useActiveSection';
import { useScroll } from '@/context/ScrollContext';
import { Link, useLocation } from 'react-router-dom';

const navLinks = [
  { name: 'Home', href: '/', id: 'home', type: 'page' },
  { name: 'About', href: '/about', id: 'about', type: 'page' },
  // Services & Our Works are handled manually for dropdown support
  { name: 'Academy', href: '/academy', id: 'academy', type: 'page' },
  { name: 'Careers', href: '/careers', id: 'careers', type: 'page' },
];

const Navbar = () => {
  const location = useLocation();
  const { isNavbarVisible, scrollToTop } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [servicesMenuOpen, setServicesMenuOpen] = useState(false);
  const [worksMenuOpen, setWorksMenuOpen] = useState(false);
  const activeSection = useActiveSection(navLinks.map((link) => link.id));

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Body Scroll Lock
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isMobileMenuOpen]);

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{
        y: (isNavbarVisible || isMobileMenuOpen) ? 0 : -100,
        opacity: (isNavbarVisible || isMobileMenuOpen) ? 1 : 0
      }}
      transition={{
        duration: 0.3,
        ease: [0.25, 0.4, 0.25, 1],
        opacity: { duration: 0.2 }
      }}
      className="fixed top-0 inset-x-0 z-[100] transition-all duration-300 pointer-events-none"
    >
      <div className={`w-full transition-all duration-500 ${isScrolled ? 'py-2' : 'py-6'}`}>
        <nav
          className={`mx-auto w-[92%] max-w-7xl flex items-center justify-between rounded-2xl px-8 py-4 transition-all duration-500 pointer-events-auto ${isScrolled ? 'glass-nav shadow-xl border-white/20' : 'bg-transparent border-transparent'}`}
        >
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.4 }}
          >
            <Link
              to="/"
              onClick={scrollToTop}
              className="flex items-center gap-2"
            >
              <div className="text-xl font-bold text-slate-900 tracking-tight">
                Jithesh<span className="text-primary">.</span>
              </div>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center gap-8 text-text-secondary font-medium text-[15px]">
            {/* Static Links (Home, About) */}
            {navLinks.filter(link => link.name === 'Home' || link.name === 'About').map((link) => (
              <li key={link.name}>
                <Link
                  to={link.href}
                  className={`hover:text-primary transition-colors duration-200 ${location.pathname === link.href ? 'text-primary' : 'text-slate-600'}`}
                >
                  {link.name}
                </Link>
              </li>
            ))}

            {/* Services Dropdown */}
            <li
              onMouseEnter={() => setServicesMenuOpen(true)}
              onMouseLeave={() => setServicesMenuOpen(false)}
              className="relative cursor-pointer"
            >
              <Link
                to="/"
                className="hover:text-primary transition-colors duration-200"
              >
                Services
              </Link>

              <AnimatePresence>
                {servicesMenuOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 15, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 12, scale: 0.98 }}
                    transition={{ duration: 0.35, ease: [0.23, 1, 0.32, 1] }}
                    className="absolute left-1/2 top-11 -translate-x-1/2 w-[540px] rounded-[28px] p-6 glass-card-strong border border-white/20 shadow-[0_20px_50px_rgba(0,0,0,0.18)] backdrop-blur-[35px] overflow-hidden group/card"
                  >
                    {/* Premium Glowing Borders */}
                    <div className="absolute inset-0 border border-primary/10 rounded-[28px] pointer-events-none" />

                    {/* Background Decorative Bloom */}
                    <div className="absolute -top-20 -right-20 w-48 h-48 bg-primary/10 blur-[90px] rounded-full -z-10 group-hover/card:bg-primary/15 transition-all duration-700" />

                    <motion.div
                      className="grid grid-cols-2 gap-8 text-sm relative z-10"
                      variants={{
                        visible: { transition: { staggerChildren: 0.06 } }
                      }}
                      initial="hidden"
                      animate="visible"
                    >
                      {/* Core Disciplines */}
                      <div className="space-y-6">
                        <div>
                          <p className="font-black text-slate-900 uppercase tracking-[0.25em] text-[10px] opacity-30 mb-5 flex items-center gap-2">
                            <span className="w-6 h-[1px] bg-slate-200" /> Core Disciplines
                          </p>
                          <ul className="space-y-1.5">
                            {[
                              { name: 'Architecture BIM', to: '/architecture', icon: Building2, desc: 'Digital Documentation' },
                              { name: 'MEP BIM', to: '/mep-bim', icon: Zap, desc: 'Clash-Free Systems' },
                              { name: 'Structural BIM', to: '/structural', icon: Layers, desc: 'Precision Analysis' }
                            ].map((item) => (
                              <motion.li
                                key={item.name}
                                variants={{
                                  hidden: { opacity: 0, x: -12 },
                                  visible: { opacity: 1, x: 0 }
                                }}
                              >
                                <Link
                                  to={item.to}
                                  onClick={() => setServicesMenuOpen(false)}
                                  className="group flex items-start gap-3.5 px-3 py-3 rounded-2xl hover:bg-gradient-to-r hover:from-primary/5 hover:to-transparent transition-all duration-300 relative overflow-hidden"
                                >
                                  {/* Hover Indicator Bar */}
                                  <div className="absolute left-0 top-1/2 -translate-y-1/2 h-8 w-[2px] bg-primary scale-y-0 group-hover:scale-y-100 transition-transform duration-300" />

                                  <div className="p-2 rounded-xl bg-white/40 border border-white/40 group-hover:border-primary/20 group-hover:bg-white transition-all duration-300">
                                    <item.icon className="w-4.5 h-4.5 text-slate-600 group-hover:text-primary transition-colors duration-300" strokeWidth={1.5} />
                                  </div>

                                  <div className="flex flex-col">
                                    <span className="text-slate-900 font-bold text-sm tracking-tight mb-0 group-hover:text-primary transition-colors duration-300 flex items-center gap-1">
                                      {item.name}
                                      <ChevronRight className="w-3 h-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                                    </span>
                                    <span className="text-[10px] text-slate-400 font-bold tracking-tight uppercase tracking-wider opacity-60">
                                      {item.desc}
                                    </span>
                                  </div>
                                </Link>
                              </motion.li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      {/* Specialized */}
                      <div className="space-y-6">
                        <div>
                          <p className="font-black text-slate-900 uppercase tracking-[0.25em] text-[10px] opacity-30 mb-5 flex items-center gap-2">
                            <span className="w-6 h-[1px] bg-slate-200" /> Specialized
                          </p>
                          <ul className="space-y-1.5">
                            {[
                              { name: 'BOQs & Take-Offs', to: '/structural', icon: FileSpreadsheet, desc: 'Digital Quantification' },
                              { name: 'Revit Automation', to: '/architecture', icon: Workflow, desc: 'Advanced Workflows' }
                            ].map((item) => (
                              <motion.li
                                key={item.name}
                                variants={{
                                  hidden: { opacity: 0, x: -12 },
                                  visible: { opacity: 1, x: 0 }
                                }}
                              >
                                <Link
                                  to={item.to}
                                  onClick={() => setServicesMenuOpen(false)}
                                  className="group flex items-start gap-3.5 px-3 py-3 rounded-2xl hover:bg-gradient-to-r hover:from-primary/5 hover:to-transparent transition-all duration-300 relative overflow-hidden"
                                >
                                  {/* Hover Indicator Bar */}
                                  <div className="absolute left-0 top-1/2 -translate-y-1/2 h-8 w-[2px] bg-primary scale-y-0 group-hover:scale-y-100 transition-transform duration-300" />

                                  <div className="p-2 rounded-xl bg-white/40 border border-white/40 group-hover:border-primary/20 group-hover:bg-white transition-all duration-300">
                                    <item.icon className="w-4.5 h-4.5 text-slate-600 group-hover:text-primary transition-colors duration-300" strokeWidth={1.5} />
                                  </div>

                                  <div className="flex flex-col">
                                    <span className="text-slate-900 font-bold text-sm tracking-tight mb-0 group-hover:text-primary transition-colors duration-300 flex items-center gap-1">
                                      {item.name}
                                      <ChevronRight className="w-3 h-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                                    </span>
                                    <span className="text-[10px] text-slate-400 font-bold tracking-tight uppercase tracking-wider opacity-60">
                                      {item.desc}
                                    </span>
                                  </div>
                                </Link>
                              </motion.li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>
            </li>

            {/* Our Works Dropdown */}
            <li
              onMouseEnter={() => setWorksMenuOpen(true)}
              onMouseLeave={() => setWorksMenuOpen(false)}
              className="relative cursor-pointer"
            >
              <Link
                to="/"
                className="hover:text-primary transition-colors duration-200"
              >
                Our Works
              </Link>

              <AnimatePresence>
                {worksMenuOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 15, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 12, scale: 0.98 }}
                    transition={{ duration: 0.35, ease: [0.23, 1, 0.32, 1] }}
                    className="absolute left-1/2 top-10 -translate-x-1/2 w-[480px] rounded-2xl p-6 glass-card-strong border border-white/10 shadow-2xl backdrop-blur-xl"
                  >
                    <div className="space-y-6">
                      <div className="flex items-center justify-between border-b border-slate-100/5 pb-3">
                        <p className="font-bold text-slate-900 uppercase tracking-widest text-[9px] opacity-40">Portfolio Highlights</p>
                      </div>

                      <div className="grid grid-cols-2 gap-3">
                        <Link
                          to="/projects/architecture"
                          onClick={() => setWorksMenuOpen(false)}
                          className="group p-4 rounded-xl bg-indigo-50/20 hover:bg-white/10 transition-all border border-transparent hover:border-white/20 block"
                        >
                          <p className="font-bold text-slate-900 text-sm mb-0.5 group-hover:text-primary transition-colors">Architecture</p>
                          <p className="text-[11px] text-slate-500">Design showcase</p>
                        </Link>

                        <Link
                          to="/projects/mep"
                          onClick={() => setWorksMenuOpen(false)}
                          className="group p-4 rounded-xl bg-emerald-50/20 hover:bg-white/10 transition-all border border-transparent hover:border-white/20 block"
                        >
                          <p className="font-bold text-slate-900 text-sm mb-0.5 group-hover:text-emerald-600 transition-colors">MEP</p>
                          <p className="text-[11px] text-slate-500">Systems integration</p>
                        </Link>

                        <Link
                          to="/projects/structural"
                          onClick={() => setWorksMenuOpen(false)}
                          className="group p-4 rounded-xl bg-slate-100/20 hover:bg-white/10 transition-all border border-transparent hover:border-white/20 block"
                        >
                          <p className="font-bold text-slate-900 text-sm mb-0.5 group-hover:text-slate-700 transition-colors">Structural</p>
                          <p className="text-[11px] text-slate-500">Steel & RC works</p>
                        </Link>

                        <Link
                          to="/projects/case-studies"
                          onClick={() => setWorksMenuOpen(false)}
                          className="group p-4 rounded-xl bg-amber-50/20 hover:bg-white/10 transition-all border border-transparent hover:border-white/20 block"
                        >
                          <p className="font-bold text-slate-900 text-sm mb-0.5 group-hover:text-amber-600 transition-colors">Case Studies</p>
                          <p className="text-[11px] text-slate-500">Global success</p>
                        </Link>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </li>

            {/* Other Static Links (Careers, etc.) */}
            {navLinks.filter(link => link.name !== 'Home' && link.name !== 'About').map((link) => (
              <li key={link.name}>
                <Link
                  to={link.href}
                  className={`hover:text-primary transition-colors duration-200 ${location.pathname === link.href ? 'text-primary' : 'text-slate-600'}`}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.4 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="hidden md:block"
          >
            <Link
              to="/contact"
              className="btn-primary px-6 py-2.5 text-sm inline-block"
            >
              Request Consultation
            </Link>
          </motion.div>

          {/* Mobile Menu Button */}
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-slate-900"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </nav>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop Blur Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 bg-slate-900/10 backdrop-blur-xl z-[9999] md:hidden pointer-events-auto"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -20 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="absolute top-24 inset-x-6 z-[10000] md:hidden pointer-events-auto"
            >
              <div className="bg-white/80 backdrop-blur-2xl rounded-3xl border border-white/20 shadow-2xl overflow-hidden">
                <div className="px-8 py-10 space-y-8">
                  {/* Main Links (Home, About) */}
                  <motion.div
                    className="space-y-6"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 }}
                  >
                    {navLinks.filter(l => l.name === 'Home' || l.name === 'About').map((link) => (
                      <div key={link.name}>
                        <Link
                          to={link.href}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className={`block text-xl font-black tracking-tight transition-colors ${location.pathname === link.href ? 'text-primary' : 'text-slate-900'}`}
                        >
                          {link.name}
                        </Link>
                      </div>
                    ))}
                  </motion.div>

                  {/* Services Section */}
                  <motion.div
                    className="space-y-4"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.15 }}
                  >
                    <p className="block text-[10px] font-black uppercase tracking-[0.25em] text-slate-400 mb-2">Capabilities</p>
                    <div className="grid grid-cols-1 gap-4">
                      <Link to="/architecture" onClick={() => setIsMobileMenuOpen(false)} className="text-base font-bold text-slate-700 hover:text-primary transition-colors flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-slate-200" /> Architecture BIM
                      </Link>
                      <Link to="/mep-bim" onClick={() => setIsMobileMenuOpen(false)} className="text-base font-bold text-slate-700 hover:text-primary transition-colors flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-slate-200" /> MEP BIM
                      </Link>
                      <Link to="/structural" onClick={() => setIsMobileMenuOpen(false)} className="text-base font-bold text-slate-700 hover:text-primary transition-colors flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-slate-200" /> Structural BIM
                      </Link>
                    </div>
                  </motion.div>

                  {/* Our Works Section */}
                  <motion.div
                    className="space-y-4"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    <p className="block text-[10px] font-black uppercase tracking-[0.25em] text-slate-400 mb-2">Our Works</p>
                    <div className="grid grid-cols-1 gap-4">
                      <Link to="/projects/architecture" onClick={() => setIsMobileMenuOpen(false)} className="text-base font-bold text-slate-700 hover:text-primary transition-colors flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-slate-200" /> Architecture
                      </Link>
                      <Link to="/projects/mep" onClick={() => setIsMobileMenuOpen(false)} className="text-base font-bold text-slate-700 hover:text-primary transition-colors flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-slate-200" /> MEP
                      </Link>
                      <Link to="/projects/structural" onClick={() => setIsMobileMenuOpen(false)} className="text-base font-bold text-slate-700 hover:text-primary transition-colors flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-slate-200" /> Structural
                      </Link>
                    </div>
                  </motion.div>

                  {/* Other Links (Academy, Careers) */}
                  <motion.div
                    className="space-y-6 pt-6 border-t border-slate-100/50"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.25 }}
                  >
                    {navLinks.filter(l => l.name !== 'Home' && l.name !== 'About').map((link) => (
                      <div key={link.name}>
                        <Link
                          to={link.href}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className={`block text-xl font-black tracking-tight transition-colors ${location.pathname === link.href ? 'text-primary' : 'text-slate-900'}`}
                        >
                          {link.name}
                        </Link>
                      </div>
                    ))}
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    <Link
                      to="/contact"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block w-full text-center px-6 py-5 rounded-2xl bg-[#8846CF] text-white text-sm font-black shadow-xl shadow-[#8846CF]/20"
                    >
                      Request Consultation
                    </Link>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;

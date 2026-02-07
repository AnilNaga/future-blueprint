import { Linkedin, Twitter, Instagram, Youtube } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useScrollAnimation, fadeInUpVariants, staggerContainerVariants } from '@/hooks/useScrollAnimation';
import logo from '../assets/logo_cropped.jpg';



const footerLinks = {
  services: [
    { name: 'Architecture BIM', href: '/architecture' },
    { name: 'MEP BIM', href: '/mep-bim' },
    { name: 'Structural BIM', href: '/structural' },
    { name: 'BIM Consultancy', href: '/#consultancy' },
  ],
  company: [
    { name: 'About Us', href: '/about' },
    { name: 'Projects', href: '/projects/architecture' },
    { name: 'Careers', href: '/careers' },
    { name: 'Contact', href: '/contact' },
  ],
  training: [
    { name: 'Revit Architecture', href: '/academy' },
    { name: 'Revit MEP', href: '/academy' },
    { name: 'Revit Structure', href: '/academy' },
    { name: 'Internships', href: '/academy' },
  ],
};

const socialLinks = [
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Youtube, href: '#', label: 'YouTube' },
];

const Footer = () => {
  const { ref, isInView } = useScrollAnimation({ once: true });

  return (
    <footer className="bg-[#914694] text-white py-24">

      <motion.div
        ref={ref}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        variants={staggerContainerVariants}
        className="container mx-auto px-6"
      >
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-16 mb-20">
          {/* Brand Area */}
          <motion.div variants={fadeInUpVariants} className="lg:col-span-2 mb-12 lg:mb-0">
            <div className="flex items-center gap-4 mb-8">
              <motion.div
                className="w-16 h-16 rounded-2xl bg-white flex items-center justify-center shadow-lg shadow-black/10 flex-shrink-0 overflow-hidden"
                whileHover={{ scale: 1.1, rotate: 5 }}
              >
                <img
                  src={logo}
                  alt="JES BIM CONSULTANTS PVT LTD"
                  className="w-full h-full object-contain p-1"
                />
              </motion.div>
              <div className="flex flex-col">
                <span className="text-lg md:text-xl font-black text-white tracking-tight">JES BIM CONSULTANTS PVT LTD</span>
                <p className="text-[10px] uppercase font-bold tracking-[0.3em] text-white/60">Services & Training Excellence</p>
              </div>
            </div>
            <p className="text-white/80 leading-relaxed mb-4 max-w-sm text-base md:text-lg font-medium">
              A premier Global BIM & Engineering Consultancy delivering data-rich
              digital twin solutions for the world's most complex projects.
            </p>
            <div className="space-y-2 mb-8 text-sm text-white/60 font-medium">
              <p className="flex items-center gap-2 tracking-wide">
                <span className="opacity-70">Email:</span>
                <a href="mailto:jagadish@jiteshenggsolutions.com" className="text-white hover:text-white/80 transition-colors">jagadish@jiteshenggsolutions.com</a>
              </p>
              <p className="flex items-center gap-2 tracking-wide">
                <span className="opacity-70">Reg.No:</span>
                <span className="text-white/90">SEA/HYD/ALO/03/0137062/2019</span>
              </p>
              <p className="flex items-center gap-2 tracking-wide">
                <span className="opacity-70">GSTIN:</span>
                <span className="text-white/90">36BIPPM5309G1Z1</span>
              </p>
              <p className="flex items-center gap-2 tracking-wide">
                <span className="opacity-70">Phone:</span>
                <a href="tel:+918297744344" className="text-white hover:text-white/80 transition-colors">+91 82977 44344</a>
              </p>
              <div className="flex items-start gap-2 tracking-wide pt-2 border-t border-white/10">
                <span className="opacity-70 flex-shrink-0">Address:</span>
                <a
                  href="https://maps.app.goo.gl/qgeyuJBaJV11BZ5i6"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/90 hover:text-white transition-colors leading-snug"
                >
                  104, 1st floor, Down Town Mall, Lakdikapul, beside Lotus Children's Hospital, Hyderabad - 500004
                </a>
              </div>
            </div>
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href="#"
                  aria-label={social.label}
                  className="w-12 h-12 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center hover:bg-white hover:text-[#914694] text-white transition-all duration-300"

                  whileHover={{ y: -5, scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <social.icon size={20} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Links Columns */}

          {/* Links Columns - 2 Column Layout */}
          <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 gap-12">
            {/* Column 1: Services */}
            <div className="flex flex-col">
              <h4 className="text-[12px] font-bold text-white uppercase tracking-[0.3em] mb-8">Services</h4>
              <ul className="grid grid-cols-1 gap-4">
                {footerLinks.services.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="text-white/70 hover:text-white transition-colors font-medium text-[15px] flex items-center gap-2"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-white/20" />
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 2: Quick Links (Company + Training) */}
            <div className="flex flex-col">
              <h4 className="text-[12px] font-bold text-white uppercase tracking-[0.3em] mb-8">Quick Links</h4>
              <ul className="grid grid-cols-2 gap-x-8 gap-y-4">
                {[...footerLinks.company, ...footerLinks.training].map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="text-white/70 hover:text-white transition-colors font-medium text-[15px]"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <motion.div
          variants={fadeInUpVariants}
          className="pt-10 border-t border-white/20 flex flex-col md:flex-row items-center justify-between gap-8"
        >
          <p className="text-sm font-medium text-white/60">
            © {new Date().getFullYear()} JES BIM CONSULTANTS PVT LTD. <span className="mx-2 text-white/40">|</span> Digital Engineering & Training.
          </p>
          <div className="flex items-center gap-10">
            <motion.a
              href="#"
              className="text-xs font-bold uppercase tracking-widest text-white/50 hover:text-white transition-colors"
              whileHover={{ scale: 1.05 }}
            >
              Privacy
            </motion.a>
            <motion.a
              href="#"
              className="text-xs font-bold uppercase tracking-widest text-white/50 hover:text-white transition-colors"
              whileHover={{ scale: 1.05 }}
            >
              Terms
            </motion.a>
            <motion.a
              href="#"
              className="text-xs font-bold uppercase tracking-widest text-white/50 hover:text-white transition-colors"
              whileHover={{ scale: 1.05 }}
            >
              Support
            </motion.a>
          </div>
        </motion.div>
      </motion.div>
    </footer>
  );
};

export default Footer;

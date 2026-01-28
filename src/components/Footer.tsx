import { Linkedin, Twitter, Instagram, Youtube } from 'lucide-react';

const footerLinks = {
  services: [
    { name: 'Architecture BIM', href: '#services' },
    { name: 'MEP BIM', href: '#services' },
    { name: 'Structural BIM', href: '#services' },
    { name: 'BIM Consultancy', href: '#services' },
  ],
  company: [
    { name: 'About Us', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Careers', href: '#contact' },
    { name: 'Contact', href: '#contact' },
  ],
  training: [
    { name: 'Revit Architecture', href: '#training' },
    { name: 'Revit MEP', href: '#training' },
    { name: 'Revit Structure', href: '#training' },
    { name: 'Internships', href: '#training' },
  ],
};

const socialLinks = [
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Youtube, href: '#', label: 'YouTube' },
];

const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">JT</span>
              </div>
              <div>
                <span className="font-semibold">Jithesh Technologies</span>
                <p className="text-xs text-background/60">Private Limited</p>
              </div>
            </div>
            <p className="text-background/70 leading-relaxed mb-6 max-w-sm">
              Global BIM & Engineering Consultancy delivering intelligent Revit-based 
              solutions for architecture, MEP, and structural projects worldwide.
            </p>
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-background/70 hover:text-background transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-background/70 hover:text-background transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Training */}
          <div>
            <h4 className="font-semibold mb-4">Training</h4>
            <ul className="space-y-3">
              {footerLinks.training.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-background/70 hover:text-background transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-background/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-background/60">
            © {new Date().getFullYear()} Jithesh Technologies Pvt. Ltd. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-sm text-background/60 hover:text-background transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-sm text-background/60 hover:text-background transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

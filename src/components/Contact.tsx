import { useState } from 'react';
import { MapPin, Phone, Mail, Send, Loader2 } from 'lucide-react';
import { motion } from 'framer-motion';
import { toast } from 'sonner';
import { useScrollAnimation, fadeInUpVariants, staggerContainerVariants, slideInLeftVariants, slideInRightVariants } from '@/hooks/useScrollAnimation';

const contactInfo = [
  {
    icon: MapPin,
    label: 'Office',
    value: 'India & International',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+91 XXX XXX XXXX',
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'info@jitheshtech.com',
  },
];

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });

  const { ref: headerRef, isInView: headerInView } = useScrollAnimation();
  const { ref: contentRef, isInView: contentInView } = useScrollAnimation();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    toast.success('Thank you! We\'ll get back to you soon.');
    setFormData({ name: '', email: '', company: '', message: '' });
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="section">
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
            className="text-sm font-medium text-primary uppercase tracking-widest mb-4"
          >
            Contact Us
          </motion.p>
          <motion.h2 
            variants={fadeInUpVariants}
            className="text-foreground mb-6"
          >
            Let's Build the Future
            <br />
            <span className="gradient-text">Together</span>
          </motion.h2>
          <motion.p 
            variants={fadeInUpVariants}
            className="text-lg text-muted-foreground"
          >
            Ready to transform your projects with BIM? Get in touch with our team.
          </motion.p>
        </motion.div>

        <motion.div 
          ref={contentRef}
          initial="hidden"
          animate={contentInView ? 'visible' : 'hidden'}
          variants={staggerContainerVariants}
          className="grid lg:grid-cols-5 gap-12 lg:gap-16 max-w-6xl mx-auto"
        >
          {/* Contact Info */}
          <motion.div 
            variants={slideInLeftVariants}
            className="lg:col-span-2 space-y-8"
          >
            {contactInfo.map((item, index) => (
              <motion.div 
                key={item.label} 
                className="flex items-start gap-4"
                initial={{ opacity: 0, x: -30 }}
                animate={contentInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.1 * index, duration: 0.5 }}
              >
                <motion.div 
                  className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  <item.icon className="w-5 h-5 text-primary" />
                </motion.div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">{item.label}</p>
                  <p className="font-medium text-foreground">{item.value}</p>
                </div>
              </motion.div>
            ))}

            {/* Working Hours */}
            <motion.div 
              className="pt-6 border-t border-border"
              initial={{ opacity: 0 }}
              animate={contentInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              <h4 className="font-semibold text-foreground mb-3">Working Hours</h4>
              <p className="text-muted-foreground text-sm">
                Monday - Friday: 9:00 AM - 6:00 PM
                <br />
                Saturday: 9:00 AM - 1:00 PM
              </p>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            variants={slideInRightVariants}
            className="lg:col-span-3"
          >
            <motion.form 
              onSubmit={handleSubmit} 
              className="glass-card rounded-3xl p-8 md:p-10"
              whileHover={{ boxShadow: '0 25px 60px hsl(222 47% 11% / 0.1)' }}
              transition={{ duration: 0.3 }}
            >
              <div className="grid sm:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Full Name
                  </label>
                  <motion.input
                    whileFocus={{ scale: 1.01 }}
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl bg-muted/50 border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email Address
                  </label>
                  <motion.input
                    whileFocus={{ scale: 1.01 }}
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl bg-muted/50 border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                    placeholder="john@company.com"
                  />
                </div>
              </div>

              <div className="mb-6">
                <label htmlFor="company" className="block text-sm font-medium text-foreground mb-2">
                  Company / Organization
                </label>
                <motion.input
                  whileFocus={{ scale: 1.01 }}
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl bg-muted/50 border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                  placeholder="Your company name"
                />
              </div>

              <div className="mb-8">
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Message
                </label>
                <motion.textarea
                  whileFocus={{ scale: 1.01 }}
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl bg-muted/50 border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all resize-none"
                  placeholder="Tell us about your project..."
                />
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                className="w-full btn-primary flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                whileHover={{ y: -4, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <Send size={18} />
                  </>
                )}
              </motion.button>
            </motion.form>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;

import { useState } from 'react';
import { MapPin, Phone, Mail, Send, Loader2, MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import { toast } from 'sonner';
import { useScrollAnimation, fadeInUpVariants, staggerContainerVariants } from '@/hooks/useScrollAnimation';

const contactInfo = [
  {
    icon: MapPin,
    label: 'Visit us',
    value: '104, 1st floor, Down Town Mall, Lakdikapul, Hyderabad.',
  },
  {
    icon: MessageCircle,
    label: 'WhatsApp',
    value: 'Chat with us on WhatsApp',
  },
  {
    icon: Phone,
    label: 'Call us',
    value: '+91 82977 44344',
  },
  {
    icon: Mail,
    label: 'Email us',
    value: 'jagadish@jiteshenggsolutions.com',
  },
];

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const { ref: headerRef, isInView: headerInView } = useScrollAnimation();
  const { ref: contentRef, isInView: contentInView } = useScrollAnimation();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    toast.success('Thank you! We\'ll get back to you soon.');
    setFormData({ name: '', email: '', phone: '', message: '' });
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-24 bg-white border-t border-gray-100">
      <div className="container mx-auto px-6 max-w-7xl">
        {/* Header */}
        <motion.div
          ref={headerRef}
          initial="hidden"
          animate={headerInView ? 'visible' : 'hidden'}
          variants={staggerContainerVariants}
          className="text-center mb-20"
        >
          <motion.h2
            variants={fadeInUpVariants}
            className="text-3xl md:text-4xl font-bold mb-4 tracking-tight"
            style={{ color: 'rgb(145, 70, 148)' }}

          >
            Get in touch
          </motion.h2>
          <motion.p
            variants={fadeInUpVariants}
            className="text-lg text-slate-600 font-normal max-w-2xl mx-auto"
          >
            Ready to help your company scale faster? Let’s chat about how we can help.
          </motion.p>
        </motion.div>

        <motion.div
          ref={contentRef}
          initial="hidden"
          animate={contentInView ? 'visible' : 'hidden'}
          variants={staggerContainerVariants}
          className="grid lg:grid-cols-2 gap-16 items-start relative z-[70]"
        >
          {/* Contact Info Cards */}
          <div className="space-y-6">
            <div className="grid gap-6">
              {contactInfo.map((item) => {
                const href = item.label === 'Visit us'
                  ? 'https://maps.app.goo.gl/qgeyuJBaJV11BZ5i6'
                  : item.label === 'Email us'
                    ? `mailto:jagadish@jiteshenggsolutions.com`
                    : item.label === 'WhatsApp'
                      ? 'https://wa.me/918297744344?text=Hello!%20I\'m%20interested%20in%20your%20services.'
                      : item.label === 'Call us'
                        ? `tel:${item.value.replace(/\s+/g, '')}`
                        : undefined;

                const isExternal = href?.startsWith('http');

                const CardContent = (
                  <>
                    <div className="w-10 h-10 rounded-lg bg-indigo-50/50 flex items-center justify-center flex-shrink-0 border border-indigo-100/50 group-hover:bg-indigo-100 transition-colors">
                      <item.icon className="w-5 h-5" style={{ color: 'rgb(145, 70, 148)' }} />

                    </div>
                    <div>
                      <p className="text-lg font-bold text-slate-900 mb-1 group-hover:text-indigo-600 transition-colors">{item.label}</p>
                      <p className="text-base text-slate-600 font-normal">{item.value}</p>
                    </div>
                  </>
                );

                if (href) {
                  return (
                    <a
                      key={item.label}
                      href={href}
                      target={isExternal ? "_blank" : undefined}
                      rel={isExternal ? "noopener noreferrer" : undefined}
                      className="flex items-start gap-4 p-6 bg-white border border-gray-200 rounded-xl shadow-sm hover:border-indigo-400 hover:shadow-md transition-all group cursor-pointer relative z-10 block pointer-events-auto"
                      style={{ textDecoration: 'none' }}
                    >
                      {CardContent}
                    </a>
                  );
                }

                return (
                  <div key={item.label} className="flex items-start gap-4 p-6 bg-white border border-gray-200 rounded-xl shadow-sm">
                    {CardContent}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Compact Contact Form */}
          <form
            onSubmit={handleSubmit}
            className="bg-gray-50/50 rounded-2xl p-8 border border-gray-200 shadow-sm"
          >
            <div className="grid sm:grid-cols-2 gap-6 mb-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-semibold text-slate-700">Full Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your name"
                  className="w-full h-11 px-4 rounded-lg bg-white border border-gray-300 text-slate-900 focus:outline-none focus:ring-4 focus:ring-indigo-100/50 focus:border-indigo-400 transition-all font-normal text-sm shadow-sm"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-semibold text-slate-700">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="you@company.com"
                  className="w-full h-11 px-4 rounded-lg bg-white border border-gray-300 text-slate-900 focus:outline-none focus:ring-4 focus:ring-indigo-100/50 focus:border-indigo-400 transition-all font-normal text-sm shadow-sm"
                />
              </div>
            </div>

            <div className="space-y-2 mb-6">
              <label htmlFor="phone" className="text-sm font-semibold text-slate-700">Phone number</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+91 (555) 000-0000"
                className="w-full h-11 px-4 rounded-lg bg-white border border-gray-300 text-slate-900 focus:outline-none focus:ring-4 focus:ring-indigo-100/50 focus:border-indigo-400 transition-all font-normal text-sm shadow-sm"
              />
            </div>

            <div className="space-y-2 mb-8">
              <label htmlFor="message" className="text-sm font-semibold text-slate-700">How can we help?</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={4}
                placeholder="Briefly describe your requirements..."
                className="w-full px-4 py-3 rounded-lg bg-white border border-gray-300 text-slate-900 focus:outline-none focus:ring-4 focus:ring-indigo-100/50 focus:border-indigo-400 transition-all resize-none font-normal text-sm leading-relaxed shadow-sm"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full h-12 text-white rounded-lg font-bold transition-all flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed group text-sm shadow-sm active:scale-[0.98]"
              style={{ backgroundColor: 'rgb(145, 70, 148)' }}

            >
              {isSubmitting ? (
                <Loader2 className="w-5 h-5 animate-spin" />
              ) : (
                <>
                  Send Inquiry
                  <Send size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </>
              )}
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;

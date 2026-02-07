import { useState } from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, MapPin, Phone, Send, Loader2, HelpCircle, ChevronDown } from 'lucide-react';
import { toast } from 'sonner';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const contactOptions = [
    {
        icon: MessageCircle,
        title: 'Chat to sales',
        description: 'Speak to our friendly team.',
        buttonText: 'Chat to sales',
        href: 'mailto:jagadish@jiteshenggsolutions.com',
        iconBg: 'bg-indigo-50/30',
        color: 'rgb(145, 70, 148)',

    },
    {
        icon: HelpCircle,
        title: 'Chat to support',
        description: "We're here to help.",
        buttonText: 'Chat to support',
        href: 'mailto:jagadish@jiteshenggsolutions.com',
        iconBg: 'bg-indigo-50/30',
        color: 'rgb(145, 70, 148)',

    },
    {
        icon: MapPin,
        title: 'Visit us',
        description: '104, 1st floor, Down Town Mall, Lakdikapul, beside Lotus Children\'s Hospital, Hyderabad.',
        buttonText: 'Get directions',
        href: 'https://maps.app.goo.gl/qgeyuJBaJV11BZ5i6',
        iconBg: 'bg-indigo-50/30',
        color: 'rgb(145, 70, 148)',

    },
    {
        icon: MessageCircle,
        title: 'WhatsApp',
        description: 'Chat with us on WhatsApp.',
        buttonText: 'Message us',
        href: 'https://wa.me/918297744344?text=Hello!%20I\'m%20interested%20in%20your%20services.',
        iconBg: 'bg-emerald-50/30',
        color: 'rgb(16, 185, 129)',
    },
    {
        icon: Phone,
        title: 'Call us',
        description: '+91 82977 44344',
        buttonText: 'Call our team',
        href: 'tel:+918297744344',
        iconBg: 'bg-indigo-50/30',
        color: 'rgb(145, 70, 148)',

    },
];

const ContactPage = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: '',
    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        await new Promise((resolve) => setTimeout(resolve, 1500));
        toast.success('Message sent! We\'ll get back to you within 24 hours.');
        setFormData({ firstName: '', lastName: '', email: '', phone: '', message: '' });
        setIsSubmitting(false);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <div className="min-h-screen bg-white">
            <Navbar />

            {/* 🎥 CONTACT LANDING HERO (Premium Refined) */}
            <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-20">
                {/* Background Image with Dark Brand Tinted Overlay */}
                <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
                    <div
                        className="absolute inset-0 bg-cover bg-center transition-transform duration-[20s] hover:scale-110"
                        style={{
                            backgroundImage: 'url("https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2070&auto=format&fit=crop")',
                        }}
                    ></div>
                    {/* Sophisticated Dynamic Tinted Overlay (Cycles through requested colors) */}
                    <motion.div
                        animate={{
                            backgroundColor: [
                                'rgb(163, 157, 70)', // Gold/Olive
                                'rgb(45, 60, 74)',   // Dark Blue/Grey
                                'rgb(171, 124, 63)', // Bronze
                                'rgb(29, 85, 128)',  // Deep Blue
                                'rgb(163, 157, 70)'  // Loop back
                            ]
                        }}
                        transition={{
                            duration: 12, // 3 seconds per color (4 colors * 3s)
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                        className="absolute inset-0 mix-blend-multiply opacity-80"
                    />

                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/90"></div>

                    {/* Subtle Engineering Elements (Glows & Grid) */}
                    <motion.div
                        animate={{
                            opacity: [0.1, 0.2, 0.1],
                            scale: [1, 1.2, 1],
                            backgroundColor: [
                                'rgba(163, 157, 70, 0.2)',
                                'rgba(29, 85, 128, 0.2)',
                                'rgba(163, 157, 70, 0.2)'
                            ]
                        }}
                        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full rounded-full blur-[120px]"
                    />

                    <div
                        className="absolute inset-0 opacity-[0.05]"
                        style={{
                            backgroundImage: 'linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)',
                            backgroundSize: '100px 100px'
                        }}
                    />
                </div>

                <div className="relative z-10 container mx-auto px-6 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                    >
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="inline-block px-5 py-2 mb-8 rounded-full bg-white/10 border border-white/20 backdrop-blur-md shadow-2xl"
                        >
                            <span className="text-[11px] md:text-xs font-bold uppercase tracking-[0.4em] text-white">Expert Consultancy</span>
                        </motion.div>

                        <h1 className="text-5xl md:text-8xl font-black tracking-tight mb-8 leading-[1.05] text-white">
                            Let's Build Your <br />
                            <span className="text-[#914694] drop-shadow-[0_0_20px_rgba(145,70,148,0.4)]">Digital Future</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-white/80 font-medium mb-16 max-w-4xl mx-auto leading-relaxed drop-shadow-sm">
                            Whether you're starting a new project or transforming an entire enterprise,<br className="hidden md:block" />
                            our BIM experts are ready to lead the way.
                        </p>

                        <div className="flex flex-wrap justify-center gap-12 md:gap-24 mb-20">
                            {[
                                { label: "Fast Response", desc: "Within 24 Hours" },
                                { label: "Expert Guidance", desc: "Senior BIM Leads" },
                                { label: "Global Standards", desc: "ISO Compliant" }
                            ].map((item, i) => (
                                <div key={i} className="flex flex-col items-center group cursor-default">
                                    <span className="text-white font-black text-2xl mb-1 transition-colors group-hover:text-[#914694]">{item.label}</span>
                                    <span className="text-white/50 text-xs font-bold uppercase tracking-widest">{item.desc}</span>
                                    <div className="w-12 h-0.5 bg-[#914694] mt-4 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center" />
                                </div>
                            ))}
                        </div>

                        {/* Scroll Guide (White variant) */}
                        <motion.div
                            animate={{ y: [0, 10, 0] }}
                            transition={{ duration: 2, repeat: Infinity }}
                            className="flex flex-col items-center gap-3 text-white/40"
                        >
                            <span className="text-[10px] font-bold uppercase tracking-[0.2em]">Scroll to start</span>
                            <ChevronDown size={24} />
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            <main className="pb-24">
                <div className="max-w-[1280px] mx-auto px-6 md:px-8">
                    {/* Contact Options Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-32 relative z-[70]">
                        {contactOptions.map((option) => {
                            const isExternal = option.href.startsWith('http');
                            return (
                                <a
                                    key={option.title}
                                    href={option.href}
                                    target={isExternal ? "_blank" : undefined}
                                    rel={isExternal ? "noopener noreferrer" : undefined}
                                    className="bg-white border border-gray-200 rounded-[12px] p-6 shadow-sm flex flex-col items-start gap-4 hover:border-[#914694]/40 hover:shadow-md transition-all group cursor-pointer relative z-10 block pointer-events-auto"
                                    style={{ textDecoration: 'none' }}
                                >
                                    <div className={`w-12 h-12 ${option.iconBg} rounded-lg flex items-center justify-center border border-[#914694]/10 transition-colors group-hover:bg-[#914694]/5`}>
                                        <option.icon className="w-6 h-6" style={{ color: option.color }} />
                                    </div>
                                    <div className="w-full">
                                        <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-[#914694] transition-colors">{option.title}</h3>
                                        <p className="text-base text-slate-600 mb-6 font-normal leading-relaxed">
                                            {option.description}
                                        </p>
                                    </div>
                                    <div
                                        className="mt-auto inline-flex items-center px-4 py-2 text-base font-semibold text-slate-900 border border-gray-300 rounded-lg group-hover:bg-[#914694]/5 group-hover:border-[#914694]/30 transition-colors"
                                    >
                                        {option.buttonText}
                                    </div>
                                </a>
                            );
                        })}
                    </div>

                    {/* Message Us Section */}
                    <div className="max-w-[800px] mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl font-bold text-slate-900 mb-4">Message us</h2>
                            <p className="text-lg text-slate-600 font-normal">
                                We'll get back to you within 24 hours.
                            </p>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label htmlFor="firstName" className="text-sm font-semibold text-slate-700">First name</label>
                                    <input
                                        required
                                        type="text"
                                        id="firstName"
                                        name="firstName"
                                        value={formData.firstName}
                                        onChange={handleChange}
                                        placeholder="First name"
                                        className="w-full h-12 px-4 rounded-lg bg-white border border-gray-300 text-slate-900 focus:outline-none focus:ring-4 focus:ring-[#914694]/5 focus:border-[#914694]/30 transition-all placeholder:text-gray-400 font-normal shadow-sm"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="lastName" className="text-sm font-semibold text-slate-700">Last name</label>
                                    <input
                                        required
                                        type="text"
                                        id="lastName"
                                        name="lastName"
                                        value={formData.lastName}
                                        onChange={handleChange}
                                        placeholder="Last name"
                                        className="w-full h-12 px-4 rounded-lg bg-white border border-gray-300 text-slate-900 focus:outline-none focus:ring-4 focus:ring-[#914694]/5 focus:border-[#914694]/30 transition-all placeholder:text-gray-400 font-normal shadow-sm"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="email" className="text-sm font-semibold text-slate-700">Email</label>
                                <input
                                    required
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="you@company.com"
                                    className="w-full h-12 px-4 rounded-lg bg-white border border-gray-300 text-slate-900 focus:outline-none focus:ring-4 focus:ring-[#914694]/5 focus:border-[#914694]/30 transition-all placeholder:text-gray-400 font-normal shadow-sm"
                                />
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="phone" className="text-sm font-semibold text-slate-700">Phone number</label>
                                <div className="relative flex shadow-sm">
                                    <div className="flex items-center gap-1.5 px-3 py-2 border border-r-0 border-gray-300 rounded-l-lg bg-white text-slate-700 font-medium cursor-pointer hover:bg-gray-50">
                                        <span className="text-sm">IN</span>
                                        <ChevronDown size={14} className="text-slate-400" />
                                    </div>
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        placeholder="+91 (555) 000-0000"
                                        className="flex-1 h-12 px-4 rounded-r-lg bg-white border border-gray-300 text-slate-900 focus:outline-none focus:ring-4 focus:ring-[#914694]/5 focus:border-[#914694]/30 transition-all placeholder:text-gray-400 font-normal"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="message" className="text-sm font-semibold text-slate-700">Message</label>
                                <textarea
                                    required
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    placeholder="Leave us a message..."
                                    rows={5}
                                    className="w-full px-4 py-3 rounded-lg bg-white border border-gray-300 text-slate-900 focus:outline-none focus:ring-4 focus:ring-[#914694]/5 focus:border-[#914694]/30 transition-all resize-none placeholder:text-gray-400 font-normal leading-relaxed shadow-sm"
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full h-14 text-white rounded-lg font-bold text-lg transition-all flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed group shadow-sm active:scale-[0.99] mt-8"
                                style={{ backgroundColor: 'rgb(145, 70, 148)' }}

                            >
                                {isSubmitting ? (
                                    <Loader2 className="w-6 h-6 animate-spin" />
                                ) : (
                                    <>
                                        Send message
                                        <Send size={20} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                                    </>
                                )}
                            </button>
                        </form>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default ContactPage;

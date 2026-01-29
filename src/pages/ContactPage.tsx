import { useState } from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, MapPin, Phone, Send, Loader2, HelpCircle, ChevronDown } from 'lucide-react';
import { toast } from 'sonner';

const contactOptions = [
    {
        icon: MessageCircle,
        title: 'Chat to sales',
        description: 'Speak to our friendly team.',
        buttonText: 'Chat to sales',
        href: 'mailto:chat@jitheshtech.com',
        iconBg: 'bg-indigo-50/30',
        color: 'rgb(136, 70, 207)',
    },
    {
        icon: HelpCircle,
        title: 'Chat to support',
        description: "We're here to help.",
        buttonText: 'Chat to support',
        href: 'mailto:support@jitheshtech.com',
        iconBg: 'bg-indigo-50/30',
        color: 'rgb(136, 70, 207)',
    },
    {
        icon: MapPin,
        title: 'Visit us',
        description: 'India & International office HQ.',
        buttonText: 'Get directions',
        href: 'https://maps.google.com',
        iconBg: 'bg-indigo-50/30',
        color: 'rgb(136, 70, 207)',
    },
    {
        icon: Phone,
        title: 'Call us',
        description: 'Mon-Fri from 8am to 5pm.',
        buttonText: 'Call our team',
        href: 'tel:+91XXXXXXXXXX',
        iconBg: 'bg-indigo-50/30',
        color: 'rgb(136, 70, 207)',
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
        <div className="min-h-screen bg-white pt-32 pb-24">
            <div className="max-w-[1280px] mx-auto px-6 md:px-8">
                {/* Header Section */}
                <div className="text-center mb-16 md:mb-24">
                    <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6" style={{ color: 'rgb(136, 70, 207)' }}>
                        Get in touch
                    </h1>
                    <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto font-normal">
                        Ready to help your company scale faster? Let’s chat about how we can help.
                    </p>
                </div>

                {/* Contact Options Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-32">
                    {contactOptions.map((option) => (
                        <div
                            key={option.title}
                            className="bg-white border border-gray-200 rounded-[12px] p-6 shadow-sm flex flex-col items-start gap-4"
                        >
                            <div className={`w-12 h-12 ${option.iconBg} rounded-lg flex items-center justify-center border border-indigo-100/50`}>
                                <option.icon className="w-6 h-6" style={{ color: option.color }} />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-slate-900 mb-2">{option.title}</h3>
                                <p className="text-base text-slate-600 mb-6 font-normal leading-relaxed">
                                    {option.description}
                                </p>
                            </div>
                            <a
                                href={option.href}
                                className="mt-auto inline-flex items-center px-4 py-2 text-base font-semibold text-slate-900 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                            >
                                {option.buttonText}
                            </a>
                        </div>
                    ))}
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
                                    className="w-full h-12 px-4 rounded-lg bg-white border border-gray-300 text-slate-900 focus:outline-none focus:ring-4 focus:ring-indigo-50 focus:border-indigo-300 transition-all placeholder:text-gray-400 font-normal shadow-sm"
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
                                    className="w-full h-12 px-4 rounded-lg bg-white border border-gray-300 text-slate-900 focus:outline-none focus:ring-4 focus:ring-indigo-50 focus:border-indigo-300 transition-all placeholder:text-gray-400 font-normal shadow-sm"
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
                                className="w-full h-12 px-4 rounded-lg bg-white border border-gray-300 text-slate-900 focus:outline-none focus:ring-4 focus:ring-indigo-50 focus:border-indigo-300 transition-all placeholder:text-gray-400 font-normal shadow-sm"
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
                                    className="flex-1 h-12 px-4 rounded-r-lg bg-white border border-gray-300 text-slate-900 focus:outline-none focus:ring-4 focus:ring-indigo-50 focus:border-indigo-300 transition-all placeholder:text-gray-400 font-normal"
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
                                className="w-full px-4 py-3 rounded-lg bg-white border border-gray-300 text-slate-900 focus:outline-none focus:ring-4 focus:ring-indigo-50 focus:border-indigo-300 transition-all resize-none placeholder:text-gray-400 font-normal leading-relaxed shadow-sm"
                            />
                        </div>

                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full h-14 text-white rounded-lg font-bold text-lg transition-all flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed group shadow-sm active:scale-[0.99] mt-8"
                            style={{ backgroundColor: 'rgb(136, 70, 207)' }}
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
        </div>
    );
};

export default ContactPage;

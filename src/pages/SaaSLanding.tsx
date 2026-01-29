import { motion } from 'framer-motion';
import { Cpu, Globe, Lock, Zap, ArrowRight, BarChart3, Layers, Layout } from 'lucide-react';
import { Link } from 'react-router-dom';

const stats = [
    { label: 'Accuracy', value: '99.9%', icon: Cpu },
    { label: 'Processing', value: '1.2ms', icon: Zap },
    { label: 'Nodes', value: '500+', icon: Globe },
];

const features = [
    {
        title: 'Advanced Neural Networks',
        description: 'Leverage our proprietary ML models built for enterprise-scale data processing and predictive analytics.',
        icon: Layers,
    },
    {
        title: 'High-Precision Accuracy',
        description: 'Ensure 99.9% reliability across all your automation workflows with real-time feedback loops.',
        icon: BarChart3,
    },
    {
        title: 'Enterprise Security',
        description: 'State-of-the-art encryption and regional data compliance to protect your most sensitive intelligence.',
        icon: Lock,
    },
    {
        title: 'Real-time Intelligence',
        description: 'Get sub-millisecond insights with our globally distributed edge computing infrastructure.',
        icon: Layout,
    }
];

const SaaSLanding = () => {
    return (
        <div className="min-h-screen bg-transparent text-foreground overflow-x-hidden">
            {/* Navigation */}
            <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4">
                <div className="max-w-7xl mx-auto flex items-center justify-between glass-panel px-8 py-3 rounded-2xl">
                    <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-lg bg-grad-blue flex items-center justify-center">
                            <Cpu className="w-5 h-5 text-slate-900" />
                        </div>
                        <span className="text-xl font-bold tracking-tight text-slate-900">Sentience<span className="text-primary">.ai</span></span>
                    </div>
                    <div className="hidden md:flex items-center gap-8">
                        <a href="#" className="text-sm font-medium hover:text-primary transition-colors">Platform</a>
                        <a href="#" className="text-sm font-medium hover:text-primary transition-colors">Solutions</a>
                        <a href="#" className="text-sm font-medium hover:text-primary transition-colors">Enterprise</a>
                        <a href="#" className="text-sm font-medium hover:text-primary transition-colors">Docs</a>
                    </div>
                    <div className="flex items-center gap-4">
                        <Link to="/dashboard" className="text-sm font-medium text-slate-600 hover:text-primary transition-colors">Login</Link>
                        <button className="px-5 py-2 rounded-lg bg-primary text-white text-sm font-semibold hover:opacity-90 transition-opacity shadow-lg shadow-primary/25">
                            Get Started
                        </button>
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <header className="relative pt-32 pb-24 px-6">
                <div className="container mx-auto text-center max-w-5xl">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-[12px] font-bold uppercase tracking-wider mb-8">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                            </span>
                            v2.0 Now Enterprise-Ready
                        </div>
                        <h1 className="text-6xl md:text-8xl font-bold tracking-tight mb-10 leading-[1.0] text-slate-900">
                            Elevate Your <br />
                            <span className="text-primary">Enterprise</span> Intelligence.
                        </h1>
                        <p className="text-xl text-slate-500 max-w-2xl mx-auto mb-12 leading-relaxed font-medium">
                            Unlock intelligent insights and optimize complex operations with our premium AI-powered SaaS platform. Built for the future of enterprise decision making.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                            <button className="btn-primary flex items-center gap-2 bg-primary border-none shadow-xl shadow-primary/30">
                                Start Integration Today <ArrowRight className="w-5 h-5" />
                            </button>
                            <button className="px-8 py-4 rounded-full bg-white border border-slate-200 hover:border-primary/30 hover:bg-slate-50 transition-all font-medium text-slate-600">
                                View Enterprise Case Studies
                            </button>
                        </div>
                    </motion.div>

                    {/* Floating Hero Visual */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="mt-24 relative"
                    >
                        <div className="glass-panel p-4 rounded-[32px] overflow-hidden border-white shadow-2xl shadow-slate-200/50">
                            <div className="aspect-video rounded-2xl bg-slate-50 overflow-hidden relative border border-slate-100">
                                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent" />
                                {/* Mock UI visualization */}
                                <div className="p-8 h-full flex flex-col gap-6">
                                    <div className="flex gap-4">
                                        <div className="w-32 h-8 rounded-lg bg-white/5" />
                                        <div className="w-24 h-8 rounded-lg bg-white/5 ml-auto" />
                                    </div>
                                    <div className="flex gap-6 h-full">
                                        <div className="w-1/3 bg-slate-200/50 rounded-xl animate-pulse" />
                                        <div className="flex-1 flex flex-col gap-4">
                                            <div className="h-1/2 bg-slate-200/50 rounded-xl animate-pulse delay-75" />
                                            <div className="flex-1 bg-slate-200/50 rounded-xl animate-pulse delay-150" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Stat Badges */}
                        <div className="absolute -top-12 -left-12 hidden lg:flex flex-col gap-4">
                            {stats.map((stat, i) => (
                                <motion.div
                                    key={stat.label}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 1 + (i * 0.1) }}
                                    className="glass-card-ai p-6 rounded-[32px] flex items-center gap-6 min-w-[240px] border border-white/20 shadow-2xl"
                                >
                                    <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center shadow-md">
                                        <stat.icon className="w-5 h-5 text-white" />
                                    </div>
                                    <div>
                                        <div className="text-[9px] uppercase font-semibold text-slate-400 tracking-wider mb-0.5">{stat.label}</div>
                                        <div className="text-xl font-bold text-slate-900">{stat.value}</div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </header>

            {/* Features Grid */}
            <section className="py-24 px-6">
                <div className="container mx-auto">
                    <div className="text-center max-w-3xl mx-auto mb-20">
                        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900">Built for Scale. <span className="text-primary italic">Engineered for Precision.</span></h2>
                        <p className="text-lg text-slate-600">Our distributed neural nodes process petabytes of data with sub-millisecond latency, ensuring your enterprise stays ahead of every curve.</p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {features.map((feature, i) => (
                            <motion.div
                                key={feature.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="glass-card-ai p-10 rounded-[40px] group border border-white/20 shadow-xl"
                            >
                                <div className="w-14 h-14 rounded-xl bg-white shadow-md flex items-center justify-center mb-6 group-hover:bg-primary transition-colors border border-slate-100">
                                    <feature.icon className="w-7 h-7 text-primary group-hover:text-white transition-colors" />
                                </div>
                                <h3 className="text-xl font-semibold mb-3 text-slate-900 leading-tight">{feature.title}</h3>
                                <p className="text-sm text-slate-500 leading-relaxed font-medium">{feature.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="py-20 px-6 border-t border-white/5">
                <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
                    <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
                            <Cpu className="w-5 h-5 text-slate-900" />
                        </div>
                        <span className="text-xl font-bold tracking-tight text-slate-900">Sentience.ai</span>
                    </div>
                    <div className="flex gap-12 text-sm text-muted-foreground">
                        <a href="#" className="hover:text-primary transition-colors">Twitter</a>
                        <a href="#" className="hover:text-primary transition-colors">LinkedIn</a>
                        <a href="#" className="hover:text-primary transition-colors">Terms</a>
                        <a href="#" className="hover:text-primary transition-colors">Privacy</a>
                    </div>
                    <div className="text-sm text-muted-foreground font-medium">
                        © 2026 Sentience AI Systems. All rights reserved.
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default SaaSLanding;

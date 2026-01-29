import { motion } from 'framer-motion';
import {
    LayoutDashboard,
    Cpu,
    Users,
    Settings,
    Bell,
    Search,
    Zap,
    TrendingUp,
    Activity,
    Box,
    BrainCircuit,
    MessageSquare,
    MoreVertical
} from 'lucide-react';

const stats = [
    { label: 'AI Tokens Used', value: '42.8M', trend: '+12.5%', color: 'from-[#8846CF]/20 to-[#6a32a1]/20', icon: Zap },
    { label: 'Neural Accuracy', value: '99.82%', trend: '+0.1%', color: 'from-cyan-500/20 to-cyan-600/20', icon: BrainCircuit },
    { label: 'Active Processes', value: '1,284', trend: 'Stable', color: 'from-indigo-500/20 to-indigo-600/20', icon: Activity },
    { label: 'Daily Revenue', value: '$12,480', trend: '+8.2%', color: 'from-sky-500/20 to-sky-600/20', icon: TrendingUp },
];

const SidebarLink = ({ icon: Icon, label, active = false }: any) => (
    <a href="#" className={`flex items-center gap-3 px-5 py-3.5 rounded-xl transition-all ${active ? 'bg-primary text-white shadow-lg shadow-primary/20 ring-4 ring-primary/5' : 'text-slate-500 hover:bg-white/50 hover:text-primary'}`}>
        <Icon className="w-5 h-5" />
        <span className="font-semibold text-sm tracking-tight">{label}</span>
    </a>
);

const Dashboard = () => {
    return (
        <div className="min-h-screen bg-transparent text-foreground flex overflow-hidden">

            {/* Left Sidebar */}
            <aside className="w-72 glass-panel border-r border-white/15 hidden lg:flex flex-col p-6 m-4 rounded-[32px] shadow-xl">
                <div className="flex items-center gap-3 px-2 mb-12">
                    <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center shadow-lg shadow-primary/20">
                        <Cpu className="w-6 h-6 text-white" />
                    </div>
                    <span className="text-xl font-bold tracking-tight text-slate-900">Sentience<span className="text-primary">.ai</span></span>
                </div>

                <div className="flex flex-col gap-2 flex-1">
                    <SidebarLink icon={LayoutDashboard} label="Overview" active />
                    <SidebarLink icon={BrainCircuit} label="AI Training" />
                    <SidebarLink icon={Box} label="Infrastucture" />
                    <SidebarLink icon={MessageSquare} label="Conversations" />
                    <SidebarLink icon={Users} label="Team Members" />
                    <SidebarLink icon={TrendingUp} label="Analytics" />
                </div>

                <div className="pt-6 border-t border-slate-100 flex flex-col gap-2">
                    <SidebarLink icon={Settings} label="Settings" />
                    <div className="mt-4 p-4 rounded-2xl bg-primary/5 border border-primary/10">
                        <p className="text-[12px] font-bold text-primary uppercase tracking-widest mb-1">PRO PLAN</p>
                        <p className="text-sm font-bold text-slate-800 mb-3">Enterprise Access</p>
                        <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                            <div className="h-full bg-primary w-2/3" />
                        </div>
                        <p className="text-[10px] text-muted-foreground mt-2">68% of Compute Used</p>
                    </div>
                </div>
            </aside>

            {/* Main Content Area */}
            <main className="flex-1 overflow-y-auto p-4 lg:p-10">

                {/* Top Header */}
                <header className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-12">
                    <div>
                        <h1 className="text-3xl font-bold mb-1">System Overview</h1>
                        <p className="text-muted-foreground text-sm">Welcome back, Command Center. Everything is operational.</p>
                    </div>

                    <div className="flex items-center gap-4">
                        <div className="relative group">
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 group-focus-within:text-primary" />
                            <input
                                type="text"
                                placeholder="Search intel..."
                                className="bg-white border border-slate-200 rounded-2xl py-3 pl-12 pr-6 text-sm w-full lg:w-80 focus:outline-none focus:border-primary/50 transition-all shadow-sm"
                            />
                        </div>
                        <button className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center hover:bg-slate-50 transition-colors border border-slate-200 relative shadow-sm">
                            <Bell className="w-5 h-5 text-slate-400" />
                            <span className="absolute top-3 right-3 w-2 h-2 bg-primary rounded-full" />
                        </button>
                        <div className="w-12 h-12 rounded-2xl bg-primary p-[1px] shadow-lg shadow-primary/20">
                            <div className="w-full h-full rounded-2xl bg-white flex items-center justify-center overflow-hidden">
                                <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix" alt="User" />
                            </div>
                        </div>
                    </div>
                </header>

                {/* Stats Grid */}
                <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-6 mb-10">
                    {stats.map((stat, i) => (
                        <motion.div
                            key={stat.label}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            className="glass-card-ai p-8 rounded-[40px] relative overflow-hidden border border-white/20 shadow-2xl"
                        >
                            <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${stat.color} blur-[60px] -translate-y-1/2 translate-x-1/2 opacity-50`} />
                            <div className="flex items-start justify-between relative z-10 mb-6">
                                <div className="w-12 h-12 rounded-xl bg-white shadow-md flex items-center justify-center border border-slate-100">
                                    <stat.icon className="w-6 h-6 text-primary" />
                                </div>
                                <div className="text-[10px] font-bold text-emerald-600 bg-emerald-100 px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                                    {stat.trend}
                                </div>
                            </div>
                            <div className="text-[10px] font-semibold uppercase tracking-wider text-slate-400 mb-1.5">{stat.label}</div>
                            <div className="text-3xl font-bold tracking-tight text-slate-900">{stat.value}</div>
                        </motion.div>
                    ))}
                </div>

                {/* Action Center & Chart Mockup */}
                <div className="grid lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2 glass-panel p-10 rounded-[40px] shadow-xl border border-white/20">
                        <div className="flex items-center justify-between mb-10">
                            <div>
                                <h1 className="mb-3 text-4xl font-bold text-primary leading-none">Status: OK</h1>
                                <h3 className="text-xl font-semibold text-slate-900">Inference Performance</h3>
                                <p className="text-sm text-slate-500 font-medium">Neural response latency over last 24h</p>
                            </div>
                            <select className="bg-white border border-slate-200 rounded-xl px-4 py-2.5 text-xs font-semibold focus:outline-none focus:border-primary/50 text-slate-600 shadow-md">
                                <option>Last 24 Hours</option>
                                <option>Last 7 Days</option>
                            </select>
                        </div>

                        <div className="h-80 w-full relative">
                            {/* Mock Bar Chart */}
                            <div className="absolute inset-0 flex items-end justify-between gap-1 pb-1">
                                {[40, 65, 45, 80, 55, 90, 75, 40, 85, 30, 70, 50, 95, 60, 45, 80, 55, 65, 40, 75, 50, 85].map((h, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ height: 0 }}
                                        animate={{ height: `${h}%` }}
                                        transition={{ delay: 0.5 + (i * 0.02), duration: 0.8 }}
                                        className={`w-full max-w-[12px] rounded-t-lg bg-primary opacity-${i === 12 ? '100' : '40'} hover:opacity-100 transition-opacity cursor-pointer relative group`}
                                    >
                                        <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-slate-900 text-white border border-white/10 px-2 py-1 rounded text-[10px] hidden group-hover:block">
                                            {h}ms
                                        </div>
                                    </motion.div>
                                ))}
                            </div>

                            {/* Grid Lines */}
                            <div className="absolute inset-x-0 h-[1px] bg-slate-100 bottom-[25%]" />
                            <div className="absolute inset-x-0 h-[1px] bg-slate-100 bottom-[50%]" />
                            <div className="absolute inset-x-0 h-[1px] bg-slate-100 bottom-[75%]" />
                        </div>
                    </div>

                    <div className="glass-panel p-10 rounded-[40px] flex flex-col shadow-xl border border-white/20">
                        <h3 className="text-xl font-semibold mb-8">Active Modules</h3>
                        <div className="space-y-6 flex-1">
                            {[
                                { name: 'Core Engine v2', status: 'Online', load: '12%' },
                                { name: 'GPT Buffer 04', status: 'Standby', load: '0%' },
                                { name: 'Visual Processing', status: 'Optimizing', load: '84%' },
                                { name: 'Query Handler', status: 'Online', load: '31%' },
                                { name: 'Auth Guard X', status: 'Maintenance', load: '-%' },
                            ].map((m, i) => (
                                <div key={m.name} className="flex items-center justify-between group cursor-pointer">
                                    <div className="flex items-center gap-3">
                                        <div className={`w-2 h-2 rounded-full ${m.status === 'Online' ? 'bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.4)]' : m.status === 'Optimizing' ? 'bg-amber-500 shadow-[0_0_10px_rgba(245,158,11,0.4)]' : 'bg-slate-300'}`} />
                                        <div>
                                            <div className="text-sm font-semibold text-slate-800 group-hover:text-primary transition-colors leading-none mb-1">{m.name}</div>
                                            <div className="text-[9px] text-slate-400 font-semibold uppercase tracking-wider">{m.status}</div>
                                        </div>
                                    </div>
                                    <div className="text-xs font-semibold text-slate-900">{m.load}</div>
                                </div>
                            ))}
                        </div>
                        <button className="w-full py-4 rounded-2xl bg-slate-900 text-white hover:bg-primary transition-all font-semibold text-sm mt-8 shadow-lg shadow-slate-900/10">
                            Open Full Task Manager
                        </button>
                    </div>
                </div>

            </main>
        </div>
    );
};

export default Dashboard;

import { motion } from 'framer-motion';
import { Layers, Ruler, Clock, Users, Building, Wrench } from 'lucide-react';

interface Specification {
    label: string;
    value: string;
    icon: React.ElementType;
}

interface ProjectSpecsProps {
    bimLevel: string;
    tools: string[];
    scope: string;
    projectType: string;
    year: string;
    location: string;
}

const ProjectSpecs = ({ bimLevel, tools, scope, projectType, year, location }: ProjectSpecsProps) => {
    const specs: Specification[] = [
        { label: 'BIM Level', value: bimLevel, icon: Layers },
        { label: 'Project Type', value: projectType, icon: Building },
        { label: 'Scope', value: scope, icon: Ruler },
        { label: 'Year', value: year, icon: Clock },
        { label: 'Location', value: location, icon: Users },
    ];

    return (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {specs.map((spec, index) => (
                <motion.div
                    key={spec.label}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    whileHover={{ y: -8, scale: 1.02 }}
                    className="group relative"
                >
                    <div className="relative p-6 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden">
                        {/* Gradient accent */}
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-purple-500 to-violet-500 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                        
                        <div className="flex items-start gap-4">
                            <motion.div
                                whileHover={{ rotate: 10, scale: 1.1 }}
                                className="w-12 h-12 rounded-xl bg-primary/5 flex items-center justify-center shrink-0 group-hover:bg-primary/10 transition-colors"
                            >
                                <spec.icon className="w-6 h-6 text-primary" />
                            </motion.div>
                            <div>
                                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">
                                    {spec.label}
                                </p>
                                <p className="text-lg font-bold text-slate-900">{spec.value}</p>
                            </div>
                        </div>
                    </div>
                </motion.div>
            ))}
            
            {/* Tools card - spans full width on larger screens */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: specs.length * 0.1 }}
                className="md:col-span-2 lg:col-span-3"
            >
                <div className="relative p-6 rounded-2xl bg-gradient-to-br from-slate-900 to-slate-800 overflow-hidden group">
                    {/* Animated background */}
                    <motion.div
                        className="absolute inset-0 opacity-30"
                        style={{
                            backgroundImage: 'radial-gradient(circle at 50% 50%, rgba(136, 70, 207, 0.3), transparent 50%)',
                        }}
                        animate={{
                            scale: [1, 1.2, 1],
                            opacity: [0.3, 0.5, 0.3],
                        }}
                        transition={{ duration: 4, repeat: Infinity }}
                    />
                    
                    <div className="relative z-10">
                        <div className="flex items-center gap-3 mb-4">
                            <Wrench className="w-5 h-5 text-primary" />
                            <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">
                                Tools & Technologies
                            </p>
                        </div>
                        <div className="flex flex-wrap gap-3">
                            {tools.map((tool, i) => (
                                <motion.span
                                    key={tool}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.5 + i * 0.1 }}
                                    whileHover={{ scale: 1.05, y: -2 }}
                                    className="px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/10 rounded-lg text-white font-medium text-sm hover:bg-white/20 transition-colors cursor-default"
                                >
                                    {tool}
                                </motion.span>
                            ))}
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default ProjectSpecs;
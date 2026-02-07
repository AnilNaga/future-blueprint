
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, MapPin, Calendar, Layers, PenTool, Braces, ArrowRight } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Project3DViewer from '@/components/projects/Project3DViewer';
import ProjectDrawings from '@/components/projects/ProjectDrawings';
import { archProjects } from '@/data/architectureProjects';
import { Button } from '@/components/ui/button';

const ArchProjectDetail = () => {
    const { slug } = useParams();
    const project = archProjects.find(p => p.slug === slug);

    if (!project) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-slate-50">
                <div className="text-center">
                    <h1 className="text-4xl font-bold text-slate-900 mb-4">Project Not Found</h1>
                    <Link to="/projects/architecture">
                        <Button variant="outline">Back to Projects</Button>
                    </Link>
                </div>
            </div>
        );
    }

    const relatedProjects = archProjects.filter(p => p.id !== project.id).slice(0, 3);

    return (
        <div className="min-h-screen bg-white font-sans selection:bg-purple-100">
            <Navbar />

            {/* 1️⃣ PROJECT HERO */}
            <section className="relative h-[80vh] min-h-[600px] flex items-end">
                <div className="absolute inset-0 z-0">
                    <img
                        src={project.heroImage}
                        alt={project.title}
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent"></div>
                </div>

                <div className="relative z-10 container mx-auto px-6 pb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <Link to="/projects/architecture" className="inline-flex items-center text-white/50 hover:text-white mb-6 uppercase tracking-widest text-xs font-bold transition-colors">
                            <ArrowLeft size={14} className="mr-2" /> Back to Index
                        </Link>
                        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 max-w-4xl tracking-tight leading-none">
                            {project.title}
                        </h1>
                        <div className="flex flex-wrap gap-6 text-white/80 text-lg font-medium">
                            <span className="flex items-center gap-2"><MapPin size={18} /> {project.location}</span>
                            <span className="w-px h-6 bg-white/20"></span>
                            <span className="flex items-center gap-2"><Calendar size={18} /> {project.year}</span>
                            <span className="w-px h-6 bg-white/20"></span>
                            <span className="px-3 py-1 bg-white/10 rounded-full text-sm border border-white/10 backdrop-blur-sm">
                                {project.category}
                            </span>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* 2️⃣ PROJECT OVERVIEW */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6">
                    <div className="grid lg:grid-cols-[1fr_400px] gap-16">
                        <div>
                            <h2 className="text-sm font-bold tracking-widest text-[#914694] uppercase mb-4">Project Overview</h2>

                            <p className="text-2xl md:text-3xl text-slate-800 leading-relaxed font-light mb-8">
                                {project.description}
                            </p>
                        </div>
                        <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100 h-fit">
                            <h3 className="text-lg font-bold text-slate-900 mb-6 flex items-center gap-2">
                                <Layers size={20} className="text-[#914694]" /> Technical Scope

                            </h3>
                            <div className="space-y-4">
                                <div>
                                    <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">BIM Level</p>
                                    <p className="text-slate-800 font-medium text-lg">{project.bimLevel}</p>
                                </div>
                                <div className="h-px bg-slate-200"></div>
                                <div>
                                    <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Tools Used</p>
                                    <div className="flex flex-wrap gap-2 mt-2">
                                        {project.tools.map(tool => (
                                            <span key={tool} className="px-2 py-1 bg-white border border-slate-200 rounded text-xs font-semibold text-slate-600">
                                                {tool}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                                <div className="h-px bg-slate-200"></div>
                                <div>
                                    <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Scope</p>
                                    <p className="text-slate-800 font-medium">{project.scope}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3️⃣ 3D MODEL VIEWER */}
            <section className="py-24 bg-slate-50 border-y border-slate-200">
                <div className="container mx-auto px-6">
                    <div className="mb-12 text-center md:text-left">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Interactive 3D Model</h2>
                        <p className="text-slate-600 max-w-2xl text-lg">
                            Explore the architectural massing and coordination details directly in the browser.
                        </p>
                    </div>
                    <Project3DViewer title={project.title} modelUrl={project.modelUrl} />
                </div>
            </section>

            {/* 4️⃣ 2D DRAWINGS VIEWER */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6">
                    <div className="mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Technical Documentation</h2>
                        <p className="text-slate-600 max-w-2xl text-lg">
                            High-precision construction documentation generated from the BIM model.
                        </p>
                    </div>
                    <ProjectDrawings drawings={project.drawings} />
                </div>
            </section>

            {/* 7️⃣ RELATED PROJECTS */}
            <section className="py-24 bg-slate-900 text-white">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold mb-12">Related Projects</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        {relatedProjects.map(p => (
                            <Link to={`/projects/architecture/${p.slug}`} key={p.id} className="group block">
                                <div className="aspect-[4/3] overflow-hidden rounded-xl bg-slate-800 mb-4 relative">
                                    <img
                                        src={p.heroImage}
                                        alt={p.title}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-80 group-hover:opacity-100"
                                    />
                                    <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
                                </div>
                                <h3 className="text-xl font-bold mb-1 group-hover:text-[#914694] transition-colors">{p.title}</h3>

                                <p className="text-slate-400 text-sm">{p.location} • {p.year}</p>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default ArchProjectDetail;

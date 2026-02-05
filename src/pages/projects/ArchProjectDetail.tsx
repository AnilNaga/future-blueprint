import { useParams, Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowLeft, MapPin, Calendar, Layers, ArrowRight, Play, ChevronDown } from 'lucide-react';
import { useRef } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Project3DViewer from '@/components/projects/Project3DViewer';
import ProjectGallery from '@/components/projects/ProjectGallery';
import ProjectSpecs from '@/components/projects/ProjectSpecs';
import ProjectWalkthrough from '@/components/projects/ProjectWalkthrough';
import { archProjects } from '@/data/architectureProjects';
import { Button } from '@/components/ui/button';

const ArchProjectDetail = () => {
    const { slug } = useParams();
    const project = archProjects.find(p => p.slug === slug);
    const heroRef = useRef<HTMLDivElement>(null);
    
    const { scrollYProgress } = useScroll({
        target: heroRef,
        offset: ["start start", "end start"]
    });
    
    const heroScale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);
    const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
    const textY = useTransform(scrollYProgress, [0, 1], [0, 100]);

    if (!project) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-background">
                <div className="text-center">
                    <h1 className="text-4xl font-bold text-foreground mb-4">Project Not Found</h1>
                    <Link to="/projects/architecture">
                        <Button variant="outline">Back to Projects</Button>
                    </Link>
                </div>
            </div>
        );
    }

    const relatedProjects = archProjects.filter(p => p.id !== project.id).slice(0, 3);

    return (
        <div className="min-h-screen bg-background font-sans selection:bg-primary/10">
            <Navbar />

            {/* 1️⃣ PROJECT HERO */}
            <section ref={heroRef} className="relative h-screen min-h-[700px] flex items-end overflow-hidden">
                <motion.div 
                    className="absolute inset-0 z-0"
                    style={{ scale: heroScale }}
                >
                    <motion.img
                        src={project.heroImage}
                        alt={project.title}
                        className="w-full h-full object-cover"
                        initial={{ scale: 1.1 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-slate-900/20" />
                </motion.div>

                <motion.div 
                    className="relative z-10 container mx-auto px-6 pb-24"
                    style={{ y: textY, opacity: heroOpacity }}
                >
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    >
                        <Link 
                            to="/projects/architecture" 
                            className="inline-flex items-center gap-2 text-white/60 hover:text-white mb-8 uppercase tracking-widest text-xs font-bold transition-all group"
                        >
                            <motion.span 
                                className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors"
                                whileHover={{ x: -4 }}
                            >
                                <ArrowLeft size={14} />
                            </motion.span>
                            Back to Projects
                        </Link>
                        
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.5 }}
                            className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full mb-6"
                        >
                            <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                            <span className="text-white/80 text-sm font-medium">{project.category}</span>
                        </motion.div>
                        
                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-8 max-w-5xl tracking-tight leading-[0.9]">
                            {project.title}
                        </h1>
                        
                        <div className="flex flex-wrap items-center gap-6 text-white/70 text-lg">
                            <motion.span 
                                className="flex items-center gap-2"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.7 }}
                            >
                                <MapPin size={18} className="text-primary" /> {project.location}
                            </motion.span>
                            <span className="w-px h-6 bg-white/20" />
                            <motion.span 
                                className="flex items-center gap-2"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.8 }}
                            >
                                <Calendar size={18} className="text-primary" /> {project.year}
                            </motion.span>
                            <span className="w-px h-6 bg-white/20" />
                            <motion.span 
                                className="flex items-center gap-2"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.9 }}
                            >
                                <Layers size={18} className="text-primary" /> {project.bimLevel}
                            </motion.span>
                        </div>
                    </motion.div>
                </motion.div>
                
                {/* Scroll indicator */}
                <motion.div
                    className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.5 }}
                >
                    <motion.div
                        animate={{ y: [0, 10, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="flex flex-col items-center gap-2 text-white/50"
                    >
                        <span className="text-xs uppercase tracking-widest">Scroll</span>
                        <ChevronDown size={20} />
                    </motion.div>
                </motion.div>
            </section>

            {/* 2️⃣ PROJECT OVERVIEW */}
            <section className="py-32 bg-background relative">
                {/* Decorative elements */}
                <div className="absolute top-0 right-0 w-1/3 h-1/2 bg-gradient-to-bl from-primary/5 to-transparent blur-3xl pointer-events-none" />
                
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto text-center mb-20">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-6">Project Overview</h2>
                            <p className="text-2xl md:text-4xl text-foreground leading-relaxed font-light">
                                {project.description}
                            </p>
                        </motion.div>
                    </div>
                    
                    {/* Technical Specifications */}
                    <ProjectSpecs 
                        bimLevel={project.bimLevel}
                        tools={project.tools}
                        scope={project.scope}
                        projectType={project.projectType}
                        year={project.year}
                        location={project.location}
                    />
                </div>
            </section>

            {/* 3️⃣ WALKTHROUGH VIDEO */}
            <section className="py-32 bg-muted/30 relative overflow-hidden">
                <div className="absolute inset-0 opacity-[0.02] pointer-events-none"
                    style={{ backgroundImage: 'radial-gradient(hsl(var(--foreground)) 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
                
                <div className="container mx-auto px-6">
                    <motion.div 
                        className="mb-16 text-center"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/5 border border-primary/10 mb-6">
                            <Play className="w-4 h-4 text-primary" />
                            <span className="text-xs font-bold text-primary uppercase tracking-widest">Immersive Experience</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Project Walkthrough</h2>
                        <p className="text-muted-foreground max-w-2xl text-lg mx-auto">
                            Experience the project through an immersive cinematic walkthrough.
                        </p>
                    </motion.div>
                    
                    <ProjectWalkthrough 
                        posterImage={project.heroImage}
                        title={project.title}
                    />
                </div>
            </section>

            {/* 4️⃣ 3D MODEL VIEWER */}
            <section className="py-32 bg-background">
                <div className="container mx-auto px-6">
                    <motion.div 
                        className="mb-16 text-center"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/5 border border-primary/10 mb-6">
                            <Layers className="w-4 h-4 text-primary" />
                            <span className="text-xs font-bold text-primary uppercase tracking-widest">Interactive Model</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">3D BIM Viewer</h2>
                        <p className="text-muted-foreground max-w-2xl text-lg mx-auto">
                            Explore the architectural massing and coordination details directly in the browser.
                        </p>
                    </motion.div>
                    
                    <Project3DViewer title={project.title} modelUrl={project.modelUrl} />
                </div>
            </section>

            {/* 5️⃣ 2D DRAWINGS GALLERY */}
            <section className="py-32 bg-muted/30">
                <div className="container mx-auto px-6">
                    <motion.div 
                        className="mb-16 text-center"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Technical Documentation</h2>
                        <p className="text-muted-foreground max-w-2xl text-lg mx-auto">
                            High-precision construction documentation generated from the BIM model.
                        </p>
                    </motion.div>
                    
                    <ProjectGallery drawings={project.drawings} projectTitle={project.title} />
                </div>
            </section>

            {/* 6️⃣ RELATED PROJECTS */}
            <section className="py-32 bg-slate-900 text-white relative overflow-hidden">
                {/* Decorative gradient */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
                
                <div className="container mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl md:text-5xl font-bold mb-4">Related Projects</h2>
                        <p className="text-white/60 text-lg">Explore more of our architectural BIM work</p>
                    </motion.div>
                    
                    <div className="grid md:grid-cols-3 gap-8">
                        {relatedProjects.map(p => (
                            <motion.div
                                key={p.id}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                whileHover={{ y: -12 }}
                                transition={{ duration: 0.5 }}
                            >
                                <Link to={`/projects/architecture/${p.slug}`} className="group block">
                                    <div className="aspect-[4/3] overflow-hidden rounded-2xl bg-slate-800 mb-6 relative">
                                        <motion.img
                                            src={p.heroImage}
                                            alt={p.title}
                                            className="w-full h-full object-cover"
                                            whileHover={{ scale: 1.1 }}
                                            transition={{ duration: 0.7 }}
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                        
                                        <motion.div
                                            className="absolute bottom-4 right-4 w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300"
                                            whileHover={{ scale: 1.1 }}
                                        >
                                            <ArrowRight className="w-5 h-5 text-white" />
                                        </motion.div>
                                    </div>
                                    <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors duration-300">{p.title}</h3>
                                    <p className="text-white/50 text-sm">{p.location} • {p.year}</p>
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default ArchProjectDetail;

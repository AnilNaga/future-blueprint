import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, ZoomIn, Layers, Grid } from 'lucide-react';
import { Dialog, DialogContent } from '@/components/ui/dialog';

interface Drawing {
    title: string;
    type: 'Plan' | 'Section' | 'Elevation';
    imageUrl: string;
}

interface ProjectGalleryProps {
    drawings: Drawing[];
    projectTitle: string;
}

const ProjectGallery = ({ drawings, projectTitle }: ProjectGalleryProps) => {
    const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
    const [filter, setFilter] = useState<string>('all');
    
    const types = ['all', ...new Set(drawings.map(d => d.type))];
    const filteredDrawings = filter === 'all' ? drawings : drawings.filter(d => d.type === filter);
    
    const openLightbox = (index: number) => setSelectedIndex(index);
    const closeLightbox = () => setSelectedIndex(null);
    
    const navigate = (direction: 'prev' | 'next') => {
        if (selectedIndex === null) return;
        const newIndex = direction === 'prev' 
            ? (selectedIndex - 1 + filteredDrawings.length) % filteredDrawings.length
            : (selectedIndex + 1) % filteredDrawings.length;
        setSelectedIndex(newIndex);
    };

    return (
        <div className="space-y-8">
            {/* Filter tabs */}
            <div className="flex flex-wrap gap-3 justify-center">
                {types.map((type) => (
                    <motion.button
                        key={type}
                        onClick={() => setFilter(type)}
                        className={`px-6 py-3 rounded-full font-medium text-sm uppercase tracking-wider transition-all duration-300 ${
                            filter === type
                                ? 'bg-primary text-white shadow-lg shadow-primary/25'
                                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                        }`}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        {type === 'all' ? 'All Drawings' : type}
                    </motion.button>
                ))}
            </div>
            
            {/* Gallery Grid */}
            <motion.div 
                className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
                layout
            >
                <AnimatePresence mode="popLayout">
                    {filteredDrawings.map((drawing, index) => (
                        <motion.div
                            key={drawing.title}
                            layout
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.8 }}
                            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                            onClick={() => openLightbox(index)}
                            className="group cursor-pointer"
                        >
                            <motion.div
                                whileHover={{ y: -12, scale: 1.02 }}
                                transition={{ duration: 0.4 }}
                                className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-slate-100 shadow-lg hover:shadow-2xl"
                            >
                                <img
                                    src={drawing.imageUrl}
                                    alt={drawing.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                
                                {/* Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
                                
                                {/* Hover content */}
                                <div className="absolute inset-0 flex flex-col justify-end p-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                                    <div className="flex items-center gap-2 mb-2">
                                        <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs font-bold text-white uppercase tracking-wider">
                                            {drawing.type}
                                        </span>
                                    </div>
                                    <h4 className="text-white font-bold text-lg">{drawing.title}</h4>
                                </div>
                                
                                {/* Zoom icon */}
                                <motion.div
                                    className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300"
                                    whileHover={{ scale: 1.1 }}
                                >
                                    <ZoomIn className="w-5 h-5 text-white" />
                                </motion.div>
                            </motion.div>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </motion.div>
            
            {/* Lightbox Dialog */}
            <Dialog open={selectedIndex !== null} onOpenChange={() => closeLightbox()}>
                <DialogContent className="max-w-7xl w-[95vw] h-[90vh] p-0 bg-slate-900/95 backdrop-blur-xl border-slate-800">
                    <AnimatePresence mode="wait">
                        {selectedIndex !== null && (
                            <motion.div
                                key={selectedIndex}
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                transition={{ duration: 0.3 }}
                                className="relative w-full h-full flex items-center justify-center p-8"
                            >
                                <img
                                    src={filteredDrawings[selectedIndex].imageUrl}
                                    alt={filteredDrawings[selectedIndex].title}
                                    className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
                                />
                                
                                {/* Info overlay */}
                                <div className="absolute bottom-8 left-8 right-8 flex items-end justify-between">
                                    <div>
                                        <span className="px-3 py-1 bg-primary/80 backdrop-blur-sm rounded-full text-xs font-bold text-white uppercase tracking-wider mb-2 inline-block">
                                            {filteredDrawings[selectedIndex].type}
                                        </span>
                                        <h3 className="text-2xl font-bold text-white">
                                            {filteredDrawings[selectedIndex].title}
                                        </h3>
                                        <p className="text-slate-400 text-sm mt-1">{projectTitle}</p>
                                    </div>
                                    <div className="text-slate-400 text-sm">
                                        {selectedIndex + 1} / {filteredDrawings.length}
                                    </div>
                                </div>
                                
                                {/* Navigation */}
                                <button
                                    onClick={(e) => { e.stopPropagation(); navigate('prev'); }}
                                    className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/20 transition-colors"
                                >
                                    <ChevronLeft className="w-6 h-6" />
                                </button>
                                <button
                                    onClick={(e) => { e.stopPropagation(); navigate('next'); }}
                                    className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/20 transition-colors"
                                >
                                    <ChevronRight className="w-6 h-6" />
                                </button>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </DialogContent>
            </Dialog>
        </div>
    );
};

export default ProjectGallery;
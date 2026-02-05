import { useState, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Play, Pause, Maximize2, Volume2, VolumeX, RotateCcw } from 'lucide-react';

interface ProjectWalkthroughProps {
    videoUrl?: string;
    posterImage: string;
    title: string;
}

const ProjectWalkthrough = ({ videoUrl, posterImage, title }: ProjectWalkthroughProps) => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [isMuted, setIsMuted] = useState(true);
    const [progress, setProgress] = useState(0);
    const videoRef = useRef<HTMLVideoElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });
    
    const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.9, 1, 0.9]);
    const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.5, 1, 1, 0.5]);
    
    const togglePlay = () => {
        if (!videoRef.current) return;
        if (isPlaying) {
            videoRef.current.pause();
        } else {
            videoRef.current.play();
        }
        setIsPlaying(!isPlaying);
    };
    
    const toggleMute = () => {
        if (!videoRef.current) return;
        videoRef.current.muted = !isMuted;
        setIsMuted(!isMuted);
    };
    
    const handleTimeUpdate = () => {
        if (!videoRef.current) return;
        const progress = (videoRef.current.currentTime / videoRef.current.duration) * 100;
        setProgress(progress);
    };
    
    const handleSeek = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!videoRef.current) return;
        const rect = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const percentage = x / rect.width;
        videoRef.current.currentTime = percentage * videoRef.current.duration;
    };
    
    const handleRestart = () => {
        if (!videoRef.current) return;
        videoRef.current.currentTime = 0;
        videoRef.current.play();
        setIsPlaying(true);
    };
    
    const handleFullscreen = () => {
        if (!containerRef.current) return;
        if (document.fullscreenElement) {
            document.exitFullscreen();
        } else {
            containerRef.current.requestFullscreen();
        }
    };

    // If no video URL, show an immersive image experience
    if (!videoUrl) {
        return (
            <motion.div
                ref={containerRef}
                style={{ scale, opacity }}
                className="relative aspect-video rounded-3xl overflow-hidden bg-slate-900 group"
            >
                <motion.img
                    src={posterImage}
                    alt={title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.8 }}
                />
                
                {/* Overlay with message */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/30 to-transparent flex items-end p-8">
                    <div>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-4"
                        >
                            <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                            <span className="text-white/80 text-sm font-medium">Interactive Walkthrough</span>
                        </motion.div>
                        <h4 className="text-2xl font-bold text-white mb-2">{title}</h4>
                        <p className="text-white/60">Full 3D walkthrough available upon request</p>
                    </div>
                </div>
                
                {/* Floating elements */}
                <motion.div
                    className="absolute top-6 right-6 flex gap-3"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                >
                    <div className="px-3 py-1.5 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 text-white text-xs font-bold">
                        4K Quality
                    </div>
                    <div className="px-3 py-1.5 bg-primary/80 backdrop-blur-sm rounded-lg text-white text-xs font-bold">
                        BIM Model
                    </div>
                </motion.div>
            </motion.div>
        );
    }

    return (
        <motion.div
            ref={containerRef}
            style={{ scale, opacity }}
            className="relative aspect-video rounded-3xl overflow-hidden bg-slate-900 group"
        >
            <video
                ref={videoRef}
                src={videoUrl}
                poster={posterImage}
                muted={isMuted}
                loop
                playsInline
                onTimeUpdate={handleTimeUpdate}
                onEnded={() => setIsPlaying(false)}
                className="w-full h-full object-cover"
            />
            
            {/* Play/Pause overlay */}
            <motion.div
                className={`absolute inset-0 flex items-center justify-center bg-slate-900/30 transition-opacity duration-300 ${isPlaying ? 'opacity-0 group-hover:opacity-100' : 'opacity-100'}`}
            >
                <motion.button
                    onClick={togglePlay}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-24 h-24 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center shadow-2xl"
                >
                    {isPlaying ? (
                        <Pause className="w-10 h-10 text-white" />
                    ) : (
                        <Play className="w-10 h-10 text-white ml-1" />
                    )}
                </motion.button>
            </motion.div>
            
            {/* Controls */}
            <div className={`absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-slate-900/90 to-transparent transition-opacity duration-300 ${isPlaying && !document.fullscreenElement ? 'opacity-0 group-hover:opacity-100' : 'opacity-100'}`}>
                {/* Progress bar */}
                <div 
                    className="w-full h-1.5 bg-white/20 rounded-full mb-4 cursor-pointer overflow-hidden"
                    onClick={handleSeek}
                >
                    <motion.div
                        className="h-full bg-gradient-to-r from-primary to-violet-500 rounded-full"
                        style={{ width: `${progress}%` }}
                    />
                </div>
                
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <motion.button
                            onClick={togglePlay}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/20 transition-colors"
                        >
                            {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5 ml-0.5" />}
                        </motion.button>
                        <motion.button
                            onClick={handleRestart}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/20 transition-colors"
                        >
                            <RotateCcw className="w-4 h-4" />
                        </motion.button>
                        <motion.button
                            onClick={toggleMute}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/20 transition-colors"
                        >
                            {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
                        </motion.button>
                    </div>
                    
                    <div className="flex items-center gap-3">
                        <span className="text-white/60 text-sm font-medium">{title}</span>
                        <motion.button
                            onClick={handleFullscreen}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/20 transition-colors"
                        >
                            <Maximize2 className="w-5 h-5" />
                        </motion.button>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default ProjectWalkthrough;
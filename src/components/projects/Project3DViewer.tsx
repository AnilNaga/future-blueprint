
import { useState } from 'react';
import { Cuboid, Maximize2, Rotate3d } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface Project3DViewerProps {
    modelUrl?: string;
    title: string;
}

const Project3DViewer = ({ modelUrl, title }: Project3DViewerProps) => {
    const [isInteracting, setIsInteracting] = useState(false);

    // Placeholder for actual 3D implementation
    // In a real scenario, this would import specific 3D libraries or embed codes
    return (
        <div className="relative w-full aspect-video bg-slate-100 rounded-2xl overflow-hidden border border-slate-200 group">
            {/* Overlay UI */}
            <div className={`absolute inset-0 pointer-events-none z-10 p-6 flex flex-col justify-between transition-opacity duration-300 ${isInteracting ? 'opacity-0' : 'opacity-100'}`}>
                <div className="flex justify-between items-start">
                    <div className="bg-white/90 backdrop-blur-sm px-4 py-2 rounded-lg shadow-sm border border-slate-100">
                        <span className="flex items-center gap-2 text-sm font-bold text-slate-800">
                            <Cuboid size={16} className="text-[#8846CF]" />
                            Live 3D Model
                        </span>
                    </div>
                </div>

                <div className="flex justify-center">
                    <div className="bg-slate-900/80 backdrop-blur-md text-white px-6 py-3 rounded-full flex items-center gap-3 shadow-xl">
                        <Rotate3d size={20} className="animate-pulse" />
                        <span className="font-medium">Click & Drag to Rotate</span>
                    </div>
                </div>
            </div>

            {/* Interactive Area Placeholder */}
            <div
                className="w-full h-full cursor-move bg-[url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center grayscale opacity-50 hover:opacity-100 transition-all duration-700 flex items-center justify-center"
                onMouseDown={() => setIsInteracting(true)}
                onMouseUp={() => setIsInteracting(false)}
                onMouseLeave={() => setIsInteracting(false)}
            >
                {/* Simulated 3D Grid */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.1)_1px,transparent_1px)] bg-[size:40px_40px] perspective-[1000px] rotate-x-12"></div>

                {/* Embed Placeholder */}
                {modelUrl ? (
                    // If we had a real embed URL (like Sketchfab), it would go here
                    <div className="hidden">Embed: {modelUrl}</div>
                ) : null}

                {/* Central Object Simulation */}
                <div className="w-32 h-32 border-2 border-slate-400/50 rounded-full flex items-center justify-center relative animate-spin-slow">
                    <div className="w-24 h-24 border border-[#8846CF]/50 rounded-full absolute"></div>
                </div>
            </div>

            {/* Controls */}
            <div className="absolute bottom-6 right-6 z-20 flex gap-2">
                <Button variant="secondary" size="icon" className="bg-white hover:bg-slate-50 shadow-md rounded-full h-10 w-10">
                    <Maximize2 size={18} className="text-slate-700" />
                </Button>
            </div>
        </div>
    );
};

export default Project3DViewer;

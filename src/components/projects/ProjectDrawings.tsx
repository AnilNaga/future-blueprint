
import { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ZoomIn, Eye } from 'lucide-react';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';

interface Drawing {
    title: string;
    type: 'Plan' | 'Section' | 'Elevation';
    imageUrl: string;
}

interface ProjectDrawingsProps {
    drawings: Drawing[];
}

const ProjectDrawings = ({ drawings }: ProjectDrawingsProps) => {
    // Group drawings by type if needed, but for now we flat list with tabs by type if diverse, 
    // or just show them. Let's make a tabbed interface by drawing name for simplicity if few.
    const [activeTab, setActiveTab] = useState(drawings[0]?.title || '');

    return (
        <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
            <Tabs defaultValue={drawings[0]?.title} onValueChange={setActiveTab} className="w-full">
                <div className="border-b border-slate-100 p-4 flex justify-between items-center bg-slate-50/50">
                    <TabsList className="bg-white border border-slate-200">
                        {drawings.map((dwg) => (
                            <TabsTrigger
                                key={dwg.title}
                                value={dwg.title}
                                className="data-[state=active]:bg-slate-900 data-[state=active]:text-white"
                            >
                                {dwg.type}: {dwg.title}
                            </TabsTrigger>
                        ))}
                    </TabsList>
                </div>

                {drawings.map((dwg) => (
                    <TabsContent key={dwg.title} value={dwg.title} className="m-0 p-0 relative group">
                        <div className="relative aspect-[16/9] w-full bg-white flex items-center justify-center overflow-hidden p-8">
                            {/* Drawing Image */}
                            <img
                                src={dwg.imageUrl}
                                alt={dwg.title}
                                className="max-w-full max-h-full object-contain filter contrast-125 hover:scale-105 transition-transform duration-700 pointer-events-none"
                            />

                            {/* Overlay */}
                            <div className="absolute inset-0 bg-slate-900/0 hover:bg-slate-900/5 transition-colors duration-300 flex items-center justify-center">
                                <Dialog>
                                    <DialogTrigger asChild>
                                        <button className="opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 bg-white text-slate-900 px-6 py-3 rounded-full font-semibold shadow-xl flex items-center gap-2">
                                            <ZoomIn size={18} />
                                            Inspect Drawing
                                        </button>
                                    </DialogTrigger>
                                    <DialogContent className="max-w-[90vw] h-[90vh] p-0 overflow-hidden bg-slate-50">
                                        <div className="w-full h-full flex items-center justify-center overflow-auto p-10">
                                            <img
                                                src={dwg.imageUrl}
                                                alt={dwg.title}
                                                className="min-w-full object-contain"
                                            />
                                        </div>
                                    </DialogContent>
                                </Dialog>
                            </div>
                        </div>
                    </TabsContent>
                ))}
            </Tabs>
        </div>
    );
};

export default ProjectDrawings;


export interface ArchitectureProject {
    id: string;
    slug: string;
    title: string;
    category: string;
    location: string;
    year: string;
    technicalDescription: string;
    description: string;
    heroImage: string;
    bimLevel: string;
    tools: string[];
    scope: string;
    projectType: string;
    modelUrl?: string; // For 3D viewer (sketchfab/iframe source)
    drawings: {
        title: string; // e.g., "Floor Plan Level 1"
        type: 'Plan' | 'Section' | 'Elevation';
        imageUrl: string;
    }[];
}

export const archProjects: ArchitectureProject[] = [
    {
        id: '1',
        slug: 'high-rise-residential',
        title: 'Neo-Modern Residentials',
        category: 'High-Rise Residential',
        location: 'Dubai, UAE',
        year: '2023',
        technicalDescription: 'Comprehensive LOD 400 architectural modeling and coordination for a 60-story luxury residence.',
        description: 'Neo-Modern Residentials represents the future of sustainable vertical living in Dubai. This 60-story luxury tower involved full-scale LOD 400 architectural BIM modeling, ensuring zero-clash coordination between structural and MEP elements. The parametric facade design optimizes solar gain while maintaining panoramic views.',
        heroImage: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=2070',
        bimLevel: 'LOD 400',
        tools: ['Revit', 'Navisworks', 'Dynamo'],
        scope: 'Architecture + Coordination',
        projectType: 'Residential',
        modelUrl: 'https://sketchfab.com/models/placeholder-embed', // Placeholder
        drawings: [
            { title: 'Ground Floor Concept', type: 'Plan', imageUrl: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=2000' },
            { title: 'Typical Floor Layout', type: 'Plan', imageUrl: 'https://images.unsplash.com/photo-1558442074-3c1926663f7c?auto=format&fit=crop&q=80&w=2000' },
            { title: 'Facade Section', type: 'Section', imageUrl: 'https://images.unsplash.com/photo-1581093450021-4a7360e9a6b5?auto=format&fit=crop&q=80&w=2000' }
        ]
    },
    {
        id: '2',
        slug: 'vertex-corporate-hub',
        title: 'The Vertex Corporate Hub',
        category: 'Commercial Office',
        location: 'London, UK',
        year: '2024',
        technicalDescription: 'Advanced Revit workflows for facade design and complex interior spatial coordination.',
        description: 'Located in the heart of London, The Vertex Corporate Hub is a benchmark for smart office design. Our team utilized advanced Revit workflows to model the intricate double-skin facade and manage complex interior fit-outs. The focus was on precise spatial coordination to accommodate smart building systems.',
        heroImage: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2070',
        bimLevel: 'LOD 350',
        tools: ['Revit', 'BIM 360', 'Enscape'],
        scope: 'Facade Design + Interior Coordination',
        projectType: 'Commercial',
        drawings: [
            { title: 'Site Layout', type: 'Plan', imageUrl: '/images/site_layout_bim.png' },
            { title: 'Atrium Section', type: 'Section', imageUrl: '/images/atrium_section_bim.png' }
        ]
    },
    {
        id: '3',
        slug: 'sky-line-airport',
        title: 'Sky-Line Airport Expansion',
        category: 'Infrastructure',
        location: 'Singapore',
        year: '2023',
        technicalDescription: 'Large-scale BIM implementation for terminal expansion with precise spatial validation.',
        description: 'The Sky-Line Airport Expansion in Singapore required a robust BIM strategy to manage vast amounts of data. We implemented high-precision spatial validation to ensure seamless integration of new terminal structures with existing infrastructure, managing over 500,000 unique assets.',
        heroImage: 'https://images.unsplash.com/photo-1473862170180-84427c485aca?auto=format&fit=crop&q=80&w=2070',
        bimLevel: 'LOD 500',
        tools: ['Revit', 'CodeBook', 'Navisworks'],
        scope: 'Large-scale BIM + Spatial Validation',
        projectType: 'Infrastructure',
        drawings: [
            { title: 'Concourse Level 1', type: 'Plan', imageUrl: 'https://images.unsplash.com/photo-1564070049449-74d75d68d189?auto=format&fit=crop&q=80&w=2000' }
        ]
    },
    {
        id: '4',
        slug: 'zenith-arts-center',
        title: 'Zenith Arts Center',
        category: 'Cultural Landmark',
        location: 'New York, USA',
        year: '2022',
        technicalDescription: 'Complex parametric modeling for iconic cultural architecture with high-fidelity Revit details.',
        description: 'The Zenith Arts Center in New York stands as a testament to parametric design capability. We used Rhino and Grasshopper integrated with Revit to model the iconic sweeping curves of the auditorium. High-fidelity detailing ensured the complex geometry was buildable and aesthetically true to the vision.',
        heroImage: '/images/zenith_arts_center.png',
        bimLevel: 'LOD 400',
        tools: ['Revit', 'Rhino', 'Grasshopper'],
        scope: 'Parametric Modeling + Detailing',
        projectType: 'Cultural',
        drawings: [
            { title: 'Auditorium Section', type: 'Section', imageUrl: 'https://images.unsplash.com/photo-1558442074-3c1926663f7c?auto=format&fit=crop&q=80&w=2000' }
        ]
    }
];

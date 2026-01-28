import { ArrowUpRight } from 'lucide-react';

const projects = [
  {
    title: 'Commercial Tower Complex',
    category: 'Architecture & MEP',
    location: 'Dubai, UAE',
    image: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&q=80',
  },
  {
    title: 'Healthcare Facility',
    category: 'Full BIM Coordination',
    location: 'Mumbai, India',
    image: 'https://images.unsplash.com/photo-1587351021759-3e566b6af7cc?w=800&q=80',
  },
  {
    title: 'Residential Development',
    category: 'Structural BIM',
    location: 'Singapore',
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=80',
  },
  {
    title: 'Industrial Complex',
    category: 'MEP Systems',
    location: 'Qatar',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="section">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div>
            <p className="text-sm font-medium text-primary uppercase tracking-widest mb-4">
              Our Work
            </p>
            <h2 className="text-foreground">
              Featured Projects
            </h2>
          </div>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:gap-3 transition-all"
          >
            View all projects <ArrowUpRight size={16} />
          </a>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="group relative overflow-hidden rounded-3xl aspect-[4/3] cursor-pointer"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Image */}
              <img
                src={project.image}
                alt={project.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

              {/* Content */}
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <span className="inline-block px-3 py-1 bg-primary/20 backdrop-blur-sm text-primary-foreground text-xs font-medium rounded-full mb-3">
                    {project.category}
                  </span>
                  <h3 className="text-2xl font-semibold text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-white/70 text-sm">
                    {project.location}
                  </p>
                </div>

                {/* Arrow */}
                <div className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:scale-100 scale-50">
                  <ArrowUpRight className="text-white" size={20} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

import { Building, Thermometer, Columns, Layers, Calculator, ArrowRight } from 'lucide-react';

const services = [
  {
    icon: Building,
    title: 'Architecture BIM',
    description: '2D plans, sections, elevations, and intelligent 3D models built for precision and collaboration.',
    features: ['Floor Plans', 'Sections & Elevations', '3D Models', 'Design Documentation'],
  },
  {
    icon: Thermometer,
    title: 'MEP BIM',
    description: 'HVAC, plumbing, drainage, and fire fighting systems with clash-free coordination.',
    features: ['HVAC Systems', 'Plumbing', 'Drainage', 'Fire Fighting'],
  },
  {
    icon: Columns,
    title: 'Structural BIM',
    description: 'Rebar detailing, beams, columns, and construction-ready structural models.',
    features: ['Rebar Detailing', 'Beams & Columns', 'Foundation Design', 'Shop Drawings'],
  },
  {
    icon: Layers,
    title: '2D + 3D Integration',
    description: 'Single source of truth BIM models ensuring seamless coordination across disciplines.',
    features: ['Clash Detection', 'Coordination', 'Federated Models', 'Visualization'],
  },
  {
    icon: Calculator,
    title: 'BOQs & Quantities',
    description: 'Accurate take-offs directly from BIM models for precise cost control.',
    features: ['Quantity Take-offs', 'Cost Estimation', 'Material Schedules', 'Reporting'],
  },
];

const Services = () => {
  return (
    <section id="services" className="section section-alt">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-sm font-medium text-primary uppercase tracking-widest mb-4">
            Our Services
          </p>
          <h2 className="text-foreground mb-6">
            Comprehensive BIM Solutions
          </h2>
          <p className="text-lg text-muted-foreground">
            End-to-end BIM services for architecture, MEP, and structural engineering projects of any scale.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="service-card group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative z-10">
                {/* Icon */}
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                  <service.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {service.features.map((feature) => (
                    <span
                      key={feature}
                      className="px-3 py-1 text-xs font-medium bg-muted text-muted-foreground rounded-full"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                {/* Link */}
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:gap-3 transition-all"
                >
                  Learn more <ArrowRight size={16} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

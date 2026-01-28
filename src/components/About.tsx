import { Building2, Globe, Award, Users } from 'lucide-react';

const stats = [
  { icon: Building2, value: '500+', label: 'Projects Delivered' },
  { icon: Globe, value: '15+', label: 'Countries Served' },
  { icon: Award, value: '12+', label: 'Years Experience' },
  { icon: Users, value: '50+', label: 'Expert Engineers' },
];

const About = () => {
  return (
    <section id="about" className="section">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <p className="text-sm font-medium text-primary uppercase tracking-widest mb-4">
            About Us
          </p>
          <h2 className="text-foreground mb-6">
            Global BIM Expertise.
            <br />
            <span className="gradient-text">Engineering Precision.</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Jithesh Technologies Private Limited is a BIM-focused engineering consultancy 
            delivering Revit-based solutions for complex construction projects worldwide. 
            We partner with architects, engineers, and developers to transform vision into reality.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="glass-card rounded-2xl p-6 md:p-8 text-center group hover:-translate-y-1 transition-all duration-300"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                <stat.icon className="w-6 h-6 text-primary" />
              </div>
              <div className="text-3xl md:text-4xl font-bold text-foreground mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Trust Statement */}
        <div className="mt-20 text-center">
          <p className="text-muted-foreground text-sm uppercase tracking-widest mb-8">
            Trusted by leading firms worldwide
          </p>
          <div className="flex flex-wrap items-center justify-center gap-12 opacity-60">
            {['Architecture Firms', 'MEP Consultants', 'Contractors', 'Developers'].map((client) => (
              <div key={client} className="text-foreground font-medium">
                {client}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

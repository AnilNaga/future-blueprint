import { GraduationCap, Briefcase, CheckCircle, ArrowRight } from 'lucide-react';

const courses = [
  {
    title: 'Revit Architecture',
    duration: '3 Months',
    level: 'Beginner to Advanced',
  },
  {
    title: 'Revit MEP',
    duration: '3 Months',
    level: 'Beginner to Advanced',
  },
  {
    title: 'Revit Structure',
    duration: '2 Months',
    level: 'Intermediate',
  },
];

const benefits = [
  'Industry-focused curriculum',
  'Real project exposure',
  'Internship opportunities',
  'Job placement assistance',
  'Certified instructors',
  'Flexible schedules',
];

const Training = () => {
  return (
    <section id="training" className="section section-alt">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <div>
            <p className="text-sm font-medium text-primary uppercase tracking-widest mb-4">
              Training & Internships
            </p>
            <h2 className="text-foreground mb-6">
              Learn BIM.
              <br />
              <span className="gradient-text">Build Careers.</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Industry-focused Revit training with real project exposure. 
              Our internship to employment pipeline has helped hundreds of 
              engineers launch successful BIM careers.
            </p>

            {/* Benefits Grid */}
            <div className="grid sm:grid-cols-2 gap-4 mb-10">
              {benefits.map((benefit) => (
                <div key={benefit} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-muted-foreground">{benefit}</span>
                </div>
              ))}
            </div>

            <a
              href="#contact"
              className="btn-primary inline-flex items-center gap-2"
            >
              Apply for Internship <ArrowRight size={18} />
            </a>
          </div>

          {/* Right Content - Courses */}
          <div className="space-y-6">
            {courses.map((course, index) => (
              <div
                key={course.title}
                className="glass-card rounded-2xl p-6 flex items-center gap-6 hover:-translate-y-1 transition-all duration-300"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <GraduationCap className="w-8 h-8 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-foreground mb-1">
                    {course.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {course.duration} • {course.level}
                  </p>
                </div>
                <Briefcase className="w-5 h-5 text-primary" />
              </div>
            ))}

            {/* CTA Card */}
            <div className="bg-primary rounded-2xl p-8 text-center">
              <h3 className="text-xl font-semibold text-primary-foreground mb-2">
                Ready to Start?
              </h3>
              <p className="text-primary-foreground/80 mb-6">
                Join our next batch and transform your career.
              </p>
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-white text-primary font-medium hover:-translate-y-0.5 transition-transform"
              >
                Enroll Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Training;

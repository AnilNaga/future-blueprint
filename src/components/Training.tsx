import { GraduationCap, Briefcase, CheckCircle, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { useScrollAnimation, fadeInUpVariants, staggerContainerVariants, slideInLeftVariants, slideInRightVariants } from '@/hooks/useScrollAnimation';

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
  const { ref: contentRef, isInView: contentInView } = useScrollAnimation();
  const { ref: coursesRef, isInView: coursesInView } = useScrollAnimation();

  return (
    <section id="training" className="section section-alt">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <motion.div
            ref={contentRef}
            initial="hidden"
            animate={contentInView ? 'visible' : 'hidden'}
            variants={staggerContainerVariants}
          >
            <motion.p 
              variants={slideInLeftVariants}
              className="text-sm font-medium text-primary uppercase tracking-widest mb-4"
            >
              Training & Internships
            </motion.p>
            <motion.h2 
              variants={slideInLeftVariants}
              className="text-foreground mb-6"
            >
              Learn BIM.
              <br />
              <span className="gradient-text">Build Careers.</span>
            </motion.h2>
            <motion.p 
              variants={slideInLeftVariants}
              className="text-lg text-muted-foreground mb-8 leading-relaxed"
            >
              Industry-focused Revit training with real project exposure. 
              Our internship to employment pipeline has helped hundreds of 
              engineers launch successful BIM careers.
            </motion.p>

            {/* Benefits Grid */}
            <motion.div 
              variants={staggerContainerVariants}
              className="grid sm:grid-cols-2 gap-4 mb-10"
            >
              {benefits.map((benefit, index) => (
                <motion.div 
                  key={benefit} 
                  className="flex items-center gap-3"
                  variants={fadeInUpVariants}
                  custom={index}
                >
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    transition={{ duration: 0.2 }}
                  >
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  </motion.div>
                  <span className="text-muted-foreground">{benefit}</span>
                </motion.div>
              ))}
            </motion.div>

            <motion.a
              variants={fadeInUpVariants}
              href="#contact"
              className="btn-primary inline-flex items-center gap-2"
              whileHover={{ y: -4, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Apply for Internship <ArrowRight size={18} />
            </motion.a>
          </motion.div>

          {/* Right Content - Courses */}
          <motion.div 
            ref={coursesRef}
            initial="hidden"
            animate={coursesInView ? 'visible' : 'hidden'}
            variants={staggerContainerVariants}
            className="space-y-6"
          >
            {courses.map((course, index) => (
              <motion.div
                key={course.title}
                variants={slideInRightVariants}
                custom={index}
                whileHover={{ y: -4, scale: 1.01 }}
                transition={{ duration: 0.3 }}
                className="glass-card rounded-2xl p-6 flex items-center gap-6"
              >
                <motion.div 
                  className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  <GraduationCap className="w-8 h-8 text-primary" />
                </motion.div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-foreground mb-1">
                    {course.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {course.duration} • {course.level}
                  </p>
                </div>
                <Briefcase className="w-5 h-5 text-primary" />
              </motion.div>
            ))}

            {/* CTA Card */}
            <motion.div 
              variants={slideInRightVariants}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="bg-primary rounded-2xl p-8 text-center shadow-button"
            >
              <h3 className="text-xl font-semibold text-primary-foreground mb-2">
                Ready to Start?
              </h3>
              <p className="text-primary-foreground/80 mb-6">
                Join our next batch and transform your career.
              </p>
              <motion.a
                href="#contact"
                className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-white text-primary font-medium"
                whileHover={{ y: -2, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Enroll Now
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Training;

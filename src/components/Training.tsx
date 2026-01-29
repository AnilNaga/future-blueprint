import { GraduationCap, Briefcase, CheckCircle, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
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
    <section id="training" className="section bg-white/[0.02]">
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
              className="text-sm font-bold text-primary uppercase tracking-[0.3em] mb-4"
            >
              Academy & Careers
            </motion.p>
            <motion.h2
              variants={slideInLeftVariants}
              className="mb-8"
            >
              Master BIM.
              <br />
              <span className="gradient-text">Enable Your Future.</span>
            </motion.h2>
            <motion.p
              variants={slideInLeftVariants}
              className="text-lg text-slate-500 mb-10 leading-relaxed font-medium"
            >
              Industry-aligned Revit training with immersive project simulations.
              Our talent pipeline connects ambitious engineers with global BIM leadership opportunities.
            </motion.p>

            {/* Benefits Grid */}
            <motion.div
              variants={staggerContainerVariants}
              className="grid sm:grid-cols-2 gap-6 mb-12"
            >
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit}
                  className="flex items-center gap-4 group"
                  variants={fadeInUpVariants}
                  custom={index}
                >
                  <motion.div
                    className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary transition-colors"
                    whileHover={{ scale: 1.2 }}
                  >
                    <CheckCircle className="w-4 h-4 text-primary group-hover:text-white transition-colors" />
                  </motion.div>
                  <span className="text-slate-600 font-medium">{benefit}</span>
                </motion.div>
              ))}
            </motion.div>

            <Link
              to="/contact"
              className="btn-primary inline-block"
            >
              Join the Academy
            </Link>
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
                whileHover={{ y: -6, scale: 1.01 }}
                transition={{ duration: 0.4, ease: 'easeOut' }}
                className="glass-card rounded-3xl p-6 md:p-8 flex items-center gap-6 group border border-white/20 shadow-xl"
              >
                <motion.div
                  className="w-14 h-14 rounded-xl bg-white flex items-center justify-center flex-shrink-0 group-hover:bg-primary transition-all duration-500 shadow-md border border-slate-100"
                  whileHover={{ scale: 1.05, rotate: 5 }}
                >
                  <GraduationCap className="w-7 h-7 text-primary group-hover:text-white transition-colors duration-500" />
                </motion.div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-slate-900 mb-0.5 group-hover:text-primary transition-colors leading-tight">
                    {course.title}
                  </h3>
                  <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">
                    {course.duration} • {course.level}
                  </p>
                </div>
                <Briefcase className="w-5 h-5 text-slate-200 group-hover:text-primary transition-all group-hover:scale-110" />
              </motion.div>
            ))}

            {/* CTA Card */}
            <motion.div
              variants={slideInRightVariants}
              whileHover={{ y: -6 }}
              className="relative overflow-hidden rounded-[32px] p-10 text-center shadow-2xl group border border-white/20"
            >
              <div className="absolute inset-0 bg-white" />
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent" />

              <div className="relative z-10">
                <h3 className="text-xl font-bold text-slate-900 mb-2 tracking-tight">
                  Ready to Accelerate?
                </h3>
                <p className="text-slate-600 mb-6 text-base font-medium">
                  Our next cohort begins soon. Secure your spot in the future of engineering.
                </p>
                <Link
                  to="/contact"
                  className="btn-primary px-8 py-3 text-sm inline-block"
                >
                  Secure Enrollment
                </Link>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Training;

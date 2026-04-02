import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Briefcase } from 'lucide-react';

const experiences = [
  {
    title: 'Software Engineer',
    company: 'Skills Outsource Think',
    period: 'Sep 2022 – Present',
    achievements: [
      'Engineered scalable RESTful APIs using NestJS, reducing server response times by 40%',
      'Designed and implemented a real-time notification system using Socket.IO for 10,000+ concurrent users',
      'Integrated Power BI dashboards within Angular apps for data-driven decision-making',
      'Built a comprehensive HRMS ERP handling payroll, compliance, and student management',
      'Optimized PostgreSQL queries and database schemas, improving throughput by 35%',
    ],
  },
  {
    title: 'Junior Software Engineer',
    company: 'Amethyst IT Services',
    period: 'Aug 2019 – Sep 2022',
    achievements: [
      'Developed full-stack web applications using Angular, Node.js, and MongoDB',
      'Implemented CI/CD pipelines with Docker, reducing deployment time by 50%',
      'Built a home services booking platform with real-time tracking and payment integration',
      'Created a digital advertising platform managing multi-channel campaign analytics',
      'Collaborated with cross-functional teams to deliver 5+ enterprise-level projects',
    ],
  },
];

export default function ExperienceSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="experience" className="py-24 px-6" ref={ref}>
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm tracking-[0.2em] uppercase text-primary mb-3">Career</p>
          <h2 className="text-3xl md:text-4xl font-bold">
            Work <span className="text-gradient">Experience</span>
          </h2>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-6 md:left-8 top-0 bottom-0 w-px bg-border" />

          <div className="space-y-12">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + i * 0.2 }}
                className="relative pl-16 md:pl-20"
              >
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-6 top-1 w-4 h-4 rounded-full border-2 border-primary bg-background" />

                <div className="glass-card glow-border p-6">
                  <div className="flex items-start gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0"
                      style={{ backgroundImage: 'var(--gradient-primary)' }}>
                      <Briefcase className="w-5 h-5 text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground">{exp.title}</h3>
                      <p className="text-primary text-sm">{exp.company}</p>
                      <p className="text-muted-foreground text-xs mt-1">{exp.period}</p>
                    </div>
                  </div>

                  <ul className="space-y-2">
                    {exp.achievements.map((item, j) => (
                      <motion.li
                        key={j}
                        initial={{ opacity: 0, x: -10 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.4, delay: 0.4 + i * 0.2 + j * 0.08 }}
                        className="text-sm text-muted-foreground flex gap-2"
                      >
                        <span className="text-primary mt-1.5 shrink-0">▹</span>
                        {item}
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

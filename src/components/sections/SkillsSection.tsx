import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const skillCategories = [
  {
    title: 'Languages',
    skills: ['JavaScript', 'TypeScript', 'PHP', 'SQL'],
    color: 'hsl(217 91% 60%)',
  },
  {
    title: 'Backend',
    skills: ['Node.js', 'NestJS', 'Express.js', 'Laravel', 'REST APIs', 'GraphQL'],
    color: 'hsl(187 94% 43%)',
  },
  {
    title: 'Frontend',
    skills: ['Angular', 'React', 'HTML5', 'CSS3', 'Tailwind CSS'],
    color: 'hsl(262 83% 58%)',
  },
  {
    title: 'Databases',
    skills: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis', 'Elasticsearch'],
    color: 'hsl(142 71% 45%)',
  },
  {
    title: 'DevOps & Tools',
    skills: ['Docker', 'CI/CD', 'Git', 'AWS', 'Nginx', 'Socket.IO'],
    color: 'hsl(38 92% 50%)',
  },
];

export default function SkillsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="skills" className="py-24 px-6" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm tracking-[0.2em] uppercase text-primary mb-3">Expertise</p>
          <h2 className="text-3xl md:text-4xl font-bold">
            Technical <span className="text-gradient">Skills</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * i }}
              className="glass-card p-6 group hover:scale-[1.02] transition-all"
              style={{ borderColor: `${cat.color}20` }}
            >
              <h3
                className="text-lg font-semibold mb-4"
                style={{ color: cat.color }}
              >
                {cat.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 rounded-lg text-xs font-medium bg-muted text-foreground border border-border/50 hover:border-primary/50 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

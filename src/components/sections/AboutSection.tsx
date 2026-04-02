import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code2, Layers, Globe } from 'lucide-react';

const stats = [
  { icon: Code2, value: '6+', label: 'Years Experience' },
  { icon: Layers, value: '10+', label: 'Projects Delivered' },
  { icon: Globe, value: '8+', label: 'Industry Domains' },
];

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="py-24 px-6" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm tracking-[0.2em] uppercase text-primary mb-3">About Me</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Crafting Digital <span className="text-gradient">Experiences</span>
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto text-lg leading-relaxed">
            Full-stack software engineer with expertise in designing and developing scalable web applications.
            Proficient in JavaScript/TypeScript ecosystems with hands-on experience in building RESTful APIs,
            microservices, and real-time systems across industries including aerospace, fintech, edtech, and e-commerce.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.15 }}
              className="glass-card glow-border p-8 text-center group hover:scale-105 transition-transform"
            >
              <div className="w-14 h-14 rounded-xl mx-auto mb-4 flex items-center justify-center"
                style={{ backgroundImage: 'var(--gradient-primary)' }}>
                <stat.icon className="w-7 h-7 text-primary-foreground" />
              </div>
              <p className="text-4xl font-bold text-gradient mb-2">{stat.value}</p>
              <p className="text-muted-foreground text-sm">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

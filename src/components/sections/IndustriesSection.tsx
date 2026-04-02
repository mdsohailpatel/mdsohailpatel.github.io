import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Plane, Landmark, GraduationCap, ShoppingCart, Users, Megaphone, Brain, HeartPulse } from 'lucide-react';

const industries = [
  { icon: Plane, label: 'Aerospace', color: 'hsl(217 91% 60%)' },
  { icon: Landmark, label: 'Finance', color: 'hsl(38 92% 50%)' },
  { icon: GraduationCap, label: 'Education', color: 'hsl(142 71% 45%)' },
  { icon: ShoppingCart, label: 'E-Commerce', color: 'hsl(262 83% 58%)' },
  { icon: Users, label: 'HR Tech', color: 'hsl(187 94% 43%)' },
  { icon: Megaphone, label: 'Ad Tech', color: 'hsl(0 84% 60%)' },
  { icon: Brain, label: 'AI / ML', color: 'hsl(217 91% 60%)' },
  { icon: HeartPulse, label: 'Home Services', color: 'hsl(142 71% 45%)' },
];

export default function IndustriesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="py-24 px-6" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm tracking-[0.2em] uppercase text-primary mb-3">Domains</p>
          <h2 className="text-3xl md:text-4xl font-bold">
            Industry <span className="text-gradient">Experience</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {industries.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: 0.05 * i }}
              className="glass-card p-6 text-center group hover:scale-105 transition-transform cursor-default"
            >
              <item.icon
                className="w-8 h-8 mx-auto mb-3 transition-colors"
                style={{ color: item.color }}
              />
              <p className="text-sm font-medium text-foreground">{item.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

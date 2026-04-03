import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import Scene3D from '../Scene3D';

const floatingText = {
  animate: {
    y: [0, -8, 0],
    transition: { repeat: Infinity, duration: 4, ease: 'easeInOut' },
  },
};

export default function HeroSection() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <Scene3D />

      {/* Animated gradient orbs */}
      <motion.div
        className="absolute w-[500px] h-[500px] rounded-full opacity-20 blur-[120px]"
        style={{ background: 'hsl(270 95% 65%)' }}
        animate={{ x: [0, 80, 0], y: [0, -60, 0], scale: [1, 1.2, 1] }}
        transition={{ repeat: Infinity, duration: 8, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute w-[400px] h-[400px] rounded-full opacity-15 blur-[100px]"
        style={{ background: 'hsl(330 90% 60%)' }}
        animate={{ x: [0, -70, 0], y: [0, 50, 0], scale: [1.1, 0.9, 1.1] }}
        transition={{ repeat: Infinity, duration: 10, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute w-[300px] h-[300px] rounded-full opacity-15 blur-[80px]"
        style={{ background: 'hsl(170 80% 50%)' }}
        animate={{ x: [50, -50, 50], y: [-30, 40, -30] }}
        transition={{ repeat: Infinity, duration: 12, ease: 'easeInOut' }}
      />

      <div className="relative z-10 text-center px-6 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.p
            className="text-sm md:text-base tracking-[0.3em] uppercase text-muted-foreground mb-4"
            {...floatingText}
          >
            Senior Software Engineer
          </motion.p>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.4, type: 'spring', stiffness: 100 }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
        >
          <motion.span
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            Mohammedsohail{' '}
          </motion.span>
          <motion.span
            className="text-gradient"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            Patel
          </motion.span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10"
        >
          Building scalable, high-performance systems for 6+ years.
          Specializing in full-stack web architectures and real-time applications.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="flex gap-4 justify-center"
        >
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.08, boxShadow: '0 0 30px hsl(270 95% 65% / 0.4)' }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 rounded-lg text-sm font-semibold text-primary-foreground transition-all"
            style={{ backgroundImage: 'var(--gradient-primary)' }}
          >
            View Projects
          </motion.a>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.08, borderColor: 'hsl(270 95% 65%)' }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 rounded-lg text-sm font-semibold border border-border text-foreground hover:bg-muted transition-all"
          >
            Get in Touch
          </motion.a>
        </motion.div>
      </div>

      <motion.div
        animate={{ y: [0, 12, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <a href="#about">
          <ChevronDown className="w-6 h-6 text-muted-foreground" />
        </a>
      </motion.div>
    </section>
  );
}

import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import Scene3D from '../Scene3D';

export default function HeroSection() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <Scene3D />

      <div className="relative z-10 text-center px-6 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <p className="text-sm md:text-base tracking-[0.3em] uppercase text-muted-foreground mb-4">
            Senior Software Engineer
          </p>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
        >
          Mohammedsohail{' '}
          <span className="text-gradient">Patel</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10"
        >
          Building scalable, high-performance systems for 6+ years.
          Specializing in full-stack web architectures and real-time applications.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex gap-4 justify-center"
        >
          <a
            href="#projects"
            className="px-8 py-3 rounded-lg text-sm font-semibold text-primary-foreground transition-all hover:scale-105"
            style={{ backgroundImage: 'var(--gradient-primary)' }}
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="px-8 py-3 rounded-lg text-sm font-semibold border border-border text-foreground hover:bg-muted transition-all hover:scale-105"
          >
            Get in Touch
          </a>
        </motion.div>
      </div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
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

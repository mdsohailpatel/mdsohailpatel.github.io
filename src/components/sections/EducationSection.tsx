import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { GraduationCap, Award } from 'lucide-react';

const certs = [
  { title: 'MongoDB Developer Path', issuer: 'MongoDB University' },
  { title: 'GitHub Code Search', issuer: 'GitHub' },
];

export default function EducationSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="py-24 px-6" ref={ref}>
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm tracking-[0.2em] uppercase text-primary mb-3">Education</p>
          <h2 className="text-3xl md:text-4xl font-bold">
            Education & <span className="text-gradient">Certifications</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="glass-card glow-border p-8"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center"
                style={{ backgroundImage: 'var(--gradient-primary)' }}>
                <GraduationCap className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">Bachelor of Computer Applications</h3>
                <p className="text-sm text-muted-foreground">BCA</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground">SECAB Institute of Engineering & Technology</p>
            <p className="text-xs text-muted-foreground mt-1">Vijayapura, Karnataka • 2016 – 2019</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="glass-card glow-border p-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center"
                style={{ backgroundImage: 'var(--gradient-primary)' }}>
                <Award className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="font-semibold text-foreground">Certifications</h3>
            </div>
            <div className="space-y-3">
              {certs.map((cert) => (
                <div key={cert.title} className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary shrink-0" />
                  <div>
                    <p className="text-sm font-medium text-foreground">{cert.title}</p>
                    <p className="text-xs text-muted-foreground">{cert.issuer}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

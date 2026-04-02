import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { BarChart3, Home, Megaphone, GraduationCap, ExternalLink } from 'lucide-react';

const projects = [
  {
    icon: BarChart3,
    title: 'Trigoscope',
    subtitle: 'Aerospace Quality Management',
    description: 'Enterprise quality management platform for aerospace manufacturing with integrated Power BI dashboards, real-time defect tracking, and compliance reporting.',
    tags: ['NestJS', 'Angular', 'Power BI', 'PostgreSQL', 'Socket.IO'],
    color: 'hsl(217 91% 60%)',
  },
  {
    icon: Home,
    title: 'Abby Services',
    subtitle: 'Home Services Platform',
    description: 'Full-featured marketplace connecting homeowners with service providers. Includes booking management, real-time tracking, payment integration, and review system.',
    tags: ['Node.js', 'Angular', 'MongoDB', 'Stripe', 'Redis'],
    color: 'hsl(187 94% 43%)',
  },
  {
    icon: Megaphone,
    title: 'Admoove',
    subtitle: 'Digital Advertising Platform',
    description: 'Multi-channel advertising management system with campaign analytics, social media integration, budget optimization, and ROI tracking dashboards.',
    tags: ['Laravel', 'Angular', 'MySQL', 'REST API', 'Charts'],
    color: 'hsl(262 83% 58%)',
  },
  {
    icon: GraduationCap,
    title: 'HRMS ERP',
    subtitle: 'EdTech Management System',
    description: 'Comprehensive ERP system handling payroll processing, attendance tracking, compliance management, student enrollment, and academic performance analytics.',
    tags: ['NestJS', 'Angular', 'PostgreSQL', 'Docker', 'CI/CD'],
    color: 'hsl(142 71% 45%)',
  },
];

function ProjectCard({ project, index, isInView }: { project: typeof projects[0]; index: number; isInView: boolean }) {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({ x: y * -10, y: x * 10 });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: 0.1 * index }}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setTilt({ x: 0, y: 0 })}
      style={{
        transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
        transition: 'transform 0.15s ease-out',
      }}
      className="glass-card p-6 group hover:glow-border transition-all"
    >
      <div className="flex items-center gap-3 mb-4">
        <div
          className="w-10 h-10 rounded-lg flex items-center justify-center"
          style={{ backgroundColor: `${project.color}20` }}
        >
          <project.icon className="w-5 h-5" style={{ color: project.color }} />
        </div>
        <div>
          <h3 className="font-semibold text-foreground">{project.title}</h3>
          <p className="text-xs text-muted-foreground">{project.subtitle}</p>
        </div>
        <ExternalLink className="w-4 h-4 text-muted-foreground ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
      </div>

      <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{project.description}</p>

      <div className="flex flex-wrap gap-1.5">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="px-2 py-1 rounded text-xs font-medium bg-muted text-muted-foreground border border-border/50"
          >
            {tag}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

export default function ProjectsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="projects" className="py-24 px-6" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm tracking-[0.2em] uppercase text-primary mb-3">Portfolio</p>
          <h2 className="text-3xl md:text-4xl font-bold">
            Key <span className="text-gradient">Projects</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} isInView={isInView} />
          ))}
        </div>
      </div>
    </section>
  );
}

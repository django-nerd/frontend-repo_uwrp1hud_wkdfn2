import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'Realtime Dashboard',
    desc: 'Streaming analytics dashboard with WebSocket updates and dynamic charts.',
    tech: ['Next.js', 'TypeScript', 'WebSocket', 'Tailwind'],
    link: '#'
  },
  {
    title: 'E‑commerce Platform',
    desc: 'Headless commerce with product search, payments, and order management.',
    tech: ['React', 'Node', 'Stripe', 'PostgreSQL'],
    link: '#'
  },
  {
    title: 'Design System',
    desc: 'Accessible component library with tokens, theming, and docs.',
    tech: ['Storybook', 'Radix UI', 'CSS Vars'],
    link: '#'
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl font-bold text-white mb-10"
        >
          Projects
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((p) => (
            <motion.a
              href={p.link}
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="group rounded-2xl border border-white/10 bg-white/5 p-6 hover:border-cyan-400/40 hover:bg-white/10 transition"
            >
              <div className="flex items-start justify-between">
                <h3 className="text-white font-semibold group-hover:text-cyan-100">{p.title}</h3>
                <ExternalLink size={16} className="text-slate-400 group-hover:text-cyan-200" />
              </div>
              <p className="mt-2 text-slate-300">{p.desc}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tech.map(t => (
                  <span key={t} className="px-2 py-1 rounded-md bg-slate-900/50 border border-white/10 text-slate-300 text-xs">{t}</span>
                ))}
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}

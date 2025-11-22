import { motion } from 'framer-motion';

const experiences = [
  { company: 'Acme Corp', role: 'Senior Software Engineer', period: '2022 — Present', points: [
    'Led migration to microfrontends and design system adoption',
    'Shipped real‑time analytics platform scaling to 1M+ events/day',
  ]},
  { company: 'Tech Labs', role: 'Full‑stack Engineer', period: '2019 — 2022', points: [
    'Built internal developer platform improving DX and velocity',
    'Designed GraphQL APIs and resilient background jobs',
  ]},
  { company: 'Startup XYZ', role: 'Frontend Engineer', period: '2017 — 2019', points: [
    'Created component library and accessibility standards',
    'Optimized performance to 95+ Lighthouse scores',
  ]},
];

export default function Experience() {
  return (
    <section id="experience" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl font-bold text-white mb-10"
        >
          Experience
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-6">
          {experiences.map((exp) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="rounded-2xl border border-white/10 bg-white/5 p-6"
            >
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-white font-semibold">{exp.company}</h3>
                  <p className="text-slate-300">{exp.role}</p>
                </div>
                <span className="text-xs text-slate-400">{exp.period}</span>
              </div>
              <ul className="mt-4 space-y-2 text-slate-300 list-disc list-inside">
                {exp.points.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

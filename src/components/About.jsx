import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="relative py-20">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_20%_0%,rgba(56,189,248,0.12),transparent_40%),radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.08),transparent_35%)]" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-12 gap-10 items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="md:col-span-7"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white">About</h2>
            <p className="mt-4 text-slate-300 leading-relaxed">
              I build full-stack products with a focus on developer experience, UX, and performance. I enjoy
              typesafe systems, clean architecture, and bridging design with engineering using modern tools.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {['TypeScript', 'React', 'Next.js', 'Node', 'Python', 'FastAPI', 'PostgreSQL', 'AWS', 'Docker'].map((t) => (
                <span key={t} className="px-3 py-1 rounded-full bg-white/5 text-slate-200 border border-white/10 text-sm">{t}</span>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="md:col-span-5"
          >
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-white font-semibold">Quick Stats</h3>
              <ul className="mt-4 space-y-3 text-slate-300">
                <li>• 6+ years building web apps</li>
                <li>• Led teams of 3-8 engineers</li>
                <li>• 20+ shipped projects</li>
                <li>• Speaker & writer</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

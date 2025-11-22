import { motion } from 'framer-motion';

const posts = [
  { title: 'Shaping delightful DX', date: 'Sep 12, 2024', excerpt: 'Principles I use to design APIs and tools developers love.', link: '#' },
  { title: 'Type safety at scale', date: 'Aug 28, 2024', excerpt: 'How to keep types ergonomic while your codebase grows.', link: '#' },
  { title: 'Frontend performance 101', date: 'Aug 03, 2024', excerpt: 'Budgeting, metrics, and practical ways to speed up apps.', link: '#' },
];

export default function Blog() {
  return (
    <section id="blog" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl font-bold text-white mb-10"
        >
          Blog
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-6">
          {posts.map((p) => (
            <motion.a
              href={p.link}
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 hover:border-cyan-400/40 hover:bg-white/10 transition block"
            >
              <span className="text-xs text-slate-400">{p.date}</span>
              <h3 className="mt-2 text-white font-semibold">{p.title}</h3>
              <p className="mt-2 text-slate-300">{p.excerpt}</p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}

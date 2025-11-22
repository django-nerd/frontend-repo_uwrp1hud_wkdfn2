import { motion } from 'framer-motion';

const posts = [
  { title: 'Shaping delightful DX', date: 'Sep 12, 2024', excerpt: 'Principles I use to design APIs and tools developers love.', link: '/blog' },
  { title: 'Type safety at scale', date: 'Aug 28, 2024', excerpt: 'How to keep types ergonomic while your codebase grows.', link: '/blog' },
  { title: 'Frontend performance 101', date: 'Aug 03, 2024', excerpt: 'Budgeting, metrics, and practical ways to speed up apps.', link: '/blog' },
];

export default function Blog() {
  return (
    <section id="blog" className="py-20 relative overflow-hidden">
      {/* pastel blob */}
      <div className="pointer-events-none absolute -top-10 -right-10 h-56 w-56 rounded-full blur-3xl" style={{ background: 'linear-gradient(90deg, rgba(255,182,193,0.35), rgba(186,230,253,0.35))' }} />
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
              className="rounded-2xl border border-white/10 bg-white/5 p-6 hover:border-rose-200/60 hover:bg-white/10 transition block"
            >
              <span className="text-xs text-slate-400">{p.date}</span>
              <h3 className="mt-2 text-white font-semibold">{p.title}</h3>
              <p className="mt-2 text-slate-300">{p.excerpt}</p>
              <span className="mt-4 inline-block text-slate-900 font-medium rounded-md px-3 py-1 bg-gradient-to-r from-rose-200 via-sky-200 to-teal-200">Read more</span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}

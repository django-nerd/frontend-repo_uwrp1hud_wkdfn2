import { motion } from 'framer-motion';

const testimonials = [
  { name: 'Sarah Lee', role: 'CTO, Nova', quote: 'A rare blend of product thinking and engineering depth. Shipped our MVP in record time with exceptional quality.' },
  { name: 'Michael Chen', role: 'Head of Eng, Orbit', quote: 'Level‑headed, collaborative, and relentlessly focused on outcomes. A force multiplier for the team.' },
  { name: 'Priya Patel', role: 'Founder, Luma', quote: 'Turned complex requirements into a simple, elegant solution. Our users love it.' },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl font-bold text-white mb-10"
        >
          Testimonials
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="rounded-2xl border border-white/10 bg-white/5 p-6"
            >
              <p className="text-slate-200">“{t.quote}”</p>
              <div className="mt-4">
                <span className="text-white font-medium">{t.name}</span>
                <p className="text-slate-400 text-sm">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

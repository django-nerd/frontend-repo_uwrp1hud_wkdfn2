import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <section id="contact" className="py-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl font-bold text-white mb-6"
        >
          Let's build something great
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-slate-300"
        >
          I'm available for freelance work, consulting, and full‑time roles. Email me and I’ll get back within 24 hours.
        </motion.p>
        <a href="mailto:hello@example.com" className="inline-block mt-8 px-6 py-3 rounded-lg bg-gradient-to-r from-cyan-400 to-blue-500 text-slate-900 font-semibold hover:brightness-110 transition">
          hello@example.com
        </a>
      </div>
    </section>
  );
}

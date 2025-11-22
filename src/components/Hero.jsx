import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] pt-24 overflow-hidden">
      {/* Animated pastel aurora */}
      <motion.div
        aria-hidden
        className="absolute inset-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.8 }}
        transition={{ duration: 1.2 }}
      >
        <div className="absolute -top-20 left-0 h-72 w-[40rem] rounded-full blur-3xl"
             style={{ background: 'linear-gradient(90deg, rgba(255,182,193,0.35), rgba(186,230,253,0.35))' }} />
        <div className="absolute top-40 right-0 h-72 w-[36rem] rounded-full blur-3xl"
             style={{ background: 'linear-gradient(90deg, rgba(196,181,253,0.35), rgba(167,243,208,0.35))' }} />
      </motion.div>

      <div className="absolute inset-0 opacity-80">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-slate-900/40 via-slate-900/40 to-slate-950/80 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-12 gap-8 items-center min-h-[70vh]">
          <div className="md:col-span-7">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white"
            >
              Hi, I’m <span className="bg-clip-text text-transparent bg-gradient-to-r from-rose-200 via-sky-200 to-teal-200">Your Name</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="mt-4 text-lg text-slate-200/90 max-w-2xl"
            >
              Software Engineer crafting modern web apps with tasteful motion and pastel aesthetics.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="mt-8 flex flex-wrap gap-3"
            >
              <a href="#projects" className="px-5 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white border border-white/10 transition">View Projects</a>
              <a href="#contact" className="px-5 py-3 rounded-xl bg-gradient-to-r from-rose-200 via-sky-200 to-teal-200 text-slate-900 font-semibold hover:brightness-110 transition">Contact Me</a>
            </motion.div>
          </div>
          <div className="md:col-span-5" />
        </div>
      </div>
    </section>
  );
}

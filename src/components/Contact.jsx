import { useState } from 'react';
import { motion } from 'framer-motion';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('idle'); // idle | sending | success | error

  const backend = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000';

  const onSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    try {
      const res = await fetch(`${backend}/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, message })
      });
      if (!res.ok) throw new Error('Failed');
      setStatus('success');
      setName('');
      setEmail('');
      setMessage('');
    } catch (e) {
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="py-20 relative">
      {/* Pastel background accents */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -bottom-10 -right-10 h-80 w-80 rounded-full blur-3xl"
        style={{ background: 'radial-gradient(120px 120px at 70% 30%, rgba(147,197,253,0.45), transparent), radial-gradient(120px 120px at 30% 70%, rgba(196,181,253,0.4), transparent)'}}
        animate={{ y: [0, -8, 4, 0], rotate: [0, -8, 6, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
      />
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl font-bold text-white mb-6 text-center"
        >
          Let's build something great
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-slate-300 text-center"
        >
          Tell me about your project or idea and I'll reply within 24 hours.
        </motion.p>

        <form onSubmit={onSubmit} className="mt-8 space-y-4 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm text-slate-300 mb-2">Name</label>
              <input value={name} onChange={(e)=>setName(e.target.value)} required
                className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-300/50" placeholder="Ada Lovelace" />
            </div>
            <div>
              <label className="block text-sm text-slate-300 mb-2">Email</label>
              <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} required
                className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-rose-300/50" placeholder="you@example.com" />
            </div>
          </div>
          <div>
            <label className="block text-sm text-slate-300 mb-2">Message</label>
            <textarea value={message} onChange={(e)=>setMessage(e.target.value)} required rows={5}
              className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-300/50" placeholder="What would you like to build?" />
          </div>
          <div className="flex items-center gap-3">
            <button disabled={status==='sending'} type="submit" className="rounded-xl px-5 py-3 font-semibold text-slate-900 bg-gradient-to-r from-rose-200 via-sky-200 to-teal-200 hover:brightness-110 transition">
              {status==='sending' ? 'Sending...' : 'Send message'}
            </button>
            {status==='success' && <span className="text-emerald-300">Thanks! I’ll reach out soon.</span>}
            {status==='error' && <span className="text-rose-300">Something went wrong. Please try again.</span>}
          </div>
        </form>
      </div>
    </section>
  );
}

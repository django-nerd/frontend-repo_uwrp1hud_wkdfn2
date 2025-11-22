import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const PAGE_LIMIT = 6;

export default function BlogPage() {
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(false);
  const [q, setQ] = useState('');

  const backend = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000';

  const load = async (p = page, query = q) => {
    setLoading(true);
    try {
      const url = new URL('/blog', backend);
      url.searchParams.set('page', String(p));
      url.searchParams.set('limit', String(PAGE_LIMIT));
      if (query) url.searchParams.set('q', query);
      const res = await fetch(url.toString());
      const data = await res.json();
      setPosts(data.items || []);
      setTotal(data.total || 0);
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    load(1, q);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const totalPages = Math.max(1, Math.ceil(total / PAGE_LIMIT));

  const handlePageChange = (p) => {
    const np = Math.min(totalPages, Math.max(1, p));
    setPage(np);
    load(np, q);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSearch = (e) => {
    e.preventDefault();
    setPage(1);
    load(1, q);
  };

  return (
    <section className="pt-28 pb-20 relative">
      {/* Pastel floating blobs */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -top-20 -left-20 h-72 w-72 rounded-full blur-3xl"
        style={{ background: 'radial-gradient(100px 100px at 70% 30%, rgba(255,182,193,0.55), transparent), radial-gradient(120px 120px at 30% 70%, rgba(186,230,253,0.45), transparent)'}}
        animate={{ y: [0, 10, -4, 0], rotate: [0, 10, -6, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-5xl font-bold tracking-tight text-white"
        >
          Blog
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-2 text-slate-300 max-w-2xl"
        >
          Notes on engineering, UX, performance, and product—served with soft pastel vibes.
        </motion.p>

        {/* Search */}
        <form onSubmit={handleSearch} className="mt-8 flex items-center gap-3">
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Search posts..."
            className="w-full sm:w-80 rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-300/50"
          />
          <button
            type="submit"
            className="rounded-xl px-5 py-3 font-semibold text-slate-900 bg-gradient-to-r from-rose-200 via-sky-200 to-teal-200 hover:brightness-110 transition"
          >
            Search
          </button>
        </form>

        {/* Grid */}
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {loading && posts.length === 0 ? (
              <div className="col-span-full text-slate-400">Loading...</div>
            ) : posts.length === 0 ? (
              <div className="col-span-full text-slate-400">No posts found.</div>
            ) : (
              posts.map((p) => (
                <motion.article
                  key={p.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.5 }}
                  className="group overflow-hidden rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition"
                >
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <img src={p.image} alt="" className="h-full w-full object-cover object-center transition duration-700 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-slate-950/20 to-transparent" />
                  </div>
                  <div className="p-6">
                    <span className="text-xs text-slate-400">{new Date(p.date).toLocaleDateString()}</span>
                    <h3 className="mt-2 text-lg font-semibold text-white">{p.title}</h3>
                    <p className="mt-2 text-slate-300">{p.excerpt}</p>
                  </div>
                </motion.article>
              ))
            )}
          </AnimatePresence>
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="mt-10 flex items-center justify-center gap-2">
            <button
              onClick={() => handlePageChange(page - 1)}
              disabled={page === 1}
              className="rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-white disabled:opacity-40 hover:bg-white/10"
            >
              Prev
            </button>
            <div className="px-3 py-2 text-slate-300">Page {page} / {totalPages}</div>
            <button
              onClick={() => handlePageChange(page + 1)}
              disabled={page === totalPages}
              className="rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-white disabled:opacity-40 hover:bg-white/10"
            >
              Next
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

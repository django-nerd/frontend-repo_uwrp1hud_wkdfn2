import { Menu, Github, Linkedin, Mail } from "lucide-react";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLink = (href, label) => (
    <a
      href={href}
      onClick={() => setOpen(false)}
      className="px-4 py-2 text-slate-200/90 hover:text-white hover:bg-white/5 rounded-md transition"
    >
      {label}
    </a>
  );

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition ${scrolled ? "backdrop-blur-md bg-slate-900/60 border-b border-white/10" : "bg-transparent"}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          <a href="#home" className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-md bg-gradient-to-tr from-blue-500 to-cyan-400 ring-1 ring-white/20 shadow-md" />
            <span className="text-white font-semibold tracking-tight group-hover:text-cyan-100">
              Engineer Portfolio
            </span>
          </a>

          <nav className="hidden md:flex items-center gap-1">
            {navLink("#about", "About")}
            {navLink("#experience", "Experience")}
            {navLink("#projects", "Projects")}
            {navLink("#blog", "Blog")}
            {navLink("#testimonials", "Testimonials")}
            {navLink("#contact", "Contact")}
          </nav>

          <div className="hidden md:flex items-center gap-2">
            <a href="https://github.com" target="_blank" rel="noreferrer" className="p-2 rounded-md hover:bg-white/5 text-slate-200 hover:text-white transition"><Github size={18} /></a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="p-2 rounded-md hover:bg-white/5 text-slate-200 hover:text-white transition"><Linkedin size={18} /></a>
            <a href="#contact" className="ml-2 px-3 py-2 rounded-md bg-white/10 hover:bg-white/20 text-white text-sm font-medium transition border border-white/10">Get in touch</a>
          </div>

          <button className="md:hidden p-2 rounded-md hover:bg-white/5 text-white" onClick={() => setOpen(v => !v)} aria-label="Toggle Menu">
            <Menu />
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-white/10 bg-slate-900/80 backdrop-blur">
          <div className="px-4 py-3 flex flex-col">
            {navLink("#about", "About")}
            {navLink("#experience", "Experience")}
            {navLink("#projects", "Projects")}
            {navLink("#blog", "Blog")}
            {navLink("#testimonials", "Testimonials")}
            <a href="#contact" onClick={() => setOpen(false)} className="px-4 py-2 mt-1 text-slate-200/90 hover:text-white hover:bg-white/5 rounded-md transition flex items-center gap-2"><Mail size={16}/> Contact</a>
          </div>
        </div>
      )}
    </header>
  );
}

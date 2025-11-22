import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Blog from './components/Blog';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Blog />
      <Testimonials />
      <Contact />
      <footer className="py-10 border-t border-white/10 text-center text-slate-400">© {new Date().getFullYear()} Your Name — All rights reserved.</footer>
    </div>
  )
}

export default App

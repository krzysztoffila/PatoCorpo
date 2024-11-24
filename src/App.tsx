import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { Values } from './components/Values';
import { Metrics } from './components/Metrics';
import { About } from './components/About';
import { Testimonials } from './components/Testimonials';
import { CTA } from './components/CTA';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Values />
        <Metrics />
        <About />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Installation from './components/Installation';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';

function App() {
  return (
    <div className="min-h-screen bg-gray-900">
      <Navbar />
      <main>
        <Hero />
        <section id="features">
          <Features />
        </section>
        <section id="installation">
          <Installation />
        </section>
        <section id="testimonials">
          <Testimonials />
        </section>
        <section id="pricing">
          <Pricing />
        </section>
      </main>
    </div>
  );
}

export default App;
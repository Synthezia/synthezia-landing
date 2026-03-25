import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { HowItWorks } from './components/HowItWorks';
import { Privacy } from './components/Privacy';
import { Formats } from './components/Formats';
import { Roadmap } from './components/Roadmap';
import { DownloadCTA } from './components/DownloadCTA';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <Privacy />
        <Formats />
        <Roadmap />
        <DownloadCTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;

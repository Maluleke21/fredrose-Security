import { useState } from 'react';
import LoadingScreen from './components/LoadingScreen';
import OpsBar from './components/OpsBar';
import Header from './components/Header';
import Hero from './components/Hero';
import FloatingEmergency from './components/FloatingEmergency';
import TickerStrip from './components/TickerStrip';
import Services from './components/Services';
import WhyFredrose from './components/WhyFredrose';
import ForceBand from './components/ForceBand';
import Solutions from './components/Solutions';
import ResponseUnit from './components/ResponseUnit';
import ResponseBand from './components/ResponseBand';
import SystemsDiagram from './components/SystemsDiagram';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {loading && <LoadingScreen onFinish={() => setLoading(false)} />}
      <OpsBar />
      <div id="site-frame">
        <Header />
        <FloatingEmergency />
        <main>
          <Hero />
          <TickerStrip />
          <Services />
          <WhyFredrose />
          <ForceBand />
          <Solutions />
          <ResponseUnit />
          <ResponseBand />
          <SystemsDiagram />
          <About />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
}

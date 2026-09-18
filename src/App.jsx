import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import Intro from './components/sections/Intro';
import Routes from './components/sections/Routes';
import Philosophy from './components/sections/Philosophy';
import Enterprise from './components/sections/Enterprise';
import Lab from './components/sections/Lab';
import WhySupernova from './components/sections/WhySupernova';
import About from './components/sections/About';
import CtaFinal from './components/sections/CtaFinal';
import Contact from './components/sections/Contact';

function App() {
  return (
    <>
      <a href="#aprende" className="skip-link">Saltar al contenido principal</a>
      <Header />
      <main id="main-content">
        <Hero />
        <Intro />
        <Routes />
        <Philosophy />
        <Enterprise />
        <Lab />
        <WhySupernova />
        <About />
        <CtaFinal />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;

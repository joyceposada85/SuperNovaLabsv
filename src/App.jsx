import { useState } from 'react';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import Intro from './components/sections/Intro';
import Routes from './components/sections/Routes';
import Philosophy from './components/sections/Philosophy';
import Enterprise from './components/sections/Enterprise';
import Lab from './components/sections/Lab';
import WhySupernova from './components/sections/WhySupernova';
import Seals from './components/sections/Seals';
import About from './components/sections/About';
import CtaFinal from './components/sections/CtaFinal';
import Contact from './components/sections/Contact';

function App() {
  const [contactPrefill, setContactPrefill] = useState(null);

  const handleRequestCourseInfo = (courseFullName) => {
    setContactPrefill({
      interest: 'Cursos',
      message: `Me interesa recibir información sobre el curso: ${courseFullName}`,
    });

    const contactElement = document.querySelector('#contacto');
    if (contactElement) {
      contactElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <a href="#aprende" className="skip-link">Saltar al contenido principal</a>
      <Header />
      <main id="main-content">
        <Hero />
        <Intro />
        <Routes onRequestCourseInfo={handleRequestCourseInfo} />
        <Philosophy />
        <Enterprise />
        <Lab />
        <WhySupernova />
        <Seals />
        <About />
        <CtaFinal />
        <Contact prefillData={contactPrefill} />
      </main>
      <Footer />
    </>
  );
}

export default App;

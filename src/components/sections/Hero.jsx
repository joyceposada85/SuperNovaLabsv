import { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Users } from 'lucide-react';
import './Hero.css';

function OrbitalRings() {
  return (
    <div className="hero__orbital" aria-hidden="true">
      {/* Glow core */}
      <div className="hero__core">
        <div className="hero__core-inner" />
        <div className="hero__core-pulse" />
      </div>

      {/* Ring 1 — outer slow */}
      <div className="hero__ring hero__ring--1">
        <div className="hero__ring-dot" />
      </div>

      {/* Ring 2 — middle */}
      <div className="hero__ring hero__ring--2">
        <div className="hero__ring-dot" />
        <div className="hero__ring-dot hero__ring-dot--2" />
      </div>

      {/* Ring 3 — inner */}
      <div className="hero__ring hero__ring--3">
        <div className="hero__ring-dot" />
      </div>

      {/* Halo glow */}
      <div className="hero__halo hero__halo--1" />
      <div className="hero__halo hero__halo--2" />

      {/* Decorative lines */}
      <div className="hero__lines">
        {[...Array(8)].map((_, i) => (
          <div key={i} className="hero__line" style={{ '--line-angle': `${i * 45}deg` }} />
        ))}
      </div>
    </div>
  );
}

function ParticleField() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animId;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const particles = Array.from({ length: prefersReduced ? 0 : 60 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 1.2 + 0.3,
      dx: (Math.random() - 0.5) * 0.2,
      dy: (Math.random() - 0.5) * 0.2,
      alpha: Math.random() * 0.4 + 0.1,
    }));

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0, 229, 255, ${p.alpha})`;
        ctx.fill();
        p.x += p.dx;
        p.y += p.dy;
        if (p.x < 0 || p.x > canvas.width) p.dx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.dy *= -1;
      });
      animId = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return <canvas ref={canvasRef} className="hero__particles" aria-hidden="true" />;
}

const titleWords = ['Aprende.', 'Crea.', 'Transforma.'];

export default function Hero() {
  const handleNav = (href) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="inicio" className="hero" aria-label="Inicio">
      {/* Background layers */}
      <div className="hero__bg-gradient" aria-hidden="true" />
      <div className="grid-bg" aria-hidden="true" />
      <ParticleField />

      {/* Orbital element */}
      <OrbitalRings />

      <div className="hero__content container">
        {/* Brand label */}
        <motion.div
          className="hero__brand-label"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <span className="hero__brand-dot" aria-hidden="true" />
          SUPERNOVA LAB SV
        </motion.div>

        {/* Main title */}
        <h1 className="hero__title" aria-label="Aprende. Crea. Transforma.">
          {titleWords.map((word, i) => (
            <motion.span
              key={word}
              className={`hero__title-word ${i === 2 ? 'hero__title-word--highlight' : ''}`}
              initial={{ opacity: 0, y: 60, filter: 'blur(8px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={{
                duration: 0.8,
                delay: 0.4 + i * 0.15,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              {word}
            </motion.span>
          ))}
        </h1>

        {/* Description */}
        <motion.p
          className="hero__desc"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.9 }}
        >
          Formación tecnológica y soluciones digitales para personas y organizaciones
          que quieren convertir la tecnología en resultados.
        </motion.p>

        {/* CTAs */}
        <motion.div
          className="hero__actions"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.1 }}
        >
          <button
            className="btn btn-primary hero__btn"
            onClick={() => handleNav('#aprende')}
            aria-label="Explorar cursos disponibles"
          >
            Explorar cursos
            <ArrowRight size={16} />
          </button>
          <button
            className="btn btn-secondary hero__btn"
            onClick={() => handleNav('#empresas')}
            aria-label="Ver capacitación para equipos"
          >
            <Users size={16} />
            Capacita a tu equipo
          </button>
        </motion.div>

        {/* Location badge */}
        <motion.p
          className="hero__location"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.3 }}
        >
          <span className="hero__location-dot" aria-hidden="true" />
          Formación virtual para toda Latinoamérica.
        </motion.p>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="hero__scroll-indicator"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.6 }}
        aria-hidden="true"
      >
        <div className="hero__scroll-line" />
        <span>scroll</span>
      </motion.div>
    </section>
  );
}

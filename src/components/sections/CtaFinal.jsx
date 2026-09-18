import { motion } from 'framer-motion';
import { ArrowRight, Users } from 'lucide-react';
import { useScrollAnimation, fadeUpVariants, staggerContainerVariants } from '../../hooks/useScrollAnimation';
import './CtaFinal.css';

export default function CtaFinal() {
  const { ref, isInView } = useScrollAnimation();

  return (
    <section className="cta-final section" aria-labelledby="cta-title">
      {/* Orbital element */}
      <div className="cta-final__orbital" aria-hidden="true">
        <div className="cta-final__core" />
        <div className="cta-final__ring cta-final__ring--1" />
        <div className="cta-final__ring cta-final__ring--2" />
        <div className="cta-final__ring cta-final__ring--3" />
        <div className="cta-final__halo" />
      </div>

      <div className="container">
        <motion.div
          ref={ref}
          className="cta-final__inner"
          variants={staggerContainerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          <motion.div className="label" variants={fadeUpVariants}>
            El próximo paso es tuyo
          </motion.div>

          <motion.h2 id="cta-title" className="cta-final__title" variants={fadeUpVariants}>
            ¿Qué quieres{' '}
            <span className="gradient-text">transformar?</span>
          </motion.h2>

          <motion.p className="cta-final__desc" variants={fadeUpVariants}>
            Empieza aprendiendo una nueva habilidad o conversemos sobre cómo
            llevar tecnología a tu organización.
          </motion.p>

          <motion.div className="cta-final__actions" variants={fadeUpVariants}>
            <button
              className="btn btn-primary cta-final__btn"
              onClick={() => document.querySelector('#aprende')?.scrollIntoView({ behavior: 'smooth' })}
              aria-label="Quiero aprender — Ir a rutas de aprendizaje"
            >
              Quiero aprender
              <ArrowRight size={16} />
            </button>
            <button
              className="btn btn-secondary cta-final__btn"
              onClick={() => document.querySelector('#contacto')?.scrollIntoView({ behavior: 'smooth' })}
              aria-label="Capacita a tu equipo — Ir a contacto"
            >
              <Users size={16} />
              Capacita a tu equipo
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

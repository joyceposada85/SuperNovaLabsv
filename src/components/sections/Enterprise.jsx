import { motion } from 'framer-motion';
import { GraduationCap, Lightbulb, Code2, ArrowRight, Users } from 'lucide-react';
import { useScrollAnimation, fadeUpVariants, staggerContainerVariants, cardVariants } from '../../hooks/useScrollAnimation';
import './Enterprise.css';

const solutions = [
  {
    icon: GraduationCap,
    title: 'Capacitación corporativa',
    desc: 'Programas privados y experiencias de aprendizaje adaptadas a las necesidades del equipo.',
    id: 'corp',
  },
  {
    icon: Lightbulb,
    title: 'Consultoría tecnológica',
    desc: 'Identificación de oportunidades para aplicar Inteligencia Artificial, automatización y transformación digital.',
    id: 'consult',
  },
  {
    icon: Code2,
    title: 'Soluciones de software',
    desc: 'Diseño y construcción de herramientas digitales adaptadas a necesidades específicas de cada organización.',
    id: 'software',
  },
];

export default function Enterprise() {
  const { ref: headerRef, isInView: headerInView } = useScrollAnimation();
  const { ref: cardsRef, isInView: cardsInView } = useScrollAnimation();
  const { ref: ctaRef, isInView: ctaInView } = useScrollAnimation();

  return (
    <section id="empresas" className="enterprise section" aria-labelledby="enterprise-title">
      <div className="enterprise__bg" aria-hidden="true" />
      <div className="grid-bg" aria-hidden="true" />

      {/* Decorative horizontal lines */}
      <div className="enterprise__deco" aria-hidden="true">
        {[...Array(5)].map((_, i) => (
          <div key={i} className="enterprise__deco-line" style={{ '--deco-i': i }} />
        ))}
      </div>

      <div className="container">
        <motion.div
          ref={headerRef}
          className="enterprise__header"
          variants={staggerContainerVariants}
          initial="hidden"
          animate={headerInView ? 'visible' : 'hidden'}
        >
          <motion.div className="label" variants={fadeUpVariants}>
            Soluciones para organizaciones
          </motion.div>
          <motion.h2 id="enterprise-title" className="enterprise__title" variants={fadeUpVariants}>
            Tu equipo no necesita otro curso.
            <br />
            <span className="gradient-text">Necesita resolver mejor su trabajo.</span>
          </motion.h2>
          <motion.p className="enterprise__desc" variants={fadeUpVariants}>
            Diseñamos experiencias de capacitación, consultoría y soluciones tecnológicas
            adaptadas a los procesos reales de cada organización.
          </motion.p>
        </motion.div>

        <motion.div
          ref={cardsRef}
          className="enterprise__cards"
          variants={staggerContainerVariants}
          initial="hidden"
          animate={cardsInView ? 'visible' : 'hidden'}
        >
          {solutions.map((sol, i) => {
            const Icon = sol.icon;
            return (
              <motion.article
                key={sol.id}
                className="enterprise-card"
                variants={cardVariants}
                whileHover={{ y: -6, transition: { duration: 0.25 } }}
                aria-labelledby={`enterprise-${sol.id}-title`}
              >
                <div className="enterprise-card__num" aria-hidden="true">0{i + 1}</div>
                <div className="enterprise-card__icon" aria-hidden="true">
                  <Icon size={24} />
                </div>
                <h3 id={`enterprise-${sol.id}-title`} className="enterprise-card__title">
                  {sol.title}
                </h3>
                <p className="enterprise-card__desc">{sol.desc}</p>
              </motion.article>
            );
          })}
        </motion.div>

        <motion.div
          ref={ctaRef}
          className="enterprise__cta"
          initial={{ opacity: 0, y: 30 }}
          animate={ctaInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <button
            className="btn btn-primary enterprise__btn"
            aria-label="Capacita a tu equipo — Sección contacto"
            onClick={() => document.querySelector('#contacto')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <Users size={16} />
            Capacita a tu equipo
          </button>
          <button
            className="btn btn-secondary enterprise__btn"
            aria-label="Hablemos de tu proyecto — Sección contacto"
            onClick={() => document.querySelector('#contacto')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Hablemos de tu proyecto
            <ArrowRight size={16} />
          </button>
        </motion.div>
      </div>
    </section>
  );
}

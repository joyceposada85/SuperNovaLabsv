import { motion } from 'framer-motion';
import { Wrench, Monitor, FlaskConical, Plug, BrainCircuit, MessagesSquare, ArrowRight } from 'lucide-react';
import { useScrollAnimation, fadeUpVariants, staggerContainerVariants, cardVariants } from '../../hooks/useScrollAnimation';
import './Lab.css';

const labAreas = [
  { icon: Wrench, label: 'Automatización de procesos' },
  { icon: Monitor, label: 'Soluciones de software' },
  { icon: FlaskConical, label: 'Prototipos digitales' },
  { icon: Plug, label: 'Integración de herramientas' },
  { icon: BrainCircuit, label: 'IA aplicada' },
  { icon: MessagesSquare, label: 'Consultoría tecnológica' },
];

export default function Lab() {
  const { ref: headerRef, isInView: headerInView } = useScrollAnimation();
  const { ref: areasRef, isInView: areasInView } = useScrollAnimation();

  return (
    <section className="lab section" aria-labelledby="lab-title">
      <div className="lab__bg" aria-hidden="true" />

      <div className="container">
        <div className="lab__layout">
          {/* Left */}
          <motion.div
            ref={headerRef}
            className="lab__content"
            variants={staggerContainerVariants}
            initial="hidden"
            animate={headerInView ? 'visible' : 'hidden'}
          >
            <motion.div className="label" variants={fadeUpVariants}>
              SUPERNOVA LAB
            </motion.div>
            <motion.h2 id="lab-title" className="lab__title" variants={fadeUpVariants}>
              Cuando aprender{' '}
              <span className="gradient-text">no es suficiente,</span>
              <br />
              construimos.
            </motion.h2>
            <motion.p className="lab__desc" variants={fadeUpVariants}>
              SuperNova también acompaña a organizaciones que necesitan convertir
              una necesidad tecnológica en una solución real.
            </motion.p>
            <motion.div variants={fadeUpVariants}>
              <button
                className="btn btn-primary"
                aria-label="Cuéntanos qué quieres construir — Ir a contacto"
                onClick={() => document.querySelector('#contacto')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Cuéntanos qué quieres construir
                <ArrowRight size={16} />
              </button>
            </motion.div>
          </motion.div>

          {/* Right — Areas */}
          <motion.div
            ref={areasRef}
            className="lab__areas"
            variants={staggerContainerVariants}
            initial="hidden"
            animate={areasInView ? 'visible' : 'hidden'}
            role="list"
            aria-label="Áreas del Lab"
          >
            {labAreas.map((area) => {
              const Icon = area.icon;
              return (
                <motion.div
                  key={area.label}
                  className="lab__area"
                  variants={cardVariants}
                  whileHover={{ x: 6, transition: { duration: 0.2 } }}
                  role="listitem"
                >
                  <div className="lab__area-icon" aria-hidden="true">
                    <Icon size={18} />
                  </div>
                  <span className="lab__area-label">{area.label}</span>
                  <div className="lab__area-arrow" aria-hidden="true">
                    <ArrowRight size={14} />
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

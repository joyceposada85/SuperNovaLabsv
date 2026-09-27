import { motion } from 'framer-motion';
import { Wrench, Monitor, FileSpreadsheet, Bot, BrainCircuit, Compass, ArrowRight } from 'lucide-react';
import { useScrollAnimation, fadeUpVariants, staggerContainerVariants, cardVariants } from '../../hooks/useScrollAnimation';
import './Lab.css';

const labAreas = [
  {
    icon: Wrench,
    label: 'Automatización de procesos',
    desc: 'Flujos que hacen solas las tareas repetitivas: reportes, correos, registros.',
  },
  {
    icon: BrainCircuit,
    label: 'Agentes de IA con tus documentos',
    desc: 'Asistentes que responden preguntas con la información de tu empresa.',
  },
  {
    icon: FileSpreadsheet,
    label: 'Extracción de datos de documentos',
    desc: 'Facturas, formularios o PDFs convertidos en tablas listas para usar.',
  },
  {
    icon: Bot,
    label: 'Chatbots para web y plataformas',
    desc: 'Asistentes integrados en tu sitio, Moodle o WhatsApp.',
  },
  {
    icon: Monitor,
    label: 'Aplicaciones a la medida',
    desc: 'Desde un prototipo rápido hasta una app web completa.',
  },
  {
    icon: Compass,
    label: 'Consultoría en IA',
    desc: 'Te ayudamos a identificar dónde la IA te ahorra tiempo y dinero.',
  },
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
                  <div className="lab__area-text">
                    <span className="lab__area-label">{area.label}</span>
                    <span className="lab__area-desc">{area.desc}</span>
                  </div>
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

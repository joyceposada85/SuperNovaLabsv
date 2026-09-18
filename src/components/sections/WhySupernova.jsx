import { motion } from 'framer-motion';
import { useScrollAnimation, staggerContainerVariants, cardVariants, fadeUpVariants } from '../../hooks/useScrollAnimation';
import './WhySupernova.css';

const principles = [
  {
    num: '01',
    title: 'Aprendizaje aplicado',
    desc: 'Trabajamos con situaciones que conectan la tecnología con necesidades reales.',
    accent: 'blue',
  },
  {
    num: '02',
    title: 'Tecnología actual',
    desc: 'Exploramos herramientas y enfoques relevantes para el entorno profesional actual.',
    accent: 'cyan',
  },
  {
    num: '03',
    title: 'De aprender a construir',
    desc: 'No nos quedamos en la teoría: buscamos convertir conocimiento en acción.',
    accent: 'violet',
  },
  {
    num: '04',
    title: 'Personas + Tecnología',
    desc: 'La tecnología es una herramienta. Las personas son quienes generan la transformación.',
    accent: 'blue',
  },
];

export default function WhySupernova() {
  const { ref: headerRef, isInView: headerInView } = useScrollAnimation();
  const { ref: gridRef, isInView: gridInView } = useScrollAnimation();

  return (
    <section className="why section" aria-labelledby="why-title">
      <div className="why__bg" aria-hidden="true" />

      <div className="container">
        <motion.div
          ref={headerRef}
          className="section-header"
          variants={staggerContainerVariants}
          initial="hidden"
          animate={headerInView ? 'visible' : 'hidden'}
        >
          <motion.div className="label" variants={fadeUpVariants}>
            ¿Por qué SuperNova?
          </motion.div>
          <motion.h2 id="why-title" className="section-title" variants={fadeUpVariants}>
            Cuatro principios que{' '}
            <span className="gradient-text">nos definen.</span>
          </motion.h2>
        </motion.div>

        <motion.div
          ref={gridRef}
          className="why__grid"
          variants={staggerContainerVariants}
          initial="hidden"
          animate={gridInView ? 'visible' : 'hidden'}
          role="list"
        >
          {principles.map((p) => (
            <motion.article
              key={p.num}
              className={`why-card why-card--${p.accent}`}
              variants={cardVariants}
              whileHover={{ y: -6, transition: { duration: 0.25 } }}
              role="listitem"
            >
              <div className="why-card__num-bg" aria-hidden="true">{p.num}</div>
              <span className="why-card__num">{p.num}</span>
              <h3 className="why-card__title">{p.title}</h3>
              <p className="why-card__desc">{p.desc}</p>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

import { motion } from 'framer-motion';
import { useScrollAnimation, fadeUpVariants, staggerContainerVariants } from '../../hooks/useScrollAnimation';
import './Philosophy.css';

const principles = [
  {
    word: 'APRENDE',
    label: 'Comprende herramientas y conceptos.',
    color: 'blue',
  },
  {
    word: 'CREA',
    label: 'Experimenta y construye.',
    color: 'cyan',
  },
  {
    word: 'TRANSFORMA',
    label: 'Lleva lo aprendido a tu trabajo, negocio o proyecto.',
    color: 'violet',
  },
];

export default function Philosophy() {
  const { ref: line1Ref, isInView: line1InView } = useScrollAnimation();
  const { ref: line2Ref, isInView: line2InView } = useScrollAnimation();
  const { ref: principlesRef, isInView: principlesInView } = useScrollAnimation();

  return (
    <section className="philosophy section" aria-labelledby="philosophy-title">
      <div className="philosophy__bg" aria-hidden="true" />

      <div className="container">
        {/* Big phrase */}
        <div className="philosophy__phrase">
          <motion.h2
            id="philosophy-title"
            ref={line1Ref}
            className="philosophy__line philosophy__line--1"
            initial={{ opacity: 0, x: -60 }}
            animate={line1InView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          >
            NO ENSEÑAMOS TECNOLOGÍA
            <br />
            PARA MEMORIZARLA.
          </motion.h2>

          <motion.p
            ref={line2Ref}
            className="philosophy__line philosophy__line--2"
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={line2InView ? { opacity: 1, y: 0, scale: 1 } : {}}
            transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="gradient-text">LA ENSEÑAMOS PARA USARLA.</span>
          </motion.p>

          <motion.p
            className="philosophy__sub"
            initial={{ opacity: 0, y: 20 }}
            animate={line2InView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            Cada experiencia de aprendizaje busca conectar conocimiento,
            experimentación y aplicación real.
          </motion.p>
        </div>

        {/* Principles */}
        <motion.div
          ref={principlesRef}
          className="philosophy__principles"
          variants={staggerContainerVariants}
          initial="hidden"
          animate={principlesInView ? 'visible' : 'hidden'}
          role="list"
        >
          {principles.map((p, i) => (
            <motion.div
              key={p.word}
              className={`philosophy__principle philosophy__principle--${p.color}`}
              variants={fadeUpVariants}
              role="listitem"
            >
              <span className="philosophy__principle-num" aria-hidden="true">0{i + 1}</span>
              <h3 className="philosophy__principle-word">{p.word}</h3>
              <p className="philosophy__principle-desc">{p.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

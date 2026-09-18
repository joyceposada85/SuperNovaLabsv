import { motion } from 'framer-motion';
import { useScrollAnimation, fadeUpVariants, staggerContainerVariants, cardVariants } from '../../hooks/useScrollAnimation';
import './Intro.css';

export default function Intro() {
  const { ref, isInView } = useScrollAnimation();
  const { ref: ref2, isInView: isInView2 } = useScrollAnimation();

  return (
    <section className="intro section" aria-labelledby="intro-title">
      <div className="grid-bg" aria-hidden="true" />
      <div className="container">
        <motion.div
          ref={ref}
          className="intro__inner"
          variants={staggerContainerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          <motion.p className="intro__eyebrow" variants={fadeUpVariants}>
            NO SOMOS UNA ACADEMIA TRADICIONAL
          </motion.p>

          <motion.h2 id="intro-title" className="intro__title" variants={fadeUpVariants}>
            Aprender tecnología debería sentirse como{' '}
            <span className="gradient-text">descubrir posibilidades.</span>
          </motion.h2>

          <motion.p className="intro__desc" variants={fadeUpVariants}>
            En SuperNova Lab SV combinamos formación práctica, experimentación y tecnología
            para que cada conocimiento pueda convertirse en una habilidad aplicable al mundo real.
          </motion.p>
        </motion.div>

        <motion.div
          ref={ref2}
          className="intro__highlight"
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          animate={isInView2 ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="intro__highlight-line intro__highlight-line--1" aria-hidden="true" />
          <p className="intro__highlight-text">
            <span>Aprender haciendo.</span>
            <span className="gradient-text">Aplicar resolviendo.</span>
          </p>
          <div className="intro__highlight-line intro__highlight-line--2" aria-hidden="true" />
        </motion.div>
      </div>
    </section>
  );
}

import { motion } from 'framer-motion';
import { useScrollAnimation, fadeUpVariants, staggerContainerVariants } from '../../hooks/useScrollAnimation';
import './About.css';

export default function About() {
  const { ref, isInView } = useScrollAnimation();

  return (
    <section id="nosotros" className="about section" aria-labelledby="about-title">
      <div className="about__bg" aria-hidden="true" />
      <div className="grid-bg" aria-hidden="true" />

      <div className="container">
        <motion.div
          ref={ref}
          className="about__inner"
          variants={staggerContainerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          <motion.div className="label" variants={fadeUpVariants}>
            Sobre nosotros
          </motion.div>

          <motion.h2 id="about-title" className="about__title" variants={fadeUpVariants}>
            Una academia nacida para{' '}
            <span className="gradient-text">aprender diferente.</span>
          </motion.h2>

          <motion.div className="about__body" variants={fadeUpVariants}>
            <p>
              SuperNova Lab SV nace con una idea sencilla: la tecnología se comprende
              mejor cuando se experimenta con ella.
            </p>
            <p>
              Somos un espacio de formación y creación donde personas, profesionales y
              organizaciones pueden aprender nuevas tecnologías y explorar cómo convertirlas
              en soluciones.
            </p>
          </motion.div>

          <motion.div className="about__values" variants={fadeUpVariants} role="list">
            {[
              { label: 'Formación práctica', desc: 'Aprendizaje orientado a la aplicación real.' },
              { label: 'Modalidad virtual', desc: 'Acceso desde cualquier lugar de Latinoamérica.' },
              { label: 'Empresas & personas', desc: 'Soluciones para individuos y organizaciones.' },
            ].map((v) => (
              <div key={v.label} className="about__value" role="listitem">
                <div className="about__value-dot" aria-hidden="true" />
                <div>
                  <strong className="about__value-label">{v.label}</strong>
                  <p className="about__value-desc">{v.desc}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

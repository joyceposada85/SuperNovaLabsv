import { motion } from 'framer-motion';
import { ShieldCheck, Award, Wrench, Users } from 'lucide-react';
import { useScrollAnimation, fadeUpVariants, staggerContainerVariants } from '../../hooks/useScrollAnimation';
import './Seals.css';

const sealsData = [
  {
    id: 'privacy',
    icon: ShieldCheck,
    titleMain: 'GARANTÍA DE',
    titleCyan: 'PRIVACIDAD',
    subtext: 'Datos protegidos y confidenciales.',
  },
  {
    id: 'academic',
    icon: Award,
    titleMain: 'CALIDAD',
    titleCyan: 'ACADÉMICA',
    subtext: 'Formación actualizada y orientada a resultados.',
  },
  {
    id: 'practical',
    icon: Wrench,
    titleMain: 'APRENDIZAJE',
    titleCyan: 'PRÁCTICO',
    subtext: 'Casos reales, proyectos y herramientas aplicables.',
  },
  {
    id: 'expert',
    icon: Users,
    titleMain: 'ACOMPAÑAMIENTO',
    titleCyan: 'EXPERTO',
    subtext: 'Orientación cercana durante todo el proceso.',
  },
];

function SealItem({ seal }) {
  const Icon = seal.icon;
  return (
    <motion.div
      className="seal-card"
      variants={fadeUpVariants}
      whileHover={{ scale: 1.04, y: -4, transition: { duration: 0.25 } }}
      role="listitem"
    >
      <div className="seal-circle">
        {/* SVG Decorative Dashed Ring & Glow */}
        <svg className="seal-svg" viewBox="0 0 200 200" aria-hidden="true">
          {/* Outer Cyan Ring */}
          <circle cx="100" cy="100" r="96" className="seal-ring-outer" />
          {/* Inner Dashed Ring */}
          <circle cx="100" cy="100" r="88" className="seal-ring-dashed" />
        </svg>

        {/* Inner Content */}
        <div className="seal-content">
          <div className="seal-icon-wrap" aria-hidden="true">
            <Icon size={28} />
          </div>
          <h3 className="seal-title">
            <span className="seal-title__main">{seal.titleMain}</span>
            <span className="seal-title__cyan">{seal.titleCyan}</span>
          </h3>
          <p className="seal-subtext">{seal.subtext}</p>
        </div>
      </div>
    </motion.div>
  );
}

export default function Seals() {
  const { ref, isInView } = useScrollAnimation();

  return (
    <section className="seals section" aria-label="Garantías y sellos de calidad">
      <div className="container">
        <motion.div
          ref={ref}
          className="seals__grid"
          variants={staggerContainerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          role="list"
        >
          {sealsData.map((seal) => (
            <SealItem key={seal.id} seal={seal} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

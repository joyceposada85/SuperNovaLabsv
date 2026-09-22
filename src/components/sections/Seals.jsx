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
    subtext: 'Protección y uso responsable de los datos.',
  },
  {
    id: 'academic',
    icon: Award,
    titleMain: 'CALIDAD',
    titleCyan: 'ACADÉMICA',
    subtext: 'Contenido actualizado y orientado a resultados.',
  },
  {
    id: 'practical',
    icon: Wrench,
    titleMain: 'APRENDIZAJE',
    titleCyan: 'APLICADO',
    subtext: 'Casos reales y proyectos para el entorno laboral.',
  },
  {
    id: 'expert',
    icon: Users,
    titleMain: 'ACOMPAÑAMIENTO',
    titleCyan: 'EXPERTO',
    subtext: 'Orientación cercana durante todo el proceso.',
  },
];

function InstitutionalSeal({ seal }) {
  const Icon = seal.icon;
  const topPathId = `top-arc-${seal.id}`;
  const bottomPathId = `bottom-arc-${seal.id}`;

  return (
    <motion.div
      className="inst-seal-card"
      variants={fadeUpVariants}
      whileHover={{ scale: 1.03, y: -5, transition: { duration: 0.25 } }}
      role="listitem"
    >
      <div className="inst-seal-badge">
        <svg
          className="inst-seal-svg"
          viewBox="0 0 280 280"
          aria-hidden="true"
        >
          <defs>
            {/* Radial Gradient for Seal Navy Background */}
            <radialGradient id={`bgGrad-${seal.id}`} cx="50%" cy="40%" r="60%">
              <stop offset="0%" stopColor="#0f1a36" />
              <stop offset="70%" stopColor="#070c1b" />
              <stop offset="100%" stopColor="#040711" />
            </radialGradient>

            {/* Top Arc for Text */}
            <path
              id={topPathId}
              d="M 32,140 A 108,108 0 0,1 248,140"
              fill="none"
            />

            {/* Bottom Arc for Text */}
            <path
              id={bottomPathId}
              d="M 248,140 A 108,108 0 0,1 32,140"
              fill="none"
            />

            {/* Glow Filter */}
            <filter id={`glow-${seal.id}`} x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="3" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          {/* Background Circle */}
          <circle cx="140" cy="140" r="132" fill={`url(#bgGrad-${seal.id})`} />

          {/* Outer Cyan Ring 1 */}
          <circle
            cx="140"
            cy="140"
            r="130"
            className="inst-ring-outer"
            filter={`url(#glow-${seal.id})`}
          />

          {/* Second White / Light Blue Ring 2 */}
          <circle cx="140" cy="140" r="122" className="inst-ring-secondary" />

          {/* Third Dashed Inner Ring 3 */}
          <circle cx="140" cy="140" r="92" className="inst-ring-dashed" />

          {/* Curved Text Top: SUPERNOVA LAB SV */}
          <text className="inst-text-curved inst-text-curved--top">
            <textPath href={`#${topPathId}`} startOffset="50%" textAnchor="middle">
              SUPERNOVA LAB SV
            </textPath>
          </text>

          {/* Curved Text Bottom: FORMACIÓN • INNOVACIÓN • RESULTADOS */}
          <text className="inst-text-curved inst-text-curved--bottom">
            <textPath href={`#${bottomPathId}`} startOffset="50%" textAnchor="middle">
              FORMACIÓN • INNOVACIÓN • RESULTADOS
            </textPath>
          </text>

          {/* Left Star Separator */}
          <text x="24" y="145" className="inst-star" textAnchor="middle">★</text>

          {/* Right Star Separator */}
          <text x="256" y="145" className="inst-star" textAnchor="middle">★</text>
        </svg>

        {/* Central Content */}
        <div className="inst-seal-center">
          <div className="inst-seal-icon" aria-hidden="true">
            <Icon size={26} />
          </div>
          <h3 className="inst-seal-title">
            <span className="inst-seal-title__main">{seal.titleMain}</span>
            <span className="inst-seal-title__cyan">{seal.titleCyan}</span>
          </h3>
          <p className="inst-seal-subtext">{seal.subtext}</p>
        </div>

        {/* Ribbon / Banner: COMPROMISO SUPERNOVA */}
        <div className="inst-seal-ribbon" aria-hidden="true">
          <div className="inst-seal-ribbon__glow" />
          <span className="inst-seal-ribbon__text">COMPROMISO SUPERNOVA</span>
        </div>
      </div>
    </motion.div>
  );
}

export default function Seals() {
  const { ref, isInView } = useScrollAnimation();

  return (
    <section className="seals section" aria-label="Garantías y sellos institucionales">
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
            <InstitutionalSeal key={seal.id} seal={seal} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

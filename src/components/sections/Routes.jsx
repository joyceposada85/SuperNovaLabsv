import { motion } from 'framer-motion';
import { Brain, BarChart3, Zap, Code2, ArrowRight } from 'lucide-react';
import { useScrollAnimation, staggerContainerVariants, cardVariants, fadeUpVariants } from '../../hooks/useScrollAnimation';
import './Routes.css';

const routes = [
  {
    id: '01',
    icon: Brain,
    title: 'IA para Negocios',
    desc: 'Aprende a utilizar Inteligencia Artificial en tareas empresariales reales: productividad, análisis, creación de contenido, asistentes, toma de decisiones y herramientas como Microsoft Copilot y otras plataformas de IA generativa.',
    cta: 'Explorar IA',
    accent: 'blue',
    tags: ['ChatGPT', 'Copilot', 'IA Generativa'],
  },
  {
    id: '02',
    icon: BarChart3,
    title: 'Excel + Productividad',
    desc: 'Convierte Excel y las herramientas de oficina en aliados para organizar, analizar y optimizar tu trabajo. Integra productividad tradicional con nuevas capacidades potenciadas por IA.',
    cta: 'Explorar Productividad',
    accent: 'cyan',
    tags: ['Excel', 'Office 365', 'Productividad'],
  },
  {
    id: '03',
    icon: Zap,
    title: 'Automatización',
    desc: 'Aprende a conectar herramientas, diseñar workflows y automatizar tareas utilizando plataformas como n8n e Inteligencia Artificial.',
    cta: 'Explorar Automatización',
    accent: 'violet',
    tags: ['n8n', 'Workflows', 'No-code'],
  },
  {
    id: '04',
    icon: Code2,
    title: 'Desarrollo & Full Stack',
    desc: 'Aprende a crear aplicaciones y soluciones digitales mientras desarrollas habilidades de programación aplicables a proyectos reales.',
    cta: 'Explorar Desarrollo',
    accent: 'blue-violet',
    tags: ['JavaScript', 'React', 'Backend'],
  },
];

function RouteCard({ route, index }) {
  const Icon = route.icon;
  return (
    <motion.article
      className={`route-card route-card--${route.accent}`}
      variants={cardVariants}
      whileHover={{ y: -8, transition: { duration: 0.25 } }}
      aria-labelledby={`route-title-${route.id}`}
    >
      <div className="route-card__glow" aria-hidden="true" />

      <div className="route-card__header">
        <span className="route-card__number" aria-hidden="true">{route.id}</span>
        <div className="route-card__icon" aria-hidden="true">
          <Icon size={22} />
        </div>
      </div>

      <h3 id={`route-title-${route.id}`} className="route-card__title">{route.title}</h3>
      <p className="route-card__desc">{route.desc}</p>

      <div className="route-card__tags" aria-label="Temas relacionados">
        {route.tags.map(tag => (
          <span key={tag} className="route-card__tag">{tag}</span>
        ))}
      </div>

      <button className="btn btn-ghost route-card__cta" aria-label={`${route.cta} — ${route.title}`}>
        {route.cta}
        <ArrowRight size={14} />
      </button>
    </motion.article>
  );
}

export default function Routes() {
  const { ref: headerRef, isInView: headerInView } = useScrollAnimation();
  const { ref: gridRef, isInView: gridInView } = useScrollAnimation();

  return (
    <section id="aprende" className="routes section" aria-labelledby="routes-title">
      <div className="grid-bg" aria-hidden="true" />
      <div className="container">
        <motion.div
          ref={headerRef}
          className="section-header"
          variants={staggerContainerVariants}
          initial="hidden"
          animate={headerInView ? 'visible' : 'hidden'}
        >
          <motion.div className="label" variants={fadeUpVariants}>Rutas de aprendizaje</motion.div>
          <motion.h2 id="routes-title" className="section-title" variants={fadeUpVariants}>
            Elige hacia dónde{' '}
            <span className="gradient-text">quieres crecer.</span>
          </motion.h2>
          <motion.p className="section-desc" variants={fadeUpVariants}>
            No importa si estás empezando o buscando llevar tus habilidades al siguiente nivel.
            Encuentra una ruta y empieza a construir.
          </motion.p>
        </motion.div>

        <motion.div
          ref={gridRef}
          className="routes__grid"
          variants={staggerContainerVariants}
          initial="hidden"
          animate={gridInView ? 'visible' : 'hidden'}
        >
          {routes.map((route, i) => (
            <RouteCard key={route.id} route={route} index={i} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

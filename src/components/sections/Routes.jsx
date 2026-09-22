import { useState } from 'react';
import { motion } from 'framer-motion';
import { Brain, BarChart3, Zap, Code2, ArrowRight } from 'lucide-react';
import { useScrollAnimation, staggerContainerVariants, cardVariants, fadeUpVariants } from '../../hooks/useScrollAnimation';
import CourseModal from '../common/CourseModal';
import './Routes.css';

const coursesData = [
  {
    id: '01',
    icon: Brain,
    categoryTag: 'IA para Negocios',
    title: 'IA para Negocios',
    fullName: 'Gestión Administrativa Potenciada por Microsoft 365 Copilot',
    description: 'Programa práctico para utilizar Microsoft 365 Copilot en tareas administrativas, análisis de información, elaboración de documentos, presentaciones, comunicación y colaboración empresarial.',
    duration: '16 horas, distribuidas en 8 sesiones de 2 horas',
    modality: 'Virtual en vivo',
    status: 'Próxima cohorte',
    price: '$80 (Precio de lanzamiento)',
    capacity: '11 participantes',
    topics: [
      'Ecosistema Microsoft 365 Copilot y uso responsable.',
      'Ingeniería de prompts para tareas administrativas.',
      'Creación y revisión de documentos con Word.',
      'Elaboración de presentaciones con PowerPoint.',
      'Análisis de información y fórmulas con Excel.',
      'Correos, reuniones y colaboración con Outlook y Teams.',
      'Trabajo con archivos, Investigador, Analista y asistentes de Copilot.',
      'Caso administrativo integrador.',
    ],
    includes: [
      'Acceso temporal a Microsoft 365 Copilot durante el curso',
      'Materiales digitales',
      'Archivos de práctica',
      'Proyecto final',
    ],
    cta: 'Explorar programa',
    accent: 'blue',
    tags: ['Copilot', 'Office 365', 'IA Generativa'],
  },
  {
    id: '02',
    icon: BarChart3,
    categoryTag: 'Excel + Productividad',
    title: 'Excel + Productividad',
    fullName: 'Excel Inteligente para la Gestión Empresarial',
    description: 'Formación para transformar datos en indicadores, tableros y decisiones mediante Excel, Power Query y capacidades de inteligencia artificial.',
    duration: '16 horas, distribuidas en 8 sesiones',
    modality: 'Virtual en vivo',
    status: 'Próximamente',
    price: null,
    capacity: null,
    topics: [
      'Organización, limpieza y validación de datos.',
      'Tablas inteligentes y funciones modernas.',
      'BUSCARX, funciones lógicas, funciones de texto y cálculos condicionales.',
      'Tablas y gráficos dinámicos.',
      'Introducción práctica a Power Query.',
      'Indicadores y tableros empresariales.',
      'Uso de Copilot para fórmulas, análisis e interpretación.',
      'Proyecto: tablero administrativo, financiero o comercial.',
    ],
    includes: [
      'Archivos de práctica',
      'Plantillas editables',
      'Proyecto final',
    ],
    cta: 'Explorar programa',
    accent: 'cyan',
    tags: ['Excel', 'Power Query', 'Productividad'],
  },
  {
    id: '03',
    icon: Zap,
    categoryTag: 'Automatización',
    title: 'Automatización',
    fullName: 'Automatización Empresarial con n8n e Inteligencia Artificial',
    description: 'Programa práctico para identificar tareas repetitivas, conectar herramientas y construir workflows empresariales con n8n e inteligencia artificial.',
    duration: '16 horas, distribuidas en 8 sesiones',
    modality: 'Virtual en vivo',
    status: 'Próximamente',
    price: null,
    capacity: null,
    topics: [
      'Identificación de procesos y diseño AS-IS/TO-BE.',
      'Fundamentos de n8n, nodos, credenciales y ejecuciones.',
      'Formularios, triggers y webhooks.',
      'Manejo y transformación de información JSON.',
      'Integraciones con correo, Google Sheets, Telegram y APIs.',
      'Condiciones, aprobaciones y manejo de errores.',
      'Agentes de IA, herramientas y decisiones controladas.',
      'Proyecto de automatización empresarial.',
    ],
    includes: [
      'Entorno temporal de práctica',
      'Workflows reutilizables',
      'Materiales',
      'Proyecto funcional',
    ],
    cta: 'Explorar programa',
    accent: 'violet',
    tags: ['n8n', 'Workflows', 'Agentes IA'],
  },
  {
    id: '04',
    icon: Code2,
    categoryTag: 'Desarrollo & Full Stack',
    title: 'Desarrollo & Full Stack',
    fullName: 'Desarrollo de Aplicaciones Full Stack con React y Next.js',
    description: 'Programa para construir y publicar una aplicación web completa, desde la interfaz y la base de datos hasta la autenticación y el despliegue.',
    duration: '32 horas, divididas en dos módulos de 16 horas',
    modality: 'Virtual en vivo',
    status: 'Próximamente',
    price: null,
    capacity: null,
    topics: [
      'JavaScript moderno y fundamentos de React.',
      'Componentes, propiedades, estado y eventos.',
      'Formularios, validaciones y consumo de APIs.',
      'Navegación y componentes reutilizables.',
      'Frontend y backend con Next.js.',
      'PostgreSQL, autenticación y operaciones CRUD.',
      'Seguridad y manejo de errores.',
      'GitHub, despliegue y proyecto de portafolio.',
    ],
    includes: [
      'Código base',
      'Repositorio del proyecto',
      'Materiales',
      'Acompañamiento para publicar la aplicación',
    ],
    cta: 'Explorar programa',
    accent: 'blue-violet',
    tags: ['React', 'Next.js', 'PostgreSQL'],
  },
];

function RouteCard({ course, onOpenModal }) {
  const Icon = course.icon;
  return (
    <motion.article
      className={`route-card route-card--${course.accent}`}
      variants={cardVariants}
      whileHover={{ y: -8, transition: { duration: 0.25 } }}
      aria-labelledby={`route-title-${course.id}`}
    >
      <div className="route-card__glow" aria-hidden="true" />

      <div className="route-card__header">
        <span className="route-card__number" aria-hidden="true">{course.id}</span>
        <div className="route-card__icon" aria-hidden="true">
          <Icon size={22} />
        </div>
      </div>

      <h3 id={`route-title-${course.id}`} className="route-card__title">{course.title}</h3>
      <p className="route-card__desc">{course.description}</p>

      <div className="route-card__tags" aria-label="Temas relacionados">
        {course.tags.map(tag => (
          <span key={tag} className="route-card__tag">{tag}</span>
        ))}
      </div>

      <button
        className="btn btn-ghost route-card__cta"
        onClick={() => onOpenModal(course)}
        aria-label={`${course.cta} — ${course.fullName}`}
      >
        {course.cta}
        <ArrowRight size={14} />
      </button>
    </motion.article>
  );
}

export default function Routes({ onRequestCourseInfo }) {
  const { ref: headerRef, isInView: headerInView } = useScrollAnimation();
  const { ref: gridRef, isInView: gridInView } = useScrollAnimation();
  const [selectedCourse, setSelectedCourse] = useState(null);

  const handleOpenModal = (course) => {
    setSelectedCourse(course);
  };

  const handleCloseModal = () => {
    setSelectedCourse(null);
  };

  const handleRequestInfoFromModal = (course) => {
    handleCloseModal();
    if (onRequestCourseInfo) {
      onRequestCourseInfo(course.fullName);
    }
  };

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
            Haz clic en cualquiera de nuestras rutas de formación para conocer el temario completo,
            duración, modalidad y requisitos.
          </motion.p>
        </motion.div>

        <motion.div
          ref={gridRef}
          className="routes__grid"
          variants={staggerContainerVariants}
          initial="hidden"
          animate={gridInView ? 'visible' : 'hidden'}
        >
          {coursesData.map((course) => (
            <RouteCard
              key={course.id}
              course={course}
              onOpenModal={handleOpenModal}
            />
          ))}
        </motion.div>
      </div>

      {/* Course Modal */}
      <CourseModal
        course={selectedCourse}
        isOpen={Boolean(selectedCourse)}
        onClose={handleCloseModal}
        onRequestInfo={handleRequestInfoFromModal}
      />
    </section>
  );
}

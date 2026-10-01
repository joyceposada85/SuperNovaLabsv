import { motion } from 'framer-motion';
import { QrCode, Share2, BadgeCheck, Building2 } from 'lucide-react';
import { useScrollAnimation, fadeUpVariants, staggerContainerVariants } from '../../hooks/useScrollAnimation';
import './Certificate.css';

const benefits = [
  {
    icon: QrCode,
    title: 'Verificable con QR',
    desc: 'Cualquier empresa puede comprobar en segundos que es auténtico.',
  },
  {
    icon: Share2,
    title: 'Listo para LinkedIn',
    desc: 'Agrégalo a tu perfil o compártelo con un clic.',
  },
  {
    icon: Building2,
    title: 'Respaldo para tu empresa',
    desc: 'RR. HH. puede llevar el registro de la formación de cada colaborador.',
  },
];

export default function Certificate() {
  const { ref, isInView } = useScrollAnimation();

  return (
    <section className="certificate section" aria-labelledby="certificate-title">
      <div className="certificate__bg" aria-hidden="true" />
      <div className="container">
        <motion.div
          ref={ref}
          className="certificate__layout"
          variants={staggerContainerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          <div className="certificate__content">
            <motion.div className="label" variants={fadeUpVariants}>
              CERTIFICACIÓN
            </motion.div>
            <motion.h2 id="certificate-title" className="certificate__title" variants={fadeUpVariants}>
              Tu esfuerzo,{' '}
              <span className="gradient-text">certificado.</span>
            </motion.h2>
            <motion.p className="certificate__desc" variants={fadeUpVariants}>
              Al aprobar cualquiera de nuestros cursos recibes un certificado digital
              verificable de SuperNova Lab SV.
            </motion.p>

            <motion.ul className="certificate__benefits" variants={fadeUpVariants}>
              {benefits.map(({ icon: Icon, title, desc }) => (
                <li key={title} className="certificate__benefit">
                  <span className="certificate__benefit-icon" aria-hidden="true">
                    <Icon size={20} />
                  </span>
                  <div>
                    <h3 className="certificate__benefit-title">{title}</h3>
                    <p className="certificate__benefit-desc">{desc}</p>
                  </div>
                </li>
              ))}
            </motion.ul>
          </div>

          <motion.figure className="certificate__preview" variants={fadeUpVariants}>
            <div className="certificate__frame">
              <img
                src="/certificado-ejemplo.webp"
                alt="Ejemplo del certificado digital de SuperNova Lab SV con nombre del participante, curso, fecha y código QR de verificación"
                width="1400"
                height="990"
                loading="lazy"
              />
              <span className="certificate__badge">
                <BadgeCheck size={16} aria-hidden="true" />
                Verificado
              </span>
            </div>
            <figcaption className="certificate__caption">Ejemplo de certificado</figcaption>
          </motion.figure>
        </motion.div>
      </div>
    </section>
  );
}

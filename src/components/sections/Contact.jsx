import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Mail, MessageCircle, Send } from 'lucide-react';
import { useScrollAnimation, fadeUpVariants, staggerContainerVariants } from '../../hooks/useScrollAnimation';
import './Contact.css';

function WhatsAppIcon({ size = 20 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.99c-.002 5.45-4.437 9.887-9.885 9.887m0-18.272c-5.419 0-9.832 4.412-9.835 9.833 0 1.733.451 3.42 1.309 4.908l-1.391 5.082 5.201-1.364c1.437.784 3.056 1.198 4.713 1.199h.004c5.418 0 9.831-4.413 9.834-9.835.002-2.624-1.02-5.09-2.887-6.958a9.78 9.78 0 00-6.948-2.867"/>
    </svg>
  );
}

const profileOptions = ['Profesional', 'Estudiante', 'Emprendedor', 'Empresa', 'Otro'];
const interestOptions = ['Cursos', 'Capacitación empresarial', 'Consultoría', 'Desarrollo de software', 'Otro'];

function validateForm(data) {
  const errors = {};
  if (!data.name.trim()) errors.name = 'El nombre es requerido.';
  if (!data.email.trim()) {
    errors.email = 'El correo es requerido.';
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.email = 'Ingresa un correo válido.';
  }
  if (!data.profile) errors.profile = 'Selecciona una opción.';
  if (!data.interest) errors.interest = 'Selecciona una opción.';
  return errors;
}

export default function Contact({ prefillData }) {
  const { ref, isInView } = useScrollAnimation();
  const [form, setForm] = useState({
    name: '', email: '', profile: '', interest: '', message: '',
  });
  const [errors, setErrors] = useState({});

  const PHONE_NUMBER = '50362953409';
  const DISPLAY_PHONE = '+503 6295-3409';
  const CONTACT_EMAIL = 'supernovalabsv@gmail.com';

  useEffect(() => {
    if (prefillData) {
      setForm(prev => ({
        ...prev,
        interest: prefillData.interest || 'Cursos',
        message: prefillData.message || prev.message,
      }));
      setErrors(prev => ({ ...prev, interest: '' }));
    }
  }, [prefillData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }));
  };

  const getFormattedMessageText = () => {
    return `Hola, SuperNova Lab SV.
Mi nombre es: ${form.name.trim()}
Mi correo es: ${form.email.trim()}
Perfil: ${form.profile}
Me interesa: ${form.interest}
Mensaje: ${form.message.trim() || 'Sin mensaje adicional'}`;
  };

  const handleSendWhatsApp = (e) => {
    e.preventDefault();
    const errs = validateForm(form);
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    const messageText = getFormattedMessageText();
    const url = `https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent(messageText)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const handleSendEmail = (e) => {
    e.preventDefault();
    const errs = validateForm(form);
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    const subjectText = 'Solicitud de información — SuperNova Lab SV';
    const bodyText = getFormattedMessageText();
    const mailtoUrl = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subjectText)}&body=${encodeURIComponent(bodyText)}`;
    window.location.href = mailtoUrl;
  };

  const directWhatsAppUrl = `https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent(
    'Hola, SuperNova Lab SV. Deseo recibir información sobre sus cursos y programas de formación.'
  )}`;

  return (
    <section id="contacto" className="contact section" aria-labelledby="contact-title">
      <div className="contact__bg" aria-hidden="true" />
      <div className="grid-bg" aria-hidden="true" />

      <div className="container">
        <motion.div
          ref={ref}
          className="contact__layout"
          variants={staggerContainerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {/* Left info & direct contact */}
          <motion.div className="contact__info" variants={fadeUpVariants}>
            <div className="label">Contacto Directo</div>
            <h2 id="contact-title" className="contact__title">
              Cuéntanos{' '}
              <span className="gradient-text">qué necesitas.</span>
            </h2>
            <p className="contact__desc">
              Escríbenos directamente por WhatsApp o completa el formulario para comunicarte con nosotros inmediatamente.
            </p>

            {/* Direct WhatsApp Hero Button */}
            <div className="contact__direct-action">
              <a
                href={directWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp contact__wa-main-btn"
                aria-label="Consultar por WhatsApp con SuperNova Lab SV"
              >
                <WhatsAppIcon size={22} />
                <span>Consultar por WhatsApp</span>
              </a>
            </div>

            {/* Visible Contact Cards */}
            <div className="contact__channels" role="list">
              <a
                href={directWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="contact__channel-card"
                role="listitem"
              >
                <div className="contact__channel-icon contact__channel-icon--wa" aria-hidden="true">
                  <WhatsAppIcon size={20} />
                </div>
                <div>
                  <span className="contact__channel-label">WhatsApp</span>
                  <strong className="contact__channel-value">{DISPLAY_PHONE}</strong>
                </div>
              </a>

              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="contact__channel-card"
                role="listitem"
              >
                <div className="contact__channel-icon contact__channel-icon--email" aria-hidden="true">
                  <Mail size={20} />
                </div>
                <div>
                  <span className="contact__channel-label">Correo electrónico</span>
                  <strong className="contact__channel-value">{CONTACT_EMAIL}</strong>
                </div>
              </a>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div className="contact__form-wrap" variants={fadeUpVariants}>
            <form
              className="contact__form"
              noValidate
              aria-label="Formulario de contacto SuperNova Lab SV"
            >
              {/* Name */}
              <div className={`form-field ${errors.name ? 'form-field--error' : ''}`}>
                <label htmlFor="contact-name" className="form-label">Nombre</label>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  className="form-input"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Tu nombre completo"
                  aria-required="true"
                  aria-describedby={errors.name ? 'name-error' : undefined}
                />
                {errors.name && (
                  <span id="name-error" className="form-error" role="alert">{errors.name}</span>
                )}
              </div>

              {/* Email */}
              <div className={`form-field ${errors.email ? 'form-field--error' : ''}`}>
                <label htmlFor="contact-email" className="form-label">Correo electrónico</label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  className="form-input"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="tu@correo.com"
                  aria-required="true"
                  aria-describedby={errors.email ? 'email-error' : undefined}
                />
                {errors.email && (
                  <span id="email-error" className="form-error" role="alert">{errors.email}</span>
                )}
              </div>

              {/* Profile */}
              <div className={`form-field ${errors.profile ? 'form-field--error' : ''}`}>
                <label htmlFor="contact-profile" className="form-label">Soy...</label>
                <select
                  id="contact-profile"
                  name="profile"
                  className="form-select"
                  value={form.profile}
                  onChange={handleChange}
                  aria-required="true"
                  aria-describedby={errors.profile ? 'profile-error' : undefined}
                >
                  <option value="">Selecciona una opción</option>
                  {profileOptions.map(opt => (
                    <option key={opt} value={opt}>{opt}</option>
                  ))}
                </select>
                {errors.profile && (
                  <span id="profile-error" className="form-error" role="alert">{errors.profile}</span>
                )}
              </div>

              {/* Interest */}
              <div className={`form-field ${errors.interest ? 'form-field--error' : ''}`}>
                <label htmlFor="contact-interest" className="form-label">Me interesa</label>
                <select
                  id="contact-interest"
                  name="interest"
                  className="form-select"
                  value={form.interest}
                  onChange={handleChange}
                  aria-required="true"
                  aria-describedby={errors.interest ? 'interest-error' : undefined}
                >
                  <option value="">Selecciona una opción</option>
                  {interestOptions.map(opt => (
                    <option key={opt} value={opt}>{opt}</option>
                  ))}
                </select>
                {errors.interest && (
                  <span id="interest-error" className="form-error" role="alert">{errors.interest}</span>
                )}
              </div>

              {/* Message */}
              <div className="form-field">
                <label htmlFor="contact-message" className="form-label">
                  Mensaje <span className="form-optional">(opcional)</span>
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  className="form-textarea"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Cuéntanos más sobre lo que necesitas..."
                  rows={4}
                />
              </div>

              {/* Form Action Buttons */}
              <div className="contact__actions">
                <button
                  type="button"
                  className="btn btn-whatsapp contact__submit-wa"
                  onClick={handleSendWhatsApp}
                  aria-label="Enviar consulta por WhatsApp"
                >
                  <WhatsAppIcon size={18} />
                  Enviar consulta por WhatsApp
                </button>

                <button
                  type="button"
                  className="btn btn-secondary contact__submit-email"
                  onClick={handleSendEmail}
                  aria-label="Enviar por correo electrónico"
                >
                  <Mail size={18} />
                  Enviar por correo
                </button>
              </div>

              <p className="contact__email-note">
                * El botón de correo abrirá tu aplicación de email preferida con la solicitud estructurada.
              </p>
            </form>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

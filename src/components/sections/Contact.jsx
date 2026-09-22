import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, AlertCircle } from 'lucide-react';
import { useScrollAnimation, fadeUpVariants, staggerContainerVariants } from '../../hooks/useScrollAnimation';
import './Contact.css';

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
  const [status, setStatus] = useState(null); // null | 'demo'
  const [submitting, setSubmitting] = useState(false);

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errs = validateForm(form);
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setSubmitting(true);
    // Simulate async
    await new Promise(r => setTimeout(r, 1200));
    setSubmitting(false);
    setStatus('demo');
  };

  const handleReset = () => {
    setForm({ name: '', email: '', profile: '', interest: '', message: '' });
    setErrors({});
    setStatus(null);
  };

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
          {/* Left info */}
          <motion.div className="contact__info" variants={fadeUpVariants}>
            <div className="label">Contacto</div>
            <h2 id="contact-title" className="contact__title">
              Cuéntanos{' '}
              <span className="gradient-text">qué necesitas.</span>
            </h2>
            <p className="contact__desc">
              Completa el formulario y nos pondremos en contacto contigo para
              explorar cómo SuperNova Lab SV puede ayudarte.
            </p>

            <div className="contact__items" role="list">
              {[
                { label: 'Formación virtual', desc: 'Para toda Latinoamérica.' },
                { label: 'Programas empresariales', desc: 'Capacitación presencial para grupos corporativos.' },
                { label: 'Consultoría y desarrollo', desc: 'Soluciones tecnológicas a medida.' },
              ].map(item => (
                <div key={item.label} className="contact__item" role="listitem">
                  <div className="contact__item-dot" aria-hidden="true" />
                  <div>
                    <strong className="contact__item-label">{item.label}</strong>
                    <p className="contact__item-desc">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Form */}
          <motion.div className="contact__form-wrap" variants={fadeUpVariants}>
            <AnimatePresence mode="wait">
              {status === 'demo' ? (
                <motion.div
                  key="demo"
                  className="contact__demo-msg"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  role="alert"
                >
                  <div className="contact__demo-icon" aria-hidden="true">
                    <AlertCircle size={28} />
                  </div>
                  <h3>Formulario en configuración</h3>
                  <p>
                    El canal de envío de mensajes será configurado próximamente.
                    Tu mensaje no ha sido enviado — esta es una demostración del formulario.
                  </p>
                  <p className="contact__demo-note">
                    Mientras tanto, puedes encontrarnos en{' '}
                    <a
                      href="https://www.facebook.com/profile.php?id=61574425607753"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="contact__demo-link"
                    >
                      Facebook
                    </a>.
                  </p>
                  <button className="btn btn-secondary" onClick={handleReset}>
                    Volver al formulario
                  </button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  className="contact__form"
                  onSubmit={handleSubmit}
                  noValidate
                  aria-label="Formulario de contacto SuperNova Lab SV"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
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

                  <button
                    type="submit"
                    className="btn btn-primary contact__submit"
                    disabled={submitting}
                    aria-label="Enviar mensaje de contacto"
                  >
                    {submitting ? (
                      <>
                        <div className="contact__spinner" aria-hidden="true" />
                        Enviando...
                      </>
                    ) : (
                      <>
                        <Send size={16} />
                        Enviar mensaje
                      </>
                    )}
                  </button>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

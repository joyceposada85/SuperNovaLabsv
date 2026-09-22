import { Zap, Mail } from 'lucide-react';
import './Footer.css';

function FacebookIcon({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
    </svg>
  );
}

function WhatsAppIcon({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.99c-.002 5.45-4.437 9.887-9.885 9.887m0-18.272c-5.419 0-9.832 4.412-9.835 9.833 0 1.733.451 3.42 1.309 4.908l-1.391 5.082 5.201-1.364c1.437.784 3.056 1.198 4.713 1.199h.004c5.418 0 9.831-4.413 9.834-9.835.002-2.624-1.02-5.09-2.887-6.958a9.78 9.78 0 00-6.948-2.867"/>
    </svg>
  );
}

const navLinks = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Aprende', href: '#aprende' },
  { label: 'Empresas', href: '#empresas' },
  { label: 'Nosotros', href: '#nosotros' },
  { label: 'Contacto', href: '#contacto' },
];

const serviceLinks = [
  'Cursos',
  'Capacitación corporativa',
  'Consultoría',
  'Soluciones digitales',
];

export default function Footer() {
  const year = new Date().getFullYear();
  const PHONE_NUMBER = '50362953409';
  const DISPLAY_PHONE = '+503 6295-3409';
  const CONTACT_EMAIL = 'supernovalabsv@gmail.com';

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const waUrl = `https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent(
    'Hola, SuperNova Lab SV. Deseo recibir información sobre sus cursos y programas de formación.'
  )}`;

  return (
    <footer className="footer" role="contentinfo">
      <div className="footer__glow" aria-hidden="true" />

      <div className="container">
        <div className="footer__main">
          {/* Brand */}
          <div className="footer__brand">
            <div className="footer__logo">
              <div className="footer__logo-icon" aria-hidden="true">
                <Zap size={16} />
              </div>
              <div className="footer__logo-text">
                <span className="footer__logo-name">SuperNova</span>
                <span className="footer__logo-sub">Lab SV</span>
              </div>
            </div>
            <p className="footer__slogan">Aprende. Crea. Transforma.</p>
            <p className="footer__tagline">
              Formación tecnológica y soluciones digitales para personas y
              organizaciones en Latinoamérica.
            </p>

            {/* Social & Direct Links */}
            <div className="footer__social" aria-label="Redes sociales y contacto">
              <a
                href="https://www.facebook.com/profile.php?id=61574425607753"
                target="_blank"
                rel="noopener noreferrer"
                className="footer__social-link"
                aria-label="SuperNova Lab SV en Facebook"
              >
                <FacebookIcon size={18} />
              </a>
              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="footer__social-link footer__social-link--wa"
                aria-label="SuperNova Lab SV en WhatsApp"
              >
                <WhatsAppIcon size={18} />
              </a>
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="footer__social-link footer__social-link--email"
                aria-label="Enviar correo a SuperNova Lab SV"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>

          {/* Nav */}
          <nav aria-label="Navegación del footer">
            <h3 className="footer__col-title">Navegación</h3>
            <ul className="footer__list" role="list">
              {navLinks.map(link => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="footer__link"
                    onClick={(e) => handleNavClick(e, link.href)}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Services */}
          <div>
            <h3 className="footer__col-title">Servicios</h3>
            <ul className="footer__list" role="list">
              {serviceLinks.map(s => (
                <li key={s}>
                  <span className="footer__link footer__link--plain">{s}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Direct Info Column */}
          <div>
            <h3 className="footer__col-title">Contacto</h3>
            <ul className="footer__list" role="list">
              <li>
                <a
                  href={waUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer__contact-link"
                >
                  <WhatsAppIcon size={15} />
                  <span>{DISPLAY_PHONE}</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="footer__contact-link"
                >
                  <Mail size={15} />
                  <span>{CONTACT_EMAIL}</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="footer__bottom">
          <p className="footer__copy">
            © {year} SuperNova Lab SV. Todos los derechos reservados.
          </p>
          <p className="footer__region">
            Formación virtual · El Salvador & Latinoamérica
          </p>
        </div>
      </div>
    </footer>
  );
}

import { Zap } from 'lucide-react';
import './Footer.css';

function FacebookIcon({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
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

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

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

            {/* Social */}
            <div className="footer__social" aria-label="Redes sociales">
              <a
                href="https://www.facebook.com/profile.php?id=61574425607753"
                target="_blank"
                rel="noopener noreferrer"
                className="footer__social-link"
                aria-label="SuperNova Lab SV en Facebook"
              >
                <FacebookIcon size={18} />
              </a>
              {/* WhatsApp — pendiente de configurar número */}
              {/* <a href="https://wa.me/NUMERO" className="footer__social-link" aria-label="WhatsApp"><MessageCircle size={18} /></a> */}
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
        </div>

        {/* Bottom bar */}
        <div className="footer__bottom">
          <p className="footer__copy">
            © {year} SuperNova Lab SV. Todos los derechos reservados.
          </p>
          <p className="footer__region">
            Formación virtual · Latinoamérica
          </p>
        </div>
      </div>
    </footer>
  );
}

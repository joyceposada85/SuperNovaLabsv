import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Zap } from 'lucide-react';
import './Header.css';

const navLinks = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Aprende', href: '#aprende' },
  { label: 'Empresas', href: '#empresas' },
  { label: 'Nosotros', href: '#nosotros' },
  { label: 'Contacto', href: '#contacto' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <motion.header
        className={`header ${scrolled ? 'header--scrolled' : ''}`}
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="header__inner container">
          {/* Logo */}
          <a
            href="#inicio"
            className="header__logo"
            aria-label="SuperNova Lab SV — Inicio"
            onClick={(e) => { e.preventDefault(); handleNavClick('#inicio'); }}
          >
            <div className="header__logo-icon" aria-hidden="true">
              <Zap size={18} />
            </div>
            <div className="header__logo-text">
              <span className="header__logo-name">SuperNova</span>
              <span className="header__logo-sub">Lab SV</span>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="header__nav" aria-label="Navegación principal">
            <ul className="header__nav-list" role="list">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="header__nav-link"
                    onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* CTA */}
          <a
            href="#aprende"
            className="btn btn-primary header__cta"
            onClick={(e) => { e.preventDefault(); handleNavClick('#aprende'); }}
          >
            Explorar cursos
          </a>

          {/* Hamburger */}
          <button
            className="header__hamburger"
            aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="header__mobile-menu"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            role="dialog"
            aria-modal="true"
            aria-label="Menú de navegación"
          >
            <nav>
              <ul className="header__mobile-list" role="list">
                {navLinks.map((link, i) => (
                  <motion.li
                    key={link.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.06, duration: 0.3 }}
                  >
                    <a
                      href={link.href}
                      className="header__mobile-link"
                      onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                    >
                      {link.label}
                    </a>
                  </motion.li>
                ))}
                <motion.li
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: navLinks.length * 0.06, duration: 0.3 }}
                >
                  <a
                    href="#aprende"
                    className="btn btn-primary header__mobile-cta"
                    onClick={(e) => { e.preventDefault(); handleNavClick('#aprende'); }}
                  >
                    Explorar cursos
                  </a>
                </motion.li>
              </ul>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

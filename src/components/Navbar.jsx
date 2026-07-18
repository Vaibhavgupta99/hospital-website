import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, Phone, Menu, X } from 'lucide-react';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Doctors', path: '/doctors' },
  { name: 'Services', path: '/services' },
  { name: 'Contact', path: '/contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  return (
    <>
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="navbar-inner">
          <Link to="/" className="navbar-logo">
            <div className="navbar-logo-icon">
              <Heart size={22} />
            </div>
            <div className="navbar-logo-text">
              <h1>Saraswati D-Care</h1>
              <p>Diagnostic Centre</p>
            </div>
          </Link>

          <div className="navbar-links">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={location.pathname === link.path ? 'active' : ''}
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="navbar-cta" style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <a href="tel:+919876543210" className="btn btn-primary" style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <Phone size={16} />
              <span className="hide-mobile">Call Now</span>
            </a>
          </div>

          <button
            className={`navbar-toggle ${mobileOpen ? 'open' : ''}`}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              className="mobile-overlay open"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              className="mobile-menu open"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            >
              <div className="mobile-menu-header">
                <div className="navbar-logo-text">
                  <h1 style={{ color: 'var(--dark)' }}>Saraswati D-Care</h1>
                </div>
                <button className="mobile-close" onClick={() => setMobileOpen(false)}>
                  <X size={24} />
                </button>
              </div>

              <div className="mobile-menu-links">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={location.pathname === link.path ? 'active' : ''}
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>

              <a href="tel:+919876543210" className="btn btn-primary" style={{ marginTop: 'auto', width: '100%' }}>
                <Phone size={16} /> Call Now
              </a>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

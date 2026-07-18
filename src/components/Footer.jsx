import { Link } from 'react-router-dom';
import { Heart, Phone, Mail, MapPin, Clock, ChevronRight } from 'lucide-react';
import { FaFacebookF, FaInstagram, FaXTwitter, FaLinkedinIn } from 'react-icons/fa6';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          {/* Brand */}
          <div className="footer-brand">
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
              <div className="navbar-logo-icon">
                <Heart size={22} />
              </div>
              <div>
                <h3>Saraswati D-Care</h3>
                <p style={{ marginBottom: 0, fontSize: '0.75rem', color: 'rgba(255,255,255,0.5)' }}>Diagnostic Centre</p>
              </div>
            </div>
            <p>
              Advanced multi-speciality day care & diagnostic centre providing compassionate healthcare services
              with modern technology and experienced medical professionals in Rewa, Madhya Pradesh.
            </p>
            <div className="footer-emergency">
              <div className="footer-emergency-icon">
                <Phone size={18} />
              </div>
              <div>
                <h4>Emergency Helpline</h4>
                <p>+91 98765 43210</p>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-col">
            <h4>Quick Links</h4>
            <ul>
              <li><Link to="/"><ChevronRight size={14} /> Home</Link></li>
              <li><Link to="/about"><ChevronRight size={14} /> About Us</Link></li>
              <li><Link to="/doctors"><ChevronRight size={14} /> Our Doctors</Link></li>
              <li><Link to="/services"><ChevronRight size={14} /> Services</Link></li>
              <li><Link to="/contact"><ChevronRight size={14} /> Contact</Link></li>
            </ul>
          </div>

          {/* Departments */}
          <div className="footer-col">
            <h4>Departments</h4>
            <ul>
              <li><Link to="/services"><ChevronRight size={14} /> General Medicine</Link></li>
              <li><Link to="/services"><ChevronRight size={14} /> Internal Medicine</Link></li>
              <li><Link to="/services"><ChevronRight size={14} /> Eye Care</Link></li>
              <li><Link to="/services"><ChevronRight size={14} /> Diagnostics</Link></li>
              <li><Link to="/services"><ChevronRight size={14} /> Preventive Health</Link></li>
              <li><Link to="/services"><ChevronRight size={14} /> Pharmacy</Link></li>
            </ul>
          </div>

          {/* Contact & Social */}
          <div className="footer-col">
            <h4>Contact Us</h4>
            <ul>
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', marginBottom: '12px' }}>
                <MapPin size={16} style={{ minWidth: '16px', marginTop: '3px' }} />
                <span style={{ fontSize: '0.875rem' }}>Near Bus Stand, Main Road, Rewa, Madhya Pradesh 486001</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
                <Phone size={16} style={{ minWidth: '16px' }} />
                <span style={{ fontSize: '0.875rem' }}>+91 98765 43210</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
                <Mail size={16} style={{ minWidth: '16px' }} />
                <span style={{ fontSize: '0.875rem' }}>info@saraswatidcare.com</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
                <Clock size={16} style={{ minWidth: '16px' }} />
                <span style={{ fontSize: '0.875rem' }}>Mon - Sat: 9:00 AM - 8:00 PM</span>
              </li>
            </ul>
            <div className="footer-social">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><FaFacebookF size={18} /></a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><FaInstagram size={18} /></a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="X (Twitter)"><FaXTwitter size={18} /></a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><FaLinkedinIn size={18} /></a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2024 Saraswati D-Care & Diagnostic Centre. All rights reserved.</p>
          <p>Designed with ❤️ for better healthcare</p>
        </div>
      </div>
    </footer>
  );
}

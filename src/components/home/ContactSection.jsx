import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { MapPin, Phone, Mail, MessageCircle, Clock, Send, CheckCircle, ChevronRight } from 'lucide-react';
import CustomSelect from '../CustomSelect';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
const contactCards = [
  { icon: <MapPin size={20} />, title: 'Visit Us', info: 'Near Bus Stand, Main Road,\nRewa, MP 486001' },
  { icon: <Phone size={20} />, title: 'Call Us', info: '+91 98765 43210\n+91 76543 21098' },
  { icon: <Mail size={20} />, title: 'Email Us', info: 'info@saraswatidcare.com\nappointments@saraswatidcare.com' },
  { icon: <Clock size={20} />, title: 'Working Hours', info: 'Mon - Sat: 9:00 AM - 8:00 PM\nSunday: 10:00 AM - 2:00 PM' },
];

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false);
  const [startDate, setStartDate] = useState(null);
  const [department, setDepartment] = useState('');
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section className="section" id="contact" ref={ref}>
      <div className="container">
        <div className="section-header">
          <motion.span
            className="section-badge"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
          >
            Contact Us
          </motion.span>
          <motion.h2
            className="section-title"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
          >
            Get in <span>Touch</span>
          </motion.h2>
          <motion.p
            className="section-subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
          >
            Have questions or want to book an appointment? We're here to help you.
          </motion.p>
        </div>

        <div className="contact-grid">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <div className="contact-info-cards">
              {contactCards.map((card, i) => (
                <div key={i} className="contact-info-card">
                  <div className="contact-info-card-icon">{card.icon}</div>
                  <div>
                    <h4>{card.title}</h4>
                    <p style={{ whiteSpace: 'pre-line' }}>{card.info}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* WhatsApp CTA */}
            <a
              href="https://wa.me/919876543210"
              target="_blank"
              rel="noopener noreferrer"
              className="whatsapp-banner"
            >
              <div className="whatsapp-banner-content">
                <div className="whatsapp-icon-wrapper">
                  <MessageCircle size={24} />
                </div>
                <div className="whatsapp-banner-text">
                  <h4>Chat on WhatsApp</h4>
                  <p>Get instant answers to your questions</p>
                </div>
              </div>
              <div className="whatsapp-banner-arrow">
                <ChevronRight size={20} />
              </div>
            </a>

            {/* Map */}
            <div className="map-placeholder">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3649.0!2d81.3!3d24.5!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjTCsDMwJzAwLjAiTiA4McKwMTgnMDAuMCJF!5e0!3m2!1sen!2sin!4v1640000000000!5m2!1sen!2sin"
                allowFullScreen=""
                loading="lazy"
                title="Hospital Location"
              ></iframe>
            </div>
          </motion.div>

          <motion.div
            className="contact-form"
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <h3>📋 Book an Appointment</h3>
            {submitted ? (
              <motion.div
                className="form-success"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
              >
                <CheckCircle size={40} style={{ margin: '0 auto 12px', display: 'block' }} />
                <p style={{ fontSize: '1.125rem', fontWeight: 600, marginBottom: '4px' }}>Appointment Request Sent!</p>
                <p style={{ fontSize: '0.875rem', color: '#6B7280' }}>We'll call you back within 30 minutes to confirm.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label>Full Name</label>
                    <input type="text" placeholder="Enter your name" required />
                  </div>
                  <div className="form-group">
                    <label>Phone Number</label>
                    <input type="tel" placeholder="+91 98765 43210" required />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label>Preferred Date</label>
                    <DatePicker
                      selected={startDate}
                      onChange={(date) => setStartDate(date)}
                      dateFormat="dd/MM/yyyy"
                      placeholderText="Select a date"
                      minDate={new Date()}
                      required
                      className="react-datepicker-input"
                    />
                  </div>
                  <div className="form-group">
                    <label>Department</label>
                    <CustomSelect 
                      options={['General Medicine', 'Internal Medicine', 'Eye Care', 'Diagnostics', 'Health Checkup', 'Preventive Health']}
                      value={department}
                      onChange={setDepartment}
                      placeholder="Select department"
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label>Message (Optional)</label>
                  <textarea placeholder="Tell us about your concern..." rows={4}></textarea>
                </div>
                <button type="submit" className="btn btn-primary btn-lg" style={{ width: '100%' }}>
                  <Send size={18} />
                  Request Appointment
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

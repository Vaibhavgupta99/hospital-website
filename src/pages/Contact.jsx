import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  ChevronRight, MapPin, Phone, Mail, MessageCircle,
  Clock, Send, CheckCircle, Globe
} from 'lucide-react';
import CustomSelect from '../components/CustomSelect';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const contactInfo = [
  { icon: <MapPin size={22} />, title: 'Visit Us', primary: 'Near Bus Stand, Main Road', secondary: 'Rewa, Madhya Pradesh 486001' },
  { icon: <Phone size={22} />, title: 'Call Us', primary: '+91 98765 43210', secondary: '+91 76543 21098' },
  { icon: <Mail size={22} />, title: 'Email Us', primary: 'info@saraswatidcare.com', secondary: 'appointments@saraswatidcare.com' },
  { icon: <MessageCircle size={22} />, title: 'WhatsApp', primary: '+91 98765 43210', secondary: 'Chat with us instantly' },
  { icon: <Clock size={22} />, title: 'Working Hours', primary: 'Mon - Sat: 9:00 AM - 8:00 PM', secondary: 'Sunday: 10:00 AM - 2:00 PM' },
  { icon: <Globe size={22} />, title: 'Website', primary: 'www.saraswatidcare.com', secondary: 'Visit our website' },
];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [startDate, setStartDate] = useState(null);
  const [time, setTime] = useState('');
  const [department, setDepartment] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    window.scrollTo({ top: 200, behavior: 'smooth' });
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <main>
      <div className="page-header">
        <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          Contact Us
        </motion.h1>
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
          We're Here to Help You
        </motion.p>
        <div className="breadcrumb">
          <Link to="/">Home</Link>
          <ChevronRight size={14} />
          <span>Contact</span>
        </div>
      </div>

      {/* Contact Info Cards */}
      <section className="section">
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '24px',
            marginBottom: '64px',
          }}>
            {contactInfo.map((info, i) => (
              <motion.div
                key={i}
                className="card"
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '20px',
                  padding: '28px',
                }}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * i, duration: 0.5 }}
              >
                <div style={{
                  width: '52px',
                  height: '52px',
                  minWidth: '52px',
                  background: 'linear-gradient(135deg, rgba(11,94,215,0.08) 0%, rgba(0,180,216,0.08) 100%)',
                  borderRadius: 'var(--radius-md)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--primary)',
                }}>
                  {info.icon}
                </div>
                <div>
                  <h4 style={{
                    fontFamily: 'var(--font-heading)',
                    fontWeight: 600,
                    marginBottom: '4px',
                    fontSize: 'var(--text-base)',
                  }}>
                    {info.title}
                  </h4>
                  <p style={{ fontSize: 'var(--text-sm)', color: 'var(--dark)', fontWeight: 500, marginBottom: '2px' }}>
                    {info.primary}
                  </p>
                  <p style={{ fontSize: 'var(--text-sm)', color: 'var(--gray-400)' }}>
                    {info.secondary}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Map + Form */}
          <div className="contact-grid">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 style={{
                fontFamily: 'var(--font-heading)',
                fontSize: 'var(--text-2xl)',
                fontWeight: 600,
                marginBottom: '20px',
              }}>
                📍 Find Us on Map
              </h3>
              <div className="map-placeholder" style={{ height: '400px', marginBottom: '24px' }}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3649.0!2d81.3!3d24.5!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjTCsDMwJzAwLjAiTiA4McKwMTgnMDAuMCJF!5e0!3m2!1sen!2sin!4v1640000000000!5m2!1sen!2sin"
                  allowFullScreen=""
                  loading="lazy"
                  title="Hospital Location"
                ></iframe>
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

              {/* Working Hours Table */}
              <div className="card" style={{ marginTop: '24px', padding: '24px' }}>
                <h4 style={{ fontFamily: 'var(--font-heading)', fontWeight: 600, marginBottom: '16px' }}>
                  🕐 Working Hours
                </h4>
                <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                  <tbody>
                    {[
                      ['Monday - Friday', '9:00 AM - 8:00 PM'],
                      ['Saturday', '9:00 AM - 6:00 PM'],
                      ['Sunday', '10:00 AM - 2:00 PM'],
                      ['Public Holidays', 'Emergency Only'],
                    ].map(([day, time], i) => (
                      <tr key={i} style={{ borderBottom: i < 3 ? '1px solid var(--gray-200)' : 'none' }}>
                        <td style={{ padding: '12px 0', fontWeight: 500, fontSize: 'var(--text-sm)' }}>{day}</td>
                        <td style={{ padding: '12px 0', textAlign: 'right', color: 'var(--primary)', fontWeight: 600, fontSize: 'var(--text-sm)' }}>{time}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </motion.div>

            <motion.div
              className="contact-form"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3>📋 Book an Appointment</h3>
              <p style={{ color: 'var(--gray-500)', fontSize: 'var(--text-sm)', marginBottom: '24px' }}>
                Fill in the form below and we'll get back to you within 30 minutes during working hours.
              </p>

              {submitted ? (
                <motion.div
                  className="form-success"
                  style={{ padding: '48px 24px' }}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                >
                  <CheckCircle size={56} style={{ margin: '0 auto 16px', display: 'block' }} />
                  <p style={{ fontSize: 'var(--text-xl)', fontWeight: 600, marginBottom: '8px' }}>
                    Appointment Request Sent!
                  </p>
                  <p style={{ fontSize: 'var(--text-sm)', color: 'var(--gray-500)' }}>
                    Thank you! Our team will call you back within 30 minutes to confirm your appointment.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="form-row">
                    <div className="form-group">
                      <label>Full Name *</label>
                      <input type="text" placeholder="Enter your full name" required />
                    </div>
                    <div className="form-group">
                      <label>Phone Number *</label>
                      <input type="tel" placeholder="+91 98765 43210" required />
                    </div>
                  </div>
                  <div className="form-group">
                    <label>Email Address</label>
                    <input type="email" placeholder="your.email@example.com" />
                  </div>
                  <div className="form-row">
                    <div className="form-group">
                      <label>Preferred Date *</label>
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
                      <label>Preferred Time</label>
                      <CustomSelect 
                        options={['9:00 AM - 11:00 AM', '11:00 AM - 1:00 PM', '2:00 PM - 4:00 PM', '4:00 PM - 6:00 PM', '6:00 PM - 8:00 PM']}
                        value={time}
                        onChange={setTime}
                        placeholder="Select time"
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <label>Department *</label>
                    <CustomSelect 
                      options={['General Medicine', 'Internal Medicine', 'Eye Care & Ophthalmology', 'Diagnostics & Pathology', 'Health Checkup', 'Preventive Health']}
                      value={department}
                      onChange={setDepartment}
                      placeholder="Select department"
                    />
                  </div>
                  <div className="form-group">
                    <label>Your Concern / Message</label>
                    <textarea placeholder="Briefly describe your health concern or reason for visit..." rows={4}></textarea>
                  </div>
                  <button type="submit" className="btn btn-primary btn-lg" style={{ width: '100%' }}>
                    <Send size={18} />
                    Request Appointment
                  </button>
                  <p style={{
                    fontSize: 'var(--text-xs)',
                    color: 'var(--gray-400)',
                    textAlign: 'center',
                    marginTop: '16px',
                  }}>
                    By submitting, you agree to our privacy policy. We'll never share your information.
                  </p>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}

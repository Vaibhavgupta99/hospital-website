import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle } from 'lucide-react';
import CustomSelect from './CustomSelect';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

export default function BookAppointmentForm({ title = "📋 Book an Appointment", subtitle = "Fill in the form below and we'll get back to you within 30 minutes during working hours." }) {
  const [submitted, setSubmitted] = useState(false);
  const [startDate, setStartDate] = useState(null);
  const [time, setTime] = useState('');
  const [department, setDepartment] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <>
      <h3>{title}</h3>
      {subtitle && (
        <p style={{ color: 'var(--gray-500)', fontSize: 'var(--text-sm)', marginBottom: '24px' }}>
          {subtitle}
        </p>
      )}

      {submitted ? (
        <motion.div
          className="form-success"
          style={{ padding: '48px 24px' }}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
        >
          <CheckCircle size={56} style={{ margin: '0 auto 16px', display: 'block' }} />
          <p style={{ fontSize: 'var(--text-xl)', fontWeight: 600, margin: '0 0 8px', textAlign: 'center' }}>
            Appointment Request Sent!
          </p>
          <p style={{ fontSize: 'var(--text-sm)', color: 'var(--gray-500)', margin: 0, textAlign: 'center' }}>
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
          <button type="submit" className="btn btn-primary btn-lg" style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
            <Send size={18} />
            Request Appointment
          </button>
        </form>
      )}
    </>
  );
}

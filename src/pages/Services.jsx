import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  ChevronRight, Stethoscope, HeartPulse, Eye, FlaskConical,
  ShieldPlus, ClipboardCheck, Pill, Check, ArrowRight
} from 'lucide-react';
import diagnosticLab from '../assets/images/diagnostic-lab.png';
import consultation from '../assets/images/consultation.png';

const services = [
  {
    icon: <Stethoscope size={36} />,
    title: 'General Medicine',
    desc: 'Comprehensive primary care for acute and chronic conditions. Our experienced physicians provide thorough examinations, accurate diagnoses, and effective treatment plans for a wide range of medical conditions.',
    features: ['Acute Illness Treatment', 'Chronic Disease Management', 'Preventive Screenings', 'Health Counselling'],
  },
  {
    icon: <HeartPulse size={36} />,
    title: 'Internal Medicine',
    desc: 'Expert diagnosis and management of complex internal diseases including cardiovascular, respiratory, gastrointestinal, and metabolic disorders with a holistic approach to treatment.',
    features: ['Cardiovascular Assessment', 'Respiratory Care', 'Metabolic Disorders', 'Holistic Treatment'],
  },
  {
    icon: <Eye size={36} />,
    title: 'Eye Care & Ophthalmology',
    desc: 'Complete eye care services from routine vision testing to treatment of complex ocular conditions. Our ophthalmologists use modern equipment for accurate diagnosis and treatment.',
    features: ['Vision Testing', 'Cataract Evaluation', 'Glaucoma Screening', 'Retina Examination'],
  },
  {
    icon: <FlaskConical size={36} />,
    title: 'Advanced Diagnostics',
    desc: 'State-of-the-art diagnostic laboratory offering comprehensive pathology, biochemistry, hematology, and imaging services with quick turnaround times.',
    features: ['Pathology Services', 'Biochemistry Tests', 'Hematology', 'Imaging & Radiology'],
  },
  {
    icon: <ShieldPlus size={36} />,
    title: 'Preventive Health',
    desc: 'Proactive health screening and wellness programs designed to identify risk factors early and prevent diseases before they develop.',
    features: ['Health Risk Assessment', 'Lifestyle Counselling', 'Vaccination Programs', 'Early Detection'],
  },
  {
    icon: <ClipboardCheck size={36} />,
    title: 'Health Checkup Packages',
    desc: 'Comprehensive health checkup packages tailored for every age group, gender, and health need. From basic screening to executive packages.',
    features: ['Basic Checkup ₹999', 'Executive Checkup ₹2,999', 'Senior Citizen ₹3,999', "Women's Health ₹2,499"],
  },
  {
    icon: <Pill size={36} />,
    title: 'In-House Pharmacy',
    desc: 'Convenient in-house pharmacy stocked with genuine medicines at competitive prices. Our pharmacists ensure you get the right medication with proper guidance.',
    features: ['Genuine Medicines', 'Competitive Pricing', 'Medicine Counselling', 'Prescription Management'],
  },
];

const equipmentList = [
  'Digital X-Ray System',
  'Automated Hematology Analyzer',
  'Biochemistry Auto Analyzer',
  'ECG Machine',
  'Ultrasound System',
  'Slit Lamp Biomicroscope',
  'Ophthalmoscope',
  'Spirometer',
];

export default function Services() {
  return (
    <main>
      <div className="page-header">
        <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          Our Services
        </motion.h1>
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
          Comprehensive Healthcare Under One Roof
        </motion.p>
        <div className="breadcrumb">
          <Link to="/">Home</Link>
          <ChevronRight size={14} />
          <span>Services</span>
        </div>
      </div>

      {/* Services Grid */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="section-badge">Our Specialities</span>
            <h2 className="section-title">Medical <span>Services</span></h2>
            <p className="section-subtitle">
              Expert care across multiple specialities, powered by experienced doctors and modern diagnostic technology.
            </p>
          </div>

          <div style={{ display: 'grid', gap: '32px' }}>
            {services.map((service, i) => (
              <motion.div
                key={i}
                className="card"
                style={{
                  display: 'grid',
                  gridTemplateColumns: i % 2 === 0 ? '1fr 2fr' : '2fr 1fr',
                  gap: '0',
                  padding: 0,
                  overflow: 'hidden',
                  borderRadius: 'var(--radius-xl)',
                }}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * i, duration: 0.5 }}
              >
                <div style={{
                  background: 'linear-gradient(135deg, rgba(11,94,215,0.04) 0%, rgba(0,180,216,0.04) 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '48px',
                  order: i % 2 === 0 ? 0 : 1,
                }}>
                  <div style={{
                    width: '100px',
                    height: '100px',
                    background: 'var(--gradient-primary)',
                    borderRadius: 'var(--radius-xl)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#fff',
                    boxShadow: '0 8px 25px rgba(11,94,215,0.3)',
                  }}>
                    {service.icon}
                  </div>
                </div>
                <div style={{ padding: '36px', order: i % 2 === 0 ? 1 : 0 }}>
                  <h3 style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: 'var(--text-2xl)',
                    fontWeight: 600,
                    marginBottom: '12px',
                    color: 'var(--dark)',
                  }}>
                    {service.title}
                  </h3>
                  <p style={{
                    color: 'var(--gray-500)',
                    lineHeight: 1.8,
                    marginBottom: '20px',
                    fontSize: 'var(--text-base)',
                  }}>
                    {service.desc}
                  </p>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
                    {service.features.map((f, j) => (
                      <div key={j} style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px',
                        fontSize: 'var(--text-sm)',
                        color: 'var(--gray-600)',
                      }}>
                        <Check size={16} style={{ color: 'var(--success)', flexShrink: 0 }} />
                        {f}
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Equipment Section */}
      <section className="section section-alt">
        <div className="container">
          <div className="about-grid">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <img src={diagnosticLab} alt="Diagnostic Equipment" style={{ borderRadius: 'var(--radius-xl)', boxShadow: 'var(--shadow-xl)', width: '100%', height: '400px', objectFit: 'cover' }} />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <span className="section-badge">Technology</span>
              <h2 style={{
                fontFamily: 'var(--font-heading)',
                fontSize: 'var(--text-3xl)',
                fontWeight: 700,
                marginBottom: '16px',
              }}>
                Modern <span style={{ background: 'var(--gradient-primary)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Medical Equipment</span>
              </h2>
              <p style={{ color: 'var(--gray-500)', lineHeight: 1.8, marginBottom: '24px' }}>
                We invest in cutting-edge medical technology to ensure accurate diagnostics and effective treatment.
                Our facility is equipped with the latest equipment from leading medical device manufacturers.
              </p>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                {equipmentList.map((eq, i) => (
                  <div key={i} style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    padding: '10px 14px',
                    background: 'var(--card)',
                    borderRadius: 'var(--radius-md)',
                    fontSize: 'var(--text-sm)',
                    fontWeight: 500,
                    color: 'var(--dark)',
                    boxShadow: 'var(--shadow-sm)',
                  }}>
                    <Check size={16} style={{ color: 'var(--primary)' }} />
                    {eq}
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section" style={{ textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '600px' }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title">Need a <span>Consultation</span>?</h2>
            <p className="section-subtitle" style={{ marginBottom: '32px' }}>
              Book an appointment with our specialists today. We're here to help you on your path to better health.
            </p>
            <Link to="/contact" className="btn btn-primary btn-lg">
              Book Appointment <ArrowRight size={20} />
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}

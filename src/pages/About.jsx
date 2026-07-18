import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { Target, Eye, Heart, Lightbulb, Award, Users, Building2, Clock, ChevronRight } from 'lucide-react';
import hospitalExterior from '../assets/images/hospital-exterior.png';
import reception from '../assets/images/reception.png';
import consultation from '../assets/images/consultation.png';
import diagnosticLab from '../assets/images/diagnostic-lab.png';

const timeline = [
  { year: '2009', title: 'Foundation', desc: 'Saraswati D-Care was established with a vision to provide quality healthcare in Rewa.' },
  { year: '2013', title: 'Diagnostic Wing', desc: 'Added advanced diagnostic laboratory with state-of-the-art equipment.' },
  { year: '2016', title: 'Multi-Speciality Expansion', desc: 'Expanded to include ophthalmology, internal medicine, and preventive health.' },
  { year: '2019', title: 'Modern Infrastructure', desc: 'Upgraded facility with modern consultation rooms and digital health records.' },
  { year: '2023', title: 'Community Trust', desc: 'Crossed 5000+ happy patients milestone, becoming Rewa\'s most trusted centre.' },
];

const values = [
  { icon: <Target size={24} />, title: 'Mission', desc: 'To provide accessible, affordable and high-quality healthcare to every family in Rewa and surrounding regions.' },
  { icon: <Eye size={24} />, title: 'Vision', desc: 'To be the most trusted and advanced healthcare destination in central India, known for excellence and compassion.' },
  { icon: <Heart size={24} />, title: 'Values', desc: 'Compassion, integrity, excellence, innovation, and patient-first approach guide everything we do.' },
  { icon: <Lightbulb size={24} />, title: 'Innovation', desc: 'Continuously adopting modern medical technologies and evidence-based practices for better outcomes.' },
];

const stats = [
  { icon: <Award size={28} />, value: '15+', label: 'Years of Service' },
  { icon: <Users size={28} />, value: '5000+', label: 'Patients Treated' },
  { icon: <Building2 size={28} />, value: '7+', label: 'Departments' },
  { icon: <Clock size={28} />, value: '24/7', label: 'Support Available' },
];

function Section({ children, className = '' }) {
  return <section className={`section ${className}`}>{children}</section>;
}

export default function About() {
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const isInView1 = useInView(ref1, { once: true, margin: '-100px' });
  const isInView2 = useInView(ref2, { once: true, margin: '-100px' });
  const isInView3 = useInView(ref3, { once: true, margin: '-100px' });

  return (
    <main>
      {/* Page Header */}
      <div className="page-header">
        <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          About Us
        </motion.h1>
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
          A Legacy of Compassionate Healthcare in Rewa
        </motion.p>
        <div className="breadcrumb">
          <Link to="/">Home</Link>
          <ChevronRight size={14} />
          <span>About</span>
        </div>
      </div>

      {/* Story Section */}
      <Section>
        <div className="container">
          <div className="about-grid" ref={ref1}>
            <motion.div
              className="about-image"
              initial={{ opacity: 0, x: -50 }}
              animate={isInView1 ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7 }}
            >
              <img src={hospitalExterior} alt="Saraswati D-Care" />
              <div className="about-image-badge">
                <span className="badge-value">15+</span>
                <span className="badge-label">Years of Trust</span>
              </div>
            </motion.div>
            <motion.div
              className="about-content"
              initial={{ opacity: 0, x: 50 }}
              animate={isInView1 ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <span className="section-badge">Our Story</span>
              <h2>A Journey of <span>Trust & Excellence</span></h2>
              <p>
                Founded in 2009 by Dr. Manoj Indurkar, Saraswati D-Care & Diagnostic Centre began with a
                simple yet powerful vision — to bring world-class healthcare to the people of Rewa and
                central India. What started as a small clinic has grown into a trusted multi-speciality
                day care and diagnostic centre.
              </p>
              <p>
                Over the past 15+ years, we have consistently invested in advanced medical technology,
                experienced healthcare professionals, and patient-centered infrastructure. Our commitment
                to affordable, accessible, and compassionate care has earned us the trust of thousands of
                families across the region.
              </p>
              <p>
                Today, Saraswati D-Care stands as a beacon of quality healthcare in Rewa, offering
                comprehensive services ranging from general medicine to advanced diagnostics, all under
                one roof.
              </p>
            </motion.div>
          </div>
        </div>
      </Section>

      {/* Stats */}
      <Section className="section-alt">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '24px' }}>
            {stats.map((s, i) => (
              <motion.div
                key={i}
                className="card"
                style={{ textAlign: 'center', padding: '40px 24px' }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * i }}
              >
                <div className="why-card-icon" style={{ margin: '0 auto 16px' }}>
                  {s.icon}
                </div>
                <div style={{ fontFamily: 'var(--font-heading)', fontSize: 'var(--text-3xl)', fontWeight: 700, color: 'var(--primary)' }}>
                  {s.value}
                </div>
                <div style={{ color: 'var(--gray-500)', fontSize: 'var(--text-sm)', marginTop: '4px' }}>
                  {s.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* Mission, Vision, Values */}
      <Section>
        <div className="container" ref={ref2}>
          <div className="section-header">
            <span className="section-badge">What Drives Us</span>
            <h2 className="section-title">Our <span>Mission & Vision</span></h2>
            <p className="section-subtitle">
              Every decision we make is guided by our commitment to excellence, compassion, and community well-being.
            </p>
          </div>
          <div className="why-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}>
            {values.map((v, i) => (
              <motion.div
                key={i}
                className="card why-card"
                initial={{ opacity: 0, y: 40 }}
                animate={isInView2 ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.1 * i }}
              >
                <div className="why-card-icon">{v.icon}</div>
                <h3>{v.title}</h3>
                <p>{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* Timeline */}
      <Section className="section-alt">
        <div className="container" ref={ref3}>
          <div className="section-header">
            <span className="section-badge">Our Journey</span>
            <h2 className="section-title">Milestones of <span>Growth</span></h2>
          </div>
          <div style={{ maxWidth: '700px', margin: '0 auto' }}>
            {timeline.map((item, i) => (
              <motion.div
                key={i}
                style={{
                  display: 'flex',
                  gap: '24px',
                  marginBottom: '32px',
                  position: 'relative',
                }}
                initial={{ opacity: 0, x: -30 }}
                animate={isInView3 ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.15 * i }}
              >
                <div style={{
                  minWidth: '80px',
                  height: '80px',
                  background: 'var(--gradient-primary)',
                  borderRadius: 'var(--radius-lg)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#fff',
                  fontFamily: 'var(--font-heading)',
                  fontWeight: 700,
                  fontSize: 'var(--text-lg)',
                }}>
                  {item.year}
                </div>
                <div className="card" style={{ flex: 1, padding: '20px 24px' }}>
                  <h4 style={{ fontFamily: 'var(--font-heading)', fontWeight: 600, marginBottom: '4px' }}>{item.title}</h4>
                  <p style={{ color: 'var(--gray-500)', fontSize: 'var(--text-sm)' }}>{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* Infrastructure Gallery */}
      <Section>
        <div className="container">
          <div className="section-header">
            <span className="section-badge">Infrastructure</span>
            <h2 className="section-title">Modern <span>Facilities</span></h2>
            <p className="section-subtitle">Our centre is equipped with modern infrastructure designed for patient comfort and clinical excellence.</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
            {[
              { img: reception, title: 'Welcome Reception', desc: 'Warm and welcoming reception area with comfortable seating' },
              { img: consultation, title: 'Consultation Rooms', desc: 'Private, modern consultation rooms for patient comfort' },
              { img: diagnosticLab, title: 'Diagnostic Lab', desc: 'Advanced laboratory with cutting-edge diagnostic equipment' },
            ].map((item, i) => (
              <motion.div
                key={i}
                className="card"
                style={{ padding: 0, overflow: 'hidden' }}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * i }}
              >
                <div style={{ height: '220px', overflow: 'hidden' }}>
                  <img src={item.img} alt={item.title} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s' }} />
                </div>
                <div style={{ padding: '24px' }}>
                  <h3 style={{ fontFamily: 'var(--font-heading)', fontWeight: 600, marginBottom: '8px' }}>{item.title}</h3>
                  <p style={{ color: 'var(--gray-500)', fontSize: 'var(--text-sm)' }}>{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>
    </main>
  );
}

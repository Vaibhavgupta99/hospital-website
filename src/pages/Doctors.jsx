import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronRight, Calendar } from 'lucide-react';
import doctorIndurkar from '../assets/images/doctor-indurkar.png';
import doctorFemale from '../assets/images/doctor-female.png';
import doctorMale2 from '../assets/images/doctor-male-2.png';
import doctorMale3 from '../assets/images/doctor-male-3.png';

const allDoctors = [
  {
    name: 'Dr. Manoj Indurkar',
    qualification: 'MD (Medicine)',
    title: 'Professor | Lead Consultant',
    department: 'General Medicine',
    departments: ['General Medicine', 'Internal Medicine'],
    image: doctorIndurkar,
    featured: true,
    tags: ['Lifestyle Diseases', 'Diabetes', 'Hypertension', 'Internal Medicine'],
    bio: 'With over 15 years of experience, Dr. Indurkar is a renowned physician specializing in internal medicine, diabetes management, and lifestyle diseases. He founded Saraswati D-Care with a vision to bring quality healthcare to Rewa.',
    experience: '15+ years',
    education: 'MD Medicine – APS University',
  },
  {
    name: 'Dr. Priya Sharma',
    qualification: 'MS (Ophthalmology)',
    title: 'Senior Consultant',
    department: 'Eye Care',
    departments: ['Eye Care'],
    image: doctorFemale,
    featured: false,
    tags: ['Cataract', 'Glaucoma', 'Retina', 'Vision Correction'],
    bio: 'Dr. Sharma is an experienced ophthalmologist specializing in cataract surgery, glaucoma treatment, and retinal disorders. She brings a patient-centered approach to eye care.',
    experience: '10+ years',
    education: 'MS Ophthalmology – AIIMS',
  },
  {
    name: 'Dr. Rajesh Verma',
    qualification: 'MD (Pathology)',
    title: 'Consultant Pathologist',
    department: 'Diagnostics',
    departments: ['Diagnostics'],
    image: doctorMale2,
    featured: false,
    tags: ['Pathology', 'Lab Diagnostics', 'Hematology', 'Clinical Research'],
    bio: 'Dr. Verma leads our diagnostic laboratory with expertise in clinical pathology, hematology, and advanced diagnostic techniques. He ensures accurate and timely results.',
    experience: '12+ years',
    education: 'MD Pathology – BHU',
  },
  {
    name: 'Dr. Amit Tiwari',
    qualification: 'MD (Medicine)',
    title: 'Consultant Physician',
    department: 'Internal Medicine',
    departments: ['General Medicine', 'Internal Medicine'],
    image: doctorMale3,
    featured: false,
    tags: ['General Medicine', 'Preventive Care', 'Diabetes', 'Cardiac Health'],
    bio: 'Dr. Tiwari is a dedicated physician with expertise in general medicine and preventive healthcare. He believes in a holistic approach to patient well-being.',
    experience: '8+ years',
    education: 'MD Medicine – SGPGI',
  },
];

const departments = ['All', 'General Medicine', 'Internal Medicine', 'Eye Care', 'Diagnostics'];

export default function Doctors() {
  const [filter, setFilter] = useState('All');

  const filtered = filter === 'All'
    ? allDoctors
    : allDoctors.filter(d => d.departments.includes(filter));

  return (
    <main>
      <div className="page-header">
        <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          Our Doctors
        </motion.h1>
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
          Meet the Experts Behind Your Care
        </motion.p>
        <div className="breadcrumb">
          <Link to="/">Home</Link>
          <ChevronRight size={14} />
          <span>Doctors</span>
        </div>
      </div>

      <section className="section">
        <div className="container">
          {/* Department Filter */}
          <motion.div
            style={{
              display: 'flex',
              justifyContent: 'center',
              gap: '12px',
              marginBottom: '48px',
              flexWrap: 'wrap',
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            {departments.map((dept) => (
              <button
                key={dept}
                className={`btn btn-sm ${filter === dept ? 'btn-primary' : 'btn-outline'}`}
                onClick={() => setFilter(dept)}
                style={{ borderRadius: 'var(--radius-full)' }}
              >
                {dept}
              </button>
            ))}
          </motion.div>

          {/* Doctor Cards */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '32px' }}>
            {filtered.map((doc, i) => (
              <motion.div
                key={doc.name}
                className={`card ${doc.featured ? 'doctor-card-featured' : ''}`}
                style={{ padding: 0, overflow: 'hidden', borderRadius: 'var(--radius-xl)', position: 'relative' }}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * i, duration: 0.5 }}
                layout
              >
                <div style={{ height: '320px', overflow: 'hidden' }}>
                  <img
                    src={doc.image}
                    alt={doc.name}
                    style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s' }}
                    onMouseOver={(e) => e.target.style.transform = 'scale(1.05)'}
                    onMouseOut={(e) => e.target.style.transform = 'scale(1)'}
                  />
                </div>
                <div style={{ padding: '28px' }}>
                  <h3 style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: 'var(--text-xl)',
                    fontWeight: 600,
                    marginBottom: '4px',
                  }}>
                    {doc.name}
                  </h3>
                  <p style={{ color: 'var(--primary)', fontWeight: 500, fontSize: 'var(--text-sm)', marginBottom: '4px' }}>
                    {doc.qualification} | {doc.title}
                  </p>
                  <p style={{ color: 'var(--gray-500)', fontSize: 'var(--text-sm)', marginBottom: '16px' }}>
                    {doc.department} · {doc.experience}
                  </p>
                  <p style={{ color: 'var(--gray-600)', fontSize: 'var(--text-sm)', lineHeight: 1.7, marginBottom: '16px' }}>
                    {doc.bio}
                  </p>
                  <div className="doctor-tags" style={{ justifyContent: 'flex-start', marginBottom: '20px' }}>
                    {doc.tags.map((tag, j) => (
                      <span key={j} className="doctor-tag">{tag}</span>
                    ))}
                  </div>
                  <Link to="/contact" className="btn btn-primary btn-sm" style={{ width: '100%', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
                    <Calendar size={16} />
                    Book Consultation
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

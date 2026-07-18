import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import doctorIndurkar from '../../assets/images/doctor-indurkar.png';
import doctorFemale from '../../assets/images/doctor-female.png';
import doctorMale2 from '../../assets/images/doctor-male-2.png';
import doctorMale3 from '../../assets/images/doctor-male-3.png';

const doctors = [
  {
    name: 'Dr. Manoj Indurkar',
    qualification: 'MD (Medicine)',
    title: 'Professor | Lead Consultant',
    department: 'General Medicine & Internal Medicine',
    image: doctorIndurkar,
    featured: true,
    tags: ['Lifestyle Diseases', 'Diabetes', 'Hypertension', 'Internal Medicine'],
  },
  {
    name: 'Dr. Priya Sharma',
    qualification: 'MS (Ophthalmology)',
    title: 'Senior Consultant',
    department: 'Eye Care & Ophthalmology',
    image: doctorFemale,
    featured: false,
    tags: ['Cataract', 'Glaucoma', 'Retina'],
  },
  {
    name: 'Dr. Rajesh Verma',
    qualification: 'MD (Pathology)',
    title: 'Consultant Pathologist',
    department: 'Diagnostics & Pathology',
    image: doctorMale2,
    featured: false,
    tags: ['Pathology', 'Lab Diagnostics', 'Hematology'],
  },
  {
    name: 'Dr. Amit Tiwari',
    qualification: 'MD (Medicine)',
    title: 'Consultant Physician',
    department: 'Internal Medicine',
    image: doctorMale3,
    featured: false,
    tags: ['General Medicine', 'Preventive Care', 'Diabetes'],
  },
];

export default function DoctorsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="section section-alt" ref={ref}>
      <div className="container">
        <div className="section-header">
          <motion.span
            className="section-badge"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
          >
            Our Doctors
          </motion.span>
          <motion.h2
            className="section-title"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
          >
            Meet Our <span>Expert Team</span>
          </motion.h2>
          <motion.p
            className="section-subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
          >
            Dedicated medical professionals committed to delivering exceptional patient care with expertise and empathy.
          </motion.p>
        </div>

        <div className="doctors-grid">
          {doctors.map((doc, i) => (
            <motion.div
              key={i}
              className={`card doctor-card ${doc.featured ? 'doctor-card-featured' : ''}`}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 * i, duration: 0.5 }}
            >
              <div className="doctor-card-image">
                <img src={doc.image} alt={doc.name} />
              </div>
              <div className="doctor-card-info">
                <h3>{doc.name}</h3>
                <p className="doctor-qual">{doc.qualification} | {doc.title}</p>
                <p className="doctor-dept">{doc.department}</p>
                <div className="doctor-tags">
                  {doc.tags.map((tag, j) => (
                    <span key={j} className="doctor-tag">{tag}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          style={{ textAlign: 'center', marginTop: '48px' }}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
        >
          <Link to="/doctors" className="btn btn-outline">
            View All Doctors <ArrowRight size={18} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

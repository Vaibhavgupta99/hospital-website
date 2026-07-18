import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  Stethoscope, HeartPulse, Eye, FlaskConical,
  ShieldPlus, ClipboardCheck, Pill
} from 'lucide-react';

const specialities = [
  {
    icon: <Stethoscope size={32} />,
    title: 'General Medicine',
    desc: 'Comprehensive primary care for common ailments, chronic conditions and preventive health.',
  },
  {
    icon: <HeartPulse size={32} />,
    title: 'Internal Medicine',
    desc: 'Expert diagnosis and treatment of complex internal diseases with a holistic approach.',
  },
  {
    icon: <Eye size={32} />,
    title: 'Eye Care',
    desc: 'Complete eye care services including vision testing, treatment and corrective solutions.',
  },
  {
    icon: <FlaskConical size={32} />,
    title: 'Diagnostics',
    desc: 'Advanced pathology, radiology and imaging services with quick and accurate results.',
  },
  {
    icon: <ShieldPlus size={32} />,
    title: 'Preventive Health',
    desc: 'Proactive health screening and wellness programs to detect issues before they grow.',
  },
  {
    icon: <ClipboardCheck size={32} />,
    title: 'Health Checkups',
    desc: 'Comprehensive health checkup packages designed for every age group and lifestyle.',
  },
  {
    icon: <Pill size={32} />,
    title: 'Pharmacy',
    desc: 'In-house pharmacy with genuine medicines at competitive prices for patient convenience.',
  },
];

export default function SpecialitiesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="section" ref={ref}>
      <div className="container">
        <div className="section-header">
          <motion.span
            className="section-badge"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
          >
            Our Specialities
          </motion.span>
          <motion.h2
            className="section-title"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
          >
            Comprehensive <span>Medical Care</span>
          </motion.h2>
          <motion.p
            className="section-subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
          >
            From routine checkups to specialized treatments, we offer a wide range of medical services under one roof.
          </motion.p>
        </div>

        <div className="specialities-grid">
          {specialities.map((spec, i) => (
            <motion.div
              key={i}
              className="card speciality-card"
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.05 * i, duration: 0.5 }}
            >
              <div className="speciality-card-icon">{spec.icon}</div>
              <h3>{spec.title}</h3>
              <p>{spec.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

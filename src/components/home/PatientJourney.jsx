import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { CalendarCheck, Building2, UserCheck, SearchCheck, Pill, HeartPulse } from 'lucide-react';

const steps = [
  { icon: <CalendarCheck size={24} />, label: 'Book Appointment', number: 'STEP 01' },
  { icon: <Building2 size={24} />, label: 'Visit Hospital', number: 'STEP 02' },
  { icon: <UserCheck size={24} />, label: 'Consultation', number: 'STEP 03' },
  { icon: <SearchCheck size={24} />, label: 'Diagnosis', number: 'STEP 04' },
  { icon: <Pill size={24} />, label: 'Treatment', number: 'STEP 05' },
  { icon: <HeartPulse size={24} />, label: 'Recovery', number: 'STEP 06' },
];

export default function PatientJourney() {
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
            Patient Journey
          </motion.span>
          <motion.h2
            className="section-title"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
          >
            Your Path to <span>Better Health</span>
          </motion.h2>
          <motion.p
            className="section-subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
          >
            A simple, streamlined process designed to make your healthcare experience as smooth and comfortable as possible.
          </motion.p>
        </div>

        <div className="journey-timeline">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              className="journey-step"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.15 * i, duration: 0.5 }}
            >
              <motion.div
                className="journey-step-icon"
                whileHover={{ scale: 1.15 }}
              >
                {step.icon}
              </motion.div>
              <span className="journey-step-number">{step.number}</span>
              <h4>{step.label}</h4>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

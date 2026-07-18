import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Stethoscope, Cpu, Wallet, HeartHandshake, FlaskConical, ShieldCheck } from 'lucide-react';

const reasons = [
  {
    icon: <Stethoscope size={28} />,
    title: 'Experienced Doctors',
    desc: 'Our team of highly qualified doctors brings decades of combined medical expertise to your care.',
  },
  {
    icon: <Cpu size={28} />,
    title: 'Modern Equipment',
    desc: 'State-of-the-art diagnostic and treatment equipment for accurate results and better outcomes.',
  },
  {
    icon: <Wallet size={28} />,
    title: 'Affordable Care',
    desc: 'Quality healthcare that doesn\'t break the bank. Transparent pricing with no hidden charges.',
  },
  {
    icon: <HeartHandshake size={28} />,
    title: 'Patient First',
    desc: 'Your comfort and well-being are our top priority. Personalized care tailored to your needs.',
  },
  {
    icon: <FlaskConical size={28} />,
    title: 'Advanced Diagnostics',
    desc: 'Comprehensive diagnostic services with quick turnaround times for faster treatment decisions.',
  },
  {
    icon: <ShieldCheck size={28} />,
    title: 'Trusted Healthcare',
    desc: 'A trusted name in Rewa for over 15 years, serving thousands of families with dedication.',
  },
];

export default function WhyChooseUs() {
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
            transition={{ duration: 0.5 }}
          >
            Why Choose Us
          </motion.span>
          <motion.h2
            className="section-title"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1, duration: 0.5 }}
          >
            Why Families in Rewa <span>Trust Us</span>
          </motion.h2>
          <motion.p
            className="section-subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            We combine medical expertise with genuine compassion to deliver healthcare that makes a real difference.
          </motion.p>
        </div>

        <div className="why-grid">
          {reasons.map((item, i) => (
            <motion.div
              key={i}
              className="card why-card"
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 * i, duration: 0.5 }}
            >
              <div className="why-card-icon">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

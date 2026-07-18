import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, Phone, Award, Users, Activity, ShieldCheck } from 'lucide-react';
import heroBg from '../../assets/images/hero-bg.png';

function AnimatedCounter({ end, suffix = '', duration = 2000 }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const startTime = Date.now();
          const numEnd = parseInt(end);
          const animate = () => {
            const elapsed = Date.now() - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(eased * numEnd));
            if (progress < 1) requestAnimationFrame(animate);
          };
          animate();
        }
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [end, duration]);

  return <span ref={ref}>{count}{suffix}</span>;
}

const stats = [
  { icon: <Award size={24} />, value: '15', suffix: '+', label: 'Years Experience' },
  { icon: <Users size={24} />, value: '5000', suffix: '+', label: 'Happy Patients' },
  { icon: <Activity size={24} />, value: '50', suffix: '+', label: 'Modern Diagnostics' },
  { icon: <ShieldCheck size={24} />, value: '10', suffix: '+', label: 'Trusted Specialists' },
];

export default function HeroSection() {
  return (
    <section className="hero">
      <div className="hero-bg">
        <img src={heroBg} alt="Healthcare" />
      </div>
      <div className="hero-overlay" />

      <div className="hero-content">
        <motion.div
          className="hero-text"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <motion.div
            className="hero-badge"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <span className="hero-badge-dot" />
            Advanced Multi-Speciality Hospital
          </motion.div>

          <motion.h1
            className="hero-title"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
          >
            Advanced Healthcare with{' '}
            <span style={{ color: '#48cae4' }}>Compassion</span> &{' '}
            <span style={{ color: '#48cae4' }}>Excellence</span>
          </motion.h1>

          <motion.p
            className="hero-subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            Trusted multi-speciality healthcare, advanced diagnostics and
            personalized patient care for families in Rewa.
          </motion.p>

          <motion.div
            className="hero-buttons"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
          >
            <Link to="/contact" className="btn btn-primary btn-lg">
              <Calendar size={20} />
              Book Appointment
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          className="hero-stats"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              className="hero-stat-card"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 + i * 0.15 }}
            >
              <div className="hero-stat-icon">{stat.icon}</div>
              <div className="hero-stat-value">
                <AnimatedCounter end={stat.value} suffix={stat.suffix} />
              </div>
              <div className="hero-stat-label">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

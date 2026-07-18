import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Target, Eye, Heart, Lightbulb } from 'lucide-react';
import hospitalImg from '../../assets/images/hospital-exterior.png';

const values = [
  {
    icon: <Target size={20} />,
    title: 'Our Mission',
    desc: 'To provide accessible, affordable and high-quality healthcare to every family.',
  },
  {
    icon: <Eye size={20} />,
    title: 'Our Vision',
    desc: 'To be the most trusted healthcare destination in central India.',
  },
  {
    icon: <Heart size={20} />,
    title: 'Compassion',
    desc: 'Treating every patient with empathy, respect and genuine care.',
  },
  {
    icon: <Lightbulb size={20} />,
    title: 'Innovation',
    desc: 'Embracing modern technology and evidence-based medical practices.',
  },
];

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="section section-alt" ref={ref}>
      <div className="container">
        <div className="about-grid">
          <motion.div
            className="about-image"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <img src={hospitalImg} alt="Saraswati D-Care Hospital" />
            <div className="about-image-badge">
              <span className="badge-value">15+</span>
              <span className="badge-label">Years of Trust</span>
            </div>
          </motion.div>

          <motion.div
            className="about-content"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <span className="section-badge">About Us</span>
            <h2>
              A Legacy of <span>Compassionate</span> Healthcare in Rewa
            </h2>
            <p>
              Saraswati D-Care & Diagnostic Centre has been at the forefront of healthcare in Rewa
              for over 15 years. Founded with a vision to bring world-class medical facilities to
              central India, we combine experienced medical professionals with cutting-edge
              diagnostic technology to deliver exceptional patient outcomes.
            </p>
            <p>
              Under the leadership of Dr. Manoj Indurkar, our centre has grown into a trusted
              multi-speciality facility serving thousands of patients with dedication and care.
            </p>

            <div className="about-values">
              {values.map((v, i) => (
                <motion.div
                  key={i}
                  className="about-value"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.4 + i * 0.1, duration: 0.5 }}
                >
                  <div className="about-value-icon">{v.icon}</div>
                  <div>
                    <h4>{v.title}</h4>
                    <p>{v.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

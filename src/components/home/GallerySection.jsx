import { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { X, ZoomIn } from 'lucide-react';
import reception from '../../assets/images/reception.png';
import consultation from '../../assets/images/consultation.png';
import diagnosticLab from '../../assets/images/diagnostic-lab.png';
import hospitalExterior from '../../assets/images/hospital-exterior.png';
import heroBg from '../../assets/images/hero-bg.png';
import doctorIndurkar from '../../assets/images/doctor-indurkar.png';

const galleryItems = [
  { image: reception, title: 'Reception Area', desc: 'Modern & welcoming' },
  { image: consultation, title: 'Consultation Room', desc: 'Private & comfortable' },
  { image: diagnosticLab, title: 'Diagnostic Lab', desc: 'State-of-the-art equipment' },
  { image: hospitalExterior, title: 'Hospital Building', desc: 'Modern infrastructure' },
  { image: heroBg, title: 'Patient Care', desc: 'Compassionate treatment' },
  { image: doctorIndurkar, title: 'Our Doctors', desc: 'Experienced team' },
];

export default function GallerySection() {
  const [lightboxImage, setLightboxImage] = useState(null);
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
            Gallery
          </motion.span>
          <motion.h2
            className="section-title"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
          >
            Our <span>Facilities</span>
          </motion.h2>
          <motion.p
            className="section-subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
          >
            Take a virtual tour of our modern healthcare facility designed for your comfort and care.
          </motion.p>
        </div>

        <div className="gallery-grid">
          {galleryItems.map((item, i) => (
            <motion.div
              key={i}
              className="gallery-item"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.1 * i, duration: 0.5 }}
              onClick={() => setLightboxImage(item)}
            >
              <img src={item.image} alt={item.title} />
              <div className="gallery-item-overlay">
                <h4><ZoomIn size={16} style={{ display: 'inline', marginRight: '6px' }} />{item.title}</h4>
                <p>{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxImage && (
          <motion.div
            className="lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightboxImage(null)}
          >
            <motion.img
              src={lightboxImage.image}
              alt={lightboxImage.title}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: 'spring', damping: 25 }}
            />
            <button className="lightbox-close" onClick={() => setLightboxImage(null)}>
              <X size={20} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

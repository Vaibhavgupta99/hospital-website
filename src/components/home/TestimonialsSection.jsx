import { useState, useRef, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';

const testimonials = [
  {
    name: 'Rajesh Kumar',
    initials: 'RK',
    location: 'Rewa',
    rating: 5,
    text: 'Dr. Indurkar is an exceptional doctor. His diagnosis was spot on, and the treatment for my diabetes has been life-changing. The staff is incredibly warm and caring. Highly recommend Saraswati D-Care!',
    date: '2 months ago',
  },
  {
    name: 'Sunita Devi',
    initials: 'SD',
    location: 'Satna',
    rating: 5,
    text: 'We brought our mother here for a comprehensive health checkup. The diagnostic facilities are modern, and the reports came quickly. The doctors took their time to explain everything. Very professional.',
    date: '1 month ago',
  },
  {
    name: 'Amit Shukla',
    initials: 'AS',
    location: 'Rewa',
    rating: 5,
    text: 'Best diagnostic centre in Rewa! The lab equipment is state-of-the-art, and the results are always accurate. The prices are very reasonable compared to other centres. Dr. Indurkar\'s team is amazing.',
    date: '3 weeks ago',
  },
  {
    name: 'Priya Tiwari',
    initials: 'PT',
    location: 'Sidhi',
    rating: 5,
    text: 'I was suffering from hypertension and Dr. Indurkar helped me manage it with the right medication and lifestyle changes. The follow-up care is excellent. The entire hospital feels welcoming.',
    date: '1 month ago',
  },
  {
    name: 'Deepak Mishra',
    initials: 'DM',
    location: 'Rewa',
    rating: 5,
    text: 'My eye checkup experience was wonderful. The doctors are knowledgeable and patient. The centre is clean, well-maintained and has a calming atmosphere. Truly the best healthcare facility in our city.',
    date: '2 weeks ago',
  },
  {
    name: 'Meena Gupta',
    initials: 'MG',
    location: 'Rewa',
    rating: 5,
    text: 'I took the Executive Health Checkup package and it was extremely thorough. All tests were done in one visit and the report was explained in detail. Great value for money!',
    date: '3 months ago',
  },
];

export default function TestimonialsSection() {
  // Triple the array for seamless infinite scrolling (Start in the middle set)
  const cloneCount = testimonials.length;
  const extendedTestimonials = [...testimonials, ...testimonials, ...testimonials];

  const [currentIndex, setCurrentIndex] = useState(cloneCount);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const itemsPerView = typeof window !== 'undefined' && window.innerWidth < 768 ? 1 : window.innerWidth < 1024 ? 2 : 3;

  const prev = () => {
    setIsTransitioning(true);
    setCurrentIndex(i => i - 1);
  };
  
  const next = () => {
    setIsTransitioning(true);
    setCurrentIndex(i => i + 1);
  };

  // Seamless snap-back logic
  useEffect(() => {
    let timeout;
    // If we've scrolled past the middle set to the right
    if (currentIndex >= cloneCount * 2) {
      timeout = setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(currentIndex - cloneCount);
      }, 500); // match CSS transition duration
    } 
    // If we've scrolled past the middle set to the left
    else if (currentIndex <= 0) {
      timeout = setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(currentIndex + cloneCount);
      }, 500);
    }
    return () => clearTimeout(timeout);
  }, [currentIndex, cloneCount]);

  // Auto-scroll
  useEffect(() => {
    const timer = setInterval(() => {
      next();
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  // Minimum swipe distance in pixels
  const minSwipeDistance = 50; 

  const onTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e) => setTouchEnd(e.targetTouches[0].clientX);

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    
    if (isLeftSwipe) {
      next();
    }
    if (isRightSwipe) {
      prev();
    }
  };

  // Helper to map actual index to a 0-5 dot index
  const getDotIndex = () => {
    return currentIndex % cloneCount;
  };

  const handleDotClick = (index) => {
    setIsTransitioning(true);
    // Jump to the corresponding index in the middle set
    setCurrentIndex(cloneCount + index);
  };

  return (
    <section className="section" ref={ref}>
      <div className="container">
        <div className="section-header">
          <motion.span
            className="section-badge"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
          >
            Testimonials
          </motion.span>
          <motion.h2
            className="section-title"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
          >
            What Our <span>Patients Say</span>
          </motion.h2>
          <motion.p
            className="section-subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
          >
            Real reviews from real patients who trust us with their health and well-being.
          </motion.p>
        </div>

        <motion.div
          className="testimonials-carousel"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3 }}
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >
          <div
            className="testimonials-track"
            style={{ 
              transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)`,
              transition: isTransitioning ? 'transform 0.5s ease' : 'none'
            }}
          >
            {extendedTestimonials.map((t, i) => (
              <div key={i} className="testimonial-card card">
                <div className="testimonial-stars">
                  {[...Array(t.rating)].map((_, j) => (
                    <Star key={j} size={16} fill="#FFC107" />
                  ))}
                </div>
                <p className="testimonial-text">"{t.text}"</p>
                <div className="testimonial-author">
                  <div className="testimonial-avatar">{t.initials}</div>
                  <div className="testimonial-author-info">
                    <h4>{t.name}</h4>
                    <p>{t.location}</p>
                  </div>
                </div>
                <div className="testimonial-google">
                  <ExternalLink size={12} />
                  Posted on Google · {t.date}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        <div className="carousel-controls">
          <button className="carousel-btn" onClick={prev} aria-label="Previous">
            <ChevronLeft size={20} />
          </button>
          <div className="carousel-dots">
            {[...Array(cloneCount)].map((_, i) => (
              <button
                key={i}
                className={`carousel-dot ${i === getDotIndex() ? 'active' : ''}`}
                onClick={() => handleDotClick(i)}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
          <button className="carousel-btn" onClick={next} aria-label="Next">
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
}

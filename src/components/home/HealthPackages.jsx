import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Check } from 'lucide-react';

const packages = [
  {
    name: 'Basic Health Checkup',
    price: '999',
    popular: false,
    tests: [
      'Complete Blood Count (CBC)',
      'Blood Sugar (Fasting)',
      'Urine Routine',
      'Blood Pressure Check',
      'BMI Assessment',
    ],
  },
  {
    name: 'Executive Health Checkup',
    price: '2,999',
    popular: true,
    tests: [
      'Complete Blood Count (CBC)',
      'Lipid Profile',
      'Liver Function Test',
      'Kidney Function Test',
      'Thyroid Profile',
      'ECG',
      'Chest X-Ray',
      'Doctor Consultation',
    ],
  },
  {
    name: 'Diabetes Care Package',
    price: '1,499',
    popular: false,
    tests: [
      'Fasting Blood Sugar',
      'Post Prandial Blood Sugar',
      'HbA1c',
      'Kidney Function Test',
      'Lipid Profile',
      'Eye Examination',
    ],
  },
  {
    name: 'Senior Citizen Package',
    price: '3,999',
    popular: false,
    tests: [
      'Complete Blood Count',
      'Lipid Profile',
      'Liver & Kidney Function',
      'Thyroid Profile',
      'ECG & Chest X-Ray',
      'Bone Density Screening',
      'Eye Checkup',
      'Doctor Consultation',
    ],
  },
  {
    name: "Women's Health Package",
    price: '2,499',
    popular: false,
    tests: [
      'Complete Blood Count',
      'Thyroid Profile',
      'Iron Studies',
      'Vitamin D & B12',
      'Calcium Levels',
      'Pap Smear Screening',
      'Doctor Consultation',
    ],
  },
];

export default function HealthPackages() {
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
            Health Packages
          </motion.span>
          <motion.h2
            className="section-title"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
          >
            Preventive <span>Health Packages</span>
          </motion.h2>
          <motion.p
            className="section-subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
          >
            Comprehensive health checkup packages designed for every age, gender and health need at affordable prices.
          </motion.p>
        </div>

        <div className="packages-grid">
          {packages.slice(0, 3).map((pkg, i) => (
            <motion.div
              key={i}
              className={`card package-card ${pkg.popular ? 'package-card-popular' : ''}`}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 * i, duration: 0.5 }}
            >
              <div className="package-card-header">
                <h3>{pkg.name}</h3>
                <div className="package-price">
                  <span className="currency">₹</span>
                  <span className="amount">{pkg.price}</span>
                  <span className="period">/package</span>
                </div>
              </div>
              <div className="package-card-body">
                <ul>
                  {pkg.tests.map((test, j) => (
                    <li key={j}>
                      <Check size={16} />
                      {test}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="package-card-footer">
                <button className={`btn ${pkg.popular ? 'btn-primary' : 'btn-outline'}`}>
                  Book Now
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Second Row */}
        <div className="packages-grid" style={{ marginTop: '32px' }}>
          {packages.slice(3).map((pkg, i) => (
            <motion.div
              key={i}
              className={`card package-card ${pkg.popular ? 'package-card-popular' : ''}`}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 + 0.1 * i, duration: 0.5 }}
            >
              <div className="package-card-header">
                <h3>{pkg.name}</h3>
                <div className="package-price">
                  <span className="currency">₹</span>
                  <span className="amount">{pkg.price}</span>
                  <span className="period">/package</span>
                </div>
              </div>
              <div className="package-card-body">
                <ul>
                  {pkg.tests.map((test, j) => (
                    <li key={j}>
                      <Check size={16} />
                      {test}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="package-card-footer">
                <button className="btn btn-outline">Book Now</button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

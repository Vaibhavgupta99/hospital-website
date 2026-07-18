import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

export default function LoadingScreen() {
  return (
    <motion.div
      className="loading-screen"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, ease: 'easeInOut' }}
    >
      <motion.div
        className="loading-logo"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: 'spring', stiffness: 200, damping: 15 }}
      >
        <Heart size={28} />
      </motion.div>
      <motion.p
        className="loading-text"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        Saraswati D-Care
      </motion.p>
      <div className="loading-bar">
        <div className="loading-bar-fill" />
      </div>
    </motion.div>
  );
}

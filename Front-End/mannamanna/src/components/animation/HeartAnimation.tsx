import { motion } from "framer-motion";
import fullheart from '../../asset/image/fullheart.png';
import emptyheart from '../../asset/image/emptyheart.png';

export default function HeartAnimation() {
  return (
    <div style={{ display: "flex" }}>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.8,
          delay: 0.3,
          repeatDelay: 2,
          repeat: Infinity,
          ease: [0, 0.71, 0.2, 1.01],
          while: { loop: true } // Set while to a truthy value to create a continuous loop
        }}
        style={{ margin: '2vh' }}
      >
        <img src={fullheart} alt="Heart" style={{ width: '100%', height: '100%' }} />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.8,
          delay: 0.6,
          repeatDelay: 2,
          repeat: Infinity,
          ease: [0, 0.71, 0.2, 1.01],
          while: { loop: true } // Set while to a truthy value to create a continuous loop
        }}
        style={{ margin: '2vh' }}
      >
        <img src={fullheart} alt="Heart" style={{ width: '100%', height: '100%' }} />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.8,
          delay: 0.9,
          repeatDelay: 2,
          repeat: Infinity,
          
          ease: [0, 0.71, 0.2, 1.01],
          while: { loop: true } // Set while to a truthy value to create a continuous loop
        }}
        style={{ margin: '2vh' }}
      >
        <img src={fullheart} alt="Heart" style={{ width: '100%', height: '100%' }} />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.8,
          delay: 1.2,
          repeat: Infinity,
          repeatDelay: 2,
          ease: [0, 0.71, 0.2, 1.01],
          while: { loop: true } // Set while to a truthy value to create a continuous loop
        }}
        style={{ margin: '2vh' }}
      >
        <img src={fullheart} alt="Heart" style={{ width: '100%', height: '100%' }} />
      </motion.div>
    </div>
  );
}

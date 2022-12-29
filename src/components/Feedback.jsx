import { XCircle, CheckCircle } from 'phosphor-react';
import { motion, AnimatePresence } from 'framer-motion';

import './Feedback.css';

export function Feedback({ type, text, color }) {
  return (
    <>
      {type === 'error' ? (
        <AnimatePresence>
          <motion.div
            className="feedback-container"
            style={{ backgroundColor: color }}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{
              type: 'spring',
              stiffness: 260,
              damping: 20,
            }}
          >
            <XCircle size={32} />
            {text}
          </motion.div>
        </AnimatePresence>
      ) : (
        <motion.div
          className="feedback-container"
          style={{ backgroundColor: color }}
        >
          <CheckCircle size={32} />
          {text}
        </motion.div>
      )}
    </>
  );
}

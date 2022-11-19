import { motion } from "framer-motion";

const Error = () => {
  return (
    <motion.div
      initial={{ scaleY: 0 }}
      animate={{ scaleY: 1 }}
      exit={{ scaleY: 0 }}
      transition={{ duration: 0.5 }}
    >
      PageError
    </motion.div>
  );
};
export default Error;

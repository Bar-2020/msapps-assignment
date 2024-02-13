/* eslint-disable react/prop-types */
import { motion } from "framer-motion";

function Backdrop({ children, onClick }) {
  return (
    <motion.div
      className="absolute top-0 left-0 size-full bg-black/75 items-center justify-center"
      onClick={onClick}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {children}
    </motion.div>
  );
}

export default Backdrop;

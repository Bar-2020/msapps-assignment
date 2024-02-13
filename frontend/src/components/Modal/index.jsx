/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
import Backdrop from "../Backdrop";

const dropIn = {
  hidden: { y: "-100vh", opacity: 0 },
  visible: {
    y: "4vh",
    opacity: 1,
    transition: {
      duration: 0.1,
      type: "spring",
      damping: 25,
      stiffness: 500,
    },
  },
  exit: { y: "100vh", opacity: 0 },
};

function Modal({ handleClose, children }) {
  return (
    <Backdrop onClick={handleClose}>
      <motion.div
        onClick={(e) => e.stopPropagation()}
        className="modal bg-blue-200"
        variants={dropIn}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <button
          onClick={handleClose}
          className="bg-blue-500 hover:bg-blue-600 disabled:bg-blue-100 text-white font-bold rounded p-1"
        >
          Close
        </button>
        {children}
      </motion.div>
    </Backdrop>
  );
}

export default Modal;

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
        className="modal bg-white rounded-lg shadow-lg p-6"
        variants={dropIn}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <button
          onClick={handleClose}
          className="absolute top-2 right-2 bg-transparent border-none text-gray-500 hover:text-gray-700 focus:outline-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        {children}
      </motion.div>
    </Backdrop>
  );
}

export default Modal;

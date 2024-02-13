/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
import Backdrop from "../Backdrop";
import { XIcon } from "@heroicons/react/outline"; // Using HeroIcon for the close Icon

// Defining the animation properties
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

function Modal({ handleClose, children, className }) {
  return (
    <Backdrop onClick={handleClose}>
      <motion.div
        onClick={(e) => e.stopPropagation()} // Prevent event bubbling
        className={`modal bg-white rounded-lg shadow-lg p-6 relative ${
          className ? className : ""
        }`}
        variants={dropIn}
        initial="hidden" // Initial animation state
        animate="visible" // Animation state on mount
        exit="exit" // Animation state on exit
      >
        <button
          onClick={handleClose}
          className="absolute top-2 right-2 bg-transparent border-none text-gray-500 hover:text-gray-700 focus:outline-none z-10" // added z-index to ensure the button appears on top
        >
          <XIcon className="h-6 w-6" />
        </button>

        {children}
      </motion.div>
    </Backdrop>
  );
}

export default Modal;

import { setSelectedImage } from "../imagesSlice";
import { useDispatch, useSelector } from "react-redux";
import Modal from "./Modal/index";
import { useEffect, useState, useRef } from "react";

function ImageInfoModal() {
  const [infoVisible, setInfoVisible] = useState(true); // Initially set to false
  const dispatch = useDispatch();
  const selectedImage = useSelector((state) => state.images.selectedImage);
  const timeoutRef = useRef(null); // Create a mutable reference

  useEffect(() => {
    function handleSetInfoInvisible() {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = setTimeout(() => setInfoVisible(false), 3 * 1000);
    }

    if (infoVisible) {
      handleSetInfoInvisible();
    }

    return () => clearTimeout(timeoutRef.current); // Cleanup function
  }, [infoVisible]);

  function handleClose() {
    dispatch(setSelectedImage(null));
  }

  return (
    <Modal
      className="p-0"
      modalOpen={selectedImage !== null}
      handleClose={handleClose}
    >
      <div
        className="relative overflow-hidden"
        onMouseEnter={() => setInfoVisible(true)} // Change to onMouseEnter
        onMouseLeave={() => setInfoVisible(false)} // Added onMouseLeave to hide info on mouse leave
        style={{ cursor: "pointer" }} // Change cursor style
      >
        <img
          src={selectedImage?.largeImageURL}
          className="object-cover rounded-md size-full"
          alt={selectedImage?.tags}
        />
        {infoVisible && ( // Show info only if infoVisible is true
          <div
            className={`absolute top-0 left-0 p-4 transition-opacity duration-300 opacity-90`}
            style={{ fontSize: "1rem" }}
          >
            <p className="text-white bg-black bg-opacity-50 rounded-md p-2">
              <span className="font-bold">Views:</span> {selectedImage?.views}
            </p>
            <p className="text-white bg-black bg-opacity-50 rounded-md mt-2 p-2">
              <span className="font-bold">Downloads:</span>{" "}
              {selectedImage?.downloads}
            </p>
            <p className="text-white bg-black bg-opacity-50 rounded-md mt-2 p-2">
              <span className="font-bold">Collections:</span>{" "}
              {selectedImage?.collections}
            </p>
          </div>
        )}
      </div>
    </Modal>
  );
}

export default ImageInfoModal;

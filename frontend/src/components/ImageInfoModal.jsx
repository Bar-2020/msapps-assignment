import { setSelectedImage } from "../imagesSlice";
import { useDispatch, useSelector } from "react-redux";
import Modal from "./Modal/index";

function ImageInfoModal() {
  const dispatch = useDispatch();
  const selectedImage = useSelector((state) => state.images.selectedImage);

  function handleClose() {
    dispatch(setSelectedImage(null));
  }

  return (
    <Modal modalOpen={selectedImage !== null} handleClose={handleClose}>
      <div className="flex overflow-hidden">
        <img
          src={selectedImage?.largeImageURL}
          className="object-cover rounded-md size-full"
          alt={selectedImage?.tags}
        />
      </div>
      <div className="flex flex-col">
        <p>Views: {selectedImage?.views}</p>
        <p>Downloads: {selectedImage?.downloads}</p>
        <p>Collections: {selectedImage?.collections}</p>
      </div>
      {/* <button>Download</button> */}
    </Modal>
  );
}

export default ImageInfoModal;

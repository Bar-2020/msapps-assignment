import CategorySelector from "./CategorySelector";
import Modal from "./Modal/index";
import { setStatus } from "../imagesSlice";
import { useSelector, useDispatch } from "react-redux";

function CategoryModal() {
  const dispatch = useDispatch();
  const status = useSelector((state) => state.images.status);

  function handleClose() {
    dispatch(setStatus("ready"));
  }

  return (
    <Modal
      modalOpen={status === "category"}
      handleClose={handleClose}
      className="p-12"
    >
      <CategorySelector />
    </Modal>
  );
}

export default CategoryModal;

import axios from "axios";
import { useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { setImages, setStatus } from "./imagesSlice";
import ImagesList from "./components/ImagesList";
import PagesControl from "./components/PagesControl";
import ImageInfoModal from "./components/ImageInfoModal";
// import CategorySelector from "./components/CategorySelector";
import Loader from "./components/Loader";
import CategoryModal from "./components/CategoryModal";

const BackendUrl = "http://localhost:3000";

function App() {
  const page = useSelector((state) => state.images.page);
  const category = useSelector((state) => state.images.category);
  const status = useSelector((state) => state.images.status);
  const selectedImage = useSelector((state) => state.images.selectedImage);
  const dispatch = useDispatch();

  useEffect(() => {
    async function fetchImages() {
      try {
        dispatch(setStatus("loading"));
        const response = await axios.get(
          `${BackendUrl}/images?page=${page}&category=${category}`
        );
        dispatch(setImages(response.data));
        dispatch(setStatus("ready"));
      } catch (error) {
        dispatch(setStatus(error.message));
      }
    }

    fetchImages();
  }, [page, category]);

  return (
    <div className="flex flex-col">
      <div className="flex justify-around items-center">
        <h1 className="text-3xl font-bold mb-4 text-center">Image Library</h1>
        <button
          onClick={() => dispatch(setStatus("category"))}
          className="bg-blue-500 hover:bg-blue-600 rounded-md p-2"
        >
          Pick category
        </button>
      </div>
      {status === "loading" ? (
        <>
          <Loader />
        </>
      ) : (
        <>
          <ImagesList />
          <PagesControl />
        </>
      )}

      <AnimatePresence initial={false} mode="wait">
        {selectedImage && <ImageInfoModal />}
        {status === "category" && <CategoryModal />}
      </AnimatePresence>
    </div>
  );
}

export default App;

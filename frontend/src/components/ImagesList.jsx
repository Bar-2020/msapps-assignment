import { useSelector, useDispatch } from "react-redux";
import ImageCard from "./ImageCard";
import { setSelectedImage } from "../imagesSlice";

function ImagesList() {
  const dispatch = useDispatch();

  const images = useSelector((state) => state.images.images);

  return (
    <div className="flex flex-wrap gap-3 justify-center max-h-screen">
      {images.map((img) => (
        <ImageCard
          img={img}
          key={img.id}
          clickEvent={() => dispatch(setSelectedImage(img))}
        />
      ))}
    </div>
  );
}

export default ImagesList;

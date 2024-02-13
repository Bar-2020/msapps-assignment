import { useSelector, useDispatch } from "react-redux";
import ImageCard from "./ImageCard";
import { setSelectedImage } from "../imagesSlice";

function ImagesList() {
  const dispatch = useDispatch();

  const images = useSelector((state) => state.images.images);

  return (
    <div className="flex flex-wrap grid-flow-row gap-3 justify-center">
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

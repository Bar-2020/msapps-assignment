/* eslint-disable react/prop-types */
function ImageCard({ img, clickEvent }) {
  return (
    <div key={img.id} className="w-1/4">
      <img
        src={img.largeImageURL}
        alt={img.tags}
        className="rounded-lg shadow-md cursor-pointer"
        onClick={() => clickEvent()}
      />
    </div>
  );
}

export default ImageCard;

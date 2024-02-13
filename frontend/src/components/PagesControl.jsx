import { useDispatch, useSelector } from "react-redux";
import { nextPage, prevPage } from "../imagesSlice";

function PagesControl() {
  const dispatch = useDispatch();
  const page = useSelector((state) => state.images.page);
  const status = useSelector((state) => state.images.status);

  return (
    <div className="flex justify-center items-center p-4 absolute inset-x-0 bottom-0">
      <button
        disabled={status !== "ready" || page < 2}
        onClick={() => dispatch(prevPage())}
        className="bg-blue-500 hover:bg-blue-600 disabled:bg-blue-300 text-white font-bold py-2 px-4 rounded-l w-full"
      >
        Previous
      </button>
      <p className="text-lg mx-4">{page}</p>
      <button
        disabled={status !== "ready"}
        onClick={() => dispatch(nextPage())}
        className="bg-blue-500 hover:bg-blue-600 disabled:bg-blue-300 text-white font-bold py-2 px-4 rounded-r w-full"
      >
        Next
      </button>
    </div>
  );
}

export default PagesControl;

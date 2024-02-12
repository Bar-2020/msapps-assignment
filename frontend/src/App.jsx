import { useDispatch, useSelector } from "react-redux";
import { addCount } from "./countSlice";
import "./App.css";

function App() {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();
  console.log(count);
  return (
    <>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => dispatch(addCount())}>
          count is {count.count}
        </button>
      </div>
    </>
  );
}

export default App;

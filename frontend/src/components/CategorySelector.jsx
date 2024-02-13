import { useDispatch, useSelector } from "react-redux";
import { setCategory } from "../imagesSlice";

const availableCategories = [
  "backgrounds",
  "fashion",
  "nature",
  "science",
  "education",
  "feelings",
  "health",
  "people",
  "religion",
  "places",
  "animals",
  "industry",
  "computer",
  "food",
  "sports",
  "transportation",
  "travel",
  "buildings",
  "business",
  "music",
];

function CategorySelector() {
  const dispatch = useDispatch();
  const category = useSelector((state) => state.images.category);

  return (
    <div>
      <label>
        Pick a category:
        <select
          name="selectedCategory"
          className="bg-gray-300 rounded"
          value={category}
          onChange={(e) => dispatch(setCategory(e.target.value))}
        >
          {availableCategories.map((c) => (
            <option key={c} value={c}>
              {c[0].toUpperCase() + c.slice(1)}
            </option>
          ))}
        </select>
      </label>
    </div>
  );
}

export default CategorySelector;

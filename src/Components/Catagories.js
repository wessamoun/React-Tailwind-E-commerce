import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategories } from "../redux/catagoriesSlice";
import { fetchProducts } from "../redux/productsSlice";

function Catagories() {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.categories.categories);
  const api = "https://dummyjson.com/products/categories";
  useEffect(() => {
    dispatch(fetchCategories(api));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const clickedCat = (e) => {
    document.querySelectorAll(".category").forEach(category => {
      category.classList.remove("border-orange-600");
    })
    e.target.classList.add("border-orange-600");
    if (e.target.innerHTML === "all") {
      dispatch(fetchProducts(`https://dummyjson.com/products?limit=0`))
    } else {
      dispatch(fetchProducts(`https://dummyjson.com/products/category/${e.target.innerHTML}`))
    }
  }
  return (
    <>
      <h1 className="text-center text-5xl md:text-8xl my-5">Catagories</h1>
      <div className="container mt-10 grid grid-cols-cat gap-2">
      <div className="category font-semibold cursor-pointer border-4 rounded-lg hover:border-orange-600 uppercase bg-white py-3 px-5  text-center" onClick={clickedCat}>all</div>

      {categories.map((category) => {
        return (
          <div key={category}>
              <div className="category font-semibold cursor-pointer border-4 rounded-lg hover:border-orange-600 uppercase bg-white py-3 px-5 text-sm  text-center" onClick={clickedCat}>{category}</div>
          </div>
        );
      })}
      </div>
    </>
  );
}

export default Catagories;

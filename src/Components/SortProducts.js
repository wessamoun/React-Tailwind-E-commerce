import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { sortProducts } from "../redux/productsSlice";

function SortProducts() {
  const sort = useRef()
  const dispatch = useDispatch()
  return (
    <select onChange={() => dispatch(sortProducts(sort.current.value))} defaultValue={"Sort By"} ref={sort} className="select select-error w-full max-w-xs">
      <option disabled value={"Sort By"}>
        Sort By
      </option>
      <option>Ascending by name</option>
      <option>Descending by name</option>
      <option>Ascending by price</option>
      <option>Descending by price</option>
    </select>
  );
}

export default SortProducts;

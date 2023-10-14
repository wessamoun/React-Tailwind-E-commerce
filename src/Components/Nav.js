import { useEffect, useRef, useState } from "react";
import { FaCartShopping } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { searchProducts } from "../redux/productsSlice";
const Nav = () => {
  const cartProducts = useSelector((state) => state.cart.cart);
  const dispatch = useDispatch();
  const searchInput = useRef();
  const [display, setDisplay] = useState("");
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 0) {
        setDisplay("fixed");
      } else setDisplay("");
    });
  }, [display]);
  const toggleSearch = () => {
    searchInput.current.classList.toggle("w-0");
    searchInput.current.classList.toggle("w-56");
    searchInput.current.classList.toggle("p-2");
    removeSearch()
  };
  const removeSearch = () => {document.addEventListener("click", (e) => {
    if (!e.target.classList.contains("search")) {
      searchInput.current.classList.remove("w-56");
      searchInput.current.classList.add("w-0");
      searchInput.current.classList.remove("p-2");
      console.log("searchInput.current");
    }
  });
}
  return (
    <>
      <div
        className={
          "navbar bg-orange-600 mb-5 top-0 z-50 justify-between flex-wrap " +
          display
        }
      >
        <div><Link className="font-semibold text-lg btn-ghost btn" to="/">Home</Link></div>
        <div className="navbar-center">
          <Link to="/" className="btn btn-ghost normal-case text-xl">
            Concrete Store
          </Link>
        </div>
        <div className="justify-end">
          <div className="search">
            <Link
              to="/search"
              onClick={toggleSearch}
              className="btn btn-ghost btn-circle search"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5  search"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </Link>
            <input
              ref={searchInput}
              onChange={() =>
                dispatch(searchProducts(searchInput.current.value))
              }
              className="search outline-none bg-orange-600 border-b-2 border-slate-800 transition-all w-0"
            />
          </div>
          <Link to="/cart" className="btn btn-ghost btn-circle relative">
            <div className="indicator">
              <span className="indicator-item text-lg">
                <FaCartShopping />
              </span>
            </div>
            <span className="absolute top-0 right-auto rounded-ful aspect-square w-4">
              {cartProducts.length}
            </span>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Nav;

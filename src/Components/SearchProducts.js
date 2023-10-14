import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../redux/productsSlice";
import { FaCartPlus } from "react-icons/fa6";
import Button from "./Button";
import { addToCart } from "../redux/cartSlice";
import ProductDetails from "./ProductModal";
import { Link } from "react-router-dom";
import SortProducts from "./SortProducts";

const SearchProducts = () => {
  const dispatch = useDispatch();
  const [modalProduct, setModalProduct] = useState("")
  const products = useSelector((state) => state.products.products);
  const search = useSelector((state) => state.products.search);
  const [api, setApi] = useState(
    "https://dummyjson.com/products?limit=0"
  );
  useEffect(() => {
    setApi(search === "" ? "https://dummyjson.com/products?limit=0" : "https://dummyjson.com/products/search?q=" + search)
    dispatch(fetchProducts(api));
  }, [api,search]);
  return (
    <>
      <h1 className="text-center text-5xl md:text-8xl my-5">Products</h1>
      <div className="container pl-3 my-5"><SortProducts/></div>

        <div className="products grid grid-cols-fit gap-5 container mx-auto mb-10 p-3  ">
          {products.map((product) => {
            return (
              <div
                key={product.id}
                className="product w-full bg-white rounded-md shadow-lg p-3 mx-auto"
              >
                <div className="block image relative overflow-hidden group">
                <Link to={`/product/${product.id}`}>

                  <img
                    src={"https://placehold.co/600x400?text="+product.category}
                    alt={product.title}
                    className="w-fit h-56 group-hover:scale-110 transition-all"
                    />
                    </Link>
                  <div className="description opacity-0 absolute transition-all -bottom-10 p-3 text-xs bg-orange-600 w-full text-white group-hover:opacity-100 group-hover:bottom-0">
                    {product.description}
                  </div>
                  <div onClick={() => dispatch(addToCart(product))} className="absolute text-white cursor-pointer bg-orange-600 rounded-full p-3 transition-all -top-10 left-1 opacity-0 group-hover:opacity-100 group-hover:top-1">
                    <FaCartPlus />
                  </div>
                </div>
                <div className="flex justify-between items-center pt-3">
                <Link to={`/product/${product.id}`}>
                  <div className="title font-bold">{product.title}</div>
                  <div className="title font-bold">{product.price}$</div>
                  </Link>
                  <div onClick={() => {
                    document.getElementById("my_modal_1").showModal()
                    setModalProduct(product)
                    }}><Button>Details</Button></div>
                  <ProductDetails product={modalProduct}/>
                </div>
              </div>
            );
          })}
        </div>
    </>
  );
};

export default SearchProducts;

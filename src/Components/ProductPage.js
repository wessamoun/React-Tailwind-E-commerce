import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { fetchProducts } from "../redux/productsSlice";
import Button from "./Button";
import { addToCart } from "../redux/cartSlice";
import { FaCartPlus } from "react-icons/fa6";
import ProductDetails from "./ProductModal";

function ProductPage() {
  const dispatch = useDispatch();
  const [modalProduct, setModalProduct] = useState("")
  const [api, setApi] = useState("https://dummyjson.com/products?limit=0");
  useEffect(() => {
    dispatch(fetchProducts(api));
  }, [api, dispatch]);
  let { id } = useParams();
  const products = useSelector((state) => state.products.products);
  const product = products.find((product) => product.id === +id);
  const categoryProducts = products.filter(products => products.category === product.category);
  const images = [
    "https://placehold.co/600x400?text=Image One",
    "https://placehold.co/600x400?text=Image Two",
    "https://placehold.co/600x400?text=Image Three",
    "https://placehold.co/600x400?text=Image Four",
  ];
  const [mImage, setMImage] = useState(
    "https://placehold.co/600x400?text=Image One"
  );
  return (
    <>
    <div className="container">
      <div className="flex flex-col lg:flex-row max-w-none p-12 bg-white my-12">
        <img className="w-96 md:w-3/5 mx-auto" src={mImage} alt="ImageOne" />
        <div className="modalDetails flex-1 p-3 flex flex-col">
          <div className="titleRating  flex justify-between text-2xl">
            <div className="title font-semibold">{product.title}</div>
            <div className="rating font-semibold">
              Rating : {product.rating}
            </div>
          </div>
          <div className="description text-lg pt-3">{product.description}</div>
          <div className="images flex flex-wrap gap-2 items-center justify-center lg:justify-start pt-5">
            {images.map((image) => (
              <img
                key={image}
                className="w-24 cursor-pointer"
                onClick={() => setMImage(image)}
                src={image}
                alt={image}
              />
            ))}
          </div>
          <div className="priceCart mt-auto text-lg font-semibold flex justify-between items-center pt-10">
            <div className="price">Price : {product.price}$</div>
            <div
              onClick={() => {
                dispatch(addToCart(product));
              }}
            >
              <Button>Add to Cart</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="container bg-white mb-12 text-center font-semibold text-4xl p-5">No Comments</div>
    <div className="container bg-white p-5">
      <h3 className="font-semibold text-center text-2xl">Products from same category</h3>
    <div className="products grid grid-cols-fit gap-5 container mx-auto mb-10 p-3  ">
          {categoryProducts.map((product) => {
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
    </div>
    </>
  );
}

export default ProductPage;

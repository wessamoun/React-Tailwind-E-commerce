import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../redux/productsSlice";
import InfiniteScroll from "react-infinite-scroll-component";
import { FaCartPlus } from "react-icons/fa6";
import Button from "./Button";
import { addToCart } from "../redux/cartSlice";
import ProductDetails from "./ProductModal";
import { Link } from "react-router-dom";
import SortProducts from "./SortProducts";

// const Products = () => {
//   const dispatch = useDispatch();
//   const products = useSelector((state) => state.products.products);
//   const [modalProduct, setModalProduct] = useState("")
//   const [loader,setLoader] = useState(false)
//   const [limit, setLimit] = useState(15);
//   const [api, setApi] = useState(
//     "https://dummyjson.com/products?limit=" + limit
//   );
//   console.log(products);
//   console.log("hi");
//   const newAPI = () => {
//     setLimit((limit) => limit + 10);
//     for (let i = 0; i < products.length - 1; i++) {
//       if (products[i].category !== products[i + 1].category) {
//         setLoader(true)
//         setTimeout(() => {
//           setApi("https://dummyjson.com/products?limit=" + limit);
//           console.log(limit);
//         }, 1000);
//         break;
//       } else {
//         setLoader(false)
//       }
//     }
//   };
//   useEffect(() => {
//     // setLimit(initialLimit)
//     dispatch(fetchProducts(api));
//   }, [api]);
//   return (
//     <>
//       <h1 className="text-center text-5xl md:text-8xl my-5">Products</h1>
//       <InfiniteScroll
//         dataLength={products.length} //This is important field to render the next data
//         next={newAPI}
//         hasMore={products.length === 100 ? false : true}
//         loader={loader === true ? <span className="loading loading-spinner loading-lg flex justify-center mx-auto bg-orange-600"></span> : ""}
//       >
//         <div className="products grid grid-cols-fit gap-5 container mx-auto mb-10 p-3  ">
//           {products.map((product) => {
//             return (
//               <div
//                 key={product.id}
//                 className="product w-full bg-white rounded-md shadow-lg p-3 mx-auto"
//               >
//                 <div className="block image relative overflow-hidden group">
//                 <Link to={`/product/${product.id}`}>

//                   <img
//                     src={"https://placehold.co/600x400?text="+product.category}
//                     alt={product.title}
//                     className="w-fit h-56 group-hover:scale-110 transition-all"
//                     />
//                     </Link>
//                   <div className="description opacity-0 absolute transition-all -bottom-10 p-3 text-xs bg-orange-600 w-full text-white group-hover:opacity-100 group-hover:bottom-0">
//                     {product.description}
//                   </div>
//                   <div onClick={() => dispatch(addToCart(product))} className="absolute text-white cursor-pointer bg-orange-600 rounded-full p-3 transition-all -top-10 left-1 opacity-0 group-hover:opacity-100 group-hover:top-1">
//                     <FaCartPlus />
//                   </div>
//                 </div>
//                 <div className="flex justify-between items-center pt-3">
//                   <Link to={`/product/${product.id}`}>
//                   <div className="title font-bold">{product.title}</div>
//                   <div className="title font-bold">{product.price}$</div>
//                   </Link>
//                   <div onClick={() => {
//                     document.getElementById("my_modal_1").showModal()
//                     setModalProduct(product)
//                     }}><Button>Details</Button></div>
//                   <ProductDetails product={modalProduct}/>
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//       </InfiniteScroll>
//     </>
//   );
// };


const Products = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.products);
  // const categorized = useSelector((state) => state.products.categorized)
  const [modalProduct, setModalProduct] = useState("")
  const [loader,setLoader] = useState(false)
  const [limit, setLimit] = useState(15);
  const [limitedProducts, setLimitedProducts] = useState(products.slice(0,limit))
  const [api, setApi] = useState(
    "https://dummyjson.com/products?limit=0"
  );
  const newAPI = () => {
    setLimit((limit) => limit + 10);
    for (let i = 0; i < products.length - 1; i++) {
      if (products[i].category !== products[i + 1].category) {
        setLoader(true)
        setTimeout(() => {
          setLimitedProducts(products.slice(0,limit));
          console.log(limit);
          console.log(limitedProducts.length);
          console.log(products);
        }, 1000);
        break;
      } else {
        setLoader(false)
      }
    }
  };
  useEffect(() => {
    dispatch(fetchProducts(api));
  }, [api]);
  useEffect(() => {
      setLimitedProducts(products.slice(0,10))
  }, [products]);
  return (
    <>
      <h1 className="text-center text-5xl md:text-8xl my-5">Products</h1>
      <div className="container pl-3 my-5"><SortProducts/></div>
      <InfiniteScroll
        dataLength={limitedProducts.length} //This is important field to render the next data
        next={newAPI}
        hasMore={limitedProducts.length === 100 ? false : true}
        loader={loader === true ? <span className="loading loading-spinner loading-lg flex justify-center mx-auto bg-orange-600"></span> : ""}
      >
        <div className="products grid grid-cols-fit gap-5 container mx-auto mb-10 p-3  ">
          {limitedProducts.map((product) => {
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
      </InfiniteScroll>
    </>
  );
};

export default Products;

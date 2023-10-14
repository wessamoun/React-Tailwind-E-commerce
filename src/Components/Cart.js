import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearCart, removeFromCart } from "../redux/cartSlice";
import { Link } from "react-router-dom";

function Cart() {
  const dispatch = useDispatch();
  const cartProducts = useSelector((state) => state.cart.cart);
  let [price, setPrice] = useState(0);
  useEffect(() => {
    setPrice(0);
    cartProducts.forEach((product) => {
      setPrice((prev) => prev + product.price);
    });
  }, [cartProducts, price]);
  return (
    <>
      <div className="cart p-5 bg-white w-4/5 mx-auto my-10 rounded-lg min-h-screen">
        {cartProducts.length === 0 ? (
          <div className="text-5xl text-center mx-auto">
            No Products In Cart
          </div>
        ) : (
          cartProducts.map((product) => {
            return (
              <div key={product.title}>
                <div  className="product flex flex-col md:flex-row items-center gap-3 py-3  border-b border-orange-600 relative">
                  <Link to={`/product/${product.id}`}>
                  <img
                    src={
                      "https://placehold.co/600x400?text=" + product.category
                    }
                    className="w-32"
                    alt={product.title}
                  ></img>
                  </Link>
                  <div className="details flex-1 flex flex-col items-center md:items-start">
                    <Link to={`/product/${product.id}`} className="title font-bold">{product.title}</Link>
                    <Link to={`/product/${product.id}`} className="desc">{product.description}</Link>
                    <div className="price md:self-end mt-auto font-bold">
                      {product.price}$
                    </div>
                  </div>
                  <div
                    onClick={() => dispatch(removeFromCart(product))}
                    className="absolute right-1 top-2 cursor-pointer transition-all w-6 h-6 flex items-center justify-center rounded-full aspect-square hover:bg-red-600 hover:text-white"
                  >
                    X
                  </div>
                </div>
              </div>
            );
          })
        )}
        {cartProducts.length === 0 ? (
          <div></div>
        ) : (
          <div className="p-2 bg-orange-500 w-fit mt-3 rounded-lg text-white">
            Total Price : {price}
          </div>
        )}
        {cartProducts.length === 0 ? (
          <div></div>
        ) : (
          <div onClick={() => dispatch(clearCart())} className="p-2 cursor-pointer bg-red-500 w-fit mt-3 rounded-lg text-white">
            Clear Cart
          </div>
        )}
      </div>
    </>
  );
}

export default Cart;

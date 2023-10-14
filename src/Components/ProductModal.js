import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "./Button";
import { addToCart } from "../redux/cartSlice";

function ProductDetails(props) {
  const dispatch = useDispatch();
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
      
      <dialog id="my_modal_1" className="modal">
        <div className="modal-box flex flex-col lg:flex-row max-w-none">
          <img className="w-96 md:w-3/5 mx-auto" src={mImage} alt="ImageOne" />
          <div className="modalDetails flex-1 p-3 flex flex-col">
            <div className="titleRating  flex justify-between text-2xl">
              <div className="title font-semibold">{props.product.title}</div>
              <div className="rating font-semibold">
                Rating : {props.product.rating}
              </div>
            </div>
            <div className="description text-lg pt-3">
              {props.product.description}
            </div>
            <div className="images flex flex-wrap gap-2 items-center justify-center lg:justify-start pt-5">
              {images.map((image) => (
                <img key={image}
                  className="w-24 cursor-pointer"
                  onClick={() => setMImage(image)}
                  src={image}
                  alt={image}
                />
              ))}
            </div>
            <div className="priceCart mt-auto text-lg font-semibold flex justify-between items-center pt-10">
              <div className="price">Price : {props.product.price}$</div>
              <div
                onClick={() => {
                  dispatch(addToCart(props.product));
                  document.getElementById("my_modal_1").close();
                }}
              >
                <Button>Add to Cart</Button>
              </div>
            </div>
            <div
              onClick={() => document.getElementById("my_modal_1").close()}
              className="details rounded-full py-2 px-3 bg-red-600 text-white cursor-pointer transition-all hover:bg-red-700 w-fit font-semibold mx-auto mt-5"
            >
              Close
            </div>
          </div>
        </div>
      </dialog>
    </>
  );
}

export default ProductDetails;

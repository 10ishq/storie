import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../slices/cartSlice";
import { useState } from "react";
const Products = ({ id, title, price, category, description, image }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cartItems);

  const [quantity, setQuantity] = useState(1);
  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <a href="#">
        <img className="rounded-t-lg h-96 w-full " src={image} alt="" />
      </a>
      <div className="p-5">
        <a href="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white truncate ... w-full">
            {title}
          </h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 truncate ... w-full ">
          {description}
        </p>

        {/* remove from cart button */}
        <div className="flex justify-between items-center">
          <button
            className="m-4 bg-slate-400 p-2 border-red-400 border rounded-md"
            onClick={() =>
              dispatch(
                addToCart({
                  id,
                  title,
                  price,
                  category,
                  description,
                  image,
                  quantity,
                })
              )
            }
          >
            Add to cart
          </button>
          <div className="flex max-h-6">
            <button onClick={()=>setQuantity(quantity-1 || 1)}>
              <svg
                class="fill-current text-gray-600 dark:text-white w-3"
                viewBox="0 0 448 512"
                
              >
                <path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
              </svg>
            </button>
            <input
              class="mx-2 border dark:text-white dark:bg-gray-600 text-center w-8"
              type="text"
              value={quantity}
            />
            <button onClick={()=>setQuantity(quantity+1)}>
              <svg
                class="fill-current text-gray-600 dark:text-white w-3"
                viewBox="0 0 448 512"
              >
                <path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;

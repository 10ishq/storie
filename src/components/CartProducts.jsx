import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart, updateCart, removeItemFromCart } from "../slices/cartSlice";
import { useState } from "react";

const CartProducts = ({
  id,
  title,
  price,
  category,
  description,
  image,
  // quantity,
}) => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cartItems);
  // find item with id == id in cartItems
  const item = cartItems.find((item) => item.id === id);
  
  const [updatequantity, setupdateQuantity] = useState(item.quantity);
  
  return (
    <div className="flex-wrap w-full my-5 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <div className="flex w-full flex-col items-center justify-between mx-4 p-1">
        <div className="flex md:flex-row  w-full justify-between ">
          <a href="#">
            <img
              className="rounded-2xl w-24 h-20 object-contain "
              src={image}
              alt=""
            />
          </a>
          <div className="flex flex-col justify-start w-full ml-5">
            <a href="#">
              <h5 className="mb-2 text-left text-lg font-bold tracking-tight text-gray-900 dark:text-white md:text-2xl  ">
                {title}
              </h5>
              {/* <p className="text-left hidden xl:block tracking-tight text-gray-900 dark:text-white turncate ... ">{description}</p> */}
            </a>
          
          
          </div>
          <div className="">
            <button
              onClick={() =>
                dispatch(
                  removeItemFromCart({
                    id,
                    title,
                    price,
                    category,
                    description,
                    image,
                  
                  })
                )
              }
              className="m-1 mr-5 px-2 bg-slate-400 p-1 border-red-400 border rounded-md"
            >
              X
            </button>
          </div>
        </div>
      </div>
      <div className="h-full flex flex-col p-1 justify-center">
        <div className="flex w-full p-4 justify-between items-center">
          <h2 className="text-lg font-bold">
            {updatequantity}x ${price}
          </h2>
          <div className="flex justify-center items-center max-h-6">
            <button onClick={() => {setupdateQuantity(updatequantity-1 || 1 ); dispatch(updateCart({
              id,
              title,
              price,
              category,
              description,
              image,
              quantity:updatequantity-1,
            })) }}>
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
              value={updatequantity}
              onChange= {async(e)=>{await setupdateQuantity(Number(e.target.value)); 
               const diff=Number(e.target.value)-updatequantity
               await dispatch(updateCart({
                id,
                title,
                price,
                category,
                description,
                image,
                quantity:updatequantity+diff
               }))
              }}
            />
            <button onClick={() => {setupdateQuantity(updatequantity + 1); dispatch(updateCart({
              id,
              title,
              price,
              category,
              description,
              image,
              quantity:updatequantity+1,
            }))}}>
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

export default CartProducts;

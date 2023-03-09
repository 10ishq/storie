import React from "react";
import Layout from "../../components/Layout";
import { fetchAllProducts } from "@/slices/allProductslice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import Products from "../../components/Products";

const products = () => {
  const allProducts = useSelector((state) => state.allProducts);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAllProducts());
  }, []);
  return (
    <Layout>
      <div className="bg-white dark:bg-gray-900 max-w-screen dark:text-white">
        <hr className="h-px pt-10 bg-gray-200 border-0 dark:bg-gray-700" />

        <h2 className="font-bold text-3xl">Best Sellers</h2>
        {allProducts.loading && <div>Loading...</div>}
        {!allProducts.loading && allProducts.error ? (
          <div>Error: {allProducts.error}</div>
        ) : null}
        {!allProducts.loading &&
        allProducts.allProducts ? (
          <div className="flex flex-wrap flex-column md:flex-row justify-center items-stretch">
            {allProducts.allProducts.map((product) => (
              // <li key={allProducts.id}>{allProducts.title}</li>
              <div key={product.id} className="m-5 h-full">
                <Products
                  id={product.id}
                  title={product.title}
                  price={product.price}
                  category={product.category}
                  description={product.description}
                  image={product.image}
                />
              </div>
            ))}
          </div>
        ) : null}
      </div>
    </Layout>
  );
};

export default products;

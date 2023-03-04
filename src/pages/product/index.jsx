import React from "react";
import Layout from "../../components/Layout";
import { fetchAllProducts } from "@/slices/allProductslice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

const Products = () => {
  const allProducts = useSelector((state) => state.allProducts);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAllProducts());
  }, []);
  return (
    <Layout>
      <div className="pt-20">
        {/* map all the products in allProducts */}
        {allProducts.allProducts.map((product) => (
          <div key={product.id}>
            {console.log(product)}
            <h1>{product.title}</h1>
            <p>{product.description}</p>
          </div>
        ))}
      </div>
    </Layout>
  );
};

export default Products;

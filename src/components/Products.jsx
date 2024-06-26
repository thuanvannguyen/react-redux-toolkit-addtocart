import React from "react";
import { PiShoppingCart } from "react-icons/pi";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { add } from "../redux/features/navbar/navbarSlice";

import "../styles/Products.css";

function Products() {
  // Lấy danh sách sản phẩm từ Redux store
  const products = useSelector((state) => state.productsReducer.value); // products is an array

  // Sử dụng hook useNavigate từ react-router-dom để điều hướng đến trang chi tiết sản phẩm
  const navigate = useNavigate();

  // Sử dụng hook useDispatch để gửi action đến Redux store
  const dispatch = useDispatch();

  return (
    <>
      <h1>PRODUCTS</h1>

      <div id="flex-container">
        {products.length > 0 &&
          products.map((eachProduct, index) => {
            return (
              <div id="flex-item" key={index}>
                <div id="product-head">
                  <img
                    onClick={() => navigate(`/details/${eachProduct.id}`)}
                    src={eachProduct.thumbnail} // thumbnail: küçük resim
                    alt={eachProduct.id + " image"}
                  ></img>

                  <h2>{eachProduct.title}</h2>
                </div>

                <div id="product-info">
                  <h2>
                    <span id="dolar-span">$</span>
                    {eachProduct.price}
                  </h2>
                  <PiShoppingCart
                    id="shopping-cart"
                    onClick={() => dispatch(add(eachProduct))}
                  />{" "}
                </div>
              </div>
            );
          })}
      </div>
    </>
  );
}

export default Products;

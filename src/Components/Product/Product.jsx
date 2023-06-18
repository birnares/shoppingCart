import React from "react";
import Count from "../Count/Count";
import BtnDelete from "../BtnDelete/BtnDelete";
import priceFormatter from "./../../Utils/priceFormatter";
import "./Product.scss";

const Product = ({
  product,
  deleteProduct,
  increase,
  decrease,
  changeCount,
}) => {
  const { img, title, priceTotal, count, id } = product;

  return (
    <>
      <section className="product">
        <div className="product__img">
          <img src={`./img/products/${img}`} alt={title} />
        </div>
        <div className="product__title">{title}</div>
        <div className="product__count">
          <Count
            count={count}
            increase={increase}
            decrease={decrease}
            changeCount={changeCount}
            id={id}
          />
        </div>
        <div className="product__price">{priceFormatter(priceTotal)} руб.</div>
        <div className="product__controls">
          <BtnDelete deleteProduct={deleteProduct} id={id} />
        </div>
      </section>
    </>
  );
};

export default Product;

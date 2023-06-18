import React, { useState, useEffect } from "react";
import CartHeader from "../CartHeader/CartHeader";
import Product from "../Product/Product";
import CartFooter from "../CartFooter/CartFooter";
import cartData from "../../data";

const Cart = () => {
  const [cart, setCart] = useState(cartData);
  const [total, setTotal] = useState({
    price: cart.reduce((prev, curr) => prev + curr.priceTotal, 0),
    count: cart.reduce((prev, curr) => prev + curr.count, 0),
  });

  useEffect(() => {
    setTotal({
      price: cart.reduce((prev, curr) => prev + curr.priceTotal, 0),
      count: cart.reduce((prev, curr) => prev + curr.count, 0),
    });
  }, [cart]);

  const deleteProduct = (id) => {
    setCart((cart) => {
      return cart.filter((product) => id !== product.id);
    });
  };

  const increase = (id) => {
    setCart((cart) => {
      return cart.map((product) => {
        if (product.id === id) {
          return {
            ...product,
            count: ++product.count,
            priceTotal: ++product.count * product.price,
          };
        }
        return product;
      });
    });
  };

  const decrease = (id) => {
    setCart((cart) => {
      return cart.map((product) => {
        if (product.id === id) {
          const newCount = product.count - 1 > 1 ? product.count - 1 : 1;

          return {
            ...product,
            count: newCount,
            priceTotal: newCount * product.price,
          };
        }
        return product;
      });
    });
  };

  const changeCount = (id, value) => {
    setCart((cart) => {
      return cart.map((product) => {
        if (product.id === id) {
          return {
            ...product,
            count: value,
            priceTotal: value * product.price,
          };
        }
        return product;
      });
    });
  };

  const products = cart.map((product) => {
    return (
      <Product
        key={product.title}
        product={product}
        increase={increase}
        decrease={decrease}
        deleteProduct={deleteProduct}
        changeCount={changeCount}
      />
    );
  });

  return (
    <>
      <section className="cart">
        <CartHeader />
        {products}
        <CartFooter total={total} />
      </section>
    </>
  );
};

export default Cart;

import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

useSelector;

const Cart = () => {
  [cart, setCart] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/cart/checkout")
      .then((res) => res.data)
      .then((res) => setCart(res));
  }, []);

  return <>cart</>;
};

export default Cart;

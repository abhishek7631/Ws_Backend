import React from "react";
import { useSelector } from "react-redux";

function Navbar() {
  const cart = useSelector((state) => state.carts);
  return (
    <div style={{ backgroundColor: "black", padding: "10px" }}>
      <h2
        style={{ color: "red", textAlign: "center" }}
      >{`Cart Items: ${cart.length}`}</h2>
    </div>
  );
}

export default Navbar;

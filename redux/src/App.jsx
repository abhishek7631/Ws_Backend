import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeProduct } from "./store/slices/cart";
import axios from "axios";

import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";

function App() {
  const [product, setProduct] = useState([]);

  const getData = async () => {
    const response = await axios.get("https://fakestoreapi.com/products");
    setProduct(response.data);
  };

  useEffect(() => {
    getData();
  }, []);

  const cart = useSelector((state) => state.carts);

  const dispatch = useDispatch();

  return (
    <>
      <Navbar></Navbar>
      {product.map((product) => {
        const { title, id, price, description } = product;
        return (
          <div
            key={id}
            style={{
              border: "2px solid black",
              margin: "10px",
              padding: "10px",
            }}
          >
            <h2>{title}</h2>
            <p>{description}</p>
            <h5>${price}</h5>

            {cart.some((p) => p.id === id) ? (
              <button
                style={{
                  backgroundColor: "red",
                  color: "white",
                  padding: "10px",
                  border: "none",
                  borderRadius: "10px",
                  cursor: "pointer",
                  marginLeft: "10px",
                }}
                onClick={() => dispatch(removeProduct(id))}
              >
                Remove
              </button>
            ) : (
              <button
                style={{
                  backgroundColor: "green",
                  color: "yellow",
                  padding: "10px",
                  border: "none",
                  borderRadius: "10px",
                  cursor: "pointer",
                }}
                onClick={() => dispatch(addToCart(product))}
              >
                Add+
              </button>
            )}
          </div>
        );
      })}
    </>
  );
}

export default App;

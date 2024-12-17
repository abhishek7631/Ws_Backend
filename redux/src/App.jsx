import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "./store/slices/cart";
import axios from "axios";

import { useEffect, useState } from "react";

function App() {
  const [product, setProduct] = useState([]);

  const getData = async () => {
    const response = await axios.get("https://fakestoreapi.com/products");
    setProduct(response.data);
  };

  useEffect(() => {
    getData();
  }, []);

  const cart = useSelector((state) => console.log(state.carts));

  const dispatch = useDispatch();

  return (
    <>
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
            <button>Add+</button>
          </div>
        );
      })}
    </>
  );
}

export default App;

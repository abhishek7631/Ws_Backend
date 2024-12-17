import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "./store/slices/cart";
import axios from "axios";
import "./App.css";
import { useEffect } from "react";

function App() {
  const getData = async () => {
    const response = await axios.get("https://fakestoreapi.com/products");
    console.log(response.data);
  };

  useEffect(() => {
    getData();
  }, []);

  const cart = useSelector((state) => console.log(state.carts));

  const dispatch = useDispatch();

  return (
    <>
      <h1>Welcome to Redux</h1>

      <button
        onClick={() => {
          dispatch(addToCart({ name: "Abhishek" }));
        }}
      >
        Add
      </button>
    </>
  );
}

export default App;

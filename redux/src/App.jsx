import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "./store/slices/cart";
import "./App.css";

function App() {
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

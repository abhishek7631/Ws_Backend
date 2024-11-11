import { BrowserRouter, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Home from "./Home";
import CustomNavbar from "./CustomNavbar";
import CreateBlog from "./CreateBlog";

function App() {
  return (
    <div className="App">
      <CustomNavbar></CustomNavbar>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/add" element={<CreateBlog></CreateBlog>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

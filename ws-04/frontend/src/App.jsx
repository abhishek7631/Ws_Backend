import { BrowserRouter, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Home from "./Home";
import CustomNavbar from "./CustomNavbar";
import CreateBlog from "./CreateBlog";
import UpdateBlog from "./UpdateBlog";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
      <CustomNavbar></CustomNavbar>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/add" element={<CreateBlog></CreateBlog>}></Route>
          <Route path="/update/:id" element={<UpdateBlog></UpdateBlog>}></Route>
        </Routes>
      </BrowserRouter>
      <Footer></Footer>
    </div>
  );
}

export default App;

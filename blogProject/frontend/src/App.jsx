import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginPage from "./LoginPage";
import RegisterPage from "./RegisterPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage></LoginPage>} />
        <Route path="/register" element={<RegisterPage></RegisterPage>} />
      </Routes>
    </Router>
  );
}

export default App;
